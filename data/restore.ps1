$jsonPath = "c:\Users\Administrator\Desktop\english-study-app\data\questions.json"
$jsonStr = Get-Content $jsonPath -Encoding UTF8 -Raw
$data = $jsonStr | ConvertFrom-Json

# Reset array
$data.grammarTopics = @()

# Read all missing_grammar_*.txt
for ($i = 1; $i -le 6; $i++) {
    $filePath = "c:\Users\Administrator\Desktop\english-study-app\data\missing_grammar_$i.txt"
    if (Test-Path $filePath) {
        $txt = Get-Content $filePath -Encoding UTF8 -Raw
        $blocks = $txt -split "\[TOPIC\]"
        foreach ($block in $blocks) {
            if ([string]::IsNullOrWhiteSpace($block)) { continue }
            
            $lines = $block -split "`n"
            $title = $lines[0].Trim()
            $chipsStr = ""
            $contentHtml = ""
            $inContent = $false
            
            for ($j = 1; $j -lt $lines.Count; $j++) {
                $line = $lines[$j].Trim()
                if ($line -match "^\[CHIPS\](.*)") {
                    $chipsStr = $matches[1].Trim()
                } elseif ($line -match "^\[CONTENT\]") {
                    $inContent = $true
                } elseif ($inContent) {
                    $contentHtml += $lines[$j] + "`n"
                }
            }
            
            $chips = @()
            if (-not [string]::IsNullOrWhiteSpace($chipsStr)) {
                $chips = $chipsStr -split "," | ForEach-Object { $_.Trim() }
            }
            
            $newTopic = @{
                title = $title
                chips = $chips
                contentHTML = $contentHtml.Trim()
            }
            
            $data.grammarTopics += $newTopic
        }
    }
}

# Add the Subject-Verb Agreement manually since it was skipped
$svAgreement = @{
    title = "2. Subject-Verb Agreement (Sự hòa hợp S-V)"
    chips = @("số ít", "số nhiều", "neither", "either")
    formula = "S số ít -> V số ít`nS số nhiều -> V số nhiều"
    example = "The dog runs. The dogs run."
}
$data.grammarTopics += $svAgreement

# Sort them based on the number
$data.grammarTopics = $data.grammarTopics | Sort-Object { [int]($_."title" -replace "^(\d+).*", "`$1") }

$data | ConvertTo-Json -Depth 10 | Set-Content $jsonPath -Encoding UTF8
Write-Host "Restored $($data.grammarTopics.Count) grammar topics!"

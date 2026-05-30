$jsonStr = Get-Content "c:\Users\Administrator\Desktop\english-study-app\data\questions.json" -Encoding UTF8 -Raw
$data = $jsonStr | ConvertFrom-Json

for ($i = 1; $i -le 6; $i++) {
    $filePath = "c:\Users\Administrator\Desktop\english-study-app\data\missing_grammar_$i.txt"
    if (Test-Path $filePath) {
        $txt = Get-Content $filePath -Encoding UTF8
        
        $currentTopicName = ""
        $currentChips = @()
        $currentContent = ""

        foreach ($line in $txt) {
            if ($line.StartsWith("[TOPIC]")) {
                if ($currentTopicName) {
                    $found = $false
                    foreach ($t in $data.grammarTopics) {
                        if ($t.title -eq $currentTopicName) {
                            $t.chips = $currentChips
                            $t.contentHTML = $currentContent
                            $found = $true
                            break
                        }
                    }
                    if (-not $found) {
                        $obj = @{ title = $currentTopicName; chips = $currentChips; formula = ""; example = ""; contentHTML = $currentContent }
                        $data.grammarTopics += $obj
                    }
                }
                $currentTopicName = $line.Substring(7).Trim()
                $currentChips = @()
                $currentContent = ""
            } elseif ($line.StartsWith("[CHIPS]")) {
                $chipsStr = $line.Substring(7).Trim()
                $currentChips = $chipsStr -split "," | ForEach-Object { $_.Trim() }
            } elseif ($line.StartsWith("[CONTENT]")) {
                $currentContent = ""
            } else {
                if ($currentTopicName -and -not $line.StartsWith("[")) {
                    $currentContent += $line + "`n"
                }
            }
        }
        if ($currentTopicName) {
            $found = $false
            foreach ($t in $data.grammarTopics) {
                if ($t.title -eq $currentTopicName) {
                    $t.chips = $currentChips
                    $t.contentHTML = $currentContent
                    $found = $true
                    break
                }
            }
            if (-not $found) {
                $obj = @{ title = $currentTopicName; chips = $currentChips; formula = ""; example = ""; contentHTML = $currentContent }
                $data.grammarTopics += $obj
            }
        }
    }
}

# The array needs to be wrapped in $data again
$newJson = $data | ConvertTo-Json -Depth 10
Set-Content "c:\Users\Administrator\Desktop\english-study-app\data\questions.json" $newJson -Encoding UTF8
Write-Host "Successfully imported all missing_grammar_*.txt"

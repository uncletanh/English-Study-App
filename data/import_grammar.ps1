$txt = Get-Content "c:\Users\Administrator\Desktop\english-study-app\data\missing_grammar_6.txt" -Encoding UTF8
$jsonStr = Get-Content "c:\Users\Administrator\Desktop\english-study-app\data\questions.json" -Encoding UTF8 -Raw
$data = $jsonStr | ConvertFrom-Json

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

$newJson = $data | ConvertTo-Json -Depth 10
Set-Content "c:\Users\Administrator\Desktop\english-study-app\data\questions.json" $newJson -Encoding UTF8

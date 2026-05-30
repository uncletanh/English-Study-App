$jsonPath = "c:\Users\Administrator\Desktop\english-study-app\data\questions.json"
$jsonStr = Get-Content $jsonPath -Encoding UTF8 -Raw
$data = $jsonStr | ConvertFrom-Json

$map = @{}

foreach ($topic in $data.grammarTopics) {
    if ($topic.title -match "S-V" -or $topic.title -match "Subject-Verb") {
        $topic.title = "2. Subject-Verb Agreement (Sự hòa hợp S-V)"
    }

    if ($topic.title -match "^(\d+)\.") {
        $key = $matches[1]
        if (-not $map.ContainsKey($key)) {
            $map[$key] = $topic
        } else {
            $existing = $map[$key]
            $existingLen = if ($existing.contentHTML) { $existing.contentHTML.Length } else { 0 }
            $currentLen = if ($topic.contentHTML) { $topic.contentHTML.Length } else { 0 }
            if ($currentLen -gt $existingLen) {
                $map[$key] = $topic
            }
        }
    }
}

$newTopics = @()
foreach ($key in $map.Keys) {
    $newTopics += $map[$key]
}

# Sort topics by number
for ($i = 0; $i -lt $newTopics.Count - 1; $i++) {
    for ($j = 0; $j -lt $newTopics.Count - 1 - $i; $j++) {
        $numA = 99
        $numB = 99
        if ($newTopics[$j].title -match "^(\d+)\.") { $numA = [int]$matches[1] }
        if ($newTopics[$j+1].title -match "^(\d+)\.") { $numB = [int]$matches[1] }
        
        if ($numA -gt $numB) {
            $temp = $newTopics[$j]
            $newTopics[$j] = $newTopics[$j+1]
            $newTopics[$j+1] = $temp
        }
    }
}

$data.grammarTopics = $newTopics
$data | ConvertTo-Json -Depth 10 | Set-Content $jsonPath -Encoding UTF8
Write-Host "Fixed grammar duplicates! Total topics: $($data.grammarTopics.Count)"

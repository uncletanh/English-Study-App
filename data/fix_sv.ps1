$jsonPath = "c:\Users\Administrator\Desktop\english-study-app\data\questions.json"
$txt = [System.IO.File]::ReadAllText($jsonPath, [System.Text.Encoding]::UTF8)

# Thay thế bằng chuỗi sạch
$txt = $txt -replace '"title":\s*"2\. Subject-Verb Agreement.*?"', '"title": "2. Subject-Verb Agreement (Sự hòa hợp S-V)"'

# Write back
[System.IO.File]::WriteAllText($jsonPath, $txt, [System.Text.Encoding]::UTF8)
Write-Host "Fixed Subject-Verb Agreement title!"

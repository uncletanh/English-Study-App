$utf8 = [System.Text.Encoding]::UTF8
$js = [System.IO.File]::ReadAllText("c:\Users\Administrator\Desktop\english-study-app\data\vocabulary.js", $utf8)

# Remove "const vocabularyData = "
$js = $js -replace '(?s)^.*?const vocabularyData\s*=\s*', ''

# Remove trailing ";"
$js = $js -replace '(?s);\s*$', ''

# Fix keys to be quoted
$js = $js -replace '(?m)(word|phonetic|type|meaning)\s*:', '"$1":'

[System.IO.File]::WriteAllText("c:\Users\Administrator\Desktop\english-study-app\data\vocabulary.json", $js, $utf8)
Write-Host "vocabulary.json generated successfully!"

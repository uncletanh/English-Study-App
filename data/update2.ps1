$utf8 = New-Object System.Text.UTF8Encoding($false)
$content = [System.IO.File]::ReadAllText("c:\Users\Administrator\Desktop\english-study-app\data\questions.js", $utf8)
$newContentText = [System.IO.File]::ReadAllText("c:\Users\Administrator\Desktop\english-study-app\data\batch2.txt", $utf8)

$startStr = '"REPORTED SPEECH": ['
$endStr = '"RELATIVE CLAUSES": ['

$startIndex = $content.IndexOf($startStr)
$endIndex = $content.IndexOf($endStr)

if ($startIndex -ge 0 -and $endIndex -ge 0) {
    $before = $content.Substring(0, $startIndex)
    $after = $content.Substring($endIndex)
    
    $finalContent = $before + $newContentText + ",`r`n    " + $after
    [System.IO.File]::WriteAllText("c:\Users\Administrator\Desktop\english-study-app\data\questions.js", $finalContent, $utf8)
    Write-Host "Success"
} else {
    Write-Host "Not found: startIndex=$startIndex endIndex=$endIndex"
}

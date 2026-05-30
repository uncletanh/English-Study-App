$files = @(
    "c:\Users\Administrator\Desktop\english-study-app\data\questions.json",
    "c:\Users\Administrator\Desktop\english-study-app\data\vocabulary.json"
)

$win1252 = [System.Text.Encoding]::GetEncoding(1252)
$utf8 = [System.Text.Encoding]::UTF8

foreach ($file in $files) {
    if (Test-Path $file) {
        $str = [System.IO.File]::ReadAllText($file, $utf8)
        
        # Thử convert ngược từ mojibake
        try {
            $rawBytes = $win1252.GetBytes($str)
            $fixedStr = $utf8.GetString($rawBytes)
            [System.IO.File]::WriteAllText($file, $fixedStr, $utf8)
            Write-Host "Fixed mojibake in $file"
        } catch {
            Write-Host "Failed to fix ${file}: $_"
        }
    }
}

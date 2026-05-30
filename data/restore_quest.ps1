$utf8 = [System.Text.Encoding]::UTF8
$js = [System.IO.File]::ReadAllText("c:\Users\Administrator\Desktop\english-study-app\data\questions.js", $utf8)

$js = $js -replace '(?s)^.*?const grammarTopics\s*=\s*', '{"grammarTopics": '
$js = $js -replace '(?s);\s*//.*?const quizTopicsList\s*=\s*', ', "quizTopicsList": '
$js = $js -replace '(?s);\s*const quizData\s*=\s*', ', "quizData": '
$js = $js -replace '(?s);\s*$', '}'

[System.IO.File]::WriteAllText("c:\Users\Administrator\Desktop\english-study-app\data\questions.json", $js, $utf8)
Write-Host "questions.json generated successfully!"

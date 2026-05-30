$vocab = Get-Content "c:\Users\Administrator\Desktop\english-study-app\data\vocabulary.js" -Encoding UTF8 -Raw
$vocab = $vocab -replace "(?m)^\s*//.*$", ""
$vocab = $vocab -replace "const vocabularyData =", ""
$vocab = $vocab -replace ";\s*$", ""
$vocab = [regex]::Replace($vocab, '([{,]\s*)(word|phonetic|type|meaning)(\s*:)', '$1"$2"$3')
Set-Content "c:\Users\Administrator\Desktop\english-study-app\data\vocabulary.json" $vocab -Encoding UTF8

$quest = Get-Content "c:\Users\Administrator\Desktop\english-study-app\data\questions.js" -Encoding UTF8 -Raw
$quest = $quest -replace "(?m)^\s*//.*$", ""
$quest = $quest -replace "const grammarTopics =", "`"grammarTopics`":"
$quest = $quest -replace "const quizTopicsList =", "`"quizTopicsList`":"
$quest = $quest -replace "const quizData =", "`"quizData`":"
$quest = $quest -replace ";\s*`"quizTopicsList`":", ", `"quizTopicsList`":"
$quest = $quest -replace ";\s*`"quizData`":", ", `"quizData`":"
$quest = $quest -replace ";\s*$", ""
$quest = "{" + $quest + "`n}"
Set-Content "c:\Users\Administrator\Desktop\english-study-app\data\questions.json" $quest -Encoding UTF8

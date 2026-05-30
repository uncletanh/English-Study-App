$txt = Get-Content "c:\Users\Administrator\Desktop\english-study-app\data\missing_exercises_2.txt" -Encoding UTF8
$jsonStr = Get-Content "c:\Users\Administrator\Desktop\english-study-app\data\questions.json" -Encoding UTF8 -Raw
$data = $jsonStr | ConvertFrom-Json

$currentTopic = ""
$q = $null

foreach ($line in $txt) {
    $line = $line.Trim()
    if ($line.StartsWith("[TOPIC]")) {
        if ($q) {
            $arr = @($data.quizData."$currentTopic")
            $arr += $q
            $data.quizData."$currentTopic" = $arr
            $q = $null
        }
        $currentTopic = $line.Substring(7).Trim()
        
        $list = @($data.quizTopicsList)
        if ($list -notcontains $currentTopic) {
            $list += $currentTopic
        }
        $data.quizTopicsList = $list

        $match = $data.quizData.PSObject.Properties.Match($currentTopic).Count
        if ($match -eq 0) {
            $data.quizData | Add-Member -MemberType NoteProperty -Name $currentTopic -Value @()
        }
    } elseif ($line.StartsWith("[Q]")) {
        if ($q) {
            $arr = @($data.quizData."$currentTopic")
            $arr += $q
            $data.quizData."$currentTopic" = $arr
        }
        $q = @{ q = $line.Substring(3).Trim(); type = "mcq"; options = @(); answer = ""; explanation = "" }
    } elseif ($line.StartsWith("[OPT]")) {
        $q.options += $line.Substring(5).Trim()
    } elseif ($line.StartsWith("[ANS]")) {
        $ans = $line.Substring(5).Trim()
        if ($q.type -eq "text") {
            $q.answer = $ans
        } else {
            $q.answer = [int]$ans
        }
    } elseif ($line.StartsWith("[EXP]")) {
        $q.explanation = $line.Substring(5).Trim()
    } elseif ($line.StartsWith("[TYPE]")) {
        $q.type = $line.Substring(6).Trim()
    }
}
if ($q) {
    $arr = @($data.quizData."$currentTopic")
    $arr += $q
    $data.quizData."$currentTopic" = $arr
}

$newJson = $data | ConvertTo-Json -Depth 10
Set-Content "c:\Users\Administrator\Desktop\english-study-app\data\questions.json" $newJson -Encoding UTF8

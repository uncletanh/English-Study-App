$jsonPath = "c:\Users\Administrator\Desktop\english-study-app\data\questions.json"
$jsonStr = Get-Content $jsonPath -Encoding UTF8 -Raw
$data = $jsonStr | ConvertFrom-Json

$keepTitles = @(
    "1. Tenses (Các thì cơ bản)",
    "2. Subject-Verb Agreement (Sự hòa hợp S-V)",
    "3. Passive Voice (Câu bị động)",
    "4. Wish Clauses (Mệnh đề mong ước)",
    "5. Conditional Sentences (Câu điều kiện)",
    "6. Reported Speech (Câu tường thuật)",
    "7. Relative Clauses (Mệnh đề quan hệ)",
    "5. Prepositions of Time (Giới từ thời gian At, On, In)",
    "8. Tag Questions (Câu hỏi đuôi)",
    "9. Infinitives & Gerunds (To-V và V-ing)",
    "10. Adjectives and Adverbs (Tính từ & Trạng từ)",
    "11. Connectives (Từ nối)",
    "12. Comparisons (So sánh)",
    "13. Adverb Clauses of Reason (Mệnh đề & Cụm từ chỉ Lý do)",
    "15. Making Suggestions (Đưa ra lời đề nghị)",
    "16. Clauses of Result (Mệnh đề chỉ Kết quả)",
    "17. Quantifiers (Từ chỉ số lượng)",
    "18. Participles (Hiện tại & Quá khứ phân từ)",
    "19. Other Structures (Một số cấu trúc khác)",
    "20. Pronunciation (Cách phát âm -S/-ES, -ED)"
)

$newTopics = @()

foreach ($topic in $data.grammarTopics) {
    if ($keepTitles -contains $topic.title) {
        $newTopics += $topic
    }
}

# Fix numbering for the ones I messed up
$counter = 1
foreach ($topic in $newTopics) {
    # Remove old prefix
    $topic.title = $topic.title -replace "^\d+\.\s+", ""
    # Add new prefix
    $topic.title = "$counter. $($topic.title)"
    $counter++
}

$data.grammarTopics = $newTopics

$data | ConvertTo-Json -Depth 10 | Set-Content $jsonPath -Encoding UTF8
Write-Host "Cleanup completed successfully!"

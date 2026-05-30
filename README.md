# English Study App (For 5th Graders)

Đây là ứng dụng web ôn tập Tiếng Anh dành cho học sinh lớp 5, được thiết kế với giao diện thân thiện (màu pastel hồng), dễ sử dụng và chạy trực tiếp trên trình duyệt mà không cần cài đặt phức tạp.

## Tính năng chính
- **Thẻ Từ (Flashcards)**: Lật thẻ để học từ vựng, có phát âm (Web Speech API) và lưu tiến độ nhớ từ.
- **Luyện Tập (Quiz)**: Làm trắc nghiệm theo chủ đề (23 chuyên đề), có giải thích đáp án chi tiết.
- **Ngữ Pháp**: Tra cứu nhanh 23 chủ đề ngữ pháp với công thức và ví dụ.
- Lưu trữ toàn bộ tiến trình học vào trình duyệt (`localStorage`).

## Cấu trúc thư mục
```
english-study-app/
├── index.html          # File giao diện chính
├── css/
│   └── style.css       # Các animation và CSS tùy chỉnh
├── js/
│   ├── main.js         # Logic chuyển tab, modal
│   ├── flashcards.js   # Logic thẻ từ
│   ├── quiz.js         # Logic trắc nghiệm
│   └── grammar.js      # Logic cẩm nang ngữ pháp
├── data/
│   ├── vocabulary.js   # (CẦN THAY THẾ) Dữ liệu từ vựng
│   └── questions.js    # (CẦN THAY THẾ) Dữ liệu trắc nghiệm & ngữ pháp
└── README.md           # Hướng dẫn này
```

## Cách chạy ứng dụng (2 cách)

### Cách 1: Chạy trực tiếp (Đơn giản nhất)
Bạn chỉ cần click đúp chuột vào file `index.html`. 
Trình duyệt web sẽ mở ra và bạn có thể sử dụng ngay lập tức. 
*Lưu ý: Một số trình duyệt có thể hạn chế chức năng phát âm (Text-to-Speech) nếu chạy trực tiếp qua file cục bộ (`file:///`). Nếu gặp lỗi này, hãy dùng Cách 2.*

### Cách 2: Chạy qua Local Server (Khuyên dùng)
Nếu bạn đã cài đặt Python trên máy, mở Terminal / Command Prompt tại thư mục `english-study-app` và gõ lệnh:
```bash
python -m http.server 8000
```
Sau đó mở trình duyệt và truy cập vào địa chỉ: `http://localhost:8000`

## Hướng dẫn thay thế dữ liệu (Data)
Sau này khi bạn có file PDF hoặc dữ liệu thật, hãy mở các file trong thư mục `data/` bằng Notepad hoặc bất kỳ Text Editor nào:
1. `data/vocabulary.js`: Thêm hoặc sửa các từ vựng trong mảng `vocabularyData`.
2. `data/questions.js`: Thêm các chủ đề vào `grammarTopics` và thêm bộ câu hỏi vào biến `quizData`. 

Ứng dụng sẽ tự động cập nhật mà không cần thay đổi file logic (`.js` trong thư mục `js/`).

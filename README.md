# HSK 1 - Bộ web bổ trợ giảng dạy

Website tĩnh hỗ trợ giảng dạy theo giáo trình `新HSK教程1`, gồm bài học, từ vựng, nội dung bài khóa, phát âm và bài tập tương tác.

## Deploy lên Vercel

1. Đăng nhập [Vercel](https://vercel.com/).
2. Chọn **Add New Project** rồi import repository `HuuNam3/chinese`.
3. Giữ cấu hình mặc định:
   - Framework Preset: `Other`
   - Build Command: để trống
   - Output Directory: để trống
   - Install Command: để trống
4. Chọn **Deploy**.

Đây là website static nên không cần biến môi trường. File `vercel.json` đã có sẵn để Vercel nhận diện cấu hình triển khai.

## Chạy cục bộ

Mở `index.html` trực tiếp trên trình duyệt, hoặc chạy một static server trong thư mục dự án.

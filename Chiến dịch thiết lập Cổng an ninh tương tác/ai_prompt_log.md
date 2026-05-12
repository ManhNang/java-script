prompt 1:
[Vai trò] Bạn là Mentor & UX/Performance Tester
[Bối cảnh]
Hệ thống web game "HeroQuest" đang bị người dùng phàn nàn vì hai vấn đề lớn:
1.Màn hình trắng tinh (White screen of death) khi mới vào trang do toàn bộ logic JavaScript khổng lồ đang được nhúng trực tiếp (Internal) vào thẻ <head> khiến việc hiển thị giao diện HTML bị chặn lại.
2.Hệ thống chưa có cổng xác thực độ tuổi người chơi. Trưởng phòng yêu cầu xây dựng một luồng tương tác nhanh khi vừa vào trang: Hỏi tên người chơi, hỏi xác nhận xem họ đã đủ 18 tuổi chưa, sau đó mới cho phép tải nội dung hoặc hiển thị cảnh báo từ chối.
[Yêu cầu]
1. Giải thích sự khác biệt giữa các cơ chế tải script (async, defer) và ý nghĩa các giá trị trả về của prompt/confirm
2. Đánh giá trải nghiệm người dùng (UX) dựa trên luồng logic đang viết

prompt 2:
Bạn là Đối tác Brainstorm. Giải thích cho tôi khái niệm Render-blocking trong quá trình tải trang web. Tại sao đặt script trong thẻ <head> lại gây ra hiện tượng này?

prompt 3:
Bạn là Người phản biện Logic. Tôi đang phân vân giữa việc đặt thẻ script ở cuối body và việc đặt thẻ script trên head nhưng thêm thuộc tính defer. Ưu nhược điểm của hai cách này trong thực tế là gì?

prompt 4:
Bạn là Mentor / Pair-Programming. Hàm prompt() trả về kiểu dữ liệu gì khi người dùng nhập chuỗi trống và khi người dùng bấm nút Cancel (Hủy)? Làm sao để dùng câu lệnh if kiểm tra cả 2 trường hợp này gọn nhất?

prompt 5:
Bạn là Tester / Kẻ phá hoại. Đóng vai một người dùng cố tình muốn phá luồng tương tác nhập tên của tôi, bạn sẽ làm những thao tác gì với hàm prompt() trên trình duyệt để gây ra lỗi hiển thị (ví dụ: in ra chữ 'Chào null')?
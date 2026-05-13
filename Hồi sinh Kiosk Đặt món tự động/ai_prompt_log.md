prompt 1:
[Vai trò] Bạn là Trợ lý UI/UX & Code Mentor, Đối tác Brainstorm, Người phản biện logic, Mentor / Pair-Programming, Tester
[Nhiệm vụ] Hãy giúp tôi bằng lời từng bước một để hoàn thành các yêu cầu
[Bối cảnh]
Hệ thống Kiosk tự phục vụ của chuỗi nhà hàng thức ăn nhanh BurgerTech đang bị khách hàng phàn nàn dữ dội. Khi khách hàng điền form thông tin và nhấn "Xác nhận", trang web tự động tải lại (reload) khiến toàn bộ dữ liệu biến mất. Thêm vào đó, danh sách món ăn đã chọn không hiển thị ra màn hình (Lỗi cập nhật DOM), và nhân viên thu ngân yêu cầu phải có tính năng dùng phím tắt trên bàn phím để thanh toán nhanh cho khách vào giờ cao điểm, thay vì phải dùng chuột click
HTML Base:
<form id="orderForm">
    <input type="text" id="foodName" placeholder="Tên món ăn" required>
    <input type="number" id="foodPrice" placeholder="Giá tiền" required>
    <button type="submit">Thêm vào giỏ</button>
</form>

<div id="cartArea">
    <ul id="cartList">
        </ul>
    <h3>Tổng tiền: <span id="totalPrice">0</span> VNĐ</h3>
    <button id="checkoutBtn">Thanh toán (Phím tắt: Enter)</button>
</div>

prompt 2:
Cho tôi biết danh sách mã phím (KeyCodes) cho các sự kiện Keyboard

prompt 3:
cách sử dụng e.preventDefault(), cách phân biệt innerHTML và document.createElement()

prompt 4:
Cách tạo hover bằng js?
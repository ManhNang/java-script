// security.js

/**
 * Luồng xác thực 3 bước cho hệ thống GateKeeper
 */

// 1. Yêu cầu nhập mã nhân viên
const employeeId = prompt("Vui lòng nhập Mã nhân viên của bạn:");

// 2. Kiểm tra điều kiện: Nếu bấm Cancel (null) hoặc để trống ("")
if(employeeId === null || employeeId.trim() === ""){
    alert("Truy cập bị từ chối. Mã nhân viên không hợp lệ.");
} else{
    // 3. Xác nhận lại danh tính
    const isConfirmed = confirm(`Bạn có chắc chắn muốn sử dụng mã [${employeeId}] để đăng nhập không?`);
    if(isConfirmed){
        // Thông báo kết quả thành công
        alert("Truy cập thành công! Chào mừng đến với MegaCorp.");
    } else{
        // Thông báo hủy
        alert("Hủy đăng nhập.");
    }
}
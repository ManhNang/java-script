const orderForm = document.getElementById('orderForm');
const cartList = document.getElementById('cartList');
const totalDisplay = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
let total = 0;

//Form Event
orderForm.addEventListener('submit', (e) => {
    e.preventDefault(); //Chặn Reload Form

    //Lấy dữ liệu từ Input
    const foodName = document.getElementById('foodName').value;
    const foodPrice = Number(document.getElementById('foodPrice').value);

    //Tạo phần tử giỏ hàng
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${foodName} - ${foodPrice.toLocaleString()} VNĐ</span>
        <button class="delete-item" style="margin-left: 10px">Xoá món</button>
    `;

    //Hiệu ứng Hover bằng js
    li.onmouseenter = () => li.style.backgroundColor = "blue";
    li.onmouseleave = () => li.style.backgroundColor = "transparent";


    //Xử lý nút xóa món (Mouse Event)
    li.querySelector('.delete-item').onclick = () => {
        total -= foodPrice;
        totalDisplay.innerText = total.toLocaleString;
        li.remove();
    }

    //Gắn vào danh sách và cập nhật tổng tiền
    cartList.appendChild(li);
    total += foodPrice;
    totalDisplay.innerText = total.toLocaleString();

    //Reset form để nhập món tiếp theo
    orderForm.reset();
});

//Bấm button thanh toán (Mouse Event)
checkoutBtn.addEventListener('click', pay);

//Keyboard Event
window.addEventListener('keydown', (e) => {
    //Phím Enter để thoanh toán
    if (e.key === 'Enter'){
        pay();
    }

    if(e.key === 'Escape'){
        if(confirm("Bạn có chắc chắn muốn hủy toàn bộ đơn hàng?")){
            cartList.innerHTML = '';
            total = 0;
            totalDisplay.innerText = total;
        }
    }
});

function pay(){
    if(total > 0){
        alert(`Xác nhận thanh toán: ${total.toLocaleString()} VNĐ`);
        cartList.innerHTML = '';
        total = 0;
        totalDisplay.innerText = total;
    } else{
        alert("Giỏ hàng đang trống!");
    }
}
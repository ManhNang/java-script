/**
 * HỆ THỐNG QUAN TRẮC WEATHERSYNC (OPTIMIZED)
 */

// 1. Giả lập Dữ liệu API (Có cả dữ liệu sạch và dữ liệu rác)
const rawData = [
    { id: "S1", temp: 32.5, humidity: 80 },
    { id: "S2", temp: null, humidity: 90 }, // Lỗi: null
    { id: "S3", temp: 35.1, humidity: 75 },
    { id: "S4", temp: 40.2 }, // Lỗi: Thiếu object con (nếu có logic sâu hơn)
    "Dữ liệu nhiễu từ bão", // Lỗi: Sai kiểu dữ liệu (String thay vì Object)
    { id: "S5", temp: 28.0, humidity: 60 },
    { id: "S6", temp: "ba mươi độ", humidity: 55 }, // Lỗi: String thay vì Number
    { "id": "S_GOOD", "temp": 25.5 },
    { "id": "S_BAD_TYPE", "temp": "25.5" }, 
    { "id": "S_TEXT", "temp": "ba mươi độ" },
    { "id": "S_NULL", "temp": null },
    { "id": "S_ARRAY", "temp": [25, 30] },
    { "id": "S_EMPTY_OBJ", "temp": {} },
    {
        "id": "S_NESTED_OK",
        "metadata": { "location": { "lat": 10.5, "lng": 106.1 } }
    },
    {
        "id": "S_MISSING_METADATA" 
        /* Thiếu hẳn trường metadata */
    },
    {
        "id": "S_PARTIAL_METADATA",
        "metadata": { } 
        /* Có metadata nhưng rỗng, truy cập .location sẽ chết code */
    }
];

const logContainer = document.getElementById('log-container');

// Hàm hiển thị log lên màn hình thay vì chỉ dùng console.log
function uiLog(message, type = '') {
    const div = document.createElement('div');
    const now = new Date().toLocaleTimeString();
    div.className = `log-entry ${type}`;
    div.innerHTML = `<span class="timestamp">[${now}]</span> ${message}`;
    logContainer.appendChild(div);
    logContainer.scrollTop = logContainer.scrollHeight;
}

// 2. Hàm xử lý dữ liệu "Mặc áo giáp"
function processWeatherData(dataList) {
    uiLog("Bắt đầu quy trình quét dữ liệu cảm biến...", "log-system");

    dataList.forEach((sensor, index) => {
        // Xác định ID cảm biến (Phòng trường hợp sensor không có ID)
        let currentId = (sensor && sensor.id) ? sensor.id : `UNKNOWN_${index}`;

        try {
            // Bước A: Kiểm tra nếu không phải Object
            if (typeof sensor !== 'object' || sensor === null) {
                throw new Error("Phát hiện dữ liệu không phải đối tượng hợp lệ.");
            }

            // Bước B: Kiểm tra nếu nhiệt độ không phải kiểu số
            if (typeof sensor.temp !== 'number') {
                throw new Error(`Dữ liệu nhiệt độ bị hỏng (Nhận được: ${typeof sensor.temp})`);
            }

            // Bước C: Xử lý dữ liệu (Làm tròn số)
            let formattedTemp = sensor.temp.toFixed(1);
            uiLog(`Cảm biến ${currentId}: Nhiệt độ ổn định ở ${formattedTemp}°C`, "log-success");

        } catch (error) {
            // Bước D: Bắt lỗi - Cô lập phần tử hỏng để vòng lặp tiếp tục
            uiLog(`LỖI tại ${currentId}: ${error.message}`, "log-error");
            console.error(`[System Error] ID: ${currentId}`, error);

        } finally {
            // Bước E: Ghi nhận quá trình quét (Dù thành công hay thất bại)
            console.log(`Đã hoàn tất quét cảm biến: ${currentId}`);
        }
    });

    uiLog("Hoàn thành quét tất cả thiết bị.", "log-system");
}

// 3. Thực thi sau khi trang tải xong
window.onload = () => {
    setTimeout(() => {
        processWeatherData(rawData);
    }, 1000); // Trì hoãn 1s để tạo hiệu ứng hệ thống đang load
};

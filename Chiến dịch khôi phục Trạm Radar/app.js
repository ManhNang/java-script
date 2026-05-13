/**
 * HỆ THỐNG RADAR ORION (LEGACY CODE)
 */
const canvas = document.getElementById('radarCanvas');
const ctx = canvas.getContext('2d');
// Dữ liệu mốc từ API (Chứa dữ liệu rác gây sập hệ thống)
const incomingFlights = [
    { id: "VN11", x: 150, y: 200, speed: 2 },
    { id: "JS404", x: null, y: "ba trăm", speed: 1 }, // LỖI: Tọa độ sai kiểu dữ liệu
    { id: "US55", x: 400, y: 150, speed: 3 },
    null, // LỖI: Object bị rỗng
    { id: "ER99" }, // LỖI: Thiếu tọa độ
    { id: "ERR_01", x: NaN, y: 100, speed: 2 },        // NaN (Not a Number) thường vượt qua check typeof === 'number'
    { id: "ERR_02", x: Infinity, y: 200, speed: 1 },   // Infinity khiến Canvas không biết vẽ ở đâu
    { id: "ERR_03", x: 150, y: -9999, speed: 5 },      // Tọa độ âm cực lớn (ngoài màn hình)
    { id: "ERR_04", x: 300, y: 150 },                  // Thiếu thuộc tính speed (gây lỗi NaN khi cộng dồn tọa độ)
    { id: "", x: 100, y: 100, speed: 1 },              // ID là chuỗi rỗng (Lỗi khi hiện thông báo click)
    [100, 200, 5],                                     // Dữ liệu là Array thay vì Object
    "plane-05"                                          // Tên là null
];

function cleanData(){
    const flights = incomingFlights.filter(flight => flight !== null && typeof flight === 'object');
    const checkFlights = flights.map(flight => {
        if(typeof flight.x !== 'number' || typeof flight.y !== 'number'){
            console.warn(`Hệ thống bỏ qua 1 mục lỗi:  ${flight.id || 'Unkonwn'}`);
            return null;
        }
        return {
            id: flight.id || "Unknown",
            x: flight.x,
            y: flight.y,
            speed: typeof flight.speed === 'number' ? flight.speed : 1
        }
    })
    return checkFlights.filter(flights => flights !== null);
}

const canFlights = cleanData();

function drawRadar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // VẤN ĐỀ 1: Không có cơ chế bắt lỗi. Lỗi 1 dòng làm sập toàn bộ vòng lặp.
    // VẤN ĐỀ 2: Canvas tĩnh, không có requestAnimationFrame.
    canFlights.forEach(flight => {
        try{ 
            ctx.beginPath();
            ctx.arc(flight.x, flight.y, 20, 0, Math.PI * 2);
            if (flight.isWarning){
                ctx.fillStyle = "red";
            }
            else ctx.fillStyle = "lime";
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.fillText(flight.id, flight.x - 10, flight.y - 25);
            ctx.font = "12px Arial";
            flight.x += flight.speed * 0.5;
        } catch(error){
            console.warn("Hệ thống bỏ qua 1 mục lỗi: ", error);
        }
    });
    requestAnimationFrame(drawRadar);
}

canvas.addEventListener('click', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    canFlights.forEach(flight => {
        const dist = Math.sqrt((mouseX - flight.x)**2 + (mouseY - flight.y)**2);
        if(dist < 20){
            flight.isWarning = true;
            console.log(`CẢNH BÁO VA CHẠM: ${flight.id}`);
        }
    })
})

drawRadar();
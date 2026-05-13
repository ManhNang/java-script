prompt 1:
giải nghĩa các dòng báo lỗi đỏ lòm trên DevTools

prompt 2:
sinh ra các mẫu JSON "hỏng hóc" phức tạp để test ứng dụng

json dữ liệu lỗi:
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
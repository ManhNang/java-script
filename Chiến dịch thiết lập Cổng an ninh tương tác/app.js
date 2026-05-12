let playerName = prompt("Chào mừng đến với HeroQuest! Nhập tên của bạn:");
if(playerName !== null && playerName.trim() !== ""){
    alert("Chào " + playerName);
    const content = document.getElementById("content");
    let isAdult = confirm("Bạn đã đủ 18 tuổi chưa?");
    if (isAdult == true) {
        alert("Chúc bạn chơi game vui vẻ!");
    } else {
        content.style.display = "none";
        alert("Bạn chưa đủ tuổi, mời ra khỏi đây!"); // Logic sai yêu cầu thực tế
    }
} else{
    content.style.display = "none";
    alert("Tên không được để trống!");
}
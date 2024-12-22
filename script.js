// script.js

document.addEventListener("DOMContentLoaded", () => {
    // 將作品集按鈕綁定點擊事件
    const portfolioButton = document.getElementById("view-portfolio");
  
    portfolioButton.addEventListener("click", () => {
      alert("即將跳轉到我的作品集網站！");
      window.location.href = "https://your-portfolio-link.com"; // 將此替換為實際作品集連結
    });
  });
  
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
    
    // アニメーションの再実行
    document.getElementById('clock').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('clock').style.animation = '';
    }, 10);
}

function changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
}

// 1分ごとに時計を更新
setInterval(updateClock, 60000);
updateClock(); // 初回呼び出し

// 3秒ごとに背景色を変更
setInterval(changeBackgroundColor, 3000);
changeBackgroundColor(); // 初回呼び出し

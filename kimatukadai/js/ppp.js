function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    
    // アニメーションの再実行
    document.getElementById('clock').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('clock').style.animation = '';
    }, 10);
}

// 1秒ごとに時計を更新
setInterval(updateClock, 1000);
updateClock(); // 初回呼び出し

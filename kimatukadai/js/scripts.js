// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const changeColorBtn = document.getElementById('changeColorBtn');
    changeColorBtn.addEventListener('click', () => {
        // ランダムな色を生成する関数
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        // 背景色をランダムに変更
        document.body.style.backgroundColor = getRandomColor();
    });
});

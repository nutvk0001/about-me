// script.js
const container = document.getElementById('bubbleContainer');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // ランダムなサイズ
    const size = Math.random() * 50 + 20; // 20pxから70pxの範囲
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // ランダムな位置
    const leftPosition = Math.random() * (window.innerWidth - size);
    bubble.style.left = leftPosition + 'px';

    container.appendChild(bubble);

    // アニメーションが終わったら要素を削除
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });

    // 次の気泡を生成
    setTimeout(createBubble, 500); // 500msごとに新しい気泡を生成
}

// アニメーションを開始
createBubble();

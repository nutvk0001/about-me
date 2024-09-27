// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト動作を防ぐ

    // フォームの値を取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // ここでフォームデータを送信する処理を追加
    // 例えば、fetchを使ってサーバーに送信することができますが、
    // この例ではコンソールにログを出力します。
    
    console.log('お名前:', name);
    console.log('メールアドレス:', email);
    console.log('メッセージ:', message);

    // 成功メッセージを表示
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'お問い合わせを送信しました！';
    
    // フォームをリセット
    this.reset();
});

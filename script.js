// JavaScript

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();

    console.log(randomNumber); // ランダムな数字をコンソールに表示する（確認用）

    // 既存のクラスを削除
    resultDisplay.className = '';
    document.body.className = '';

    // 0.1 未満だったら
    if (randomNumber < 0.1) {
        resultDisplay.textContent = 'カルーナ　誠実';
        document.body.classList.add('heather');

    // 0.3 未満だったら
    } else if (randomNumber < 0.3) {
        resultDisplay.textContent = '金木犀　謙虚';
        document.body.classList.add('fragrantolive');

    // 0.5未満だったら
    } else if (randomNumber < 0.5) {
        resultDisplay.textContent = '寒緋桜　艶やかな美人';
        document.body.classList.add('taiwancherry');
    

    // 0.7未満だったら
    } else if (randomNumber < 0.7) {
        resultDisplay.textContent = 'クレマチス　美しい精神';
        document.body.classList.add('clematis');
    

    // 0.9未満だったら
    } else if (randomNumber < 0.9) {
        resultDisplay.textContent = '桜　精神の美';
        document.body.classList.add('cherryblossom');
   
        
    // どちらでもない場合
    } else {
        resultDisplay.textContent = 'ブーゲンビリア　情熱';
        document.body.classList.add('bougainvillea');
    }

});
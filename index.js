// 초기값
let flowers = [];
let day = 0;

// 버튼
const nextDayBtn = document.querySelector('#next_day');

// 메세지 출력
function logMessage(msg, color = 'black', fontFamily = 'NeoDunggeunmo Pro') {
    const pEle = document.createElement('p');
    pEle.innerHTML = msg;
    pEle.style.color = color;
    pEle.style.fontFamily = fontFamily;
    document.getElementById('log').appendChild(pEle);
}

// 게임시작
function init() {
    logMessage(`시작`, '#888');
}

init();

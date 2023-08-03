// 초기값
let flowers = [];
let day = 0;

// 버튼
const nextDayBtn = document.querySelector('#next_day');

// 메세지 출력
function logMessage(msg, color = 'black', fontFamily = 'NeoDunggeunmo Pro') {
    const pEle = document.createElement('p'); // p 요소 만들기 createElement
    pEle.innerHTML = msg; // div에 msg 추가
    pEle.style.color = color;
    pEle.style.fontFamily = fontFamily;
    document.getElementById('log').appendChild(pEle);
}

// 메뉴 출력
function showMenu() {
    const buttonEle = document.createElement('button');
    buttonEle.innerHTML = '튤립심기';
    document.getElementById('log').appendChild(buttonEle);
    buttonEle.addEventListener('click', () => {
        const newFlower = new Flower('튤립', 0, 3, 2000, '🌹');
        flowers.push(newFlower);
        newFlower.plant();
        buttonEle.style.display = 'none';
    });
}

// 꽃
class Flower {
    constructor(name, age, day, price, emoji) {
        this.name = name;
        this.age = age;
        this.day = day;
        this.price = price;
        this.emoji = emoji;
    }
    plant() {
        logMessage(`${this.name}을(를) 심었습니다. ⚫`);
    }
    bloom() {
        logMessage(`${this.name}이(가) 꽃이 폈습니다.${this.emoji}`);
    }
    life() {
        logMessage(`${this.name}는 ${this.age}日 되었습니다.`);
    }
}

// 다음날
nextDayBtn.addEventListener('click', () => {
    day++;
    logMessage(`${day} 日 입니다.`, '#888');
    showMenu();
    flowers.map(flower => {
        flower.age++;
        if (flower.age >= flower.day) {
            flower.bloom();
        } else {
            flower.life();
        }
    });
});

// 게임시작
function init() {
    logMessage(`시작`, '#888');
}

init();

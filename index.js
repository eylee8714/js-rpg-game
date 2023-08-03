// 초기값
let flowers = [];
let day = 0;

// 버튼
const nextDayBtn = document.querySelector('.btn__next');
const refreshBtn = document.querySelector('.btn__refresh');
const plantBtn = document.querySelector('.menu__plant');

// 메세지 출력
function logMessage(msg, color = 'black', fontFamily = 'NeoDunggeunmo Pro') {
    const logEle = document.getElementById('log');
    const pEle = document.createElement('p');
    pEle.innerHTML = msg;
    pEle.style.color = color;
    pEle.style.fontFamily = fontFamily;
    logEle.appendChild(pEle);
    pEle.scrollIntoView({ behavior: 'smooth' });
}

// 스크롤 아래로
function scrollDown() {}

// 심기 메뉴
function showPlant() {
    plantBtn.style.visibility = 'visible';
}

refreshBtn.addEventListener('click', () => {
    location.reload(true);
});

plantBtn.addEventListener('click', () => {
    const newFlower = new Flower(`장미${flowers.length}`, 0, 3, 2000, '🌹');
    flowers.push(newFlower);
    newFlower.plant();
    plantBtn.style.visibility = 'hidden';
});

// 꺾기 메뉴
function showPick() {}

// 제거하기 메뉴
function showRemove() {}

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
        logMessage(`${this.name} 을(를) 심었습니다. ⚫`);
    }
    bloom() {
        logMessage(`${this.name} 이(가) 꽃이 폈습니다.${this.emoji}`);
    }
    life() {
        logMessage(`${this.name} 은(는) ${this.age}日이 되었습니다. ${this.age === 1 ? '🌱' : '🌿'} `);
    }
    die() {
        logMessage(`${this.name} 의 꽃이 졌습니다. 🥀`);
    }
}

// 다음날
nextDayBtn.addEventListener('click', () => {
    day++;
    logMessage(`-----${day} 日 입니다.-----`, '#888');
    showPlant();
    console.log('flowers', flowers);
    flowers.map(flower => {
        flower.age++;
        if (flower.age < flower.day) {
            flower.life();
        } else if (flower.day === flower.age) {
            flower.bloom();
        } else if (flower.age > flower.day) {
            flower.die();
        }
    });
});

// 게임시작
function init() {
    logMessage(`시작`, '#888');
}

init();

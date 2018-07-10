'use strict';

import './Test.css';
import {randomInt} from './randomInt.js';

let tests = require('../tests.json');

export default class ColorTest {
    constructor(cbCheckAnswer) {
        this.test = tests.colorTest;
        this.cbCheckAnswer = cbCheckAnswer;
        return this.render()
    }

    touchStart(e) {
        e.currentTarget.touchStartX=e.targetTouches[0].screenX;
        e.currentTarget.touchStartY=e.targetTouches[0].screenY;
    }
    touchEnd(e) {
        let deltaX=e.currentTarget.touchStartX-e.changedTouches[0].screenX;
        let deltaY=e.currentTarget.touchStartY-e.changedTouches[0].screenY;
        if (deltaX<0 && Math.abs(deltaX)>Math.abs(deltaY)) {
            let event = new Event("contextmenu");
            e.currentTarget.dispatchEvent(event)
        }
        if (deltaX>0 && Math.abs(deltaX)>Math.abs(deltaY)) {
            let event = new Event("click");
            e.currentTarget.dispatchEvent(event)
        }
    }

    render() {
        let testBlock = document.createElement('div');
        testBlock.className = 'testBlock container';
        let questionBlock = document.createElement('div');
        questionBlock.className='row';
        let question = document.createElement('div');
        question.className = 'question  col-12';
        let colors = Object.keys(this.test);
        let colorsNames = Object.values(this.test);
        let mainOption = colorsNames[randomInt(0, colorsNames.length - 1)];
        let questionHeader=document.createElement('div');
        questionHeader.className = 'questionHeader';
        questionHeader.innerHTML='Основной параметр:';
        let questionMainOption=document.createElement('div');
        questionMainOption.className = 'questionMainOption';
        questionMainOption.innerHTML=mainOption;
        questionBlock.appendChild(question);
        question.appendChild(questionHeader);
        question.appendChild(questionMainOption);

        testBlock.appendChild(questionBlock);
        let rightAnswersAmount = 0;
        let amountToAdd = 9 - colors.length;
        while (amountToAdd > 0) {
            colors.splice(randomInt(0, colors.length), 0, colors[randomInt(0, colors.length - 1)]);
            colorsNames.splice(randomInt(0, colorsNames.length), 0, colorsNames[randomInt(0, colorsNames.length - 1)]);
            --amountToAdd
        }
        let answerBlock = document.createElement('div');
        answerBlock.className='row';
        for (let i = 1; i <= 9; i++) {
            let answer = document.createElement('div');
            answer.className = 'answer col-lg-4 col-md-6 col-12 ';
            answer.style.color = colors.shift();
            answer.innerHTML = colorsNames.shift();
            if (answer.innerHTML === mainOption || this.test[answer.style.color] === mainOption) rightAnswersAmount++;
            answer.addEventListener('click', this.cbCheckAnswer);
            answer.addEventListener('contextmenu', this.cbCheckAnswer);
            answer.addEventListener('touchstart', this.touchStart);
            answer.addEventListener('touchend', this.touchEnd);
            answerBlock.appendChild(answer);
        }

        testBlock.appendChild(answerBlock);
        return [testBlock, mainOption, rightAnswersAmount]
    }


}
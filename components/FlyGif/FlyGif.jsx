import React, {PureComponent} from 'react';
import './FlyGif.scss';
import {connect} from 'react-redux'
import {generateCode, getRandomInt} from '../../utils/utils';
import showFlyGif from "../../actions/showFlyGif";
import blockFlyGif from "../../actions/blockFlyGif";
import {addCodeFetch, fetchPromise} from "../../core/fetch";
import {customConfirm} from "../Modals/CustomConfirm/CustomConfirm.jsx";

const RAF = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback)
    { window.setTimeout(callback, 1000 / 60) };

const Doc = document.documentElement;

const yipAudio = new Audio;

if ( yipAudio.canPlayType("audio/mpeg")=="probably" ) {
    yipAudio.src = "../../audio/yip.mp3";
}


class FlyGif extends PureComponent {

    state = {
        on: false,
    };

    timeout = null;
    audioInterval = null;
    gifRef = null;
    mainClassName = 'FlyGif';
    speedX = 3;
    speedY = 4;
    isFirstTime=true;

    componentWillUpdate(nextProps) {
        if (nextProps.isBlocked) this.block()
    }

    componentDidMount () {
        this.timeout = setTimeout(this.showGif, 10000 + getRandomInt()*1000);
        window.addEventListener('blur', this.clearGifTimeout);
        window.addEventListener('focus', this.setGifTimeout)
    }

    componentWillUnmount () {
        this.block()
    }

    setGifTimeout = () => {
        this.timeout = setTimeout(this.showGif, 3000 + getRandomInt()*1000);
    };

    clearGifTimeout = () => {
        this.setState({on: false});
        clearTimeout(this.timeout);
        if (this.audioInterval) clearInterval(this.audioInterval)
    };

    setRef = (ref) => {this.gifRef = ref};

    showGif = () => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.hideGif, 3000 + getRandomInt()*1000);
        this.audioInterval = setInterval(() => yipAudio.play(), 1000);
        this.props.showFlyGif();
        this.setState({on: true}, () => {
            this.gifRef.style.top = getRandomInt(20 + window.pageYOffset, Doc.clientHeight - (this.gifRef.clientHeight || 150) - 20) + 'px';
            this.gifRef.style.left = getRandomInt(20, Doc.clientWidth - (this.gifRef.clientWidth || 250) - 20) + 'px';
            RAF(this.moveGif)
        })
    };

    confirmBlock = async () => {
        (await customConfirm({
                content: 'Заблокировать летающую картинку со скидкой?',
            })) ? this.block() : this.hideGif()

    };


    hideGif = () => {
        clearInterval(this.audioInterval);
        if (!this.isFirstTime) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(this.showGif, 10000 + getRandomInt()*1000);
            this.props.hideFlyGif();
            this.setState({on: false})
        }
        else {
            this.isFirstTime = false;
            this.confirmBlock()
        }
    };


    moveGif = () => {
        if (this.gifRef) {

            if (Math.random() < 0.025) this.speedX = -this.speedX;
            if (Math.random() < 0.025) this.speedY = -this.speedY;

            let left = +(this.gifRef.style.left.replace('px', ''));
            let top = +(this.gifRef.style.top.replace('px', ''));
            if (left + this.speedX >= Doc.clientWidth-this.gifRef.clientWidth || left + this.speedX <= 0) this.speedX = -this.speedX;
            if (top + this.speedY >= Doc.offsetHeight-this.gifRef.clientHeight || top + this.speedY <= 0) this.speedY = -this.speedY;

            this.gifRef.style.left = left + this.speedX + 'px';
            this.gifRef.style.top = top + this.speedY + 'px';

            RAF(this.moveGif)
        }

    };

    addCode = async (code) => {

        await addCodeFetch(code);

        customConfirm({
            content: `Ваш код ${code}`,
            confirm: 'Ок',
            alert: true
        })
    };

    catchHandler = async () => {
        if (await customConfirm({
                content: 'Получить код для скидки?',
            })) {
            const code = generateCode();
            this.addCode(code);
        }
        this.block()
    };

    block = () => {
        this.props.blockFlyGif();
        this.clearGifTimeout();
        window.removeEventListener('blur', this.clearGifTimeout);
        window.removeEventListener('focus', this.setGifTimeout)
    };


    render() {

        return <div className={this.mainClassName}>
            {this.state.on && <img ref={this.setRef}
                                   onDoubleClick={this.catchHandler}
                                   src={'../../images/flyGif.gif'}/>}
        </div>
    }
}

export default connect(
    state => ({
        isBlocked: state.flyGif.isBlocked
    }),
    dispatch => ({
        showFlyGif: () => dispatch(showFlyGif(true)),
        hideFlyGif: () => dispatch(showFlyGif(false)),
        blockFlyGif: () => dispatch(blockFlyGif()),
    })
)(FlyGif);
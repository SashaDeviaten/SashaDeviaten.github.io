import React from 'react';
import './IntervalImg.scss';

class IntervalImg extends React.PureComponent {

    static defaultProps = {
        images: [
            'badGrumming1.jpg',
            'badGrumming2.jpg',
            'badGrumming3.jpg',
            'badGrumming4.jpg',
            'badGrumming5.jpg',
        ],
        time: 7000
    };

    state = {
        currentImg: 0
    };

    imgInterval;

    componentDidMount() {
        this.imgInterval = setInterval(this.changeImg, this.props.time)
    }

    componentWillUnmount() {
        clearInterval(this.imgInterval)
    }

    mainClassName = 'IntervalImg';

    changeImg = () => {
        let {currentImg} = this.state;

        ++currentImg;

        if (currentImg >= this.props.images.length) currentImg=0;

        this.setState({currentImg})

    };

    render() {
        const {mainClassName, state: {currentImg}} = this;

        return (
            <img src={`../../images/${this.props.images[currentImg]}`} className={mainClassName}/>
        );

    }

}

export default IntervalImg;
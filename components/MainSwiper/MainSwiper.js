import React from 'react';

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import './MainSwiper.scss';
import {connect} from "react-redux";

class MainSwiper extends React.PureComponent {

    static propTypes = {

    };

    static defaultProps = {
        swiperProps: {
            loop: true,
            speed: 1800,
            roundLengths: true,
            autoplay: {
                delay: 7000
            },
            pagination: {
                clickable: true
            },
            autoHeight: true
        },
    };

    componentDidMount() {
        const {nodes: {swiperContainer, swiperPrevButton , swiperNextButton, swiperPagination}, props: {swiperProps}} = this;

        this.swiper = new Swiper(swiperContainer, {
            ...swiperProps,
            pagination: {
                ...swiperProps.pagination,
                el: swiperPagination
            },
            navigation: {
                nextEl: swiperNextButton,
                prevEl: swiperPrevButton,
            }
        });
    }

    componentDidUpdate () {
        this.props.isShowFlyGif ? this.swiper.detachEvents() : this.swiper.attachEvents()
    }

    nodes = {};

    swiper = null;

    mainClassName = 'MainSwiper';

    assignSwiperContainerRef = ref => this.nodes.swiperContainer = ref;
    assignSwiperPrevButtonRef = ref => this.nodes.swiperPrevButton = ref;
    assignSwiperNextButtonRef = ref => this.nodes.swiperNextButton = ref;
    assignSwiperPaginationRef = ref => this.nodes.swiperPagination = ref;


    render() {
        console.log('render')
        const {
            mainClassName,
            assignSwiperContainerRef, assignSwiperPrevButtonRef, assignSwiperNextButtonRef, assignSwiperPaginationRef,
        } = this;

        return (
            <div className={mainClassName}>
                    <div className="main-slider swiper-container" ref={assignSwiperContainerRef}>
                        <div className="swiper-wrapper">
                            <img className={'main-slider__slide swiper-slide'} src={'../../images/Slide6.png'}/>
                            <img className={'main-slider__slide swiper-slide'} src={'../../images/Slide3.png'}/>
                            <img className={'main-slider__slide swiper-slide'} src={'../../images/Slide4.png'}/>
                            <img className={'main-slider__slide swiper-slide'} src={'../../images/Slide1.png'}/>
                            <img className={'main-slider__slide swiper-slide'} src={'../../images/Slide2.png'}/>
                        </div>
                            <div className="main-slider__btn-next swiper-button-next" ref={assignSwiperNextButtonRef}>
                                <div className="bps-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1024 1024">
                                        <path
                                            fill={'#0000ff'}
                                            transform={`rotate(90, 512,512)`}
                                            d = {"M1024 715.072c0 30.092-12.039 60.185-30.092 84.263-42.132 48.145-120.38 54.171-168.527 6.014l-306.96-282.881-312.986 282.881c-54.171 42.132-126.395 42.132-174.551-6.014-42.132-54.171-42.132-126.395 6.014-174.551l475.487-439.38 475.487 439.38c24.079 24.079 36.118 60.185 36.118 90.288z"}
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="main-slider__btn-prev swiper-button-prev" ref={assignSwiperPrevButtonRef}>
                                <div className="bps-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1024 1024">
                                        <path
                                            fill={'#0000ff'}
                                            transform={`rotate(270, 512,512)`}
                                            d = {"M1024 715.072c0 30.092-12.039 60.185-30.092 84.263-42.132 48.145-120.38 54.171-168.527 6.014l-306.96-282.881-312.986 282.881c-54.171 42.132-126.395 42.132-174.551-6.014-42.132-54.171-42.132-126.395 6.014-174.551l475.487-439.38 475.487 439.38c24.079 24.079 36.118 60.185 36.118 90.288z"}
                                            />
                                    </svg>
                                </div>
                            </div>
                            <div className="main-slider__pagination swiper-pagination" ref={assignSwiperPaginationRef}/>
                    </div>

            </div>
        );

    }

}

export default connect(
    ({flyGif: {isShow}}) => ({isShowFlyGif: isShow})
)(MainSwiper);

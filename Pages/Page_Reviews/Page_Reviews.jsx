import React, {Fragment, PureComponent} from 'react';
import './Page_Reviews.scss';


class Page_Reviews extends PureComponent {

    mainClassName = 'Page_Reviews';

    buildStars = (amount = 0) => {
        if (amount > 5) return null;
        return <Fragment>
        {[...Array(amount)].map((s,i) => <div className={'star light'} key={i}/>)}
        {[...Array(5-amount)].map((s,i) => <div className={'star'} key={i}/>)}
    </Fragment>
    };

    render() {
        const {mainClassName} = this;

        return (


            <div className={mainClassName}>
                <div className={'container'}>
                    <div className={mainClassName + ' row odd tile'}>
                        <div className={'col-lg-3 col-md-4 col-12'}>
                            <img className={'reviewsPhoto'}
                                 src={'../../images/reviews/PlFpVpLOips.jpg'}/>
                        </div>
                        <div className={'col-lg-9 col-md-8 col-12 flex'}>
                            <div className={'ma'}>
                                <div className={'reviewsStarsWrap'}>{this.buildStars(5)}</div>
                                <div className={'reviewsText'}>
                                    Большое спасибо "парикмахеру")))
                                    Стрижка очень понравилась, мастер - просто супер!!! Мы свою девочку первый
                                    раз привели в салон. И ни капельки не пожалели! Я даже не ожидала такого
                                    замечательного отношения! Татьяна относиться к
                                    питомцу, как к своему. Большое спасибо! Мы обязательно придем к Вам Еще!
                                </div>
                                <div className={'reviewsName'}>Виктория Хвесечко</div>
                                <div className={'reviewsDate'}>29.11.2018</div>
                            </div>
                        </div>
                    </div>
                    <div className={mainClassName + ' row even tile'}>
                        <div className={'col-lg-9 col-md-8 col-12 flex'}>
                            <div className={'ma'}>
                                <div className={'reviewsStarsWrap'}>{this.buildStars(4)}</div>
                                <div className={'reviewsText'}>
                                    Стригу уже не первый раз своего малыша шпица Джоника! Мастер очень внимательный и
                                    знающий свое дело! Спасибо Татьяне за её не легкий труд, и любовь к животным!
                                </div>
                                <div className={'reviewsName'}>Виктория Девятень</div>
                                <div className={'reviewsDate'}>14.11.2018</div>
                            </div>
                        </div>
                        <div className={'col-lg-3 col-md-4 col-12'}>
                            <img className={'reviewsPhoto'}
                                 src={'../../images/reviews/jQ81c1QgZ0.jpg'}/>
                        </div>
                    </div>
                </div>
            </div>

        );

    }

}

export default Page_Reviews;
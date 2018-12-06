import React, {PureComponent} from 'react';
import './Page_Discount.scss';


class Page_Discount extends PureComponent {

    mainClassName = 'Page_Discount';


    render() {
        const {mainClassName} = this;

        return (

            <div className={mainClassName}>
                <div className={'container'}>
                    <div className={mainClassName + ' row odd tile'}>
                        <div className={'col-lg-3 col-12 order-lg-1 order-2'}>
                                <img src={'../../images/discount/discount3.jpg'}/>
                        </div>
                        <div className={'col-lg-9 col-12 flex order-lg-2 order-1'}>
                            <div className={'ma'}>
                                <div className={'discountHeader'}>Акция для новичков!</div>
                                <div className={'discountDescription'}>
                                    Весь декабрь время перемен к Новому Году!<br/>
                                    Побалуйте своего питомца свежей стрижкой к празднику!<br/>
                                    Всем новым клиентам первая стрижка в нашем салоне c 50%-ой скидкой!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={mainClassName + ' row even tile'}>
                        <div className={'col-lg-9 col-12 flex'}>
                            <div className={'ma'}>
                                <div className={'discountHeader'}>Приводи друзей!</div>
                                <div className={'discountDescription'}>
                                    Если Вам у нас понравилось, расскажите об этом друзьям!<br/>
                                    Воспользовавшись услугами нашего салона впервые, друзья смогут записать на Ваше имя скидку в 20%!
                                </div>
                            </div>
                        </div>
                        <div className={'col-lg-3 col-12'}>
                            <img className={'reviewsPhoto'}
                                 src={'../../images/discount/discount2.jpg'}/>
                        </div>
                    </div>
                    <div className={mainClassName + ' row odd tile'}>
                        <div className={'col-lg-3 col-12 order-lg-1 order-2'}>
                            <img src={'../../images/discount/discount1.jpg'}/>
                        </div>
                        <div className={'col-lg-9 col-12 flex  order-lg-2 order-1'}>
                            <div className={'ma'}>
                                <div className={'discountHeader'}>Поймай скидку!</div>
                                <div className={'discountDescription'}>
                                    Периодически на нашем сайте появляется весёлый лающий мопсик)<br/>
                                    Поймай его двойным кликом - и получи скидку 5%!
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );

    }

}

export default Page_Discount;
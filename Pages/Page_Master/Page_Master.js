import React from 'react';
import './Page_Master.scss'


class Page_Master extends React.PureComponent {

    mainClassName = 'Page_Master';

  render() {
      const {mainClassName} = this;

    return (


        <div className={mainClassName}>
            <div className={'container'}>
                <div className={'row tile even'}>
                    <div className={'master__photo col-lg-3'}>
                        <img src={'../../images/master2.png'}/>
                    </div>
                    <div className={'col-lg-6'}>
                        <div className={'master__name'}>
                            Девятень Татьяна
                        </div>
                        <div className={'master__text'}>
                            «Грумингом увлеклась 3 года назад. Захотелось аккуратно и красиво подстричь своего
                            питомца-лохматика. Когда поняла, что это занятие мне по душе - прошла обучение и теперь
                            занимаюсь любимым делои профессионально!»
                        </div>
                        <div className={'master__ico'}>
                            <img src={'../../images/master-icon1.png'}/>
                        </div>
                    </div>
                    <div className={'master__photo col-lg-3'}>
                        <img src={'../../images/master1.png'}/>
                    </div>
                </div>
                <div className={'row tile odd'}>
                <div className={'col-12 images'}>
                    <div className={'title'}>Приз зрительских симпатитий IIго чемпионата России по грумингу</div>
                    <img className={'longPrizeImg'} src={'../../images/master5.png'}/>
                    <img className={'shortPrizeImg'} src={'../../images/master3.png'}/>
                </div>
                </div>
            </div>
        </div>

    );

  }

}

export default Page_Master;

import React from 'react';
import './MainPage.scss'
import IntervalImg from "../../components/IntervalImg/IntervalImg";


class MainPage extends React.PureComponent {

    mainClassName = 'MainPage';

  render() {
      const {mainClassName} = this;

    return (

        <div className={mainClassName}>
            <div className={'container'}>
                <div className={mainClassName + ' tile odd row'}>
                    <div className={'col-md-3 col-sm-12 order-md-1 order-2'}>
                        <img src={'../../images/mainPage2.png'}/>
                    </div>
            <div className={'col-md-9 col-sm-12 titleWrap order-md-2 order-1'}>
                <div className={'mainTitle'}>
                Почему стоит привести к нам своего питомца...
                </div>
            </div>
                </div>

                <div className={mainClassName + ' tile even row'}>
                    <div className={'col-md-9 col-sm-12'}>
                        <div className={'title'}>
                        Ваш пёсик грустит?<br/> Может быть, его просто нужно подстричь?
                        </div>
                        <div className={'text'}>
                            На вопрос, зачем стричь собаку, можно дать простой ответ: чтобы улучшить качество жизни
                            вашего питомца. Даже короткошерстным собакам необходимо приводить в порядок лапки –
                            выстригать шерсть между пальцев и подушечек. Она часто скатывается в плотные колтуны,
                            которые мешают собаке нормально передвигаться и провоцируют развитие воспалительных
                            заболеваний кожи. Особенно важно делать это весной и осенью, когда на улице сырость и грязь,
                            а также зимой, чтобы не налипал снег. Стрижка шерсти на лапах облегчает уход за собакой и
                            позволяет вашему питомцу чувствовать себя более комфортно.
                        </div>
                    </div>
                    <div className={'col-md-3 col-sm-12'}>
                        <img src={'../../images/mainPage1.png'}/>
                    </div>
                </div>

                <div className={mainClassName + ' tile odd row'}>

                    <div className={'col-md-3 col-sm-12'}>
                        <img src={'../../images/mainPage3.png'}/>
                    </div>
                    <div className={'col-md-9 col-sm-12'}>
                        <div className={'title'}>
                            Как часто нужно стричь собаку?
                        </div>
                        <div className={'text'}>
                            Как и в большинстве вопросов в нашей жизни — нет единого ответа и каждый случай
                            индивидуальный и зависит от типа шерсти собаки, ее возраста, как много она линяет и как
                            часто вы хотите самостоятельно ухаживать за шерстью своего питомца.
                        </div>
                        <div className={'text'}>
                            Состояние шерсти собаки может само подсказать, когда собаку пора стричь: неприятный
                            запах «псины» – не что иное, как свидетельство того, что от шерсти пора избавляться. Об
                            этом же говорит и появление колтунов. Но конечно, лучше до такого состояния не доводить.
                        </div>
                        <div className={'text'}>
                            Большинство собак необходимо стричь каждые полтора-два месяца, а обладатели пушистой или
                            длинной шерсти нуждаются в гигиенических процедурах еще чаще.
                        </div>
                    </div>
                </div>

                <div className={mainClassName + ' tile even row slideShowWrap'}>

                    <div className={'title centerText col-12'}>
                        Почему не стоит пытаться подстричь питомца самому...
                    </div>
                    <div className={'col-lg-3 col-md-5 col-12 surprisedSideWrap'}>
                        <img src={'../../images/mainPage4.png'}/>
                    </div>
                    <div className={'intervalImg col-lg-6 col-12'}>
                        <IntervalImg/>
                    </div>
                    <div className={'col-lg-3 col-md-5 col-12 surprisedSideWrap'}>
                        <img src={'../../images/mainPage5.png'}/>
                    </div>
                </div>

            </div>
        </div>

    );

  }

}

export default MainPage;

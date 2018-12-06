import React from 'react';
import './MainInfo.scss';

class MainInfo extends React.PureComponent {

    mainClassName = 'MainInfo';

    render() {
        const {mainClassName} = this;

        return (
            <div className={mainClassName}>
                <div className={mainClassName + '__adress'}>
                    <a target="_blank"
                       className={'link'}
                       href={'https://goo.gl/maps/xDGoPhaGyiv'}>
                    г.Сморгонь, ул.Ленина 60а
                    </a>
                </div>
                <div className={mainClassName + '__tel'}>
                    <img src = '../../images/vel.png'/>
                    +375 (29) 109 05 84
                </div>
                <div className={mainClassName + '__mail link'}>
                    <a href={'maito:juliet_salon@gmail.com'}>
                        juliet_salon@gmail.com
                    </a>
                </div>

            </div>
        );

    }

}

export default MainInfo;
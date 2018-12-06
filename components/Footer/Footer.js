import React from 'react';
import './Footer.scss'
import {NavLink} from "react-router-dom";

class Footer extends React.PureComponent {

    mainClassName = 'Footer';

    render() {
        const {mainClassName} = this;

        return (
            <div className={mainClassName}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-7 col-12 leftBlock'}>
                            <img src={'../../images/Juliet_Logo.png'}/>
                        </div>
                        <div className={'col-lg-5 col-12'}>
                            <div className={'rightBlock'}>
                            <div className={'location'}>
                                <a target="_blank"
                                   className={'link'}
                                   href={'https://goo.gl/maps/xDGoPhaGyiv'}>
                                    г.Сморгонь, ул.Ленина 60а Магазин «Славянка» 2этаж
                                </a>
                            </div>
                            <div className={'tel'}>
                                <img src = '../../images/vel.png'/>
                                +375 (29) 109 05 84
                            </div>
                            <div className={'mail link'}>
                                <a href={'maito:juliet_salon@gmail.com'}>
                                juliet_salon@gmail.com
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className={'col-12'}>
                            <div className={'copyright'}>
                            © 2018 Салон груминга Джульетта
                            </div>
                        </div>
                            <div className={'creator'}>
                                <NavLink to={'/admin'} onClick={()=> {this.setState()}}>Powered by</NavLink><br/>
                                <a href={'https://vk.com/id133303052'} className={'link'} target="_blank">
                                <img src = '../../images/VK.png'/>
                                Sasha Deviaten
                                </a>
                            </div>

                    </div>
                </div>
            </div>
        );

    }

}

export default Footer;
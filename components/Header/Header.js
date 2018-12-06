import React from 'react';
import './Header.scss'
import MainMenu from "../MainMenu/MainMenu";
import MainInfo from "../MainInfo/MainInfo";

class Header extends React.PureComponent {

    mainClassName = 'Header';

    render() {
        const {mainClassName} = this;

        return (
            <div className={mainClassName}>
            <div className={'container'}>
                <div className={'row align-items-center'}>

                        <div className={mainClassName + '__logo' + ' col-lg-2 col-sm-6 col-12'}>
                            <img src={'../../images/Juliet_Logo.png'}/>
                        </div>
                        <div className={'col-lg-7 col-12 order-lg-1 order-2'}>
                            <MainMenu/>
                        </div>
                        <div className={'col-lg-3 col-sm-6 col-12 order-1 mainInfoWrap'}>
                            <MainInfo/>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Header;
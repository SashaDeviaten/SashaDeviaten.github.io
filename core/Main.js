import React from 'react';
import PagesRouter from "../PageRouter/PageRouter";
import Header from "../components/Header/Header";
import './Main.scss'
import MainSwiper from "../components/MainSwiper/MainSwiper";
import Footer from "../components/Footer/Footer";
import FlyGif from "../components/FlyGif/FlyGif.jsx";


class Main extends React.PureComponent {

  render() {

    return (

        <div>
            <Header/>
            <MainSwiper/>
            <FlyGif/>
            <div className={'pageContent'}>
                <PagesRouter/>
            </div>
            <Footer/>
        </div>

    );

  }

}

export default Main;

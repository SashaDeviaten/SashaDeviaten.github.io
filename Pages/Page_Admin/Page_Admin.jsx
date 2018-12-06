import React, {Fragment, PureComponent} from 'react';
import './Page_Admin.scss';
import {connect} from "react-redux";
import verifiedAdmin from "../../actions/verifiedAdmin";
import blockFlyGif from "../../actions/blockFlyGif";
import {getCodes, removeCodeFetch} from "../../core/fetch";
import {customConfirm} from "../../components/Modals/CustomConfirm/CustomConfirm.jsx";


class Page_Admin extends PureComponent {

    componentDidMount () {
        window.scrollTo(0, 360);
        this.props.blockFlyGif();
        getCodes().then(codes => this.setState({codes}))
    }


    state = {
        codes: []
    };

    mainClassName = 'Page_Admin';
    passsword = null;

    setPassword = e => {
        if (e.target.value) this.password = e.target.value;
    };

    checkPassword = () => {
        if (this.password === 'Vojstom') this.props.verifiedAdmin();
        else {
            customConfirm({
                content: 'Неверный пароль',
                confirm: 'Ок',
                alert: true
            });
        }
    };

    deleteItem = async e => {
        let codes = [...this.state.codes];
        const removeIndex = +e.target.dataset.index;
        await removeCodeFetch(removeIndex);
        codes.splice(removeIndex, 1);
        this.setState({codes});
    };

    buildCodesTable = () => {
        return <Fragment>
            {this.state.codes.map(({code, date}, i) => {
                return <div className={'codeRow'} key={code}>
                    <div className={'code cell'}>{code}</div>
                    <div className={'codeDat cell'}>{date}</div>
                    <div className={'action cell'}><button data-index={i} onClick={this.deleteItem}>Удалить</button></div>
                </div>
            })}
        </Fragment>
    };


    render() {
        const {mainClassName} = this;

        const {admin} = this.props;
        console.log('render', this.state.codes)

        return (


            <div className={mainClassName}>
                <div className={'container'}>
                    <div className={mainClassName + ' row'}>
                        {admin ? <div className={'codes'}>
                                <div className={'codesTitle'}>Активные коды</div>
                                <div className={'codesTable'}>
                                    <div className={'codesHeaderWrap'}>
                                        <div className={'codesHeader'}>Код</div>
                                        <div className={'codesHeader'}>Дата</div>
                                    </div>
                                    <div className={'codesTableWrap'}>{this.buildCodesTable()}</div>
                                </div>
                            </div>
                            : <div className={'password'}>
                                <input placeholder={'Введите пароль'}
                                               type={'password'}
                                               onBlur={this.setPassword}
                                />
                                <button onClick={this.checkPassword}>Войти</button>
                            </div>}
                    </div>
                </div>
            </div>

        );

    }

}

export default connect(
    ({admin: {admin}}) => ({admin}),
    dispatch => ({
        verifiedAdmin: () => dispatch(verifiedAdmin()),
        blockFlyGif: () => dispatch(blockFlyGif()),
    })
)(Page_Admin);
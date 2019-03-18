import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {modal} from '../Modals.jsx';
import './CustomConfirm.scss';

export const customConfirm = config => modal({
    component: CustomConfirm,
    ...config
});

class CustomConfirm extends PureComponent {
    constructor(props) {
        super(props);
        document.body.style.overflowY = 'hidden';
        setInterval(() => this.setState({isOpen:true}), 150)
    }

    static propTypes = {
        header: PropTypes.any,
        cancel: PropTypes.any,
        confirm: PropTypes.any,
        resolve: PropTypes.func,
        reject: PropTypes.func,
        alert: PropTypes.bool
    };

    static defaultProps = {
        alert: false,
        confirm: 'Да',
        cancel: 'Нет',
    };

    state = {
        isOpen: false
    };



    componentWillUnmount () {
        document.body.style.overflowY = 'auto'
    }

    close = () => {
        this.setState({
            isOpen: false
        })
    };

    confirm = () => {
        this.close();
        this.props.resolve(true);
    };

    cancel = () => {
        this.close();
        this.props.resolve(false);
    };

    render() {
        const {props} = this;
        return (
            <div
                className={'CustomModal'}
                onClose={this.cancel}
                style={{top: window.pageYOffset + 'px'}}
            >
                <div className={'CustomModal__wrap'}>
                    <i aria-hidden='true' className='ic-close' onClick={this.cancel}/>
                    <div className={'CustomModal__header'}>
                        {props.header}
                    </div>
                    <div className={'CustomModal__content'}>
                        {props.children}
                    </div>
                    <div className={'CustomModal__actions'}>
                        {!props.alert && <button className="modalAction cancelBtn" onClick={this.cancel}>{props.cancel}</button>}
                            <button className="modalAction confirmBtn" onClick={this.confirm}>{props.confirm}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomConfirm;

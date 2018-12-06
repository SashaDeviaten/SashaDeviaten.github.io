import React, {PureComponent} from 'react';

const configs = [];
const components = [];

export const modal = async config => {
    const promise = new Promise((resolve, reject) => {
        config.resolve = resolve;
        config.reject = reject;
    });

    configs.push(config);

    components.forEach(component => component.forceUpdate());

    try {
        const response = await promise;

        configs.splice(configs.indexOf(config), 1);

        components.forEach(component => component.forceUpdate());

        return response;
    } catch (e) {
        throw e;
    }
};

class Modals extends PureComponent {
    componentDidMount () {
        components.push(this);
    }

    render () {
        return configs.map(({component: Component, content, ...props}, i) => (
            <Component key={i} {...props}>{content}</Component>
        ))
    }

    componentWillUnmount () {
        components.splice(components.indexOf(this), 1);
    }
}

export default Modals;

import React from 'react';
import PropTypes from 'prop-types';

class ParallaxContainer extends React.Component {
    static childContextTypes = {
        screenX: PropTypes.number,
        screenY: PropTypes.number,
    };

    constructor(props) {
        super(props);

        this.state = {
            screenX: 0,
            screenY: 0,
        };

        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove({ screenX, screenY }) {
        this.setState({ ...{ screenX, screenY } })
    };

    getChildContext() {
        return {
            screenX: this.state.screenX,
            screenY: this.state.screenY,
        };
    }

    render() {
        return (
            <div
                onMouseMove={(e) => this.handleMouseMove(e)}
                {...this.props}
            >
                {this.props.children}
            </div>
        );
    }
}

export default ParallaxContainer;
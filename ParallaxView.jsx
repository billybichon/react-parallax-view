import React from 'react';
import PropTypes from 'prop-types';

class ParallaxView extends React.Component {
    static contextTypes = {
        screenX: PropTypes.number,
        screenY: PropTypes.number,
    };

    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,
        };
    }

    componentDidMount() {
        this.setState({
            x: this.ref.getBoundingClientRect().left,
            y: this.ref.getBoundingClientRect().top,
        });
    }

    render() {
        const coef = Math.max(1, this.props.layer * 10);
        const x = (this.context.screenX - this.state.x) / coef;
        const y = (this.context.screenY - this.state.y) / coef;
        const style = {
            ...this.props.style,
            transform: `translate(${x}px, ${y}px)`,
        };

        if (typeof this.props.children  !== 'string' && React.Children.only(this.props.children)) {
            const childStyle = this.props.children.props.style;
            return React.cloneElement(this.props.children, {
                ref: (el) => {
                    this.ref = el;
                },
                style: {
                    ... style,
                    ... childStyle
                }
            });
        }
        else {
            return (
                <span
                    {...{ style }}
                    ref={(el) => {
                        this.ref = el;
                    }}
                >
                {this.props.children}
            </span>
            );
        }
    }
}

ParallaxView.propTypes = {
    layer: PropTypes.number,
};

ParallaxView.defaultProps = {
    layer: 1,
};

export default ParallaxView;
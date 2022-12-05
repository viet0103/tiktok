
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    primary = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    rounded = false,
    noneOutline = false,
    children,
    leftIcon = false,
    rightIcon = false,
    className,
    to,
    href,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((prop) => {
            if (prop.startsWith('on') && typeof prop === 'function') delete props[prop];
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
   
    return (
        <Comp
            
            className={cx('wrapper',className, {
                primary,
                outline,
                small,
                large,
                rounded,
                disabled,
                noneOutline
            })}
           

            onClick={onClick}

            {...props}
        >
            
            {leftIcon && <div className={cx('leftIcon')}>
                {leftIcon}
            </div>}
            <span>{children}</span>
            {rightIcon && <div className={cx('rightIcon')}>
                {rightIcon}
            </div >}
        </Comp>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    noneOutline: PropTypes.bool,
    children: PropTypes.node,
    leftIcon: PropTypes.oneOfType([
        PropTypes.node, PropTypes.elementType
    ]),
    rightIcon: PropTypes.oneOfType([
        PropTypes.node, PropTypes.elementType
    ]),
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;

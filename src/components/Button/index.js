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
    let LeftIcon = leftIcon;
    let RightIcon = rightIcon;
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
            {LeftIcon && <div className={cx('leftIcon')}>
                <LeftIcon className={cx('leftIcon')} />
            </div>}
            <span>{children}</span>
            {RightIcon && <div className={cx('rightIcon')}>
                <RightIcon className={cx('rightIcon')}/>
            </div >}
        </Comp>
    );
}

export default Button;

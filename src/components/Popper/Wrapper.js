import classNames from "classnames/bind";
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({children, className, startArrow=false, centerArrow=false, endArrow=false}) {
    return (
        <div className={cx('wrapper', className, {
            startArrow,
            centerArrow,
            endArrow
        })}>
            {children}
        </div>
    )
}

export default Wrapper;
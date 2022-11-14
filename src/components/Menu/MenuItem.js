import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Button from "~/components/Button";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({icon, name, className, to, onClick}) {
   
    return (
        <Button noneOutline onClick={onClick} className={cx('button', className)} leftIcon={icon} to={to} >{name}</Button>
    );
}

MenuItem.propTypes = {
    icon: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.elementType
    ]),
    name: PropTypes.string,
    classNames: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func
}

export default MenuItem;

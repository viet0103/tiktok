import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function MenuItem({icon, name, className, to, onClick}) {
   
    return (
        <Button noneOutline onClick={onClick} className={cx('button', className)} leftIcon={icon} to={to} >{name}</Button>
    );
}

export default MenuItem;

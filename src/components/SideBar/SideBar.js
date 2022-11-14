
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { NavLink } from 'react-router-dom';
import config from '~/config';
import Button from '../Button';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '../Icons';
import SideBarAccounts from './SideBarAccounts';

const cx = classNames.bind(styles);

SideBar.propTypes = {
    
};

function SideBar() {
    
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('menu')}>
                    <NavLink to={config.routes.home} className={(nav) => cx({active: nav.isActive})} end>
                        <Button className={cx('menu-item')} leftIcon={HomeIcon} noneOutline><h2>For you</h2></Button>
                        <Button className={cx('menu-item', 'active-icon')} leftIcon={HomeActiveIcon} noneOutline><h2>For you</h2></Button>
                    </NavLink>

                    <NavLink to={config.routes.following} className={(nav) => cx({active: nav.isActive})}>
                        <Button className={cx('menu-item')} leftIcon={UserGroupIcon} noneOutline><h2>Following</h2></Button>
                        <Button className={cx('menu-item','active-icon')} leftIcon={UserGroupActiveIcon} noneOutline><h2>Following</h2></Button>
                    </NavLink>

                    <NavLink to={config.routes.live} className={(nav) => cx({active: nav.isActive})}>
                        <Button className={cx('menu-item')} leftIcon={LiveIcon} noneOutline><h2>Live</h2></Button>
                        <Button className={cx('menu-item', 'active-icon')} leftIcon={LiveActiveIcon} noneOutline><h2>Live</h2></Button>
                    </NavLink>
            </nav>
            <SideBarAccounts label='Suggestted accounts' />
            <SideBarAccounts label='Following accounts' />
        </div>
    );
}

export default SideBar;

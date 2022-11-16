
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import config from '~/config';
import Button from '../Button';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '../Icons';
import SideBarAccounts from './SideBarAccounts';
import SideBarHagsTag from './SideBarHagsTag';

const cx = classNames.bind(styles);

SideBar.propTypes = {
    
};

function SideBar() {
    
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('menu')}>
                    <NavLink to={config.routes.home} className={(nav) => cx('menu-link',{active: nav.isActive})} end>
                        <Button className={cx('menu-item')} leftIcon={HomeIcon} noneOutline><h2>For you</h2></Button>
                        <Button className={cx('menu-item', 'active-icon')} leftIcon={HomeActiveIcon} noneOutline><h2>For you</h2></Button>
                    </NavLink>

                    <NavLink to={config.routes.following} className={(nav) => cx('menu-link',{active: nav.isActive})}>
                        <Button className={cx('menu-item')} leftIcon={UserGroupIcon} noneOutline><h2>Following</h2></Button>
                        <Button className={cx('menu-item','active-icon')} leftIcon={UserGroupActiveIcon} noneOutline><h2>Following</h2></Button>
                    </NavLink>

                    <NavLink to={config.routes.live} className={(nav) => cx('menu-link',{active: nav.isActive})}>
                        <Button className={cx('menu-item')} leftIcon={LiveIcon} noneOutline><h2>Live</h2></Button>
                        <Button className={cx('menu-item', 'active-icon')} leftIcon={LiveActiveIcon} noneOutline><h2>Live</h2></Button>
                    </NavLink>
            </nav>
            <SideBarAccounts label='Suggestted accounts' />
            <SideBarAccounts label='Following accounts' />

            <SideBarHagsTag label='Discover' />

            <footer className={cx('sidebar-footer')}>
                <div className={cx('footer-content-list')}>
                    <Link to='/' className={cx('footer-content-item')}>About</Link>
                    <Link to='/' className={cx('footer-content-item')}>Contact</Link>
                    <Link to='/' className={cx('footer-content-item')}>Newsroom</Link>
                    <Link to='/' className={cx('footer-content-item')}>Career</Link>
                    <Link to='/' className={cx('footer-content-item')}>ByteDance</Link>
                </div>

                <div className={cx('footer-content-list')}>
                    <Link to='/' className={cx('footer-content-item')}>TikTok for Good</Link>
                    <Link to='/' className={cx('footer-content-item')}>TikTok Rewards</Link>
                    <Link to='/' className={cx('footer-content-item')}>TikTok Embeds</Link>
                    <Link to='/' className={cx('footer-content-item')}>Developers</Link>
                    <Link to='/' className={cx('footer-content-item')}>Advertise</Link>
                    <Link to='/' className={cx('footer-content-item')}>Transparency</Link>
                    <Link to='/' className={cx('footer-content-item')}>TikTok Browse</Link>
                </div>

                <div className={cx('footer-content-list')}>
                    <Link to='/' className={cx('footer-content-item')}>Help</Link>
                    <Link to='/' className={cx('footer-content-item')}>Safety</Link>
                    <Link to='/' className={cx('footer-content-item')}>Terms</Link>
                    <Link to='/' className={cx('footer-content-item')}>Privacy</Link>
                    <Link to='/' className={cx('footer-content-item')}>Creator Portal</Link>
                    <Link to='/' className={cx('footer-content-item')}>Community Guidelines</Link>
                </div>

                
                    <span className={cx('footer-content-coppyright')}>© 2022 TikTok</span>
                

            </footer>
        </div>
    );
}

export default SideBar;

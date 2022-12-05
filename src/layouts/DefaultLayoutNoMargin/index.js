import classNames from 'classnames/bind';
import styles from './DefaultLayoutNoMargin.module.scss';
import Header from '~/components/Header';
import SideBar from '~/components/SideBar';

const cx = classNames.bind(styles);

function DefaultLayoutNoMargin({ children, isSignIn}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-wrapper')}>
                <Header className={cx('header')} isSignIn={isSignIn} />
            </div>
            <div className={cx('container')}>
               <div className={cx('sidebar-wrapper')}>
                <SideBar isSignIn/>
               </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayoutNoMargin;

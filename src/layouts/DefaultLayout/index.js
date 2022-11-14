import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Header';
import SideBar from '~/components/SideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children, isSignIn}) {
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('header')} isSignIn={isSignIn} />
            <div className={cx('container')}>
               <SideBar isSignIn/>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

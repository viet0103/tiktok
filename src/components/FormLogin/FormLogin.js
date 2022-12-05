import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';
import Button from '../Button';
import {
    Apple,
    AppleIcon,
    ClosedIcon,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    KakaoTalkIcon,
    LineIcon,
    QrIcon,
    TwitterIcon,
    UserPersonal,
} from '../Icons';

FormLogin.propTypes = {};

const cx = classNames.bind(styles);

function FormLogin(props) {
   
    return (
        <div className={cx('wrapper')} >
            <div className={cx('form-wrapper')}>
                <div className={cx('header-wrapper')}>
                    <div className={cx('closed-btn-wrapper')}>
                        <Button className={cx('closed-btn')} noneOutline leftIcon={<ClosedIcon />} onClick={() => {
                           
                        }}></Button>
                    </div>
                    <header className={cx('header-login')}>Log in to TikTok</header>
                    <ul className={cx('login-list')}>
                        <li className={cx('login-item')}>
                            <Button noneOutline leftIcon={<QrIcon />} className={cx('login-item-btn')}>
                                Use QR code
                            </Button>
                        </li>
                        <li className={cx('login-item')}>
                            <Button noneOutline leftIcon={<UserPersonal />} className={cx('login-item-btn')}>
                                Use phone / email / username
                            </Button>
                        </li>
                        <li className={cx('login-item')}>
                            <Button
                                noneOutline
                                leftIcon={<FacebookIcon width="2rem" height="2rem" />}
                                className={cx('login-item-btn')}
                            >
                                Continue with Facebook
                            </Button>
                        </li>
                        <li className={cx('login-item')}>
                            <Button noneOutline leftIcon={<GoogleIcon />} className={cx('login-item-btn')}>
                                Continue with Google
                            </Button>
                        </li>
                        <li className={cx('login-item')}>
                            <Button
                                noneOutline
                                leftIcon={<TwitterIcon width="2rem" height="2rem" />}
                                className={cx('login-item-btn')}
                            >
                                Continue with Twitter
                            </Button>
                        </li>
                        <li className={cx('login-item')}>
                            <Button
                                noneOutline
                                leftIcon={<LineIcon width="2rem" height="2rem" />}
                                className={cx('login-item-btn')}
                            >
                                Continue with LINE
                            </Button>
                        </li>
                        <li className={cx('login-item')}>
                            <Button noneOutline leftIcon={<KakaoTalkIcon />} className={cx('login-item-btn')}>
                                Continue with KakaoTalk
                            </Button>
                        </li>
                        <li className={cx('login-item')}>
                            <Button noneOutline leftIcon={<AppleIcon />} className={cx('login-item-btn')}>
                                Continue with Apple
                            </Button>
                        </li>
                        <li className={cx('login-item')}>
                            <Button noneOutline leftIcon={<InstagramIcon />} className={cx('login-item-btn')}>
                                Continue with Instagram
                            </Button>
                        </li>
                    </ul>
                </div>

                <footer className={cx('footer-login')}>Don't have a account?</footer>
            </div>
        </div>
    );
}

export default FormLogin;

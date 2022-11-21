import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

import Menu from '~/components/Menu';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Images';
import {
    CoinIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    MessageIcon,
    Plus,
    SettingIcon,
    SignOutIcon,
    UploadIcon,
    UserPersonal,
} from '~/components/Icons';
import Search from '~/components/Search';

const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: LanguageIcon,
        name: 'Languages',
        children: {
            title: 'Languages',
            data: [
                
                { name: 'বাঙ্গালি (ভারত)' },
                { name: 'العربية' },
                { name: 'Cebuano (Pilipinas)' },
                { name: 'Čeština (Česká republika)' },
                { name: 'Deutsch' },
                { name: 'Ελληνικά (Ελλάδα)' },
                {
                    name: 'English',
                    children: {
                        title: 'English',
                        data: [
                            {
                                name: 'United Kingdom',
                            },
                            {
                                name: 'The United States of America',
                            },
                        ],
                    },
                },
                { name: 'Español' },
                { name: 'Suomi (Suomi)' },
                { name: 'Filipino (Pilipinas)' },
                { name: 'Français' },
                { name: 'עברית (ישראל)' },
                { name: 'हिंदी' },
                { name: 'Magyar (Magyarország)' },
                { name: 'Bahasa Indonesia (Indonesia)' },
                { name: 'Italiano (Italia)' },
                { name: '日本語（日本）' },
                { name: 'Basa Jawa (Indonesia)' },
                { name: 'ខ្មែរ (កម្ពុជា)' },
                { name: '한국어 (대한민국)' },
                { name: 'Bahasa Melayu (Malaysia)' },
                { name: 'မြန်မာ (မြန်မာ)' },
                { name: 'Nederlands (Nederland)' },
                { name: 'Polski (Polska)' },
                { name: 'Português (Brasil)' },
                { name: 'Română (Romania)' },
                { name: 'Русский (Россия)' },
                { name: 'Svenska (Sverige)' },
                { name: 'ไทย (ไทย)' },
                { name: 'Türkçe (Türkiye)' },
                { name: 'Українська (Україна)' },
                { name: 'اردو' },
                { name: 'Tiếng Việt (Việt Nam)' },
                { name: '简体中文' },
                { name: '繁體中文' },
            ],
        },
    },
    {
        icon: FeedbackIcon,
        name: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: KeyboardIcon,
        name: 'Keyboard shortcuts',
    },
];

const MENU_ITEM_SIGN_IN = [
    {
        icon: UserPersonal,
        name: 'View profile',
        to: '/profile',
    },
    {
        icon: CoinIcon,
        name: 'Getting coins',
        to: '/getcoin',
    },
    {
        icon: SettingIcon,
        name: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEM,
    {
        icon: SignOutIcon,
        name: 'Log out',
        to: '/setting',
        separate: true,
    },
];

function Header({ isSignIn }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'} className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </Link>
                <Search />

                <div className={cx('action')}>
                    {isSignIn ? (
                        <>
                            <Button leftIcon={Plus}>Upload</Button>
                            <Tippy delay={[0, 25]} placement="bottom" content="Upload video">
                                <button className={cx('action-btn', 'upload-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 25]} placement="bottom" content="Share">
                                <button className={cx('action-btn', 'share-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 25]} placement="bottom" content="Messages">
                                <button className={cx('action-btn', 'mail-box-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={Plus}>Upload</Button>

                            <Button primary to={'/'}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={isSignIn ? MENU_ITEM_SIGN_IN : MENU_ITEM}>
                        <div className={cx('menu')}>
                            {isSignIn ? (
                                <Image
                                    className={cx('user-avatar')}
                                    src={
                                        'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1666242000&x-signature=fFhH75Scg3p1EpOFbo3SDMVh7WY%3D'
                                    }
                                    alt="Gumball waterson"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className={cx('icon-more')}
                                    icon={faEllipsisVertical}
                                ></FontAwesomeIcon>
                            )}
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

import Menu from '~/components/Popper/Menu';
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
                {
                    name: 'English',
                    children: {
                        title: 'English',
                        data: [
                            {
                                name: 'English (UK)',
                            },
                            {
                                name: 'English (USA)',
                            },
                        ],
                    },
                },
                {
                    name: 'Việt nam',
                },
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
function Header() {
    let isSignIn = true;
    
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'} className={cx('logo')}>
                    <img src={images.logo} />
                </Link>
               
                <Search />

                <div className={cx('action')}>
                    {isSignIn ? (
                        <>
                            <Button  leftIcon={Plus}>
                                Upload
                            </Button>
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
                            <Button  leftIcon={Plus}>
                                Upload
                            </Button>

                            <Button primary>Log in</Button>
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
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            )}
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

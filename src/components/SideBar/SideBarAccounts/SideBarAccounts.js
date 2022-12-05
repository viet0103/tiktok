import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SideBarAccounts.module.scss';
import { useEffect, useRef, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import * as service from '~/services/suggestAccountsService';
import Tippy from '@tippyjs/react/headless';
import Image from '~/components/Images/Images';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';



SidebarAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

const cx = classNames.bind(styles);

function SidebarAccounts({ label }) {
    const nav = useNavigate();
    const [show, setShow] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const listAccount = useRef(accounts);
    const handleClick =(account) => {
        nav(`/@${account.nickname}`, {state: {account: account}})
    }
    
    listAccount.current = accounts.map((account) =>
        label.toLowerCase().includes('suggest') ? (
            <div key={account.id}>
                <Tippy
                    delay={[500, 500]}
                    interactive
                    offset={[0, 6]}
                    placement="bottom"
                    render={() => (
                        <div onClick={() => {
                            handleClick(account)
                        }}>
                            <div className={cx('preview-wrpaper')}>
                                <div className={cx('preview-header')}>
                                   <div>
                                     <Image src={account.avatar} />
                                   </div>
                                    <Button className={cx('preview-btn')} primary>
                                        Follow
                                    </Button>
                                </div>
                                <div className={cx('preview-body')}>
                                    <div className={cx('preview-nickname')}>{account.nickname}</div>
                                    <p className={cx('preview-fullname')}>{`${account.first_name} ${account.last_name}`}</p>
                                    <div className={cx('preview-hot')}>
                                        <span className={cx('num-follow')}>{account.followers_count}</span>
                                        <span className={cx('follow')}>Follwers</span>
                                        <span className={cx('num-like')}>{account.likes_count}</span>
                                        <span className={cx('like')}>Likes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                >
                    <div className={cx('account')} key={account.id} onClick={() => {
                        handleClick(account)
                    }}>
                        <AccountItem data={account} smallSize />
                    </div>
                </Tippy>
            </div>
        ) : (
            <div className={cx('account')} key={account.id}>
                <AccountItem data={account} smallSize />
            </div>
        ),
    );

    useEffect(() => {
        const fetchApi = async () => {
            const result = await service.suggestAccounts(1, 20);
            setAccounts(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>{label}</header>
            
            <div className={cx('body', { show })}>{listAccount.current}</div>

            {accounts.length >= 5 ? (
                <div
                    className={cx('show-btn')}
                    onClick={() => {
                        setShow((prev) => !prev);
                    }}
                >
                    {show ? 'Show less' : 'Show more'}
                </div>
            ) : (
                false
            )}

        </div>
    );
}

export default SidebarAccounts;

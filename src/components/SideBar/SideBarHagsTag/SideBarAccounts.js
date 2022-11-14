import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SideBarAccounts.module.scss';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import * as service from '~/services/suggestAccountsService'

const cx = classNames.bind(styles);

SidebarAccounts.propTypes = {
    
};

function SidebarAccounts({label}) {
    let [show, setShow] = useState(false);
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await service.suggestAccounts(1, 20);
            setAccounts(result)
        }
        fetchApi();
    },[])
    
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>{label}</header>
            <div className={cx('body', {show})}>
                {accounts.map(account => (
                    <div className={cx('account')} key={account.id}>
                        <AccountItem data={account} smallSize/>
                    </div>
                ))}
            </div>
            <div className={cx('show-btn')} onClick={() => {setShow(prev => !prev)}}>{show ? "Show less" : "Show more"}</div>
        </div>
    );
}

export default SidebarAccounts;
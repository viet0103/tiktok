import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Images';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);
function AccountItem({data, onClick}) {
    return ( 
        <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
            <Image src={data.avatar} alt={data.full_name} className={cx('account-avatar')} />
            <div className={cx('body')}>
                <div className={cx('account-name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                </div>
                <div className={cx('account-desc')}>{data.nickname}</div>
            </div>
        </Link>
     );
}

export default AccountItem;
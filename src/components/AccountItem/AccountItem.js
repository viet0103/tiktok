import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Images';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function AccountItem({ data, smallSize, bigSize, onClick , defaultHover, displayColumn}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper', { smallSize, bigSize, defaultHover, displayColumn })} onClick={onClick}>
            <Image src={data.avatar} alt={data.full_name} className={cx('account-avatar')} />
            <div className={cx('body')}>
                    <div className={cx('account-name')}>
                        <span>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                    </div>
                    <div className={cx('account-desc')}>{`${data.first_name} ${data.last_name}`}</div>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default AccountItem;

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Images';


const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1666242000&x-signature=fFhH75Scg3p1EpOFbo3SDMVh7WY%3D" alt="Hoa" className={cx('account-avatar')} />
            <div className={cx('body')}>
                <div className={cx('account-name')}>
                    <span>Nguyen A</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>
                </div>
                <div className={cx('account-desc')}>Tho dao mo chuyen nghiep</div>
            </div>
        </div>
     );
}

export default AccountItem;
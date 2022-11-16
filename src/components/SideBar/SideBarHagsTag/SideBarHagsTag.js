import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SideBarHagsTag.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Hashtag, Music } from '~/components/Icons';

const cx = classNames.bind(styles);

SideBarHagsTag.propTypes = {};

function SideBarHagsTag({ label }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>{label}</header>
            <div className={cx('body')}>
                <div className={cx('hasgtag')}>
                    <div className={cx('hashtag-icon')}>
                        <Hashtag />
                    </div>
                    <p className={cx('hashtag-name')}>suthatla</p>
                </div>
                <div className={cx('hasgtag')}>
                    <div className={cx('hashtag-icon')}>
                        <Hashtag />
                    </div>
                    <p className={cx('hashtag-name')}>mackedoi</p>
                </div>
                <div className={cx('hasgtag')}>
                    <div className={cx('hashtag-icon')}>
                        <Music />
                    </div>
                    <p className={cx('hashtag-name')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n</p>
                </div>
                <div className={cx('hasgtag')}>
                    <div className={cx('hashtag-icon')}>
                        <Music />
                    </div>
                    <p className={cx('hashtag-name')}>7749 hieuung</p>
                </div>
                <div className={cx('hasgtag')}>
                    <div className={cx('hashtag-icon')}>
                        <Hashtag />
                    </div>
                    <p className={cx('hashtag-name')}>genzlife</p>
                </div>
                <div className={cx('hasgtag')}>
                    <div className={cx('hashtag-icon')}>
                        <Hashtag />
                    </div>
                    <p className={cx('hashtag-name')}>happyanewday</p>
                </div>
                <div className={cx('hasgtag')}>
                    <div className={cx('hashtag-icon')}>
                        <Music />
                    </div>
                    <p className={cx('hashtag-name')}>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</p>
                </div>
            </div>
        </div>
    );
}

export default SideBarHagsTag;

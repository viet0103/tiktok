import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
const cx = classNames.bind(styles);


Video.propTypes = {
    
};

function Video({src, children}) {

    
    return (
        <div className={cx('wrapper')}>
            <video src={src} className={cx('video')} controls loop> </video>
            <div className={cx('social')}>
                {children}
            </div>
        </div>
    );
}

export default Video;
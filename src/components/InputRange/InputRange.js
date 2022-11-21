import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputRange.module.scss';

const cx = classNames.bind(styles);

InputRange.propTypes = {};

function InputRange({onVolume}) {
    const [range, setRange] = useState(50);
    const thumb = useRef();

      useEffect(() => {
        thumb.current.style.width = 100 - range + "%";
      },[range])
    return (
        <div className={cx("wrapper")}>
            <input type="range" name="" className={cx("input")} min="0" max="100"  onInput={(e) => { onVolume(e.target.value/100)
                setRange(e.target.value)}}/>
            <div className={cx("progress-input")}>
                <div className={cx("track")}></div>
                <div ref={thumb} className={cx("thumb-wrap")}>
                    <div className={cx("thumb")}></div>
                </div>
            </div>
        </div>
    );
}

export default InputRange;

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { MutedIcon, PauseIcon, PlayIcon, ReportIcon, UnMutedIcon } from '~/components/Icons';
import InputRange from '~/components/InputRange';
import ReactVisibilitySensor from 'react-visibility-sensor';

const cx = classNames.bind(styles);

Video.propTypes = {

};

function Video({ src, children }) {
   
    window.onblur = (e) => {
       videoRef.current.pause()
    }

    window.onfocus =(e) => {
        if (play) {
            videoRef.current.play()
        }
    }

    window.onscroll =(e) => {
        if ((!(play)) && (!(videoRef.current.paused))) {
            videoRef.current.pause();
        }
    }
    
    const videoRef = useRef();
    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isPlay, setIsPlay] = useState(true);
    const handleVolume = (vol) => {
        setVolume(prev => vol);
    }

    const handleClickVolume = () => {
        if (volume===0) {
            setVolume(prev => 0.5);
        } else {
            setVolume(prev => 0)
        }
    }
    
    const handleControl = () => {
       
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlay(videoRef.current.paused);
    };

    useEffect(() => {
       
        if (play) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            
        } else {
            videoRef.current.pause();
        }
    }, [play]);

   

    useEffect(() => {
        videoRef.current.volume = volume;
    }, [volume])

    return (
        <div
            className={cx('wrapper')}
            style={
                src.meta.video.resolution_x > src.meta.video.resolution_y
                    ? {
                          height:
                              (450 + ((window.innerWidth - 768) / 1501) * 100) *
                              (src.meta.video.resolution_y / src.meta.video.resolution_x),
                          width: 450 + ((window.innerWidth - 768) / 1501) * 100,
                      }
                    : {
                          width:
                              (450 + ((window.innerWidth - 768) / 1501) * 100) *
                              (src.meta.video.resolution_x / src.meta.video.resolution_y),
                          height: 450 + ((window.innerWidth - 768) / 1501) * 100,
                      }
            }
        >
            <ReactVisibilitySensor onChange={(isVisible) => setPlay(isVisible)} intervalCheck scrollCheck>
                <video
                    ref={videoRef}
                    src={src.file_url}
                    className={cx('video')}
                    playsInline
                    webkit-playsinline="true"
                    loop
                    onPlaying={() => {setIsPlay(true)}}
                    onPause={() => {setIsPlay(false)}}
                ></video>
            </ReactVisibilitySensor>
            <div className={cx('report')}>
                <ReportIcon className={cx('report-icon')} />
                <span>Report</span>
            </div>
            <div
                className={cx('control-play')}
                onClick={() => {
                    handleControl();
                }}
            >
                {isPlay ? <PauseIcon /> : <PlayIcon />}
            </div>
            <div className={cx('control-muted')}>
                <div className={cx('muted-icon')} onClick={handleClickVolume}>
                    {volume===0? <UnMutedIcon />: <MutedIcon />}
                </div>

                <div className={cx('input-wrapper')}>
                    <InputRange onVolume={handleVolume} />
                </div>
            </div>
            <div className={cx('social')}>{children}</div>
        </div>
    );
}

export default Video;

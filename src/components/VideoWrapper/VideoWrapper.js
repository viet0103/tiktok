import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoWrapper.module.scss';
import Image from '../Images/Images';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { Heart, Message, MessageIcon, Music, ShareIcon, UploadIcon, UserGroupIcon } from '../Icons';
import Video from './Video/Video';
import Tippy from '@tippyjs/react/headless';
import { HomeIcon } from '../Icons';

const cx = classNames.bind(styles);

VideoWrapper.propTypes = {};

function VideoWrapper({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-info')}>
                <Tippy
                    delay={[500, 500]}
                    interactive
                    offset={[-10,-15]}
                    placement="bottom-start"
                    
                    render={() => (
                        <div className={cx('preview-wrpaper')}>
                            <div className={cx('preview-header')}>
                                <Image src={data.user.avatar} />
                                <Button className={cx('preview-btn')} outline >
                                    Follow
                                </Button>
                            </div>
                            <div className={cx('preview-body')}>
                                <div className={cx('preview-nickname')}>{data.user.nickname}</div>
                                <p
                                    className={cx('preview-fullname')}
                                >{`${data.user.first_name} ${data.user.last_name}`}</p>
                                <div className={cx('preview-hot')}>
                                    <span className={cx('num-follow')}>{data.user.followers_count}</span>
                                    <span className={cx('follow')}>Follwers</span>
                                    <span className={cx('num-like')}>{data.user.likes_count}</span>
                                    <span className={cx('like')}>Likes</span>
                                </div>
                            </div>
                            <div className={cx('preview-footer')}>
                            <p>{data.user.bio}</p>
                            </div>
                        </div>
                    )}
                >
                    <div>
                        <Image src={data.user.avatar} className={cx('user-avatar')} />
                    </div>
                </Tippy>

                <div className={cx('user-info-text')}>
                    <div className={cx('user-name')}>
                        <Link className={cx('user-nickname')}>{data.user.nickname}</Link>
                        <p className={cx('user-fullname')}>{`${data.user.first_name} ${data.user.last_name}`}</p>
                    </div>
                    <p className={cx('video-des')}>{data.description}</p>

                    {data.music ? (
                        <div className={cx('video-music')}>
                            <Music />
                            <Link className={cx('video-music-src')}>{data.music}</Link>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <Button className={cx('btn')} outline>
                    Follow
                </Button>
            </div>
            <div className={cx('video')}>
                <Video src={data.file_url}><div className={cx('social-list')}>
                    <div className={cx('social-item')}>
                        <div className={cx('social-btn')}>
                            <Heart />
                        </div>
                        <p className={cx('social-quantity')}>{data.likes_count}</p>
                    </div>
                    <div className={cx('social-item')}>
                        <div className={cx('social-btn')}>
                            <Message />
                        </div>
                        <p className={cx('social-quantity')}>{data.comments_count}</p>
                    </div>
                    <div className={cx('social-item')}>
                        <div className={cx('social-btn')}>
                            <ShareIcon />
                        </div>
                        <p className={cx('social-quantity')}>{data.shares_count}</p>
                    </div>
                </div></Video>
                
            </div>
        </div>
    );
}

export default VideoWrapper;

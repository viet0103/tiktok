import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoWrapper.module.scss';
import Image from '../Images/Images';
import Button from '../Button';
import { Link } from 'react-router-dom';
import {
    CopyIcon,
    DownArrow,
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    Heart,
    LineIcon,
    LinkedlnIcon,
    Message,
    Music,
    PaperFlyIcon,
    PinterestIcon,
    RedditIcon,
    ShareIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../Icons';
import Video from './Video/Video';
import Tippy from '@tippyjs/react/headless';
import ArrowTippy from '@tippyjs/react';

const cx = classNames.bind(styles);

VideoWrapper.propTypes = {};

function VideoWrapper({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-info')}>
                <div>
                    <Tippy
                        delay={[500, 500]}
                        interactive
                        offset={[-10, -15]}
                        placement="bottom-start"
                        render={() => (
                           
                                <div className={cx('preview-wrapper')}>
                                    <div className={cx('preview-header')}>
                                        <Link to={`/@${data.user.nickname}`} state={{account: data.user}}>
                                            <Image src={data.user.avatar} />
                                        </Link>
                                        <Button className={cx('preview-btn')} outline>
                                            Follow
                                        </Button>
                                    </div>
                                    <div className={cx('preview-body')}>
                                        <Link to={`/@${data.user.nickname}`} state={{account: data.user}}>
                                            <div className={cx('preview-nickname')}>{data.user.nickname}</div>
                                            <p
                                                className={cx('preview-fullname')}
                                            >{`${data.user.first_name} ${data.user.last_name}`}
                                            </p>
                                        </Link>
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
                </div>

                <div className={cx('user-info-text')}>
                    <div className={cx('user-name')}>
                        <Link className={cx('user-nickname')}>{data.user.nickname}</Link>
                        <p className={cx('user-fullname')}>{`${data.user.first_name} ${data.user.last_name}`}</p>
                    </div>
                    <p className={cx('video-des')}>{data.description}</p>

                    <div className={cx('video-music')}>
                        <Music />
                        <Link className={cx('video-music-src')}>{data.music || 'unknow'}</Link>
                    </div>
                </div>
                <Button className={cx('btn')} outline>
                    Follow
                </Button>
            </div>
            <div className={cx('video')}>
                <Video src={data}></Video>
                <div className={cx('social-list')}>
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
                        <div>
                            <ArrowTippy
                                interactive
                                delay={[100, 250]}
                                offset={[-26, 0]}
                                placement="top-start"
                                onMount={() => {
                                    document.querySelector(`.${cx('share-list-wrapper')}`).style.maxHeight = '280px';
                                    document.querySelector(`.${cx('share-list-wrapper')}`).style.overflow = 'hidden';
                                    document.querySelector(`.${cx('share-list')}`).style.overflow = 'hidden';
                                    document.querySelector(`.${cx('show-share-btn')}`).style.display = 'flex';
                                }}
                                content={
                                    <div className={cx('share-list-wrapper')}>
                                        <div className={cx('share-list')}>
                                            <div className={cx('share-item')}>
                                                <EmbedIcon />
                                                <span className={cx('share-item-des')}>Embed</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <PaperFlyIcon />
                                                <span className={cx('share-item-des')}>Send to friends</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <FacebookIcon />
                                                <span className={cx('share-item-des')}>Share to Facebook</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <WhatsAppIcon />
                                                <span className={cx('share-item-des')}>Share to WhatsApp</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <CopyIcon />
                                                <span className={cx('share-item-des')}>Copy link</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <TwitterIcon />
                                                <span className={cx('share-item-des')}>Share to Twitter</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <LinkedlnIcon />
                                                <span className={cx('share-item-des')}>Share to Linkedln</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <RedditIcon />
                                                <span className={cx('share-item-des')}>Share to Reddit</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <TelegramIcon />
                                                <span className={cx('share-item-des')}>Share to Telegram</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <EmailIcon />
                                                <span className={cx('share-item-des')}>Share to Email</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <LineIcon />
                                                <span className={cx('share-item-des')}>Share to Line</span>
                                            </div>

                                            <div className={cx('share-item')}>
                                                <PinterestIcon />
                                                <span className={cx('share-item-des')}>Share to Pinterest</span>
                                            </div>
                                        </div>

                                        <div
                                            className={cx('show-share-btn')}
                                            onClick={() => {
                                                document.querySelector(`.${cx('share-list-wrapper')}`).style.maxHeight =
                                                    'none';
                                                document.querySelector(`.${cx('share-list-wrapper')}`).style.overflow =
                                                    'auto';
                                                document.querySelector(`.${cx('share-list')}`).style.overflow = 'auto';
                                                document.querySelector(`.${cx('show-share-btn')}`).style.display =
                                                    'none';
                                            }}
                                        >
                                            <div className={cx('icon')}>
                                                <DownArrow />
                                            </div>
                                        </div>
                                    </div>
                                }
                            >
                                <div className={cx('social-btn')}>
                                    <ShareIcon />
                                </div>
                            </ArrowTippy>
                        </div>
                        <p className={cx('social-quantity')}>{data.shares_count}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoWrapper;

import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowTippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '~/components/Button';
import {
    CopyIcon,
    DownArrow,
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    LineIcon,
    LinkedlnIcon,
    PaperFlyIcon,
    PinterestIcon,
    PlayIconOutline,
    RedditIcon,
    ShareIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '~/components/Icons';
import Image from '~/components/Images';
import * as userService from '~/services/userService';
import * as videoService from '~/services/videoService';
import styles from './Profile.module.scss';

Profile.propTypes = {};

const cx = classNames.bind(styles);

function Profile() {
    const { state } = useLocation();
    const [currentVideo, setCurrentVideo] = useState();
    const [personnal, setPersonnal] = useState({});
    const [videos, setVideo] = useState([]);

    const userVideoFetch = async () => {
        const res = await userService.getUser(`@${state.account.nickname}`);
        setVideo(res.videos);
    };

    const userLikedVideoFetch = async () => {
        const res = await videoService.getUserLikeVideo(state.account.id);
        setVideo(res);
    };

    const handleHoverVideo = (e) => {
        if (e.target) {
           e.target.childNodes[0].childNodes[0].currentTime = 0;
           e.target.childNodes[0].childNodes[0].play();
        }
    };

    const handleLeaveVideo = (e) => {
        if (e.target) {
            e.target.childNodes[0].childNodes[0].currentTime = 0;
            e.target.childNodes[0].childNodes[0].pause();
         }
    };

    const handleMouseEnterScroll = (e) => {
        const scrollBar = document.querySelector(`.${cx('scroll')}`);
        const scrollBarWrapper = document.querySelector(`.${cx('scroll-wrapper')}`);
        if (scrollBar && scrollBarWrapper) {
            const distance = e.target.getBoundingClientRect().x - scrollBarWrapper.getBoundingClientRect().x;

            scrollBar.style.left = `${distance}px`;
        }
    };

    const handleMouseLeaveScroll = (e) => {
        const scrollBar = document.querySelector(`.${cx('scroll')}`);
        const scrollBarWrapper = document.querySelector(`.${cx('scroll-wrapper')}`);
        if (scrollBar && scrollBarWrapper && currentVideo) {
            const distance = currentVideo.getBoundingClientRect().x - scrollBarWrapper.getBoundingClientRect().x;

            scrollBar.style.left = `${distance}px`;
        }
    };

    const handleClickSrcoll = (e) => {
        const scrollBar = document.querySelector(`.${cx('scroll')}`);
        const scrollBarWrapper = document.querySelector(`.${cx('scroll-wrapper')}`);
        if (scrollBar && scrollBarWrapper) {
            const distance = e.target.getBoundingClientRect().x - scrollBarWrapper.getBoundingClientRect().x;

            scrollBar.style.left = `${distance}px`;
        }
    };

    useEffect(() => {
        setCurrentVideo((prev) => document.querySelector(`.${cx('video-content-item')}`));
        const scrollBar = document.querySelector(`.${cx('scroll')}`);
        const scrollBarWrapper = document.querySelector(`.${cx('scroll-wrapper')}`);
        if (scrollBar && scrollBarWrapper) {
            const distance =
                document.querySelector(`.${cx('scroll-wrapper')}`).getBoundingClientRect().x -
                scrollBarWrapper.getBoundingClientRect().x;
            scrollBar.style.left = `${distance}px`;
        }
        const personalInfo = async () => {
            const res = await userService.getUser(`@${state.account.nickname}`);
            setPersonnal(res);
        };
        userVideoFetch();
        personalInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.account.id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('account-info')}>
                <div className={cx('account-avatar')}>
                    <Image src={personnal.avatar} className={cx('user-avatar')} />
                    <div className={cx('user-info-name')}>
                        <p className={cx('user-nickname')}>{personnal.nickname}</p>
                        <p className={cx('user-name')}>{`${personnal.first_name} ${personnal.last_name}`}</p>
                        <Button className={cx('btn-follow')} primary>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('more-btn')}>
                        <div>
                            <ArrowTippy
                                interactive
                                delay={[100, 250]}
                                offset={[24, 0]}
                                placement="bottom-end"
                                onMount={() => {
                                    if (document.querySelector(`.${cx('share-list-wrapper')}`)) {
                                        document.querySelector(`.${cx('share-list-wrapper')}`).style.maxHeight =
                                            '280px';
                                        document.querySelector(`.${cx('share-list-wrapper')}`).style.overflow =
                                            'hidden';
                                    }
                                    if (document.querySelector(`.${cx('list-share')}`)) {
                                        document.querySelector(`.${cx('list-share')}`).style.overflow = 'hidden';
                                    }

                                    if (document.querySelector(`.${cx('show-share-btn')}`)) {
                                        document.querySelector(`.${cx('show-share-btn')}`).style.display = 'flex';
                                    }
                                }}
                                content={
                                    <div className={cx('share-list-wrapper')}>
                                        <div className={cx('list-share')}>
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
                                                if (document.querySelector(`.${cx('share-list-wrapper')}`)) {
                                                    document.querySelector(
                                                        `.${cx('share-list-wrapper')}`,
                                                    ).style.maxHeight = 'none';
                                                    document.querySelector(
                                                        `.${cx('share-list-wrapper')}`,
                                                    ).style.overflow = 'auto';
                                                }
                                                if (document.querySelector(`.${cx('list-share')}`)) {
                                                    document.querySelector(`.${cx('list-share')}`).style.overflow =
                                                        'auto';
                                                }
                                                if (document.querySelector(`.${cx('show-share-btn')}`)) {
                                                    document.querySelector(`.${cx('show-share-btn')}`).style.display =
                                                        'none';
                                                }
                                            }}
                                        >
                                            <div className={cx('icon')}>
                                                <DownArrow />
                                            </div>
                                        </div>
                                    </div>
                                }
                            >
                                <div className={cx('more-btn-share-wrapper')}>
                                    <ShareIcon className={cx('more-btn-share')} />
                                </div>
                            </ArrowTippy>
                        </div>
                        <div className={cx('more-btn-ellipsis-wrapper')}>
                            <FontAwesomeIcon className={cx('more-btn-ellipsis')} icon={faEllipsis} />
                        </div>
                    </div>
                </div>
                <div className={cx('account-community-contact')}>
                    <p className={cx('user-num-contact')}>
                        {personnal.followings_count}
                        <span>Following</span>
                    </p>

                    <p className={cx('user-num-contact')}>
                        {personnal.followers_count}
                        <span>Followers</span>
                    </p>

                    <p className={cx('user-num-contact')}>
                        {personnal.likes_count}
                        <span>Likes</span>
                    </p>
                </div>
                <div className={cx('account-des')}>{personnal.bio}</div>
            </div>

            <div className={cx('account-video')}>
                <div className={cx('video-content-list-wrapper')}>
                    <div className={cx('video-content-list')}>
                        <div
                            className={cx('video-content-item')}
                            onClick={(e) => {
                                const index = [].slice.call(e.target.parentElement.children).indexOf(e.target);
                                setCurrentVideo((prev) => [].slice.call(e.target.parentElement.children)[index]);
                                handleClickSrcoll(e);
                                userVideoFetch();
                            }}
                            onMouseEnter={(e) => {
                                handleMouseEnterScroll(e);
                            }}
                            onMouseLeave={(e) => {
                                handleMouseLeaveScroll(e);
                            }}
                        >
                            Videos
                        </div>
                        <div
                            className={cx('video-content-item')}
                            onClick={(e) => {
                                const index = [].slice.call(e.target.parentElement.children).indexOf(e.target);
                                setCurrentVideo((prev) => [].slice.call(e.target.parentElement.children)[index]);

                                handleClickSrcoll(e);
                                userLikedVideoFetch();
                            }}
                            onMouseEnter={(e) => {
                                handleMouseEnterScroll(e);
                            }}
                            onMouseLeave={(e) => {
                                handleMouseLeaveScroll(e);
                            }}
                        >
                            Liked
                        </div>
                    </div>
                    <div className={cx('scroll-wrapper')}>
                        <span className={cx('scroll')}></span>
                    </div>
                </div>
                <div className={cx('video-list')}>
                    {videos ? (
                        videos.map((vd) => (
                            <div key={vd.id} className={cx('video-item-wrapper')} >
                                <div className={cx('video-wrapper')} onMouseEnter={(e) => handleHoverVideo(e)} onMouseLeave={(e) => handleLeaveVideo(e)}>
                                    <div className={cx('video-item')}>
                                        <video
                                            className={cx('video')}
                                            muted
                                            src={vd.file_url}
                                            loop
                                        ></video>
                                        <div className={cx('play-icon')}>
                                            <PlayIconOutline />
                                            <span>{vd.views_count}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className={cx('video-des')}>{vd.description}</p>
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;

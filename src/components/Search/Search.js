import { SearchIcon } from '~/components/Icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import HeadLessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as services from '~/services/searchService';


const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef();
    const [account, setAccount] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showMenu, setShowMenu] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue, 500);
    
    const handleClick = () => {
        setSearchValue('');
    };

    const handleClearClick = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    
    useEffect(() => {
        if (!debounce.trim()) {
            setAccount([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const result = await services.search(debounce);
            setAccount(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);

    return (
        <div>
            <HeadLessTippy
                onClickOutside={() => setShowMenu(false)}
                visible={account.length >0 && showMenu}
                render={(attr) => (
                    <div className={cx('search-result')}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {account.map((ac, index) => (
                                <AccountItem data={ac} onClick={handleClick} key={index} defaultHover />
                            ))}
                        </PopperWrapper>
                    </div>
                    
                )}
                interactive
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('input')}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => {
                            if (!e.target.value.startsWith(' ')) {
                                setSearchValue(e.target.value);
                            }
                        }}
                        onFocus={() => setShowMenu(true)}
                    />

                    {!!searchValue.trim() && !loading && (
                        <button className={cx('clear-btn')} onClick={handleClearClick}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadLessTippy>
        </div>
    );
}

export default Search;

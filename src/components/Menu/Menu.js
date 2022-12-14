import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Menu({ items, children }) {
    const [menu, setMenu] = useState([{ data: items }]);
    const render = (items) => {
        return items[items.length - 1].data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <span className={cx('menu-item-wrapper')} key={index}>
                    <MenuItem
                        
                        className={cx('menu-item', {
                            separate: item.separate,
                        })}
                        icon={item.icon}
                        name={item.name}
                        to={item.to}
                        onClick={() => {
                            if (isParent) setMenu((prev) => [...prev, item.children]);
                        }}
                    />
                </span>
            );
        });
    };
    const resetMenu = (attr) => {
        setMenu((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            arrow
            hideOnClick={false}
            delay={[100, 200]}
            onHide={resetMenu}
            placement="bottom-end"
            interactive={true}
            render={(attr) => (
                <PopperWrapper className={cx('menu-popper')}  >
                    
                        {menu.length > 1 && (
                            <header className={cx('header')}>
                                <button
                                    onClick={() => {
                                        setMenu((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                >
                                    <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft}></FontAwesomeIcon>
                                </button>
                                <div className={cx('menu-title')}>{menu[menu.length - 1].title}</div>
                            </header>
                        )}
                        <div className={cx('menu-item-body')}>
                        {render(menu)}
                        </div>
                   
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes ={
    items: PropTypes.array.isRequired,
    children: PropTypes.node
}

export default Menu;

import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from './Images.module.scss';
import images from "~/assets/images";

const cx = classNames.bind(styles);


function Image({className, src, alt, fallback: customFallback=images.noImage, ...props}) {
    
    const [fallback, setFallback] = useState('');
    const handleError = () => {
       setFallback(customFallback)
    }
    return <img className={cx('wrapper', className)} src={fallback || src} alt={alt}  {...props} onError={handleError}/>;
}

export default Image;

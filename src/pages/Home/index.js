import VideoWrapper from '~/components/VideoWrapper';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';


import * as services from '~/services/videoService'

function Home() {
    
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            
            const result = await services.video();
            setVideos(result)
        }
        fetchApi();
    },[])
    return (
        <div className={classNames('wrapper')} >
            {videos.map((video) => (
                <VideoWrapper key={video.id} data={video}/>
            ))}
        </div>
    );
}

export default Home;

import * as httpRequest from '~/utils/httpRequest';

export const video = async (type = 'for-you', page = 1) => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserLikeVideo = async (idVideo) => {
    try {
        const res = await httpRequest.get(`users/${idVideo}/liked-videos`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

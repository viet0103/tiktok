import httpRequest from "~/utils/httpRequest";

export const getUser = async (nickname) => {
    try {
        const res = await httpRequest.get(`users/${nickname}`);
        return res.data.data;

    } catch (error) {
        console.log(error);
    }
}
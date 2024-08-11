export const axios = {
    post: async (endpoint: string, data: any) => {
        return new Promise((resolve) => {
            console.log(endpoint);
            setTimeout(() => resolve(data), 1000)
        });
    }
};

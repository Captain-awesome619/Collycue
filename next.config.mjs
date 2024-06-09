/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['coilycue-api.onrender.com' , 'localhost' ,'ailab-result-rapidapi.oss-accelerate.aliyuncs.com']
    },
    env:{
        AILAB_API_KEY : process.env.AILAB_API_KEY
    }
};

export default nextConfig;

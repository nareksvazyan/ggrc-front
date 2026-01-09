const HOMEPAGE_RESOURCE = {
    getHomeIntro: {
        method: 'get',
        url: "/homeintro",
    },
    getHomePageAbout: {
        method: 'get',
        url: "/homepageabout",
    },
    getProcess: {
        method: 'get',
        url: "/step",
    },
    getReviews:{
        method:"get",
        url:'/review'
    }
   
}

export const {
    getHomeIntro,
    getHomePageAbout,
    getProcess,
    getReviews
} = HOMEPAGE_RESOURCE;
const SERVICESPAGE_RESOURCE = {
    getServices: {
      method: "get",
      url: "/services",
    },
    getServiceById: {
      method: "get",
      url: "/services/:id",
    },
    getServiceIntro: {
      method: "get",
      url: "/serviceinto",
    },
  };
  
  export const { getServices, getServiceById,getServiceIntro } = SERVICESPAGE_RESOURCE;
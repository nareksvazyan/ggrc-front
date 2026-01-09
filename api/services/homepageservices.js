import AXIOS_INSTANCE from "../axios";

export const  getHomeIntro = async (obj) => {
    
  try {
    const res = await AXIOS_INSTANCE.get(
      `/homeintro`,
       {params:obj}
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const  getHomePageAbout = async (obj) => {
    
  try {
    const res = await AXIOS_INSTANCE.get(
      `/homepageabout`,
       {params:obj}
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
};
export const  getProcess = async (obj) => {
    
  try {
    const res = await AXIOS_INSTANCE.get(
      `/steps`,
       {params:obj}
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
};
export const  getReviews = async (obj) => {
    
  try {
    const res = await AXIOS_INSTANCE.get(
      `/reviews`,
       {params:obj}
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
};
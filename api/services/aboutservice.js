import AXIOS_INSTANCE from "../axios";

export const getAboutInfo = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/about`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};
export const getValues = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/value`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const getChooseUs = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/chooseus`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const getNewTechnologies = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/technology`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const getNewChapterInfo = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(
      `/newchapter`,
      { params: obj }
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
};

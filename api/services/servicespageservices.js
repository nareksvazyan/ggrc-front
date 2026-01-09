import AXIOS_INSTANCE from "../axios";

export const getServices = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/services`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};
export const getServiceIntro = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/serviceinto`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const getServiceById = async (id, obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(
      `/services?filters[service_id][$eq]=${id}`,
      { params: obj }
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
};

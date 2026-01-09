import AXIOS_INSTANCE from "../axios";

export const getTeamList = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/teams`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

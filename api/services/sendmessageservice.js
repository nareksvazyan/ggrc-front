
import AXIOS_INSTANCE from "../axios";

export const sendMessage = async (obj) => {
  try {
    const response = await AXIOS_INSTANCE.post("/messages", obj);
    return response;
  } catch (error) {
    console.error(error);
  }
};

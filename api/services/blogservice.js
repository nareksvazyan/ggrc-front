import AXIOS_INSTANCE from "../axios";

export const getBlogs = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/blogs`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};
export const getBlogById = async (id, obj) => {
    try {
      const res = await AXIOS_INSTANCE.get(
        `/blogs?filters[blog_id][$eq]=${id}`,
        { params: obj }
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  };
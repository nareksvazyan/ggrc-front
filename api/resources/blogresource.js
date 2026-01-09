const BLOG_RESOURCE = {
  getBlogs: {
    method: "get",
    url: "/blogs",
  },
  getBlogById: {
    method: "get",
    url: "/blogs/:id",
  },
};
export const {
    getBlogs,
    getBlogById
    
  } = BLOG_RESOURCE;
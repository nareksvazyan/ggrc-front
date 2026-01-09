import { getBlogs } from "@/api/services/blogservice";
import Layout from "@/components/layout/Layout";
import { imagesUrl } from "@/public/utils/url";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Home() {
  const { t } = useTranslation("common");
  const [blogs, setBlogs] = useState();
  const router = useRouter();
  const currentLang = router.locale || "hy";
  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
  
    getBlogs(params).then((res) => {
      const allBlogs = res?.data || [];
  
      const priorityIds = ["blog_10", "blog_11", "blog_12"];
  
      const priorityBlogs = allBlogs.filter((blog) =>
        priorityIds.includes(blog?.blog_id)
      );
  
      const remainingBlogs = allBlogs.filter(
        (blog) => !priorityIds.includes(blog?.blog_id)
      );
  
      // Combine with priority blogs first
      const orderedBlogs = [...priorityBlogs, ...remainingBlogs];
  
      setBlogs(orderedBlogs);
    });
  }, [currentLang]);
  
  
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle={t("blog")}
        imageUrl="/assets/images/blog.jpg"
      >
        <div>
          {/* news-style-two */}
          <section className="news-section sec-pad bg-color-1">
            <div className="auto-container">
              <div className="sec-title mb_50 centred">
                <span className="sub-title upperCase">{t("blog")}</span>
              </div>
              <div className="row clearfix">
                {blogs?.map((blog) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 news-block"
                    key={blog?.blog_id}
                  >
                    <div
                      className="news-block-one wow fadeInUp animated"
                      data-wow-delay={blog.delay}
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <figure className="image-box">
                          <Link href={`/blog-details/${blog?.blog_id}`}>
                            <img
                              src={imagesUrl + blog?.image?.url}
                              alt={blog?.title}
                            />
                          </Link>
                        </figure>
                        <div className="lower-content" style={{height:"240px"}}>
                          <h3 style={{fontSize:'16px'}}>
                            <Link href={`/blog-details/${blog?.blog_id}`}>
                              {blog?.title}
                            </Link>
                          </h3>

                          <div className="link">
                            <Link href={`/blog-details/${blog?.blog_id}`}>
                              <span>{t("readMore")}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

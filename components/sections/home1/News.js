import React, { useEffect, useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { getBlogs } from "@/api/services/blogservice";
import { useRouter } from "next/router";
import { imagesUrl } from "@/public/utils/url";
export default function News() {
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

      // Filter blogs with specific IDs or slugs
      const fixedBlogs = allBlogs.filter((blog) =>
        ["blog_10", "blog_11", "blog_12"].includes(blog?.blog_id)
      );

      setBlogs(fixedBlogs);
    });
  }, [currentLang]);

  return (
    <section className="news-section sec-pad bg-color-1">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title upperCase">{t("blog")}</span>
        </div>
        <div className="row clearfix">
          {blogs?.slice(0, 3).map((blog, index) => (
            <div
              key={blog?.blog_id}
              className="col-lg-4 col-md-6 col-sm-12 news-block"
            >
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay={`${index * 300}ms`}
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
                    <h3 style={{fontSize:"18px"}}>
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
  );
}

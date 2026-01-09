import { getBlogById } from "@/api/services/blogservice";
import Layout from "@/components/layout/Layout";
import { imagesUrl } from "@/public/utils/url";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Home() {
  const { t } = useTranslation("common");
  const [blogInfo, setBlogInfo] = useState();
  const router = useRouter();

  const currentLang = router.locale || "hy";
  const blog_id = router?.query?.id;

  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getBlogById(blog_id, params).then((res) => setBlogInfo(res?.data[0]));
  }, [currentLang]);

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle={t("blogDetails")}
        imageUrl={imagesUrl + blogInfo?.image?.url}
      >
        {/* sidebar-page-container */}
        <section className="sidebar-page-container sec-pad-2">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                <div className="blog-details-content">
                  <div className="news-block-one">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="assets/images/news/news-11.jpg" alt="" />
                      </figure>
                      <div className="lower-content">
                        <h2 className="upperCase">{blogInfo?.title}</h2>
                        {
                          <div>
                            {blogInfo?.blog_info?.title && (
                              <h3> {blogInfo?.blog_info?.title}</h3>
                            )}
                            {blogInfo?.blog_info?.sections?.map(
                              (section, idx) => (
                                <div key={idx} style={{ marginBottom: "1rem" }}>
                                  <p>{section.paragraph}</p>
                                  {section?.list && (
                                    <ul>
                                      {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

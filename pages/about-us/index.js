import Layout from "@/components/layout/Layout";
import useTranslation from "next-translate/useTranslation";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import {
  getAboutInfo,
  getNewChapterInfo,
  getNewTechnologies,
  getValues,
} from "@/api/services/aboutservice";
import { imagesUrl } from "@/public/utils/url";

export default function Home() {
  const { t } = useTranslation("common");
  const [isOpen, setOpen] = useState(false);
  const [aboutInfo, setAboutInfo] = useState();
  const [values, setValues] = useState();
  const [technologies, setTechnologies] = useState();
  const [newChapterInfo, setNewChapterInfo] = useState();

  const router = useRouter();
  const currentLang = router.locale || "hy";
  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getAboutInfo(params).then((res) => setAboutInfo(res?.data));
    getValues(params).then((res) => setValues(res?.data?.values));
    getNewTechnologies(params).then((res) => setTechnologies(res.data));
    getNewChapterInfo(params).then((res) => setNewChapterInfo(res.data));
  }, [currentLang]);
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle={t("about")}
        imageUrl={imagesUrl + aboutInfo?.image?.url}
      >
        {/* About Section */}
        <section className="about-style-two pt_90 ">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box">
                    <div className="sec-title mb_15">
                      <span className="sub-title upperCase">{t("about")}</span>
                      <h2 className="upperCase">{aboutInfo?.title}</h2>
                    </div>

                    <div className="text-box mb_40">
                      <p>{aboutInfo?.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="mission-values-section pt_90 ">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="content-box">
                  <div className="sec-title mb_30 ">
                    <h2 className="upperCase">{t("ourValues")}</h2>
                  </div>
                  <ul className="list-style-one large-list">
                    {values?.map((item, index) => (
                      <li key={index}>
                        <strong>{item?.title}-</strong> {item?.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-12 pt_90">
                  <div className=" auto-container">
                    <img
                      src={imagesUrl + aboutInfo?.second_image?.url}
                      alt="GGRC"
                    />
                  </div>
                </div>
                {/* Innovative Technologies */}
                <section className="mission-values-section pt_90 ">
                  <div className="auto-container">
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="content-box">
                          <div className="sec-title mb_30">
                            <h2 className="upperCase">{technologies?.title}</h2>
                          </div>
                          <div className="text-box mb_30">
                            <p>{technologies?.text}</p>
                          </div>
                          <ul className="list-style-one large-list">
                            {technologies?.list?.map((item, index) => (
                              <li key={index}>
                                <strong>{item?.title}-</strong> {item?.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* YouTube Video Section */}
                <section className="video-section pt_90 pb_90">
  <div className="auto-container">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div
          className="video-box"
          style={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/Wu2lM_yjkzc?rel=0"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>


                {/* International Collaboration Section */}
                <section className="collaboration-section pt_90 mb_90  bg-color-1">
                  <div className="auto-container">
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="content-box">
                          <div className="sec-title mb_30">
                            <h2 className="upperCase">
                              {newChapterInfo?.title}
                            </h2>
                          </div>
                          <div className="text-box custom-bullets mb_90">
                            {newChapterInfo?.option?.map((item, index) => (
                              <p key={index}>
                                <strong>•</strong> {item?.text}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

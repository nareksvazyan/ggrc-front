import { getTeamList } from "@/api/services/teampageservices";
import Layout from "@/components/layout/Layout";
import { imagesUrl } from "@/public/utils/url";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const currentLang = router.locale || "hy";
  const [teamList, setTeamList] = useState([]);
  const { t } = useTranslation("common");

  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    
    };
    getTeamList(params).then((res) => setTeamList(res?.data || []));
  }, [currentLang]);

  return (
    <Layout
      headerStyle={2}
      footerStyle={1}
      breadcrumbTitle={t("team")}
      imageUrl="/assets/images/team.jpg"
    >
      <section className="team-section sec-pad-2 centred">
        <div className="auto-container">
          <div className="row clearfix">
            {teamList?.map((item, index) => {
             

              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-12 team-block"
                >
                  <div
                    className="team-block-one wow fadeInUp animated"
                    data-wow-delay={`${index * 200}ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img
                            src={imagesUrl+ item?.image?.url}
                            alt={item?.name}
                          />
                        </figure>
                      </div>
                      <div className="lower-content" style={{paddingTop:"20px"}}>
                        <h3>
                          <div >{item?.name}</div>
                        </h3>
                        <span className="designation">{item?.possition}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

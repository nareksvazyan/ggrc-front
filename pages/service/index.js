import Layout from "@/components/layout/Layout";
import { getServices,getServiceIntro } from "@/api/services/servicespageservices";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { imagesUrl } from "@/public/utils/url";

const Home = () => {
  const { t } = useTranslation("common");
  const [servicesList, setServicesList] = useState();
  const [serviceIntro, setServiceIntro] = useState();
  const router = useRouter();
  const currentLang = router.locale || "hy";
  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getServiceIntro(params).then((res)=>setServiceIntro(res?.data))
    getServices(params).then((res) => setServicesList(res?.data));
  }, [currentLang]);

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle={t("services")} imageUrl={imagesUrl + serviceIntro?.image?.url}>
      <section className="service-section sec-pad-2">
        <div className="auto-container">
          <div className="row clearfix">
            {servicesList?.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 service-block"
                key={index}
              >
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay={`${index * 100}ms`}
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href={`/service-details-${service?.service_id}`}>
                          <img
                            src={imagesUrl + service?.image?.url}
                            alt={service?.name}
                          />
                        </Link>
                      </figure>
                      {/* <div className="icon-box">
                        <i className={service.icon}></i>
                      </div> */}
                    </div>
                    <div
                      className="lower-content"
                      style={{
                        height: "150px",
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        textTransform: "capitalize",
                      }}
                    >
                      <h3 style={{ fontSize: "22px" }} className="upperCase">
                        <Link href={`/service-details-${service?.service_id}`}>
                          {service?.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;

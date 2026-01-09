import { getServiceById } from "@/api/services/servicespageservices";
import Layout from "@/components/layout/Layout";
import { imagesUrl } from "@/public/utils/url";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
const ServiceDetails = () => {
  const { t } = useTranslation("common");
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  const [serviceDetails, setSeviceDetails] = useState();
  const router = useRouter();

  const currentLang = router.locale || "hy";
  const service_id =
    router?.query["service-details-id"]?.split("service-details-")[1];

  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getServiceById(service_id, params).then((res) =>
      setSeviceDetails(res?.data[0])
    );
  }, [currentLang]);
  
  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const img = imagesUrl + serviceDetails?.banner?.url;

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle={t("serviceDetails")}
        imageUrl={img}
      >
        <div>
          {/* service-section */}
          <section className="service-details pt_120 pb_110">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="sidebar-side w-100">
                  <div className="default-sidebar service-sidebar mr_15"></div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <div className="content-one mb_60">
                      {/* <figure className="image-box mb_40">
                        <img
                          src={imagesUrl + serviceDetails?.banner?.url}
                          alt=""
                        />
                      </figure> */}
                  
                      <div className="text-box">
                        <h2>{serviceDetails?.name}</h2>
                        <p>{serviceDetails?.text}</p>
                        {serviceDetails?.detail?.length > 0 && (
                          <ul className="list-style-one large-list mt_20">
                            {serviceDetails?.detail?.map((item, index) => (
                              <li key={index}>
                                <strong>{item?.text}</strong>{" "}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      { serviceDetails?.section2 && (
                        <div className="text-box">
                          <h2>
                            {serviceDetails?.section2?.title}
                          </h2>
                          <p>{serviceDetails?.section2?.description}</p>
                          {serviceDetails?.section2?.procedure?.process?.length > 0 && (
                            <ul className="list-style-one large-list mt_20">
                              {serviceDetails?.section2?.procedure?.process?.map((item, index) => (
                                <li key={index}>
                                  <strong>{item}</strong>{" "}
                                </li>
                              ))}
                            </ul>
                          )}
                          <p>{serviceDetails?.section2?.secondDescription}</p>
                          <p>{serviceDetails?.section2?.outcome}</p>
                          {serviceDetails?.section2?.indications?.length > 0 && (
                            <ul className="list-style-one large-list mt_20">
                              {serviceDetails?.section2?.indications?.map((item, index) => (
                                <li key={index}>
                                  <strong>{item}</strong>{" "}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                           { serviceDetails?.section3 && (
                        <div className="text-box">
                          <h2>
                            {serviceDetails?.section3?.title}
                          </h2>
                          <p>{serviceDetails?.section3?.description}</p>
                          {serviceDetails?.section3?.procedure?.process?.length > 0 && (
                            <ul className="list-style-one large-list mt_20">
                              {serviceDetails?.section3?.procedure?.process?.map((item, index) => (
                                <li key={index}>
                                  <strong>{item}</strong>{" "}
                                </li>
                              ))}
                            </ul>
                          )}
                          <p>{serviceDetails?.section3?.secondDescription}</p>
                          <p>{serviceDetails?.section3?.outcome}</p>
                          {serviceDetails?.section3?.indications?.length > 0 && (
                            <ul className="list-style-one large-list mt_20">
                              {serviceDetails?.section3?.indications?.map((item, index) => (
                                <li key={index}>
                                  <strong>{item}</strong>{" "}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                 {  serviceDetails?.middletext &&   <div className="text-box">
                        {serviceDetails?.middletext && (
                          <p>{serviceDetails?.middletext}</p>
                        )}
                        {serviceDetails?.secondDetails?.length > 0 && (
                          <ul className="list-style-one large-list mt_20">
                            {serviceDetails?.secondDetails?.map(
                              (item, index) => (
                                <li key={index}>
                                  <strong>{item?.text}</strong>{" "}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                      {serviceDetails?.serviceoption?.length > 0 && (
                        <div className="service-option mt_40">
                          {serviceDetails?.serviceoption?.map(
                            (option, index) => (
                              <div className="mb_30" key={index}>
                                <h4 className="fw-bold mb_10">
                                  {option?.title}
                                </h4>
                                <p>{option?.text}</p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                      {serviceDetails?.footerText && (
                        <div className="text-box">
                          <p>{serviceDetails?.footerText}</p>
                        </div>
                      )}
                    </div>

                    {/* <div className="content-two">
                      <div className="image-inner">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image-box mb_30">
                              <img
                                src="assets/images/service/service-8.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image-box mb_30">
                              <img
                                src="assets/images/service/service-9.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="text-box">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium dolor mque lauda totam rem
                          aperiam, eaque ipsa quae ab illo inventore veritatis
                          et quasi architecto beatae vite sunt explicabo. Nemo
                          ipsam voluptatem quia voluptas sit aspernatur.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullam nmco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehender it in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ServiceDetails;

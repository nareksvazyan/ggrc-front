import { useState } from "react";
import { sendMessage } from "@/api/services/sendmessageservice";
import Layout from "@/components/layout/Layout";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("common");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    subject: "",
    text: "",
  });

  const onChangeHandler = (evt) => {
    const inp = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [inp.name]: inp.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await sendMessage(formData);
      setSuccessMessage(t("messageSent"));

      // Reset form
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        subject: "",
        text: "",
      });

      // Remove success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
    } catch (err) {
      console.error("Failed to send message", err);
      setErrorMessage(t("messageFailed"));

      // Remove error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    }
  };

  return (
    <Layout
      headerStyle={2}
      footerStyle={1}
      breadcrumbTitle={t("contactUs")}
      imageUrl="/assets/images/contactus.jpg"
    >
      <section className="contact-info-section pt_120">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div className="info-block-one">
                <h3>{t("contactUs")}</h3>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-2"></i>
                  </div>
                  <p>
                    <Link href="tel:00374 95520055">(+374) 95520055</Link><br/>
                    <Link href="tel:00374 60530055">(+374) 60530055</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div className="info-block-one">
                <h3>{t("email")}</h3>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-26"></i>
                  </div>
                  <p>
                    <Link href="mailto:ggrcarmenia@gmail.com">
                      ggrcarmenia@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div className="info-block-one">
                <h3>{t("address")}</h3>
                <div className="inner-box">
                  <div className="icon-box">
                    <img
                      src="/assets/images/icons/icon-1.png"
                      alt="GGRC Armenia"
                    />
                  </div>
                  <p>{t("location")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section2 */}
      <section className="contact-style-three pt_90 pb_120">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 form-column">
              <div className="form-inner mr_40">
                <div className="sec-title mb_50">
                  <h2 className="upperCase">{t("sendMes")}</h2>
                </div>
                <form onSubmit={onSubmitHandler} className="default-form">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onChangeHandler}
                        placeholder={t("firstName")}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={onChangeHandler}
                        placeholder={t("lastName")}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onChangeHandler}
                        placeholder={t("email")}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={onChangeHandler}
                        placeholder={t("phone")}
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={onChangeHandler}
                        placeholder={t("subject")}
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea
                        name="text"
                        value={formData.text}
                        onChange={onChangeHandler}
                        placeholder={t("message")}
                        required
                      ></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      {errorMessage && (
                        <div className="error-text">{errorMessage}</div>
                      )}
                      {successMessage && (
                        <div className="success-text">{successMessage}</div>
                      )}
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button className="theme-btn btn-one" type="submit">
                        <span>{t("send")}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

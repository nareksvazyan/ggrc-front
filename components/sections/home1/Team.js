import React, { useEffect, useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { getTeamList } from "@/api/services/teampageservices";
import { useRouter } from "next/router";
import { imagesUrl } from "@/public/utils/url";

export default function Team() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLang = router.locale || "hy";
  const [teamList, setTeamList] = useState([]);
  const priorityNames = {
    hy: [
      "Նինո",
      "Լիլիթ Գառնիկի Կարապետյան",
      "Լևոն Վարդազարյան",
      "Սվետլանա Գեննադիի Վասիլևա",
    ],
    en: [
      "Նինո", // Seems intentional that this stays Armenian in English
      "Lilit Karapetyan",
      "Levon Vardazaryan",
      "Svetlana Vasileva",
    ],
    ru: ["Նինո", "Лилит Карапетян", "Левон Вардазарян", "Светлана Васильева"],
  };

  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getTeamList(params).then((res) => setTeamList(res?.data || []));
  }, [currentLang]);

  const sortedTeamList = [
    ...priorityNames[currentLang]
      .map((name) =>
        teamList.find((member) => member.attributes?.name === name)
      )
      .filter(Boolean),
    ...teamList.filter(
      (member) => !priorityNames[currentLang].includes(member.attributes?.name)
    ),
  ].slice(0, 4);

  return (
    <section className="team-section sec-pad centred">
      <div className="pattern-layer">
        {/* <div
          className="pattern-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}
        ></div> */}
      </div>
      <div className="shape">
        <div className="shape-2"></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title upperCase">{t("ourTeam")}</span>
          <h2 style={{ width: "70%", margin: "0 auto", fontSize: "18px" }}>
            {t("teamHeader")}
          </h2>
        </div>
        <div className="row clearfix">
          {sortedTeamList?.slice(0, 4)?.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 team-block">
              <div
                className="team-block-one wow fadeInUp animated"
                data-wow-delay={`${index * 200}ms`}
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src={imagesUrl + member?.image?.url}
                        alt={`${member.name}'s photo`}
                      />
                    </figure>
                  </div>
                  <div className="lower-content" style={{ paddingTop: "20px" }}>
                    <h3>
                      <div href="team-details">{member.name}</div>
                    </h3>
                    <span className="designation">{member.possition}</span>
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

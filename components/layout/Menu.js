import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Menu = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <ul className="navigation clearfix ">
        <li className="upperCase">
          <Link href="/about-us">{t("about")}</Link>
        </li>
        <li className="dropdown upperCase" >
          <Link href="/service">{t("services")}</Link>
        </li>
        <li className="dropdown upperCase" >
          <Link href="/team">{t("team")}</Link>
        </li>
        {/* Pages */}
        <li className="dropdown upperCase" >
          <Link href="/blog">{t("blog")}</Link>
        </li>
        {/* Contact */}
        <li className="upperCase" >
          <Link href="/contact">{t("contact")}</Link>
        </li>
      </ul>
    </>
  );
};
export default Menu;

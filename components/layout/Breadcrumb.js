import useTranslation from "next-translate/useTranslation"
import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle,imageUrl }) {

    const{t}= useTranslation("common")
    return (
        <>

            <section className="page-title p_relative centred ">
                <div className="bg-layer"  style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(/assets/images/shape/shape-14.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(/assets/images/shape/shape-14.png)' }}></div>
                    <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url/assets/images/shape/shape-15.png)' }}></div>
                    <div className="pattern-4 float-bob-y" style={{ backgroundImage: 'url(/assets/images/shape/shape-16.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="content-box upperCase">
                        <h1>{breadcrumbTitle}</h1>
                        <ul className="bread-crumb clearfix upperCase" >
                            <li style={{color:"#fff"}}><Link href="/">{t('home')}</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>


        </>
    )
}

import { useTranslation } from "react-i18next";

const Guide = () => {
    const {t} = useTranslation();
    return (
        <div className="bg-[#08003A] text-white box-border md:px-24 px-5 py-16">
            <h2 className="text-center text-4xl py-5">{t("guide_title")}</h2>
            <p>{t("guide_des")}</p>
            <ol className="list-decimal md:w-11/12 mx-auto my-5">
                <li>{t("guide_li1")}</li>
                <li>{t("guide_li2")}
                </li>
                <li>
                {t("guide_li3")}
                </li>
            </ol>
        </div>
    );
};

export default Guide;
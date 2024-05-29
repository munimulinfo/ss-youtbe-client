import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  const {t} = useTranslation();
  return (
    <div className="max-w-7xl mx-auto py-24">
      <div className="lg:w-4/5 mx-auto">
        <h2 className="lg:text-5xl py-5 text-center">{t("banner-title")}</h2>
      </div>
      <div className="flex gap-2 lg:w-1/2 mx-auto md:flex-row bg-white p-2 rounded-md">
        <input
          type="text"
          className="grow focus:outline-none text-black"
          placeholder={t("banner-input-placeholder")}
        />
        <button className="btn bg-[#DC3545] text-white w-40px ">
         <span className="hidden md:inline-flex">{t("download-btn")} </span> <FaArrowRight className="md:text-lg" />
        </button>
      </div>
      
      <p className="text-center mt-4">{t("scan_title")}</p>
    </div>
  );
};

export default Banner;

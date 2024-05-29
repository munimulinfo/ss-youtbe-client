import { useTranslation } from "react-i18next";

const SupportSection = () => {
  const {t} = useTranslation();
  return (
    <div className="max-w-7xl mx-auto my-10 px-5 md:px-24">
      <p>{t("support_des")}
      </p>
      <h2 className="text-center font-medium my-7 text-2xl">{t("support_title")}</h2>
      <div className="grid md:grid-cols-4 gap-5 px-24">
        <div>
          <img
            className="w-[150px]"
            src="https://ssyoutube.com/img/platforms/windows.svg"
          ></img>
        </div>
        <div>
          <img
            className="w-[150px]"
            src="https://ssyoutube.com/img/platforms/apple.svg"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-[150px]"
            src="https://ssyoutube.com/img/platforms/android.svg"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-[150px]"
            src="https://ssyoutube.com/img/platforms/linux.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SupportSection;

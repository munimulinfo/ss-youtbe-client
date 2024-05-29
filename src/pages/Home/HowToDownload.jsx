import { useTranslation } from "react-i18next";

const HowToDownload = () => {
  const {t} = useTranslation()
  return (
    <div>
      <h2 className="text-4xl text-center my-10">
      {t("download_guide")}
      </h2>
      <div className="grid lg:grid-cols-3 gap-5 mb-10">
        <div className="text-center">
          <h3 className="text-2xl my-12 w-96"> {t("copy")}</h3>
          <img
            src="https://ssyoutube.com/img/steps/how_can_i_save_1.svg"
            alt=""
          />
          <p className="text-xl opacity-70 p-1">
          {t("copy_p")}
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl my-12 w-96">{t("paste")}</h3>
          <img
            src="https://ssyoutube.com/img/steps/how_can_i_save_2.svg"
            alt=""
          />
          <p className="text-xl opacity-70 p-1">
          {t("paste_p")}
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl my-12 w-96">{t("download")}</h3>
          <img
            src="https://ssyoutube.com/img/steps/how_can_i_save_3.svg"
            alt=""
          />
          <p className="text-xl opacity-70 p-1">
          {t("download_p")}
          </p>
        </div>
      </div>
      <h2 className="text-center text-4xl my-7">
        {t("download_title1")}
      </h2>
      <p className="opacity-70">
      {t("download_des")}
      </p>
      <h2 className="text-center text-4xl my-7">
      {t("download_title2")}
      </h2>
      <p className="opacity-70 mb-12"> {t("download_des2")}
      </p>
      {/* legal advisor */}
      <h2 className="text-center text-sm my-7 opacity-70">{t("Legal_Advisory")}</h2>
      <p className="opacity-70 mb-7 text-sm leading-loose">{t("legal_des1")}
        <br></br>{t("legal_des2")}
      </p>
      {/*  */}

      <h2 className="text-center text-sm my-7 opacity-70">{t("disclaimer")}</h2>
      <p className="opacity-70 mb-7 text-sm leading-loose">{t("disclaimer_des")}
      </p>
    </div>
  );
};

export default HowToDownload;

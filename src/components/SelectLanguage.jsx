import { useTranslation } from "react-i18next";

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", lang: "English" },
    { code: "spa", lang: "Spanish" },
    { code: "por", lang: "Portugal" },
    { code: "rus", lang: "Russian" },
    { code: "ind", lang: "Indonesian" },
    { code: "tur", lang: "Turkish" },
    { code: "ger", lang: "German" },
    { code: "ko", lang: "Korean" },
    { code: "hi", lang: "Hindi" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(lng)
  };

  return (
    <div>
      <select
      defaultValue={"en"}
        onChange={(e) => changeLanguage(e.target.value)}
        className="select select-info w-auto bg-[#08003A] border-none text-sm py-1 px-2"
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectLanguage;

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState({ code: "en", lang: "English" });
  console.log(language);
  const [showSelect, setShowSelect] = useState(false);
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

  useEffect(() => {
    i18n.changeLanguage(language.code);
  }, [language]);

  const handleChange = (lng) => {
    setLanguage({ code: lng?.code, lang: lng?.lang });
  };

  return (
    <div className="relative">
      <input
        value={language?.lang}
        type="text"
        readOnly
        onClick={() => setShowSelect(!showSelect)}
        className="w-auto bg-[#08003A] border-none text-sm py-1 px-2"
      />
      {showSelect && (
        <div className="absolute top-10 left-0 z-50 bg-white shadow-lg px-10  py-4 flex flex-col gap-1 ">
          {languages?.map((lng, index) => (
            <h1
              key={index}
              className="cursor-pointer text-black"
              onClick={() => handleChange(lng)}
            >
              {lng.lang}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectLanguage;

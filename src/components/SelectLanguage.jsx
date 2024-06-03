import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState({ code: "en", lang: "English" });
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
    setShowSelect(false)
  };

  return (
    <div className="relative text-white ">
      <p onClick={() => setShowSelect(!showSelect)} className="flex items-center">
        <input
          value={language?.lang}
          type="text"
          readOnly
          className="bg-[#08003A] border-none text-sm  w-20 focus:outline-none"
        />
        {showSelect?<BiSolidUpArrow className="-ml-4"/>:<BiSolidDownArrow className="-ml-7" />}
      </p>
      {showSelect && (
        <div className="absolute w-fit top-10 left-0 z-50 bg-white dropdown-menu py-4 flex flex-col gap-1 ">
          {languages?.map((lng, index) => (
            <h1
              key={index}
              className="cursor-pointer dropdown-item hover:bg-[#08003a] hover:text-white"
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

import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import SelectLanguage from "../../components/SelectLanguage";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar text-white max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="flex justify-center items-center gap-2 ">
          <FaYoutube className="text-[#FF206E] text-xl" />
          <p className="text-lg">{t("channel")}</p>
        </div>
      </div>
      <div className="navbar-end">
        <SelectLanguage />
        {/* <button className="flex justify-center items-center gap-1">
          Language <FaChevronDown className="" />
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;

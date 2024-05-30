import { useTranslation } from "react-i18next";
import { FaArrowRight, FaDownload, FaYoutube } from "react-icons/fa6";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl mx-auto py-24">
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
          <span className="hidden md:inline-flex">{t("download-btn")} </span>{" "}
          <FaArrowRight className="md:text-lg" />
        </button>
      </div>
      {/* after result download option start here */}
      <div className="text-center">
        <h2 className="text-xl font-bold my-4">Download video as:</h2>
        <div className="flex justify-center items-center gap-10 md:flex-row flex-col">
          <div>
            <img className="w-64 mb-3" src="https://www.shutterstock.com/shutterstock/photos/761313844/display_1500/stock-photo--d-illustration-of-musical-notes-and-musical-signs-of-abstract-music-sheet-songs-and-melody-concept-761313844.jpg" alt="video img" />
            <h3 className="text-left mb-3">পৃথিবীতে কেউ স্থায়ী ...</h3>
            <p className="text-xl">Durations:</p>
          </div>
          <div className="md:w-[500px]">
            <h2 className="text-[#DC3545] flex justify-center items-center text-2xl gap-2 font-bold border border-[#1600A9] p-2 border-b-0">
              <FaYoutube />
              Video
            </h2>
            <div className="flex justify-between items-center border border-[#1600A9]  p-3 border-t-2 border-b-[#393361]">
              <p className="font-bold">720.mp4</p>
              <button className="flex items-center gap-1 btn text-[#DC3545] p-2 w-36 btn-ghost bg-white text-center">
                <FaDownload />
                Download
              </button>
            </div>
            <div className="flex justify-between items-center border border-[#1600A9]  p-3 border-b-[#393361] border-t-[#393361]">
              <p className="font-bold">360.mp4</p>
              <button className="flex items-center gap-1 btn text-[#DC3545] p-2 w-36 btn-ghost bg-white text-center">
                <FaDownload />
                Download
              </button>
            </div>
            <div className="flex justify-between items-center border border-[#1600A9]  p-3 border-b-[#393361] border-t-[#393361]">
              <p className="font-bold">1080.mp4</p>
              <button className="flex items-center gap-1 btn text-[#DC3545] p-2 w-36 btn-ghost bg-white text-center">
                <FaDownload />
                Download
              </button>
            </div>
            <div className="flex justify-between items-center border border-[#1600A9]  p-3 border-t-[#393361] border-b-[#393361]">
              <p className="font-bold">720.mp4</p>
              <button className="flex items-center gap-1 btn text-[#DC3545] p-2 w-36 btn-ghost bg-white text-center">
                <FaDownload />
                Download
              </button>
            </div>
            <div className="border border-[#1600A9] p-3 border-t-[#393361] ">
              <button className="text-[#fff] p-2 w-36 text-center">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* after result download option ends here */}
      <p className="text-center mt-4">{t("scan_title")}</p>
    </div>
  );
};

export default Banner;

import { useTranslation } from "react-i18next";
import { FaArrowRight, FaDownload, FaYoutube } from "react-icons/fa6";
import { useGetVedioInfoMutation } from "../../redux/baseApi";
import { useState } from "react";
const getYouTubeVideoID = (url) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
};
const Banner = () => {
  const { t } = useTranslation();
  const [videoInfo, setVideoInfo] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const [getVedioInfo] = useGetVedioInfoMutation();
  const getYoutubeVideoInfo = async () => {
    try {
      const res = await getVedioInfo({ link: videoLink });
      if (res) {
        setVideoInfo(res?.data?.videoInfo);
        console.log(res?.data?.videoInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const video_download = (resu) => {
    const videoId = getYouTubeVideoID(videoLink);
    if (videoId) {
      const url = `http://localhost:5000/video-download?id=${videoId}&resu=${String(
        resu
      )}`;
      window.open(url, "_blank");
    } else {
      alert("Invalid YouTube URL");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-24">
      <div className="lg:w-4/5 mx-auto">
        <h2 className="lg:text-5xl py-5 text-center">{t("banner-title")}</h2>
      </div>
      <div className="flex gap-2 lg:w-1/2 mx-auto md:flex-row bg-white p-2 rounded-md">
        <input
          type="url"
          className="grow focus:outline-none text-black"
          placeholder={t("banner-input-placeholder")}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <button
          onClick={getYoutubeVideoInfo}
          className="btn bg-[#DC3545] text-white w-40px "
        >
          <span className="hidden md:inline-flex">{t("download-btn")} </span>{" "}
          <FaArrowRight className="md:text-lg" />
        </button>
      </div>
      {/* after result download option start here */}
      <div className="text-center">
        <h2 className="text-xl font-bold my-4">Download video as:</h2>
        <div className="flex justify-center items-center gap-10 md:flex-row flex-col">
          <div>
            <img
              className="w-64 mb-3"
              src={videoInfo?.thumbnailUrl}
              alt="video img"
            />
            <h3 className="text-left mb-3">{videoInfo?.title}</h3>
            <p className="text-xl">19:00</p>
          </div>
          <div className="md:w-[500px]">
            <h2 className="text-[#DC3545] flex justify-center items-center text-2xl gap-2 font-bold border border-[#1600A9] p-2 border-b-0">
              <FaYoutube />
              Video
            </h2>
            {videoInfo?.videoResu?.length > 0 && (
              <div>
                {videoInfo?.videoResu?.map((resu, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border border-[#1600A9]  p-3 border-t-2 border-b-[#393361]"
                  >
                    <p className="font-bold">{resu}.mp4</p>
                    <button
                      onClick={() => video_download(resu)}
                      className="flex items-center gap-1 btn text-[#DC3545] p-2 w-36 btn-ghost bg-white text-center"
                    >
                      <p>
                        <FaDownload />
                        Download
                      </p>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* after result download option ends here */}
      <p className="text-center mt-4">{t("scan_title")}</p>
    </div>
  );
};

export default Banner;

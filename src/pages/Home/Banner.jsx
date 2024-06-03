import { useTranslation } from "react-i18next";
import { FaArrowRight, FaDownload, FaYoutube } from "react-icons/fa6";
import { useGetVedioInfoMutation } from "../../redux/baseApi";
import { useState } from "react";
import VideoDuration from "../../components/VideoDuration";
import toast from "react-hot-toast";

const getYouTubeVideoID = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return (url.match(regex) || [])[1] || null;
};

const Banner = () => {
  const { t } = useTranslation();
  const [videoInfo, setVideoInfo] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [getVedioInfo] = useGetVedioInfoMutation();

  const getYoutubeVideoInfo = async () => {
    if (!videoLink.trim()) {
      toast.error("Please input a video link");
      return;
    }

    const videoId = getYouTubeVideoID(videoLink);
    if (!videoId) {
      toast.error("Invalid YouTube URL");
      return;
    }
    try {
      setLoading(true);
      const res = await getVedioInfo({ link: videoLink });
      if (res.error) {
        toast.error(res.error.data.error || "Invalid YouTube URL or other error");
        return;
      }
      setVideoInfo(res?.data?.videoInfo);
   
    } catch {
      toast.error("An error occurred while fetching video info");
    } finally {
      setLoading(false);
    }
  };

  const videoDownload = (resu) => {
    const videoId = getYouTubeVideoID(videoLink);
    if (!videoId) {
      toast.error("Invalid YouTube URL");
      return;
    }

    setLoading(true);
    try {
      window.open(`http://localhost:5000/video-download?id=${videoId}&resu=${resu}`, "_blank");
    } catch {
      toast.error("An error occurred while downloading the video");
    } finally {
      setLoading(false);
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
          required
          className="grow focus:outline-none text-black"
          placeholder={t("banner-input-placeholder")}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <button
          onClick={getYoutubeVideoInfo}
          className="btn bg-[#DC3545] text-white w-40px"
        >
          {loading ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            <>
              <span className="hidden md:inline-flex">{t("download-btn")}</span> 
              <FaArrowRight className="md:text-lg" />
            </>
          )}
        </button>
      </div>  
      {loading && (
        <div className="flex justify-center mt-5">
          <span className="loading loading-dots loading-lg"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
      {videoInfo && !loading && (
        <div className="text-center">
          <h2 className="text-xl font-bold my-4">Download video as:</h2>
          <div className="flex justify-center items-center gap-10 md:flex-row flex-col">
            <div className="w-60">
              <img className="w-60 mb-3" src={videoInfo.thumbnailUrl} alt="video img" />
              <h3 className="text-left mb-3">{videoInfo.title}</h3>
              <VideoDuration videoInfo={videoInfo} />
            </div>
            <div className="md:w-[500px]">
              <h2 className="text-[#DC3545] flex justify-center items-center text-2xl gap-2 font-bold border border-[#1600A9] p-2 border-b-0">
                <FaYoutube /> Video
              </h2>
              {videoInfo.videoResu.length > 0 && (
                <div>
                  {showMore ? (
                    videoInfo.videoResu.map((resu, index) => (
                      <div key={index} className="flex justify-between items-center border border-[#1600A9] p-3">
                        <p className="font-bold">{resu}.mp4</p>
                        <button onClick={() => videoDownload(resu)} className="btn text-[#DC3545] p-2 w-36 btn-ghost bg-white text-center">
                          <p className="flex items-center gap-1"><FaDownload /> Download</p>
                        </button>
                      </div>
                    ))
                  ) : (
                    videoInfo.videoResu.slice(0, 4).map((resu, index) => (
                      <div key={index} className="flex justify-between items-center border border-[#1600A9] p-3">
                        <p className="font-bold">{resu}.mp4</p>
                        <button onClick={() => videoDownload(resu)} className="btn text-[#DC3545] p-2 w-36 btn-ghost bg-white text-center">
                          <p className="flex items-center gap-1"><FaDownload /> Download</p>
                        </button>
                      </div>
                    ))
                  )}
                   <div  className="flex justify-center items-center  border border-[#1600A9] p-3">
                   <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                      </div>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;

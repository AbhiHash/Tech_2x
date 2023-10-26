import VideoPlayer from "components/videoplayer";
import { useRouter } from "next/router";
import { topics } from "../../../data/topic";
import { videos } from "../../../data/video";
import { useEffect, useRef, useState } from "react";
import CommentCard from "components/comment";
import { Button, Icon } from "@tremor/react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { CourseSidebar } from "components/sideNav";

export default function VideoCoursePage() {
  const initialData = {
    controls: true,
    width: 1300,
    sources: [
      {
        src: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8",
        type: "application/x-mpegURL",
      },
    ],
    autoplay: false,
  };
  const router = useRouter();
  const [dbVideos, setVideosData] = useState([]);
  const { slug } = router.query;
  const [videoData, setVideoData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [vidOptions, setOptions] = useState(initialData);
  const inputCommentRef = useRef(null);

  useEffect(() => {
    if (slug) {
      const allTopics = topics.filter((data) => data._id === slug);
      const allVideos: any = allTopics[0].videosTopics.map((video_id) => {
        return videos.filter((data) => data._id === video_id)[0];
      });
      setVideosData(allVideos);
    }
  }, [slug, commentData]);

  const onVideoPlayerReady = (player: any) => {
    console.log("Video player is ready:", player);
  };


  const postComment = () => {
    const value = inputCommentRef.current?.value || "";
    const comment = {
      _id: "v133",
      user_id: "@hello",
      comment: value,
      imageUrl: "",
      replies: [],
    };

    const newComments = [comment];
    setCommentData(newComments);
    inputCommentRef.current.value = "";

    // setCommentData(newComments);
  };

  function openVideo(item: any) {
    setVideoData(item);
    const VIDEOJS_OPTIONS = {
      controls: true,
      width: 1200,
      sources: [
        {
          src: item.Video_link,
          type: "application/x-mpegURL",
        },
      ],
      autoplay: false,
    };
    setCommentData(videoData.comments);

    setOptions(VIDEOJS_OPTIONS);
  }

  return (
    <div className="flex h-screen w-full">
      {/* side bar section  */}
      <CourseSidebar dbVideos={dbVideos} openVideo={openVideo} />

      {/* Video section  */}

      <div className="w-3/4 ml-1/4 p-4 absolute right-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{`${
            videoData ? videoData.VideoKey : "Introduction"
          }`}</h1>

          <div className="w-full aspect-w-18 aspect-h-9">
            <VideoPlayer options={vidOptions} onReady={onVideoPlayerReady} />
          </div>
        </div>

        {/* Comment section  */}

        <div className="mt-6">
          <input
            type="text"
            className="w-full border p-2 rounded-lg"
            placeholder="Add a comment..."
            ref={inputCommentRef}
          />
          <button
            className="mt-2 bg-blue-500 text-white p-2 rounded-lg"
            onClick={postComment}
          >
            Post Comment
          </button>
        </div>
        <CommentCard commentData={commentData} />
      </div>
    </div>
  );
}
{
  /* <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-0 w-60 mt-8 flex mr-auto ml-auto rounded"
          onClick={loadComments}
        >
          <span className="flex items-center">
            <Icon
              icon={AutorenewIcon}
              color="white"
              size="md"
              className="w-5 h-3 mr-2"
            />
            <span className="text-base ml-1">Load Comments</span>
          </span>
        </Button> */
}

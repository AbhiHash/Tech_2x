import { motion } from "framer-motion";
import VideoPlayer from "components/videoplayer";
import { CustomNavbar } from "components/navBar";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { topics } from "../../../data/topic";
import { videos } from "../../../data/video";
import { useEffect, useRef, useState } from "react";
import CommentCard from "components/comment";
import { Button, Icon } from "@tremor/react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

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
  const [videoData, setVideoData] = useState(null);
  const [loadComment, setLoadComment] = useState(false);
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
  }, [slug]);

  const onVideoPlayerReady = (player: any) => {
    console.log("Video player is ready:", player);
  };

  const loadComments = () => {
    console.log(videoData, "this is loaded comment ");
    setCommentData(videoData.comments);
    setLoadComment(!loadComment);
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

    const newComments = [...commentData, comment];
    console.log(newComments, " new Comments ");
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
    setOptions(VIDEOJS_OPTIONS);
  }

  return (
    <div className="flex h-screen w-full">
      {/* side bar section  */}
      <div className="w-1/4 h-screen bg-gray-200 p-4 fixed top-0 left-0 overflow-y-auto">
        <h2 className="text-lg font-semibold"> Content </h2>
        {dbVideos.length > 0 && (
          <ul className="mt-4">
            {dbVideos.map((item: any, index) => (
              <motion.li
                key={item._id}
                className="p-2 mb-2 bg-white rounded-lg shadow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => openVideo(item)}
              >
                {item.VideoKey}
              </motion.li>
            ))}
          </ul>
        )}
      </div>

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

        {loadComment ? <CommentCard commentData={commentData} /> : null}

        <Button
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
        </Button>
      </div>
    </div>
  );
}

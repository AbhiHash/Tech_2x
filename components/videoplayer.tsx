import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import Video.js styles

const VideoPlayer = (props: any) => {
  console.log("heelo  njncd ")
  const placeholderRef = React.useRef(null);
  const playerRef: any = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    if (!playerRef.current) {
      console.log(" 1 ");
      const placeholderEl: any = placeholderRef.current;
      const videoElement = placeholderEl.appendChild(
        document.createElement("video-js")
      );

      const player = (playerRef.current = videojs(videoElement, options, () => {
        player.log("player is ready");
        onReady && onReady(player);
      }));
    } else {
      console.log(" 2 ");

      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      console.log(player, " player is ready ");
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return <div ref={placeholderRef}></div>;
};

export default VideoPlayer;

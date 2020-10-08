import React, { useState, useRef, createContext } from "react";
import { Container, Controls, Overlay, Inner, Icon, NavIcon, VideoNavbar, Button, IconRoute, PlayIcon } from "./styles/watch";
import Pause from "./icons/pause.svg";
import Play from "./icons/play.svg";
import Rewind from "./icons/rewind.svg";
import Forward from "./icons/forward.svg";
import Close from "./icons/close.svg";
import HD from "./icons/hd.svg";
import Fullscreen from "./icons/fullscreen.svg";
import Subtitles from "./icons/subtitles.svg";
import Volume from "./icons/volume.svg";

export const WatchContext = createContext();

export default function Watch({ children, ...restProps }) {
  return (
    <WatchContext.Provider>
      <Container {...restProps}>{children}</Container>
    </WatchContext.Provider>
  );
}

Watch.Video = function WatchVideo({ src, ...restProps }) {
  const [play, setPlay] = useState(true);

  const videoWatch = document.getElementById("netflix-player");

  const videoRef = useRef(null);

  const videoFunction = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  const videoforward = () => {
    videoWatch.currentTime += 10;
  };

  const videorewind = () => {
    videoWatch.currentTime -= 10;
  };

  const toggleFullscreen = () => {
    if (videoWatch.requestFullscreen) {
      videoWatch.requestFullscreen();
    } else if (videoWatch.mozRequestFullScreen) {
      /* Firefox */
      videoWatch.mozRequestFullScreen();
    } else if (videoWatch.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      videoWatch.webkitRequestFullscreen();
    } else if (videoWatch.msRequestFullscreen) {
      /* IE/Edge */
      videoWatch.msRequestFullscreen();
    }
  };

  return (
    <Overlay {...restProps}>
      <VideoNavbar>
        <NavIcon src={Subtitles} />
        <NavIcon src={Volume} />
        <NavIcon onClick={() => toggleFullscreen()} src={Fullscreen} />
        <IconRoute to="/browse">
          <NavIcon src={Close} />
        </IconRoute>
      </VideoNavbar>
      <Inner>
        <video ref={videoRef} id="netflix-player" autoPlay="true">
          <source src={src} type="video/mp4" />
        </video>
        <Controls>
          <Icon onClick={() => videorewind()} src={Rewind} />
          {play ? <Icon onClick={() => videoFunction()} src={Pause} /> : <Icon onClick={() => videoFunction()} src={Play} />}
          <Icon onClick={() => videoforward()} src={Forward} />
        </Controls>
      </Inner>
    </Overlay>
  );
};

Watch.IconRoute = function WatchIconRoute({ children, ...restProps }) {
  return <IconRoute {...restProps}>{children}</IconRoute>;
};

Watch.Button = function WatchButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Watch.PlayIcon = function WatchPlayIcon({ ...restProps }) {
  return <PlayIcon {...restProps} />;
};

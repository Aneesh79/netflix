import React, { useState, useRef, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Controls,
  Button,
  Overlay,
  Inner,
  Icon,
  NavIcon,
  VideoNavbar,
} from "./styles/player";
import Pause from "./pause.svg";
import Play from "./play.svg";
import Rewind from "./rewind.svg";
import Forward from "./forward.svg";
import Close from "./close.svg";
import HD from "./hd.svg";
import Fullscreen from "./fullscreen.svg";
import Subtitles from "./subtitles.svg";
import Volume from "./volume.svg";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  const [play, setPlay] = useState(true);

  let videoPlayer = document.getElementById("netflix-player");

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
    videoPlayer.currentTime += 10;
    videoRef.current.play();
    console.log(videoPlayer.currentTime);
  };

  const videorewind = () => {
    videoPlayer.currentTime -= 10;
    videoRef.current.play();
    console.log(videoPlayer.currentTime);
  };

  const toggleFullscreen = () => {
    if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
      /* Firefox */
      videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
      /* IE/Edge */
      videoPlayer.msRequestFullscreen();
    }
  };

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay {...restProps}>
          <VideoNavbar>
            <NavIcon src={Subtitles} />
            <NavIcon src={Volume} />
            <NavIcon onClick={() => toggleFullscreen()} src={Fullscreen} />
            <NavIcon onClick={() => setShowPlayer(false)} src={Close} />
          </VideoNavbar>
          <Inner>
            <video ref={videoRef} id="netflix-player" autoPlay={true}>
              <source src={src} type="video/mp4" />
            </video>
            <Controls>
              <Icon onClick={() => videorewind()} src={Rewind} />
              {play ? (
                <Icon onClick={() => videoFunction()} src={Pause} />
              ) : (
                <Icon onClick={() => videoFunction()} src={Play} />
              )}
              <Icon onClick={() => videoforward()} src={Forward} />
            </Controls>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play
    </Button>
  );
};

/* rgba(0,0,0,0.25) */

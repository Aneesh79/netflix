import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Controls, Button, Overlay, Inner } from "./styles/player";
import play from "./play.svg";
import rewind from "./rewind.svg";
import forward from "./forward.svg";

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

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
            <video id="netflix-player" autoplay="true">
              <source src={src} type="video/mp4" />
            </video>
            <Controls>
              <img style={{ width: "76px", height: "76px" }} src={rewind} />
              <img style={{ width: "76px", height: "76px" }} src={play} />
              <img style={{ width: "76px", height: "76px" }} src={forward} />
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

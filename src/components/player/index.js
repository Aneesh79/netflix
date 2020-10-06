import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import ReactNetflixPlayer from "react-netflix-player";
import { Container, Button, Overlay, Inner } from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, title, subTitle, titleMedia, extraInfoMedia, playerLanguage, backButton, autoPlay, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay {...restProps}>
          <Inner>
            <ReactNetflixPlayer primaryColor="#ffffff" src={src} title={title} subTitle={subTitle} titleMedia={titleMedia} extraInfoMedia={extraInfoMedia} playerLanguage={playerLanguage} backButton={backButton} autoPlay={autoPlay} />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>Play</Button>;
};

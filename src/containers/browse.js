import React, { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "../redux/actions";
import Fuse from "fuse.js";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import { FirebaseContext } from "../context/firebase";
import { Card, Header, Loading, Watch } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import play from "../components/card/icons/play-circle.svg";
import trailer from "../components/card/icons/play-hollow.svg";
import add from "../components/card/icons/add.svg";

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);
  const [trailer, setTrailer] = useState("");

  const dispatch = useDispatch();

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ["data.description", "data.title", "data.genre"] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  function sendUrl(url) {
    dispatch(setUrl(url));
  }

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink active={category === "series" ? "true" : "false"} onClick={() => setCategory("series")}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === "films" ? "true" : "false"} onClick={() => setCategory("films")}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign Out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now.</Header.FeatureCallOut>
          <Header.Text>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  {setTrailer(item.trailer)}
                  <Card.Meta>
                    <Card.Controls>
                      <Card.Left>
                        <Watch>
                          <Watch.IconRoute to="/watch">
                            <Watch.PlayIcon src={play} alt="play" onClick={() => sendUrl(trailer)} />
                          </Watch.IconRoute>
                        </Watch>
                        <Card.Divide>
                          <Card.Play>Play</Card.Play>
                          <Card.ProgressBar value="69" max="100"></Card.ProgressBar>
                        </Card.Divide>
                      </Card.Left>
                      <Card.Icons>
                        <Card.Icon src={trailer} alt="trailer" />
                        <Card.Icon src={add} alt="watchlist" />
                      </Card.Icons>
                    </Card.Controls>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Watch>
                <Watch.Button onClick={() => sendUrl(trailer)} to="/watch">
                  Play
                </Watch.Button>
              </Watch>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

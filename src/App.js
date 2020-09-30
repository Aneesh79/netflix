import React from "react";
import jumboData from "./fixtures/jumbo.json";
import Jumbotron from "./components/jumbotron";

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Placeholder>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Placeholder>
          <Jumbotron.Placeholder>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Placeholder>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;

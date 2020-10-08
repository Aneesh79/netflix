import React, { useState, useContext, createContext } from "react";

import { Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Meta, Entities, Item, Controls, Left, PlayIcon, Divide, Play, ProgressBar, Icons, Icon, Image } from "./styles/card";

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">{itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}</FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Controls = function CardControls({ children, ...restProps }) {
  return <Controls {...restProps}>{children}</Controls>;
};

Card.Left = function CardLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

Card.PlayIcon = function CardPlayIcon({ ...restProps }) {
  return <PlayIcon {...restProps} />;
};

Card.Divide = function CardDivide({ children, ...restProps }) {
  return <Divide {...restProps}>{children}</Divide>;
};

Card.Play = function CardPlay({ children, ...restProps }) {
  return <Play {...restProps}>{children}</Play>;
};

Card.ProgressBar = function CardProgressBar({ children, ...restProps }) {
  return <ProgressBar {...restProps}>{children}</ProgressBar>;
};

Card.Icons = function CardIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};

Card.Icon = function CardIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

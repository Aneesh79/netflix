import React from "react";
import {
  Container,
  Inner,
  Placeholder,
  Title,
  Subtitle,
  Image,
} from "./styles/jumbotron";

export default function Jumbotron({
  direction = "row",
  children,
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Placeholder = function JumbotronPlaceholder({
  children,
  ...restProps
}) {
  return <Placeholder {...restProps}>{children}</Placeholder>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

import React from "react";
import { Feature } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          {/* Copy paste opt form code here */}
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}

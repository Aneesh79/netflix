import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 900px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

export const Pane = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: normal;
  line-height: 1;

  @media (max-width: 900px) {
    font-size: 25px;
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: normal;

  @media (max-width: 900px) {
    font-size: 13px;
    text-align: center;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}: last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

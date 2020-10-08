import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const VideoNavbar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const Controls = styled.div`
  position: absolute;
`;

export const NavIcon = styled.img`
  width: 38px;
  height: 38px;
  padding: 20px;
  fill: #cccccc;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 76px;
  height: 76px;
  padding: 50px;
  fill: #cccccc;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a10;
  width: 114px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;

import styled from "@emotion/styled";
import { themeProps } from "@emotion/react";

export const Header = styled.header<{ theme: themeProps }>`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bg.deep};
  transition: all 1s;
  height: 4rem;
  width: 100%;
  padding: 1rem;
`;

export const Logo = styled.img`
  position: relative;
  left: 46%;
`;

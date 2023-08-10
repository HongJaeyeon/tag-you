import styled from "@emotion/styled";

export const Container = styled.div`
  /* border: solid green 5px; */
  display: flex;
  flex-direction: row;
  transition: all 1s;
  /* width: 100%; */
  height: 100%;
  margin-top: 2rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: fit-content !important;
  min-height: 40rem;
`;

export const PlayerVidBundle = styled.div`
  /* border: solid black; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 45%;
  min-width: fit-content;
  min-height: fit-content;
  gap: 2rem;
  padding: 2rem 0 2rem 0;
  margin: 1rem;
`;

export const PlayerVid = styled.div`
  border: solid red;
  display: flex;
  width: 30%;
  height: 90%;
  min-width: 20rem;
  min-height: 15rem;
  position: relative;
`;

export const Middle = styled.div`
  /* border: solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;
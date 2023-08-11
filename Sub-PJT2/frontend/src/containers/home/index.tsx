import * as S from "./Home.styled";
import { themeProps } from "@emotion/react";
import { userProps } from "types/types";
import { profileProps } from "types/types";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "components/slide";
import Tags from "components/tags";
import Intro from "components/intro";
import Postit from "components/postit";

const Home = () => {
  const theme: themeProps = useTheme();
  const [profileData, setProfileData] = useState<profileProps>();
  const [userData, setUserData] = useState<userProps>();
  // const [searchParams] = useSearchParams();

  // useEffect(() => {
  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2OTE0NzM2NDIsImV4cCI6MTY5MTUzMzY0Mn0.b0m5pVnkqTxgssqXLlrG4n6dBIWTJ6fp1V_3HO52yZs"
  // 토큰 받아오는 과정에서 막혀서 일단 주석 처리하였습니다.
  // fetch("api/users/tmp/token", {
  //   headers: {
  //     'Auth': 'master',
  //     'userId': '7'
  //   }})
  //   .then((res) =>
  //     console.log(res)
  //   )
  //   const fetchData = async () => {
  //     fetch("api/users/profile", {
  //       headers: {
  //         Auth: token,
  //       },
  //     }).then(async (res) => {
  //       const data = await res.json();
  //       if (data !== undefined) {
  //         setProfileData(data);
  //       }
  //     });
  //     fetch("api/users/mypage", {
  //       headers: {
  //         Auth: token,
  //       },
  //     }).then(async (res) => {
  //       const data = await res.json();
  //       if (data !== undefined) {
  //         setUserData(data);
  //       }
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <S.Container>
      <S.ProfileContainer>
        {/* <S.ProfileImg
          src={profileData?.imgSrc}
          width={80}
          height={80}
          alt="profileImg"
        /> */}
        <S.LeftContainer>
          <p>{userData?.userAge}</p>
          <S.InnerContent>
            <S.miniTitle theme={theme}>{userData?.userName}</S.miniTitle>
            <S.Wall theme={theme}>|</S.Wall>
            <S.miniTitle theme={theme}>{userData?.userAge}</S.miniTitle>
            <S.Wall theme={theme}>|</S.Wall>
            <S.miniTitle theme={theme}>{profileData?.userJob}</S.miniTitle>
          </S.InnerContent>
          <S.InnerContent>
            <S.FavoriteIconStyled theme={theme} />
            <S.likeCount>좋아요 {userData?.userLike}개</S.likeCount>
          </S.InnerContent>
        </S.LeftContainer>
        <S.RightContainer>
          <S.InnerContent>
            <S.miniTitle theme={theme}>
              {profileData?.userSido} {profileData?.userGugun}
            </S.miniTitle>
          </S.InnerContent>
          <S.InnerContent>
            <S.miniTitle theme={theme}>{profileData?.userMbti}</S.miniTitle>
          </S.InnerContent>
        </S.RightContainer>
      </S.ProfileContainer>
      <S.OtherContainer>
        <S.Title theme={theme}>사진첩</S.Title>
        <Slider></Slider>
      </S.OtherContainer>
      <S.OtherContainer>
        <S.Title theme={theme}>취미</S.Title>
        <Tags hobby={profileData?.userHobby}></Tags>
      </S.OtherContainer>
      <S.OtherContainer>
        <S.Title theme={theme}>한 줄 소개</S.Title>
        <Intro data={profileData?.content}></Intro>
      </S.OtherContainer>
      <S.OtherContainer>
        <S.Title theme={theme}>방명록</S.Title>
        <Postit></Postit>
      </S.OtherContainer>
    </S.Container>
  );
};

export default Home;

import InputModal from "components/modal/inputModal";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { TokenValue } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import axios from "axios";

const InputContainer = () => {
  const cookies = new Cookies();
  const [token, setToken] = useRecoilState(TokenValue);
  const [isFirst, setIsFirst] = useState<Boolean>(true);

  const movePage = () => {
    window.location.href = "/home";
  };

  useEffect(() => {
    const authToken = cookies.get("Auth");
    setToken(authToken);
  }, []);

  useEffect(() => {
    const fetchFirst = async () => {
      try {
        const response = await fetch("http://localhost:9999/api/users/first", {
          headers: {
            Auth: token,
          },
        });

        if (response.status === 404) {
          console.log("에러뜬다 :휴대폰 번호 없음 : first임", token);
          console.log("token", token);
          setIsFirst(true);
        } else {
          console.log("token", token);
          console.log("에러가 안온다 :휴대폰번호있음: 그냥 지나쳐 ", token);
          // movePage();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token.length > 0) {
      fetchFirst();
    }
  }, [token]);

  const [showModal, setShowModal] = useState<boolean>(true);

  return (
    <>
      {isFirst === true && showModal && (
        <InputModal setShowModal={setShowModal} />
      )}
    </>
  );
};

export default InputContainer;



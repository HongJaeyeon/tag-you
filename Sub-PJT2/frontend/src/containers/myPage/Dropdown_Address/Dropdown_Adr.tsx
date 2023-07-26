import React, { useState, ChangeEvent } from "react";
import * as S from './Dropdown_Adr.styled';

const Dropdown_Adr: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(""); // 선택한 option을 상태로 관리

  const categoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const state = document.getElementById("state") as HTMLSelectElement;
    const options: { [key: string]: string[] } = { 
      // 각 카테고리에 해당하는 지역 배열
      general00: ["시/군/구 선택"], 
      general01: ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"],
      general02: ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"],
      general03: ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"],
      general04: ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"],
      general05: ["광산구", "남구", "동구", "북구", "서구"],
      general06: ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"],
      general07: ["대덕구", "동구", "서구", "유성구", "중구"],
      general08: ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"],
      general09: ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"],
      general10: ["남구","동구","북구","중구","울주군"],
      general11: ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"],
      general12: ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"],
      general13: ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"],
      general14: ["서귀포시","제주시","남제주군","북제주군"],
      general15: ["당진시", "서산시", "태안군", "홍성군", "청양군", "보령시", "서천군", "부여군", "논산시", "금산군", "계룡시", "공주시", "예산군", "천안시", "아산시"],
      general16: ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"],
    
    };

    const add = options[e.target.value]; // 선택한 카테고리에 해당하는 지역 배열
  
    if (add) {
      setSelectedOption(add[1]); // 선택한 카테고리의 첫 번째 지역을 초기 옵션 값으로 설정
    }
  
    state.options.length = 0; // "시/도 선택" option만 남기기
  
    for (const city of add) {
      const opt = document.createElement("option");
      opt.value = city;
      opt.innerHTML = city;
      state.appendChild(opt);
    }
  };

  const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  
  return (
    <S.DropdownContainer>
      <S.DropdownSelect onChange={categoryChange}>
        <option value="general00">시/도 선택</option>
        <option value="general01">강원도</option>
        <option value="general02">경기도</option>
        <option value="general03">경상남도</option>
        <option value="general04">경상북도</option>
        <option value="general05">광주광역시</option>
        <option value="general06">대구광역시</option>
        <option value="general07">대전광역시</option>
        <option value="general08">부산광역시</option>
        <option value="general09">서울특별시</option>
        <option value="general10">울산광역시</option>
        <option value="general11">인천광역시</option>
        <option value="general12">전라남도</option>
        <option value="general13">전라북도</option>
        <option value="general14">제주도</option>
        <option value="general15">충청남도</option>
        <option value="general16">충청북도</option>
      </S.DropdownSelect>     
      <S.DropdownSelect id="state" onChange={handleRegionChange}>
        <option value="">시/군/구 선택</option>
      </S.DropdownSelect>
    </S.DropdownContainer>
  );
};

export default Dropdown_Adr;
import React from "react";
import { useNavigate } from "react-router-dom";

const PrevButton = () => {
  // logic
  const history = useNavigate() // react-router-dom v6 제공하는 페이지 이동 함수
  
  const hadlePrev = () => {
    // console.log("이전 페이지로 이동");
    history(-1) // 바로 이전 페이지로 이동
  };

  // view
  return (
    <button
      type="button"
      className="text-none absolute top-6 left-4 px-4 py-2"
      onClick={hadlePrev}
    >
      <img src="./images/arrow-prev.svg" alt="뒤로가기" className="block" />
      뒤로가기
    </button>
  );
};

export default PrevButton;

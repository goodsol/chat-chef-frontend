import React, { useEffect, useState } from "react";
import PrevButton from "../components/PrevButton";
import InfoInput from "../components/InfoInput";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Info = ({ sendIngredientList}) => {
  // logic
  // TODO: chat페이지 이동 추가
  const history = useNavigate() // react-router-dom v6 제공하는 페이지 이동 함수
  
  // TODO: set함수 추가하기
  const [ingredientList, setIngredientList] = useState([]); // 사용자가 입력할 재료 목록

  const addIngredient = () => {
    // 재료 추가하기
    const id = Date.now()
    const newItem = {
      id, 
      label: `ingredient${id}`,
      text: "재료명",
      value: "" // 사용자가 입력할 재료 입력값
    }
    setIngredientList((prev) => [...prev, newItem])
  };

  const handleRemove = (selectedId) => {
    // 재료 삭제하기
    const filterIngredientList = ingredientList.filter((item) => item.id !== selectedId)
    setIngredientList(filterIngredientList)
  };

  const handleInputChange = (updateItem) => {
    // 재료 변경하기
    setIngredientList((prev) => prev.map((item) => item.id === updateItem.id ? updateItem : item))
  }

  const handleNext = () => {
    sendIngredientList(ingredientList) // App.js(부모)로 sendIngredientList 함수 통해 ingredientList 넘김
    history("/chat") // chat페이지로 이동
  };

  // useEffect 용법 3가지
  // 1. 컴포넌트에 존재하는 모든 state의 값이 변경될 때 실행
  // useEffect(() => {})
  // 2. 컴포넌트가 생성되는 딱 한 번만 실행
  // useEffect(() => {}, [])
  // 3. 특정 state가 변경될 때 실행
  // useEffect(() => {}, [state변수])
  // ingredientList가 변경될 때 실행
  // useEffect(() => {console.log("🚀 ~ Info ~ ingredientList:", ingredientList)}, [ingredientList])
  useEffect(() => {}, [ingredientList])

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* TODO:Title 컴포넌트 */}
        <div className="px-2 pt-6">
          <h1 className="text-4.5xl font-black text-white">
            당신의 냉장고를 알려주세요
          </h1>
        </div>
        {/* // TODO:Title 컴포넌트 */}

        {/* START:form 영역 */}
        <div className="mt-20 overflow-auto">
          <form>
            {/* START:input 영역 */}
            <div>
              {ingredientList.map((item) => (
                <InfoInput key={item.id} content={item} onRemove={handleRemove} onChange={handleInputChange} />
              ))}
            </div>
            {/* END:input 영역 */}
          </form>
        </div>
        {/* END:form 영역 */}
        {/* START:Add button 영역 */}
        <AddButton onClick={addIngredient} />
        {/* END:Add button 영역 */}
        {/* START:Button 영역 */}
        <Button text="Next" color="bg-chef-green-500" onClick={handleNext} />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Info;

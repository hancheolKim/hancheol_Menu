import { useRef } from "react";

export function Modal({ setShowModal, setFoods }) {
  const inputFoodType = useRef();
  const inputFoodMenu = useRef();

  const handlInsert = () => {
    const foodTypeRef = inputFoodType.current.value;
    const foodMenuRef = inputFoodMenu.current.value;
  
    setFoods((prev) => {
      const checkType = prev.find((food) => food.foodType === foodTypeRef);

      if (checkType) {
        if (checkType.foodMenu.includes(foodMenuRef)) {
          return prev;
        } else {
          return prev.map((food) =>
            food.foodType === foodTypeRef
              ? {
                  foodType: foodTypeRef,
                  foodMenu: [...food.foodMenu, foodMenuRef],
                }
              : food
          );
        }
      } else {
        return [...prev, { foodType: foodTypeRef, foodMenu: [foodMenuRef] }];
      }
    });

    setShowModal(false);
  };
  return (
    <div className="modalOverlay">
      <div className="modal">
        <div>
          <label>음식 타입</label>
          <input type="text" ref={inputFoodType}></input>
        </div>
        <div>
          <label>음식 메뉴</label>
          <input type="text" ref={inputFoodMenu}></input>
        </div>
        <div>
          <button onClick={handlInsert}>등록</button>
          <button onClick={() => setShowModal(false)}>닫기</button>
        </div>
      </div>
    </div>
  );
}

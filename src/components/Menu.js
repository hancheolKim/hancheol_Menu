import { useState } from "react";

const Menu = (props) => {
  const { foods } = props;
  const [searchType, setSearchType] = useState("전체");
  const {setFoods} = props;
  const {setShowModal} = props;

  function Foodmenu({ menu }) {
    return <li  onClick={() => ModalOpen(food.foodType)}>{menu} <button onClick={() => handleDelete(menu)}>x</button></li>;
  }

  const handlSearch = (type) => {
    console.log(type);
    setSearchType(type);
  };
  const handleDelete = (menu) => {
    console.log("삭제할 메뉴:", menu);
  
      setFoods((prevFoods) =>
      prevFoods.map((food) => ({
        ...food,
        foodMenu: food.foodMenu.filter((item) => item !== menu),
      }))
    );
  };
  const ModalOpen = (foodType) => {
    
    setShowModal(true);
  }

  const handleDeleteTitle = (foodType) => {
    console.log("삭제할 메뉴 타입:", foodType);

    setFoods((prevFoods) => 
    prevFoods.filter((item)=> item.foodType !== foodType), 
    );
  }

  return (
    <div>
      <div className="menuBtn">
        <button onClick={() => handlSearch("전체")}>전체</button>
        {foods.map((type, idx) => (
          <button key={idx} onClick={() => handlSearch(`${type.foodType}`)}>
            {type.foodType}
          </button>
        ))}
      </div>

      {foods
        .filter((food) => searchType === "전체" || food.foodType === searchType)
        .map((food, idx) => (
          <div key={idx} className="menuDiv">
            <h3  onClick={() => ModalOpen(food.foodType)}>{food.foodType} <button onClick={() => handleDeleteTitle(food.foodType)}>x</button></h3>
            <ul>
              {food.foodMenu.map((menu, idx) => (
                // <li key={menu + idx}>{menu}</li>
                <div>
                  <Foodmenu key={menu + idx} menu={menu} /> 
                </div>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Menu;

import "./App.css";
import { Header } from "./components/Header";
import Menu from "./components/Menu";
import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [foods, setFoods] = useState([
    { foodType: "한식", foodMenu: ["김밥", "라면", "불고기"] },
    { foodType: "중식", foodMenu: ["짜장", "짬뽕", "탕수육"] },
    { foodType: "일식", foodMenu: ["우동", "스시", "돈카츠"] },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <Header setShowModal={setShowModal}></Header>
      <Menu foods={foods} setFoods={setFoods} setShowModal={setShowModal}></Menu>
      {showModal && <Modal setShowModal={setShowModal} setFoods={setFoods} />}
    </div>
  );
}

export default App;

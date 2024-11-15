export const Header = ({ setShowModal }) => {
  return (
    <div className="header">
      <h1>
        음식블로그<button onClick={() => setShowModal(true)}>추가</button>
      </h1>
    </div>
  );
};

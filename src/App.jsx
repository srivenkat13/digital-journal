import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElements = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div>
      <Header />
      {cardElements}
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElement = data.map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        img={card.img}
        location={card.location}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        url={card.googleMapsUrl}
      />
    );
  });
  return (
    <div>
      <Header />
      {cardElement}
    </div>
  );
}

export default App;

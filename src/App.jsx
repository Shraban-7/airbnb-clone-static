/* eslint-disable react/jsx-key */
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import CardPhoto from "./components/Card/images/image 12.png";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card--list">{cards}</section>
    </>
  );
}

export default App;

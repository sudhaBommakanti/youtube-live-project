import React from "react";
import Header from "./Header";
import information from "../../information.json";
import Card from "../Card";

function HomePage() {
  const cards = information.map((item) => {
    return <Card key={item.id} data={item} />;
  });
  return (
    <div>
      <Header />
      <div className="container">
        {cards}
      </div>  
    </div>
  );
}

export default HomePage;

import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Banner from "./components/Banner";
import TabBar from "./components/TabBar";
import Card from "./components/Card";
import Heading from "./components/Heading";
import { useState, useEffect } from "react";
import React from "react";
function App() {
  const [data, setData] = useState({});
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Banner />
        <TabBar />
        <Heading text="All Surahs" />
        <div className="cards">
          {data.references.map((item) => {
            return (
              <Card
                englishName={item.englishName}
                arabicName={item.name}
                translation={item.englishNameTranslation}
                revelationType={item.revelationType}
                number={item.number}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;

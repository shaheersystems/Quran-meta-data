import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Banner from "./components/Banner";
import TabBar from "./components/TabBar";
import Card from "./components/Card";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import React from "react";
function App() {
  const [data, setData] = useState([]);
  const [meccan, setMeccan] = useState([]);
  const [medinan, setMedinan] = useState([]);
  const [tab, setTab] = useState("All");
  const filterMeccan = (allData) => {
    const meccanSurahs = allData.filter((item) => {
      return item.revelationType === "Meccan";
    });
    console.log(meccanSurahs);
    return meccanSurahs;
  };
  const filterMedinan = (allData) => {
    const medinanSurahs = allData.filter((item) => {
      return item.revelationType === "Medinan";
    });
    console.log(medinanSurahs);
    return medinanSurahs;
  };

  useEffect(() => {
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
          setMeccan(filterMeccan(jsonData));
          setMedinan(filterMedinan(jsonData));
        });
    };
    getData();
  }, []);

  const allSurahs = () => {
    return (
      <div className="cards">
        {data.map((item) => {
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
    );
  };
  const meccanSurahs = () => {
    return (
      <div className="cards">
        {meccan.map((item) => {
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
    );
  };
  const medinanSurahs = () => {
    return (
      <div className="cards">
        {medinan.map((item) => {
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
    );
  };
  const handleAll = () => {
    setTab("All");
  };
  const handleMeccan = () => {
    setTab("Meccan");
  };
  const handleMedinan = () => {
    setTab("Medinan");
  };
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Banner />
        <TabBar
          classAll={tab === "All" ? "active" : ""}
          classMeccan={tab === "Meccan" ? "active" : ""}
          classMedinan={tab === "Medinan" ? "active" : ""}
          handleAll={handleAll}
          handleMeccan={handleMeccan}
          handleMedinan={handleMedinan}
        />
        <Heading
          text={
            tab === "All"
              ? "All Surahs"
              : tab === "Meccan"
              ? "Meccan Surahs"
              : "Medinan Surahs"
          }
        />
        {tab === "All"
          ? allSurahs()
          : tab === "Meccan"
          ? meccanSurahs()
          : medinanSurahs()}
        <Footer />
      </Container>
    </div>
  );
}

export default App;

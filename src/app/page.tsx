/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Dashboard from "./components/Dashboard";
import { motion, AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [showDashboard, setShowDashboard] = useState<boolean>(true);
  const locations = [{ name: "Lugar 1" }, { name: "Lugar 2" }];

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className={"darkMode"}> {/* Clase condicional */}
      <Header onSearch={handleSearch} />
      <div className="h-screen flex flex-col">
        <AnimatePresence>
          <Dashboard
            locations={locations}
            isVisible={showDashboard}
            toggleVisibility={toggleDashboard}
          />
        </AnimatePresence>
        <div className="map flex-1">
          <Map toggleDashboard={toggleDashboard} />
        </div>
      </div>
    </div>
  );
};

export default Home;

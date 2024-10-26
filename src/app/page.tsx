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
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number, lng: number } | null>(null);
  const locations = [
    { name: "Lugar 1", lat: -34.397, lng: 150.644 },
    { name: "Lugar 2", lat: -34.897, lng: 150.244 }
  ];

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  const handleLocationClick = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
  };

  return (
    <div className={"darkMode"}> {/* Clase condicional */}
      <Header onSearch={handleSearch} />
      <div className="h-screen flex flex-col">
        <AnimatePresence>
          {showDashboard && (
            <Dashboard
              locations={locations}
              isVisible={showDashboard}
              toggleVisibility={toggleDashboard}
              onLocationClick={handleLocationClick}
            />
          )}
        </AnimatePresence>
        <div className="map flex-1">
          <Map toggleDashboard={toggleDashboard} center={selectedLocation ? selectedLocation : undefined} />
        </div>
      </div>
    </div>
  );
};

export default Home;

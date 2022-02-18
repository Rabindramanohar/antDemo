import React from "react";
import AppAbout from "../components/home/about";
import AppFeatures from "../components/home/features";
import AppHero from "../components/home/hero";

export default function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeatures />
    </div>
  );
}

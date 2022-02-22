import React from "react";
import AppAbout from "../components/home/about";
import AppFeatures from "../components/home/features";
import AppHero from "../components/home/hero";
import AppWorks from "../components/home/work";

export default function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeatures />
      <AppWorks />
    </div>
  );
}

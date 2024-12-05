import React, { useState } from "react";
import Sidebar   from "../components/Sidebar";
import Header from "../components/Header";
import ProductDisplay from "../components/ProductDisplay";
import ThumbnailList from "../components/ThumbnailList";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-slate-900 p-3">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <ProductDisplay />
          <ThumbnailList />
        </div>
      </div>
    </div>

  )
}

export default Home
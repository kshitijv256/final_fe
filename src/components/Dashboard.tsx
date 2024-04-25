import React from "react";
import { Link } from "react-router-dom";
import doc from "../assets/doc.png";

const Dashboard = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${doc})`,
      }}
    >
      <div className="flex w-full p-4 mb-8 text-6xl font-bold justify-center">
        Medical Transcript Analyzer
      </div>
      {/* <img src={doc} /> */}
      <div className="flex w-full gap-16 justify-center">
        <Link
          to={"/upload"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload File
        </Link>
        <Link
          to={"/ask"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ask Question
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

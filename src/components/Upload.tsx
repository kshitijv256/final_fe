import React, { useState } from "react";
import report from "../assets/report.png";
import { uploadFile } from "../utils/api";

const Upload = () => {
  const [summary, setSummary] = useState([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    uploadFile(formData.get("file") as File)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSummary(data.results);
      });
  };
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${report})`,
        }}
      >
        <div className="flex flex-row w-[100vw] p-4 mb-8 text-6xl font-bold justify-center">
          Medical Transcript Analyzer
        </div>
        <form action="/" onSubmit={handleSubmit} className="flex-flex-col">
          <input type="file" name="file" id="file" className="p-4" />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
        {summary.length > 0 && (
          <div className="flex flex-col w-[90%] mb-8 text-2xl justify-center">
            {summary.map((s, i) => (
              <div key={i} className="rounded bg-white text-black p-4 m-3">
                <h1 className="font-bold">{s["section"]}</h1>
                <p>{s["summary"]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;

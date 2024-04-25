import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <div className="flex w-full justify-center">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

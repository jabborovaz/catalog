import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Layout } from "./router/router";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <Layout />
            </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

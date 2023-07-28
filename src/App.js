import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Layout, Catalogues } from "./router/router";

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
        >
          <Route
            index
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <Catalogues />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

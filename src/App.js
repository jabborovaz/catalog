import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Layout, Catalog, SingleItemPage } from "./router/router";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Catalog />
              </Suspense>
            }
          />
          <Route
            path="/:itemId"
            element={
              <Suspense fallback={<Loader />}>
                <SingleItemPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

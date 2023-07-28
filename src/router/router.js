import { lazy } from "react";

export const Layout = lazy(() => import("../container/layout/Layout"));
export const Catalog = lazy(() => import("../container/pages/Catalog"));
export const SingleItemPage = lazy(() =>
  import("../container/pages/SingleItem")
);

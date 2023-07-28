import { lazy } from "react";

export const Layout = lazy(() => import("../container/layout/Layout"));
export const Catalogues = lazy(() => import("../container/pages/Catalogues"));
export const SingleItemPage = lazy(() =>
  import("../container/pages/SingleItem")
);

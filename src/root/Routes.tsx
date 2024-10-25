import { Route, Routes } from "react-router-dom";

import { paths } from "constants/paths";

import HomePage from "pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
    </Routes>
  );
};

export default Router;

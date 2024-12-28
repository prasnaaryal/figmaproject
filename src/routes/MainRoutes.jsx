import MainLayout from "../layouts/MainLayout";

// Pages

import Home from "../Pages/Home";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <Home />,}
  
  ],
};

export default MainRoutes;
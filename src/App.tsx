import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { AppLayout } from "./components/AppLayout";
import { MainPage } from "./pages/MainPage";
import { StoryPage } from "./pages/StoryPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/:id" element={<StoryPage />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

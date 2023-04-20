import "./style.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RenderComponent from "./Component/RenderComponent/RenderComponent";
import SignUp from "./Component/Form/SignUp";
import RenderForm from "./Component/Form/RenderForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RenderComponent />,
  },
  {
    path: "/signIn",
    element: <RenderForm />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <div className="main-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

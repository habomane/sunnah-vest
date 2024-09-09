import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import AppLayout from "./layout/AppLayout";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <></> }],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

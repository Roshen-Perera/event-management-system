import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "./components/RootLayout";
import EventList from "./pages/EventList";
import EditEvent from "./pages/EditEvent";
function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        { path: "", element: <EventList /> },
        { path: "/editEvent", element: <EditEvent /> }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

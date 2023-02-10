
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
// import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false} />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;

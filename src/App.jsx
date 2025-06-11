import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";
import Error from "./pages/Error";
import ApiData from "./components/api/ApiData";
import MovieDetail from "./components/layout/UI/MovieDetail";
import { contactData } from "../src/pages/Contact";
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: ApiData,
        },
        {
          path: "/movie/:imdbID",
          element: <MovieDetail />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  // traditional mehtod of routing

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </>
  //   )
  // );

  return (
    <RouterProvider router={router}>
      <div>hello react router</div>
    </RouterProvider>
  );
}

export default App;

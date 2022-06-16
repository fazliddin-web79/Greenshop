import Generic from "../components/generic";
import Home from "../components/home";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home/seeds/all",
    mainPath: "/home",
    private: true,
    element: <Home />,
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
    private: true,
    mainPath: "shop",
    element: <Generic />,
  },
  {
    id: 3,
    title: "Plant Care",
    path: "/plants-care",
    mainPath: "/plants-care",

    private: true,
    element: <Generic />,
  },
  {
    id: 4,
    title: "Blogs",
    path: "/blogs",
    mainPath: "/blogs",

    private: true,
    element: <Generic />,
  },
  {
    id: 5,
    title: "Contact",
    mainPath: "/contact",

    path: "/contact",
    private: true,
    element: <Generic />,
  },
];

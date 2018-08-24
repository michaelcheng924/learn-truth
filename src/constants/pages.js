import Home from "../components/Home";
import Gospel from "../components/Gospel";
// import Answers from "../components/Answers";
import CatechismPractice from "../components/CatechismPractice";
import CreedsConfessions from "../components/CreedsConfessions";
import Resources from "../components/Resources";
import ChurchFinder from "../components/ChurchFinder";
import About from "../components/About";

const ROUTES = [
  {
    exact: true,
    path: "/",
    Component: Home
  },
  {
    path: "/gospel",
    Component: Gospel
  },
  // {
  //   path: '/answers',
  //   Component: Answers
  // },
  {
    path: "/catechism-practice",
    Component: CatechismPractice
  },
  {
    path: "/creeds-confessions",
    Component: CreedsConfessions
  },
  {
    path: "/resources",
    Component: Resources
  },
  {
    path: "/church-finder",
    Component: ChurchFinder
  },
  {
    path: "/about",
    Component: About
  }
];

const HOME_PAGES = [
  {
    title: "The Gospel",
    description: "Learn and share a gospel summary",
    url: "/gospel",
    backgroundColor: "#0097A7",
    image: require("../images/menu-cross-white.png")
  },
  // {
  //   title: "Answers",
  //   description: "Defend the Bible's teachings",
  //   url: "/answers",
  //   backgroundColor: "#0097A7",
  //   image: require("../images/icon-question-mark-white.png")
  // },
  {
    title: "Catechism Practice",
    description: "Learn through questions and answers",
    url: "/catechism-practice",
    backgroundColor: "#FF5722",
    image: require("../images/icon-speech-bubbles-white.png")
  },
  {
    title: "Creeds and Confessions",
    description: "Historical documents that have shaped the church",
    url: "/creeds-confessions",
    backgroundColor: "#039BE5",
    image: require("../images/icon-documents-white.png")
  },
  {
    title: "Resources",
    description: "Resources to help you grow in your faith",
    url: "/resources",
    backgroundColor: "#689F38",
    image: require("../images/icon-list-white.png")
  },
  {
    title: "Church Finder",
    description: "Find a solid church to attend",
    url: "/church-finder",
    backgroundColor: "#795548",
    image: require("../images/icon-church-white.png")
  },
  {
    title: "About",
    description: "Learn more about and support learntruth.io",
    url: "/about",
    backgroundColor: "#607D8B",
    image: require("../images/icon-info-white.png")
  }
];

const MENU_LINKS = [
  {
    title: "Home",
    url: "/",
    image: require("../images/icon-home.png")
  },
  {
    title: "The Gospel",
    url: "/gospel",
    image: require("../images/menu-cross.png")
  },
  // {
  //   title: "Answers",
  //   url: "/answers",
  //   image: require("../images/icon-question-mark.png")
  // },
  {
    title: "Catechism Practice",
    url: "/catechism-practice",
    image: require("../images/icon-speech-bubbles.png")
  },
  {
    title: "Creeds and Confessions",
    url: "/creeds-confessions",
    image: require("../images/icon-documents.png")
  },
  {
    title: "Resources",
    url: "/resources",
    image: require("../images/icon-list.png")
  },
  {
    title: "Church Finder",
    url: "/church-finder",
    image: require("../images/icon-church.png")
  },
  {
    title: "About",
    url: "/about",
    image: require("../images/icon-info.png")
  }
];

export { ROUTES, HOME_PAGES, MENU_LINKS };

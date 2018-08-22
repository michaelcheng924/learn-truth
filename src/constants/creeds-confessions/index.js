import APOSTLES_CREED from "./creed-apostles";
import NICENE_CREED from "./creed-nicene";

import LONDON_BAPTIST from "./confession-london-baptist";
import WESTMINSTER from "./confession-westminster";

const ALL_DOCUMENTS = [
  {
    type: "Creeds",
    year: "A.D. 200",
    name: "The Apostle's Creed",
    content: APOSTLES_CREED,
    description:
      "The Apostle's Creed is the earliest church creed and contains a summary of foundational doctrines"
  },
  {
    type: "Creeds",
    year: "900",
    name: "The Nicene Creed",
    content: NICENE_CREED,
    description: "Ipso lorem dorem something"
  },
  {
    type: "Confessions",
    year: "1642",
    name: "Westminster Confession of Faith",
    content: WESTMINSTER,
    description: "Ipso lorem dorem something"
  },
  {
    type: "Confessions",
    year: "1660-1689",
    name: "1689 London Baptist Confession of Faith",
    content: LONDON_BAPTIST,
    description: "Ipso lorem dorem something"
  }
];

export { ALL_DOCUMENTS };

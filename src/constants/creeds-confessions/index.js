import APOSTLES_CREED from "./creed-apostles";
import NICENE_CREED from "./creed-nicene";
import CHALCEDEONIAN_CREED from "./creed-chalcedonian";
import ATHANASIAN_CREED from "./creed-athanasian";
import THIRTY_NINE_ARTICLES from "./creed-39-articles";

import LONDON_BAPTIST from "./confession-london-baptist";
import WESTMINSTER from "./confession-westminster";

const ALL_DOCUMENTS = [
  {
    type: "Creeds",
    year: 300,
    yearText: "earliest mention/before AD 390",
    name: "Apostle's Creed",
    content: APOSTLES_CREED,
    description:
      "An early statement of Christian belief. Trinitarian in structure."
  },
  {
    type: "Creeds",
    year: 381,
    name: "Nicene Creed",
    content: NICENE_CREED,
    description:
      "Also known as the Nicene-Constantinopolitan Creed. A statement of the orthodox faith of the early Christian church in opposition to certain heresies, especially Arianism."
  },
  {
    type: "Creeds",
    year: 451,
    name: "Chalcedonian Creed",
    content: CHALCEDEONIAN_CREED,
    description:
      "A response to certain heretical views concerning the nature of Christ.  It established the orthodox view that Christ has two natures (human and divine) that are unified in one person."
  },
  {
    type: "Creeds",
    year: 600,
    yearText: "around AD 600",
    name: "Athanasian Creed",
    content: ATHANASIAN_CREED,
    description:
      "Named after Athanasius (A.D. 293-373), the champion of orthodoxy against Arian attacks on the doctrine of the trinity. Although Athanasius did not write this creed and it is improperly named after him, the name persists because until the seventeenth century it was commonly ascribed to him."
  },
  {
    type: "Confessions",
    year: 1571,
    name: "Thirty-nine Articles",
    content: THIRTY_NINE_ARTICLES,
    description:
      "Used to define the doctrine of the Church of England as it related to Calvinist doctrine and Roman Catholic practice. It was in this document that Calvinist thought reached the zenith of its influence in the English Church."
  },
  {
    type: "Confessions",
    year: 1646,
    name: "Westminster Confession of Faith",
    content: WESTMINSTER,
    description:
      'Drawn up to be a confession of the Church of England, it became and remains the "subordinate standard" of doctrine in the Church of Scotland and has been influential within Presbyterian churches worldwide.'
  },
  {
    type: "Confessions",
    year: 1689,
    yearText: "published in 1677, 1688, and 1689",
    name: "1689 London Baptist Confession of Faith",
    content: LONDON_BAPTIST,
    description:
      "Written by Particular Baptists who held to a Calvinistic soteriology in England to give a formal expression of their Christian faith from a Baptist perspective."
  }
];

export { ALL_DOCUMENTS };

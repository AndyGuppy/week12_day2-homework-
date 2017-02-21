use birds_site;

db.birds.insert([
  { 
    specie: "Buzzard",
    latinName: "Buteo buteo",
    family: "Raptors",
    notes: [{
      comment: "Seen one on the mountains",
      date: "21/02/2016",
      author: "Andy"}]
  },
  { 
    specie: "Carrion Crow",
    latinName: "Corvicus corvicus",
    family: "Crow",
    notes: [{
      comment: "4 bickering in tree in back garden",
      date: "27/02/2016",
      author: "Andy"}]
  }]
);
var Bird = function(options) {
  this.specie = options.specie;
  this.latinName = options.latinName;
  this.family = options.family;
  this.notes = options.notes || [];
 
  
}

Bird.prototype = {
  addNote: function(note) {
    this.notes.push(note);
  }
}

module.exports = Bird;

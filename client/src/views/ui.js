var Birds = require('../models/birds');

var UI = function() {
  var birds = new Birds();
  birds.all(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerHTML = label + text;
    console.log(p);
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createNote: function(li, note) {
    this.appendText(li, '\t\t<strong>NOTE</strong>', '  ');
    this.appendText(li, note.date, ' \tDate: ');
    this.appendText(li, note.author, ' \tAuthor: ');
    this.appendText(li, note.comment, ' \tComment: '); 
    this.appendText(li, '--------------------------------', '  ');
  },

  render: function(birds) {
    var container = document.getElementById('birds');

    for (var bird of birds) {
      var li = document.createElement('li');
      this.appendText(li, bird.specie, 'Specie: ');
      this.appendText(li, bird.latinName, 'latin Name: ');
      this.appendText(li, bird.family, 'Family: ');
      
      for (var note of bird.notes){
        this.createNote(li, note);
      }

      container.appendChild(li);
    }
  }
}

module.exports = UI;

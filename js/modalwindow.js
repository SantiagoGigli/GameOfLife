//validate inputs
var Modal = {
  show: function () {
    var modal = document.getElementById('modal')
    modal.style.display = "block";
  },
  save: function () {
    var btnsave = document.getElementById("save");
    var game = document.getElementsByClassName("game")[0];
    btnsave.onclick = function () {
      modal.style.display = "none";
      game.style.display = "flex";
      var Play = function () {
        var liAlives = Board.getCells();
        Board.updateCells(liAlives);
      }
      Game.init();
      Game.start();
    }
  }

}

export default {
  draw,
  highlight,
};

var origBoardEl;
// ****************************

function draw(boardEl) {
  origBoardEl = boardEl;

  for (let i = 0; i < 8; i++) {
    let rowEl = document.createElement("div");
    for (let j = 0; j < 8; j++) {
      let tileEl = document.createElement("div");
      rowEl.appendChild(tileEl);
    }
  }
  boardEl.appendChild(rowEl);
}

function highlight(tileEl) {
  // TODO: clear previous highlights (if any) and
  // then find the tiles in the two diagonals
  // (major and minor) that `tileEl` belongs to,
  // to highlight them via CSS class "highlighted"
}

Vue.createApp({
  // wrap whole application
    // wrap chessboard
      // create eight columns
        // render 8 cells based off of state, 
          // @click to handle clicked cells with the cell id
          // designate class based on whether cell has been selected
    // wrap sidebar
  template: `
    <div class="container-wrapper">
      <div class="chessboard-wrapper">
        <div v-for="column in columns" class="chessboard-col">
          <div v-for="cell in column" @click="handleSelection(cell.id)" :class="[ cell.selected ? 'selected' : cell.originalColor ]">
            {{cell.id}}
          </div>
        </div>
      </div>
      <div class="sidebar">
        <h3>History: </h3>
        <div v-for="move in history">
          {{move}}
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      // row data for board
      columns: [
        [{id: 'a8', selected: false, originalColor: 'light'}, {id: 'a7', selected: false, originalColor: 'dark'}, {id: 'a6', selected: false, originalColor: 'light'}, {id: 'a5', selected: false, originalColor: 'dark'}, {id: 'a4', selected: false, originalColor: 'light'}, {id: 'a3', selected: false, originalColor: 'dark'}, {id: 'a2', selected: false, originalColor: 'light'}, {id: 'a1', selected: false, originalColor: 'dark'}],
        [{id: 'b8', selected: false, originalColor: 'dark'}, {id: 'b7', selected: false, originalColor: 'light'}, {id: 'b6', selected: false, originalColor: 'dark'}, {id: 'b5', selected: false, originalColor: 'light'}, {id: 'b4', selected: false, originalColor: 'dark'}, {id: 'b3', selected: false, originalColor: 'light'}, {id: 'b2', selected: false, originalColor: 'dark'}, {id: 'b1', selected: false, originalColor: 'light'}],
        [{id: 'c8', selected: false, originalColor: 'light'}, {id: 'c7', selected: false, originalColor: 'dark'}, {id: 'c6', selected: false, originalColor: 'light'}, {id: 'c5', selected: false, originalColor: 'dark'}, {id: 'c4', selected: false, originalColor: 'light'}, {id: 'c3', selected: false, originalColor: 'dark'}, {id: 'c2', selected: false, originalColor: 'light'}, {id: 'c1', selected: false, originalColor: 'dark'}],
        [{id: 'd8', selected: false, originalColor: 'dark'}, {id: 'd7', selected: false, originalColor: 'light'}, {id: 'd6', selected: false, originalColor: 'dark'}, {id: 'd5', selected: false, originalColor: 'light'}, {id: 'd4', selected: false, originalColor: 'dark'}, {id: 'd3', selected: false, originalColor: 'light'}, {id: 'd2', selected: false, originalColor: 'dark'}, {id: 'd1', selected: false, originalColor: 'light'}],
        [{id: 'e8', selected: false, originalColor: 'light'}, {id: 'e7', selected: false, originalColor: 'dark'}, {id: 'e6', selected: false, originalColor: 'light'}, {id: 'e5', selected: false, originalColor: 'dark'}, {id: 'e4', selected: false, originalColor: 'light'}, {id: 'e3', selected: false, originalColor: 'dark'}, {id: 'e2', selected: false, originalColor: 'light'}, {id: 'e1', selected: false, originalColor: 'dark'}],
        [{id: 'f8', selected: false, originalColor: 'dark'}, {id: 'f7', selected: false, originalColor: 'light'}, {id: 'f6', selected: false, originalColor: 'dark'}, {id: 'f5', selected: false, originalColor: 'light'}, {id: 'f4', selected: false, originalColor: 'dark'}, {id: 'f3', selected: false, originalColor: 'light'}, {id: 'f2', selected: false, originalColor: 'dark'}, {id: 'f1', selected: false, originalColor: 'light'}],
        [{id: 'g8', selected: false, originalColor: 'light'}, {id: 'g7', selected: false, originalColor: 'dark'}, {id: 'g6', selected: false, originalColor: 'light'}, {id: 'g5', selected: false, originalColor: 'dark'}, {id: 'g4', selected: false, originalColor: 'light'}, {id: 'g3', selected: false, originalColor: 'dark'}, {id: 'g2', selected: false, originalColor: 'light'}, {id: 'g1', selected: false, originalColor: 'dark'}],
        [{id: 'h8', selected: false, originalColor: 'dark'}, {id: 'h7', selected: false, originalColor: 'light'}, {id: 'h6', selected: false, originalColor: 'dark'}, {id: 'h5', selected: false, originalColor: 'light'}, {id: 'h4', selected: false, originalColor: 'dark'}, {id: 'h3', selected: false, originalColor: 'light'}, {id: 'h2', selected: false, originalColor: 'dark'}, {id: 'h1', selected: false, originalColor: 'light'}],
      ],
      // keep track of the last selected cell
      lastSelected: null,
      // keep track of move order and history
      move: 0,
      history: []
    }
  },
  methods: {
    handleSelection(coord){
      // map object to attribute letters to nums
      const map = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7
      }
      // if no cell has been selected yet
      if(!this.lastSelected) {
        // set lastSelected to first coord
        this.lastSelected = coord;
        // change property 'selected' to be true of selected cell
        this.columns[map[coord[0]]][8 - coord[1]].selected = true;
      }
      // if last selected cell is the same as the currently selected cell
      // if there was a last selected cell, and the newly selected cell is different from it
      else if(this.lastSelected && this.lastSelected !== coord) {
        // deselect previous selected cell
        this.columns[map[this.lastSelected[0]]][8 - this.lastSelected[1]].selected = false;
        // set lastSelected to be the new selected cell
        this.lastSelected = coord;
        // change property 'selected' to be true of selected cell
        this.columns[map[coord[0]]][8 - coord[1]].selected = true;
      }
      // increment move order
      this.move = this.move + 1;
      // add new move into history
      this.history.push(`${this.move}. ${coord}`);
    }
  }
}).mount('#app')
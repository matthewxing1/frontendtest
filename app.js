// import { store } from './store.js';

Vue.createApp({
  template: `
    <div class="container-wrapper">
      <div class="chessboard-wrapper">
        <div class="chessboard-row">
          <div v-for="cell in row1" @click="handleSelection(cell.id)" :class="[ cell.selected ? 'selected' : cell.originalColor ]">
            {{cell.id}}
          </div>
        </div>
        <div class="chessboard-row">
          <div v-for="cell in row2" @click="handleSelection(cell.id)" :class="[ cell.selected ? 'selected' : cell.originalColor ]">
            {{cell.id}}
          </div>
        </div>
        <div class="chessboard-row">
          <div v-for="cell in row3" @click="handleSelection(cell.id)" :class="[ cell.selected ? 'selected' : cell.originalColor ]">
            {{cell.id}}
          </div>
        </div>
        <div class="chessboard-row">
          <div v-for="cell in row4" @click="handleSelection(cell.id)" :class="[ cell.selected ? 'selected' : cell.originalColor ]">
            {{cell.id}}
          </div>
        </div>
        <div class="chessboard-row">
          <div v-for="cell in row5" @click="handleSelection(cell.id)" :class="[ cell.selected ? 'selected' : cell.originalColor ]">
            {{cell.id}}
          </div>
        </div>
        <div class="chessboard-row">
          <div v-for="cell in row6" @click="handleSelection(cell.id)" :class="[ cell.selected ? 'selected' : cell.originalColor ]">
            {{cell.id}}
          </div>
        </div>
        <div class="chessboard-row">
          <div v-for="cell in row7" @click="handleSelection(cell.id)" :class="[ cell.selected ? 'selected' : cell.originalColor ]">
            {{cell.id}}
          </div>
        </div>
        <div class="chessboard-row">
          <div v-for="cell in row8" @click="handleSelection(cell.id)" :class="[ cell.selected ? 'selected' : cell.originalColor ]">
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
      row1: [{id: 'a8', selected: false, originalColor: 'light'}, {id: 'a7', selected: false, originalColor: 'dark'}, {id: 'a6', selected: false, originalColor: 'light'}, {id: 'a5', selected: false, originalColor: 'dark'}, {id: 'a4', selected: false, originalColor: 'light'}, {id: 'a3', selected: false, originalColor: 'dark'}, {id: 'a2', selected: false, originalColor: 'light'}, {id: 'a1', selected: false, originalColor: 'dark'}],
      row2: [{id: 'b8', selected: false, originalColor: 'dark'}, {id: 'b7', selected: false, originalColor: 'light'}, {id: 'b6', selected: false, originalColor: 'dark'}, {id: 'b5', selected: false, originalColor: 'light'}, {id: 'b4', selected: false, originalColor: 'dark'}, {id: 'b3', selected: false, originalColor: 'light'}, {id: 'b2', selected: false, originalColor: 'dark'}, {id: 'b1', selected: false, originalColor: 'light'}],
      row3: [{id: 'c8', selected: false, originalColor: 'light'}, {id: 'c7', selected: false, originalColor: 'dark'}, {id: 'c6', selected: false, originalColor: 'light'}, {id: 'c5', selected: false, originalColor: 'dark'}, {id: 'c4', selected: false, originalColor: 'light'}, {id: 'c3', selected: false, originalColor: 'dark'}, {id: 'c2', selected: false, originalColor: 'light'}, {id: 'c1', selected: false, originalColor: 'dark'}],
      row4: [{id: 'd8', selected: false, originalColor: 'dark'}, {id: 'd7', selected: false, originalColor: 'light'}, {id: 'd6', selected: false, originalColor: 'dark'}, {id: 'd5', selected: false, originalColor: 'light'}, {id: 'd4', selected: false, originalColor: 'dark'}, {id: 'd3', selected: false, originalColor: 'light'}, {id: 'd2', selected: false, originalColor: 'dark'}, {id: 'd1', selected: false, originalColor: 'light'}],
      row5: [{id: 'e8', selected: false, originalColor: 'light'}, {id: 'e7', selected: false, originalColor: 'dark'}, {id: 'e6', selected: false, originalColor: 'light'}, {id: 'e5', selected: false, originalColor: 'dark'}, {id: 'e4', selected: false, originalColor: 'light'}, {id: 'e3', selected: false, originalColor: 'dark'}, {id: 'e2', selected: false, originalColor: 'light'}, {id: 'e1', selected: false, originalColor: 'dark'}],
      row6: [{id: 'f8', selected: false, originalColor: 'dark'}, {id: 'f7', selected: false, originalColor: 'light'}, {id: 'f6', selected: false, originalColor: 'dark'}, {id: 'f5', selected: false, originalColor: 'light'}, {id: 'f4', selected: false, originalColor: 'dark'}, {id: 'f3', selected: false, originalColor: 'light'}, {id: 'f2', selected: false, originalColor: 'dark'}, {id: 'f1', selected: false, originalColor: 'light'}],
      row7: [{id: 'g8', selected: false, originalColor: 'light'}, {id: 'g7', selected: false, originalColor: 'dark'}, {id: 'g6', selected: false, originalColor: 'light'}, {id: 'g5', selected: false, originalColor: 'dark'}, {id: 'g4', selected: false, originalColor: 'light'}, {id: 'g3', selected: false, originalColor: 'dark'}, {id: 'g2', selected: false, originalColor: 'light'}, {id: 'g1', selected: false, originalColor: 'dark'}],
      row8: [{id: 'h8', selected: false, originalColor: 'dark'}, {id: 'h7', selected: false, originalColor: 'light'}, {id: 'h6', selected: false, originalColor: 'dark'}, {id: 'h5', selected: false, originalColor: 'light'}, {id: 'h4', selected: false, originalColor: 'dark'}, {id: 'h3', selected: false, originalColor: 'light'}, {id: 'h2', selected: false, originalColor: 'dark'}, {id: 'h1', selected: false, originalColor: 'light'}],
      lastSelected: null,
      move: 0,
      history: []
    }
  },
  methods: {
    handleSelection(coord){
      const map = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
      }
      if(!this.lastSelected) {
        // set lastSelected to first coord
        this.lastSelected = coord;
        // increment move order
        this.move = this.move + 1;
        // add new move into history
        this.history.push(`${this.move}. ${coord}`);
        // change property 'selected' to be true of cell
        this[`row${map[coord[0]]}`][8 - coord[1]].selected = true;
      }
      else if(this.lastSelected === coord) {
        // increment move order
        this.move = this.move + 1;
        // add new move into history
        this.history.push(`${this.move}. ${coord}`);
      }
      else if(this.lastSelected && this.lastSelected !== coord) {
        this[`row${map[this.lastSelected[0]]}`][8 - this.lastSelected[1]].selected = false;
        this.lastSelected = coord;
        this[`row${map[coord[0]]}`][8 - coord[1]].selected = true;
        // increment move order
        this.move = this.move + 1;
        // add new move into history
        this.history.push(`${this.move}. ${coord}`);
      }
    }
  }
}).mount('#app')
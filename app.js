// import { store } from './store.js';

Vue.createApp({
  template: `
    <div class="container-wrapper">
      <div class="chessboard-wrapper">
        <div class="chessboard-row">
          <div @click="handleSelection('a8')" class="light">a8</div>
          <div @click="handleSelection('a7')" class="dark">a7</div>
          <div @click="handleSelection('a6')" class="light">a6</div>
          <div @click="handleSelection('a5')" class="dark">a5</div>
          <div @click="handleSelection('a4')" class="light">a4</div>
          <div @click="handleSelection('a3')" class="dark">a3</div>
          <div @click="handleSelection('a2')" class="light">a2</div>
          <div @click="handleSelection('a1')" class="dark">a1</div>
        </div>
        <div class="chessboard-row">
          <div @click="handleSelection('b8')" class="dark">b8</div>
          <div @click="handleSelection('b7')" class="light">b7</div>
          <div @click="handleSelection('b6')" class="dark">b6</div>
          <div @click="handleSelection('b5')" class="light">b5</div>
          <div @click="handleSelection('b4')" class="dark">b4</div>
          <div @click="handleSelection('b3')" class="light">b3</div>
          <div @click="handleSelection('b2')" class="dark">b2</div>
          <div @click="handleSelection('b1')" class="light">b1</div>
        </div>
        <div class="chessboard-row">
          <div @click="handleSelection('c8')" class="light">c8</div>
          <div @click="handleSelection('c7')" class="dark">c7</div>
          <div @click="handleSelection('c6')" class="light">c6</div>
          <div @click="handleSelection('c5')" class="dark">c5</div>
          <div @click="handleSelection('c4')" class="light">c4</div>
          <div @click="handleSelection('c3')" class="dark">c3</div>
          <div @click="handleSelection('c2')" class="light">c2</div>
          <div @click="handleSelection('c1')" class="dark">c1</div>
        </div>
        <div class="chessboard-row">
          <div @click="handleSelection('d8')" class="dark">d8</div>
          <div @click="handleSelection('d7')" class="light">d7</div>
          <div @click="handleSelection('d6')" class="dark">d6</div>
          <div @click="handleSelection('d5')" class="light">d5</div>
          <div @click="handleSelection('d4')" class="dark">d4</div>
          <div @click="handleSelection('d3')" class="light">d3</div>
          <div @click="handleSelection('d2')" class="dark">d2</div>
          <div @click="handleSelection('d1')" class="light">d1</div>
        </div>
        <div class="chessboard-row">
          <div @click="handleSelection('e8')" class="light">e8</div>
          <div @click="handleSelection('e7')" class="dark">e7</div>
          <div @click="handleSelection('e6')" class="light">e6</div>
          <div @click="handleSelection('e5')" class="dark">e5</div>
          <div @click="handleSelection('e4')" class="light">e4</div>
          <div @click="handleSelection('e3')" class="dark">e3</div>
          <div @click="handleSelection('e2')" class="light">e2</div>
          <div @click="handleSelection('e1')" class="dark">e1</div>
        </div>
        <div class="chessboard-row">
          <div @click="handleSelection('f8')" class="dark">f8</div>
          <div @click="handleSelection('f7')" class="light">f7</div>
          <div @click="handleSelection('f6')" class="dark">f6</div>
          <div @click="handleSelection('f5')" class="light">f5</div>
          <div @click="handleSelection('f4')" class="dark">f4</div>
          <div @click="handleSelection('f3')" class="light">f3</div>
          <div @click="handleSelection('f2')" class="dark">f2</div>
          <div @click="handleSelection('f1')" class="light">f1</div>
        </div>
        <div class="chessboard-row">
            <div @click="handleSelection('g8')" class="light">g8</div>
            <div @click="handleSelection('g7')" class="dark">g7</div>
            <div @click="handleSelection('g6')" class="light">g6</div>
            <div @click="handleSelection('g5')" class="dark">g5</div>
            <div @click="handleSelection('g4')" class="light">g4</div>
            <div @click="handleSelection('g3')" class="dark">g3</div>
            <div @click="handleSelection('g2')" class="light">g2</div>
            <div @click="handleSelection('g1')" class="dark">g1</div>
        </div>
        <div class="chessboard-row">
          <div @click="handleSelection('h8')" class="dark">h8</div>
          <div @click="handleSelection('h7')" class="light">h7</div>
          <div @click="handleSelection('h6')" class="dark">h6</div>
          <div @click="handleSelection('h5')" class="light">h5</div>
          <div @click="handleSelection('h4')" class="dark">h4</div>
          <div @click="handleSelection('h3')" class="light">h3</div>
          <div @click="handleSelection('h2')" class="dark">g1</div>
          <div @click="handleSelection('h1')" class="light">h1</div>
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
      move: 0,
      history: []
    }
  },
  methods: {
    handleSelection(coord){
      this.move = this.move + 1;
      this.history.push(`${this.move}. ${coord}`);
    }
  }
}).mount('#app')
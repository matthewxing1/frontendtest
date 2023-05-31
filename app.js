// import { store } from './store.js';

Vue.createApp({
  template: `
  <div class="sidebar">
    <h3>History</h3>
    <div v-for="move in history">
      {{move}}
    </div>
  </div>
  <div class="chessboard-wrapper">
    <table class="chessboard">
      <tbody>
        <tr>
          <td @click="handleSelection('a8')" class="light">a8</td>
          <td @click="handleSelection('b8')" class="dark">b8</td>
          <td @click="handleSelection('c8')" class="light">c8</td>
          <td @click="handleSelection('d8')" class="dark">d8</td>
          <td @click="handleSelection('e8')" class="light">e8</td>
          <td @click="handleSelection('f8')" class="dark">f8</td>
          <td @click="handleSelection('g8')" class="light">g8</td>
          <td @click="handleSelection('h8')" class="dark">h8</td>
        </tr>
        <tr>
          <td @click="handleSelection('a7')" class="dark">a7</td>
          <td @click="handleSelection('b7')" class="light">b7</td>
          <td @click="handleSelection('c7')" class="dark">c7</td>
          <td @click="handleSelection('d7')" class="light">d7</td>
          <td @click="handleSelection('e7')" class="dark">e7</td>
          <td @click="handleSelection('f7')" class="light">f7</td>
          <td @click="handleSelection('g7')" class="dark">g7</td>
          <td @click="handleSelection('h7')" class="light">h7</td>
        </tr>
        <tr>
          <td @click="handleSelection('a6')" class="light">a6</td>
          <td @click="handleSelection('b6')" class="dark">b6</td>
          <td @click="handleSelection('c6')" class="light">c6</td>
          <td @click="handleSelection('d6')" class="dark">d6</td>
          <td @click="handleSelection('e6')" class="light">e6</td>
          <td @click="handleSelection('f6')" class="dark">f6</td>
          <td @click="handleSelection('g6')" class="light">g6</td>
          <td @click="handleSelection('h6')" class="dark">h6</td>
        </tr>
        <tr>
          <td @click="handleSelection('a5')" class="dark">a5</td>
          <td @click="handleSelection('b5')" class="light">b5</td>
          <td @click="handleSelection('c5')" class="dark">c5</td>
          <td @click="handleSelection('d5')" class="light">d5</td>
          <td @click="handleSelection('e5')" class="dark">e5</td>
          <td @click="handleSelection('f5')" class="light">f5</td>
          <td @click="handleSelection('g5')" class="dark">g5</td>
          <td @click="handleSelection('h5')" class="light">h5</td>
        </tr>
        <tr>
          <td @click="handleSelection('a4')" class="light">a4</td>
          <td @click="handleSelection('b4')" class="dark">b4</td>
          <td @click="handleSelection('c4')" class="light">c4</td>
          <td @click="handleSelection('d4')" class="dark">d4</td>
          <td @click="handleSelection('e4')" class="light">e4</td>
          <td @click="handleSelection('f4')" class="dark">f4</td>
          <td @click="handleSelection('g4')" class="light">g4</td>
          <td @click="handleSelection('h4')" class="dark">h4</td>
        </tr>
        <tr>
          <td @click="handleSelection('a3')" class="dark">a3</td>
          <td @click="handleSelection('b3')" class="light">b3</td>
          <td @click="handleSelection('c3')" class="dark">c3</td>
          <td @click="handleSelection('d3')" class="light">d3</td>
          <td @click="handleSelection('e3')" class="dark">e3</td>
          <td @click="handleSelection('f3')" class="light">f3</td>
          <td @click="handleSelection('g3')" class="dark">g3</td>
          <td @click="handleSelection('h3')" class="light">h3</td>
        </tr>
        <tr>
          <td @click="handleSelection('a2')" class="light">a2</td>
          <td @click="handleSelection('b2')" class="dark">b2</td>
          <td @click="handleSelection('c2')" class="light">c2</td>
          <td @click="handleSelection('d2')" class="dark">d2</td>
          <td @click="handleSelection('e2')" class="light">e2</td>
          <td @click="handleSelection('f2')" class="dark">f2</td>
          <td @click="handleSelection('g2')" class="light">g2</td>
          <td @click="handleSelection('h2')" class="dark">h2</td>
        </tr>
        <tr>
          <td @click="handleSelection('a1')" class="dark">a1</td>
          <td @click="handleSelection('b1')" class="light">b1</td>
          <td @click="handleSelection('c1')" class="dark">c1</td>
          <td @click="handleSelection('d1')" class="light">d1</td>
          <td @click="handleSelection('e1')" class="dark">e1</td>
          <td @click="handleSelection('f1')" class="light">f1</td>
          <td @click="handleSelection('g1')" class="dark">g1</td>
          <td @click="handleSelection('a1')" class="light">h1</td>
        </tr>
      </tbody>
    </table>
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
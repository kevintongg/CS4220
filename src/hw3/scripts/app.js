const categories = 'https://api.chucknorris.io/jokes/categories';
const random = 'https://api.chucknorris.io/jokes/random';
const category = 'https://api.chucknorris.io/jokes/random?category=';
const search = 'https://api.chucknorris.io/jokes/search?query=';

const app = new Vue({
  el: '#app',

  data() {
    return {
      categoryList: [],
      currentJoke: '',
      previousJokes: [],
      selection: '',
      searchTerm: '',
      searchList: [],
    };
  },

  loaded: () => {
    this.categoryList.push('any');
  },

  methods: {
    getCategories() {
      const vm = this;
      axios({
        method: 'get',
        url: categories,
      })
        .then((response) => {
          vm.categoryList.push('any');
          response.data.forEach(element => vm.categoryList.push(element));
        })
        .then(() => console.log(this.categoryList))
        .catch(error => alert(error));
    },

    getCategoryJoke() {
      const vm = this;
      if (vm.selection === 'any' || vm.selection === '') {
        axios({
          method: 'get',
          url: random,
        })
          .then((response) => {
            console.log(response);
            if (vm.currentJoke) {
              vm.previousJokes.push(vm.currentJoke);
            }
            vm.currentJoke = response.data.value;
          })
          .catch(error => alert(error));
      } else {
        axios({
          method: 'get',
          url: `${category}${vm.selection}`,
        })
          .then((response) => {
            console.log(response);
            if (vm.currentJoke) {
              vm.previousJokes.push(vm.currentJoke);
            }
            vm.currentJoke = response.data.value;
          })
          .catch(error => alert(error));
      }
    },

    search() {
      const vm = this;
      axios({
        method: 'get',
        url: `${search}${vm.searchTerm}`,
      })
        .then((response) => {
          console.log(response);
          vm.searchList = [];
          response.data.result.forEach(element => vm.searchList.push(element.value));
        })
        .catch(error => alert(error));
    }
  }
});

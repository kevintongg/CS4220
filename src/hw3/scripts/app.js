const categories = 'https://api.chucknorris.io/jokes/categories';
const random = 'https://api.chucknorris.io/jokes/random';
const category = 'https://api.chucknorris.io/jokes/random?category=';
const search = 'https://api.chucknorris.io/jokes/search?query=';

const app = new Vue({
  el: '#app',
  data() {
    return {
      categories: '',
      current: '',
      history: '',
      selection: '',
      searchTerm: '',
      queries: '',
    };
  },
  methods: {
    getCategories() {
      const vm = this;
      const categoryList = [];
      axios({
        method: 'get',
        url: categories,
      })
        .then((response) => {
          categoryList.push('any');
          response.data.forEach(element => categoryList.push(element));
        })
        .then(() => {
          vm.categories = categoryList;
        })
        .then(() => console.log(this.categories))
        .catch(error => alert(error));
    },
    getCategoryJoke() {
      const vm = this;
      const historyList = [];
      if (vm.selection === 'any' || vm.selection === '') {
        axios({
          method: 'get',
          url: random,
        })
          .then((response) => {
            console.log(response);
            if (vm.current) {
              historyList.push(vm.current);
            }
            vm.current = response.data.value;
            vm.history = historyList;
          })
          .catch(error => alert(error));
      } else {
        axios({
          method: 'get',
          url: `${category}${vm.selection}`,
        })
          .then((response) => {
            console.log(response);
            if (vm.current) {
              historyList.push(vm.current);
            }
            vm.current = response.data.value;
            vm.history = historyList;
          })
          .catch(error => alert(error));
      }
    },
    search() {
      const vm = this;
      const queryList = [];
      axios({
        method: 'get',
        url: `${search}${vm.searchTerm}`,
      })
        .then((response) => {
          console.log(response);
          response.data.result.forEach(element => queryList.push(element.value));
        })
        .then(() => {
          vm.queries = queryList;
        })
        .catch(error => alert(error));
    },
  },
});

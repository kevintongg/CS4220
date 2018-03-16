const categories = 'https://api.chucknorris.io/jokes/categories';
const random = 'https://api.chucknorris.io/jokes/random';
const category = 'https://api.chucknorris.io/jokes/random?category=';
const search = 'https://api.chucknorris.io/jokes/search?query=';

const app = new Vue({
  el: '#app',
  data() {
    return {
      categories: [],
      current: '',
      history: [],
      selection: '',
      searchTerm: '',
      queries: [],
    };
  },
  methods: {
    getCategories() {
      const vm = this;
      axios({
        method: 'get',
        url: categories,
      })
        .then((response) => {
          vm.categories = [];
          vm.categories.push('any');
          response.data.forEach(element => vm.categories.push(element));
        })
        .then(() => console.log(this.categories))
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
            if (vm.current) {
              vm.history.push(vm.current);
            }
            vm.current = response.data.value;
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
              vm.history.push(vm.current);
            }
            vm.current = response.data.value;
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
          vm.queries = [];
          response.data.result.forEach(element => vm.queries.push(element.value));
        })
        .catch(error => alert(error));
    }
  }
});

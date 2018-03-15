const randomJokeURL = 'https://api.chucknorris.io/jokes/random';
const categoriesURL = 'https://api.chucknorris.io/jokes/categories';


const SECTIONS = 'home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world'; // From NYTimes

// Vue.component('dropdown', {
//   template: '#categories',
//
//   mounted: () => {
//     this.getCategories()
//       .then(data => this.getCa);
//   },
//
//   data: () => ({
//     categories: []
//   }),
//
//   methods: {
//     getCategories: () => {
//       const d = $.Deferred();
//     }
//   }
// });

const categories = new Vue({
  el: '#dropdown',

  data: {
    categories: [],
  },

  methods: {
    // getCategories: () => {
    //   const vm = this;
    //   axios({
    //     method: 'get',
    //     url: categoriesURL,
    //     responseType: 'application/json',
    //   })
    //     .then((response) => {
    //       response.data.forEach(e => vm.categories.push(e));
    //     })
    //     .then(() => console.log(this.categories))
    //     .catch(error => console.error(error));
    // }
    getCategories: () => {
      const vm = this;
      const categoryList = [];
      axios.get(categoriesURL, {
        headers: {
          Accept: 'application/json',
        }
      })
        .then((response) => {
          console.log(response);
          // vm.categories.push(vm.data);
          response.data.forEach(e => categoryList.push(e));
        })
        .then(() => categoryList)
        .catch(error => console.error(error));
    }
  }
});

// axios({
//   method: 'get',
//   url: categoriesURL,
//   responseType: 'application/json',
// })
//   .then((response) => {
//     response.data.forEach(e => categoryList.push(e));
//   })
//   .then(() => console.log(categoryList))
//   .catch(error => console.error(error));
//
// setTimeout(() => {
//   const chuck = new Vue({
//     el: '#chuck',
//     data: {
//       appName: 'Chuck Norris Jokes',
//       categories: categoryList,
//       category: 'Any',
//       isLoading: false,
//       sections: SECTIONS.split(', '), // create an array of the sections
//       section: 'home', // set default section to 'home'
//     },
//     methods: {
//       getJoke() {
//         this.isLoading = true;
//         const vm = this;
//
//         axios.get('https://api.chucknorris.io/jokes/random', {
//           headers: {
//             Accept: 'application/json'
//           }
//         })
//           .then((response) => {
//             vm.isLoading = false;
//           });
//       }
//     }
//   });
// }, 1000);

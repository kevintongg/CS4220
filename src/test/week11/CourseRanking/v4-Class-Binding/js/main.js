new Vue({
  el: '#app',
  data: {
    courses: Seed.courses
  },
  computed: {
    sortedCourses() {
      return this.courses.sort((a, b) => b.votes - a.votes);
    }
  },
  methods: {
    upvote(courseId) {
      const course = this.courses.find(course => course.id === courseId);
      course.votes++;
    }
  }
});

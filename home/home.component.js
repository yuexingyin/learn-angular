// angular.
// module('kdhome').
// directive("kdhome", function() {
//     return {
//         restrict: 'E',
//         templateUrl: "home/home.html"
//     };
// });

angular.
module('kdhome').
component('kdhome', {
    templateUrl: 'home/home.html',
    controller: ['CourseList',
    function CourseListController(Course) {
        this.courseList = Course.query();
    }
]
});
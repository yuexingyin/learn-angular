angular.
module('kdcourse').
component('kdcourse', {
    templateUrl: 'kdcourse/kdcourse.html',
    controller: ['CourseList',
        function CourseListController(Course) {
            this.courseList = Course.query();
        }
    ]
});
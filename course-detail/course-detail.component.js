'use strict';

angular.
module('courseDetail').
component('courseDetail', {
    templateUrl: 'course-detail/course-detail.html',
    controller: ['$routeParams', 'Course',
        function CourseDetailController($routeParams, Course) {
            var self = this;
            self.course = Course.query({courseId: $routeParams.courseId});
        }
    ]
});
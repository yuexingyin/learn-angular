'use strict';

angular.
module('courseDetail').
factory('Course', ['$resource',
    function($resource) {
        return $resource('http://127.0.0.1:8080/course/courses/:courseId', {} , {
            query: {
                method: 'GET',
                params : {courseId : 'courses'},
                isArray: false
            }
        });
    }
]);
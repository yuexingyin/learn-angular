'use strict';

angular.
module('kdcourse').
factory('CourseList', ['$resource',
    function($resource) {
        return $resource('http://127.0.0.1:8080/course/courses', {} , {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
]);
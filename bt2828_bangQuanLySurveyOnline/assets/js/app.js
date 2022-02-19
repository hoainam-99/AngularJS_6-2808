angular.module('myApp', []).controller('myCtrl', function($scope){
    $scope.surveyList = [
        {
            title: 'Widget Survey',
            status: true,
            questions: 2,
            type: 'Anonymized',
            view: 'All In One',
            date: '2020-06-11',
        },{
            title: 'Test Button',
            status: true,
            questions: 3,
            type: 'Anonymized',
            view: 'All In One',
            date: '2020-06-11',
        },{
            title: 'Test 33',
            status: true,
            questions: 3,
            type: 'Anonymized',
            view: 'Question By Question',
            date: '2020-04-24',
        },{
            title: 'Test after update',
            status: false,
            questions: 6,
            type: 'Anonymized',
            view: 'All In One',
            date: '2020-04-30',
        },{
            title: 'Lorem Ipsum',
            status: true,
            questions: 17  ,
            type: 'Anonymized',
            view: 'All In One',
            date: '2020-22-04',
        },{
            title: 'Test New 1',
            status: true,
            questions: 2,
            type: 'Anonymized',
            view: 'All In One',
            date: '2020-06-01',
        }
    ];
})
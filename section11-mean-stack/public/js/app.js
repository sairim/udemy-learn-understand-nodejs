angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message = 'Γεια!';
    this.people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jim Dungan'
        },
        {
            name: 'Jane Adams'
        }
    ];
}
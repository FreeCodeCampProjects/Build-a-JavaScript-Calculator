/* ( x ) Here we have all elements within the div container animate upon load — using classes
   from the "animate.css" library. In this particular instance, we have a horizontal
   flip animation:
*********************************************************************************************/

$('.calculator-container').addClass('animated flipInY');

let app = angular.module('calculator', []);

/* ( x ) Let's use Angular to save on code:

   1. First, we create a controller.
   2. Then we add an array within the controller's
      scope — to populate calculator's buttons.
   3. Add a switch statement to determine
      functionality for each button.
*********************************************/

app.controller('CalcCtrl', function($scope) {
  $scope.buttons = [
    '1', '2', '3', ' + ',
    '4', '5', '6', ' - ',
    '7', '8', '9', ' * ',
    '.', '0', '=', ' / ',
    'clear'
    ],
  $scope.buttonEvt = function(val) {
    switch(val) {
      case $scope.buttons[13]: // 0
      case $scope.buttons[0]:  // 1
      case $scope.buttons[1]:  // 2
      case $scope.buttons[2]:  // 3
      case $scope.buttons[3]:  // +
      case $scope.buttons[4]:  // 4
      case $scope.buttons[5]:  // 5
      case $scope.buttons[6]:  // 6
      case $scope.buttons[7]:  // -
      case $scope.buttons[8]:  // 7
      case $scope.buttons[9]:  // 8
      case $scope.buttons[10]: // 9
      case $scope.buttons[11]: // *
      case $scope.buttons[15]: // /
      case $scope.buttons[12]: // .
        calculator.answer.value += '' + val + '';
        break;
      case $scope.buttons[14]: // =
        calculator.answer.value = eval(calculator.answer.value);
        break;
      case $scope.buttons[16]: // C
        calculator.answer.value = '';
        break;
      }
    }
});
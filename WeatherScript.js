
var app=angular.module('myModule',[])
app.controller('myController', function($scope,$http){
    const myKey = "5c9d06d901f34be2628ac1d9010c70b4";  
             $scope.searchCity= function(){
                      $http.get( `https://api.openweathermap.org/data/2.5/weather?q=`+$scope.cities+`&appid=`+ myKey)
                      .then(function(response){
                        $scope.data=response.data;
                        $scope.Name=$scope.data.name;
                        $scope.Temp=$scope.data.main.temp;
                        $scope.Pressure=$scope.data.main.pressure;
                        $scope.InCelcius=$scope.Temp-273.15;
                        $scope.TemperatureValue=$scope.InCelcius.toFixed(2);
                        console.log($scope.Name);
                        console.log($scope.Pressure);
                        console.log($scope.TemperatureValue);
                        var defaultBgImg = document.getElementById('defaultBgImg')
                        var hotCityBgImg = document.getElementById('hotCityBgImg')
                        var coldCityBgImg = document.getElementById('coldCityBgImg')
                        var defaultCityBgImg = document.getElementById('defaultCityBgImg')
                        if ($scope.TemperatureValue > 20){
                            defaultBgImg.style.display = 'none'
                            hotCityBgImg.style.display = 'block'
                            coldCityBgImg.style.display = 'none'
                            defaultCityBgImg.style.display = 'none'
                           }
                          else if($scope.TemperatureValue <20 && $scope.TemperatureValue >10){
                            defaultBgImg.style.display = 'none'
                            hotCityBgImg.style.display = 'none'
                            coldCityBgImg.style.display = 'none'
                            defaultCityBgImg.style.display = 'block'
                          }
                          else{
                            defaultBgImg.style.display = 'none'
                            hotCityBgImg.style.display = 'none'
                            coldCityBgImg.style.display = 'block'
                            defaultCityBgImg.style.display = 'none'
                          }
                    })
                 }
})
/**
 * Created by NamDaeHyun on 2016. 12. 28..
 */
var myModule = angular.module('DanialGithubPage',
  [
    'ngRoute',
    'ngAnimate',
    'DanialGithubPage.Main',
    'angular-google-analytics'
  ]);

myModule.config(["$routeProvider", "AnalyticsProvider", function($routeProvider, AnalyticsProvider) {
  $routeProvider
      .when('/welcome', {
          templateUrl: 'public/html/welcome.html'
      })
      .when('/main/:section', {
          templateUrl: 'public/html/main.html'
          // controller: 'SettingCtrl',
          // controllerAs: 'set'
      })
      .otherwise({redirectTo: '/welcome'});
  window.dataLayer = window.dataLayer || [];
  var url = window.location.href;     // Returns full URL
  if(!url.includes("127.0.0.1:8080")){
    AnalyticsProvider.setAccount('UA-124568449-1');
  }

}]);

myModule.run(["Analytics", "languageService", function(Analytics, languageService) {
  languageService.setLanguage("en");
}]);

angular.element(function() {
  // angular.bootstrap(document, ['DanialGithubPage']);
});

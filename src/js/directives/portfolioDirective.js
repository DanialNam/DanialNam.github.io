angular.module("DanialGithubPage.Main")
  .directive('portfolio', ["$timeout", "$location", "$window", "portfolioFactory", "$rootScope",
  function(timeout, location, $window, portfolioFactory, rootScope) {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'public/html/portfolio.html',
      link: function(scope, element, attrs, controller) {
        rootScope.showNotebookUrl = false;

        rootScope.notebookUrl = ""

        scope.portfolios = portfolioFactory.getPortfolios();

        setListMargin();

        function setListMargin(){
          section_width = $('.section--box')[0].clientWidth;
          section_height = $('.section--box')[0].clientHeight;
          portfolio_ul_width = $('.portfolio--ul')[0].clientWidth;
          portfolio_ul_height = $('.portfolio--ul')[0].clientHeight;
          scope.showcaseWidthStyle = {
            "width" : portfolio_ul_width + 5 + "px",
            "height" : portfolio_ul_height + "px"
          };
          scope.descriptionHeight = portfolio_ul_height - 40 + "px";
          scope.closeBtnPosition = {
            "right" : (section_width - portfolio_ul_width)/2 - 15 + "px",
            "top" : (section_height - portfolio_ul_height)/2 + "px"
          };
          if(section_width > 800){
            scope.firstColumnMarginLeft = (800 - 645)/2 + "px";
          }else if(section_width > 645){
            scope.firstColumnMarginLeft = (section_width - 645)/2 + "px";
          }else{
            scope.firstColumnMarginLeft = "";
          }
        };

        scope.$watch('portfolio', function(newVal, oldVal){
          setListMargin();
        });

        angular.element($window).bind('resize', function(){
          setListMargin();
          scope.$digest();
        });

        scope.clickPortfolio = function(index){
          if(scope.showcaseWidthStyle.height == "0px") setListMargin();
          scope.showPortfolioDetail = true;
          scope.contents = {};
          angular.copy(scope.portfolios[index], scope.contents);
          timeout(function(){
            scope.isContentsReady = true;
          }, 500);
        }

        scope.closeShowcase = function(){
          scope.isContentsReady = false;
          scope.showPortfolioDetail = false;
          scope.contents.video_url = "";
          timeout(function(){
            scope.contents = {};
          }, 500);
        }

        scope.clickShowNotebookBtn = function(url){
          rootScope.showNotebookUrl = true;
          rootScope.notebookUrl = url;
        }

        rootScope.closeNotebookShowcase = function(){
          rootScope.showNotebookUrl = false;
          rootScope.notebookUrl = "";
        }

      }
    };

  }]);

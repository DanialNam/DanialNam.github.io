/**
 * Created by NamDaeHyun on 2017. 2. 17..
 */

angular.module("DanialGithubPage.Main")
  .factory("portfolioFactory", ["$rootScope", "$sce", function(rootScope, sce){

    function getPortfolios(){
      var glob = rootScope.glob;
      /*
      type 0 : just for me
      type 1 : walmart project
      type 2 : front-end
      type 3 : ongoing
      */
      return [
        {
          "type" : 3,
          "about" : "Deep Learning(CNN)",
          "isOngoing" : true,
          "title" : "Humpback Whale Identification",
          "description" : glob["humpback whale identification description"],
          "description_detail" : sce.trustAsHtml(glob["humpback whale identification description detail"]),
          "algorithm" : "Convolutional Neural Network",
          "programmingLanguage" : "",
          "lang_li" : ["python"],
          "framework" : "",
          "server" : "AWS EC2",
          "package" : "Numpy, Pandas, Matplotlib, Seaborn, Tensorflow",
          "product_url_txt" : "Github Repository",
          "product_url" : "https://github.com/DanialDaeHyunNam/Humpback_Whale_Identification",
          "demo_url_txt" : "",
          "demo_url" : "",
          "is_video" : false,
          "class" : "portfolio--humpback--whale",
          "previewClass" : "portfolio--humpback--whale",
          "notebookUrl" : "",
          "code" : "humpback--whale--identification"
        },
        {
          "type" : 1,
          "about" : "Classification",
          "title" : "Walmart Trip Type Classification",
          "description" : glob["walmat_triptype_description"],
          "description_detail" : sce.trustAsHtml(glob["walmat_triptype_description_detail"]),
          "algorithm" : "Gradient Descent Boosting",
          "programmingLanguage" : "",
          "lang_li" : ["python"],
          "framework" : "",
          "server" : "",
          "package" : "Numpy, Pandas, Matplotlib, Seaborn, XGBoost, Scikitlearn",
          "product_url_txt" : "Github Repository",
          "product_url" : "https://github.com/DanialDaeHyunNam/Walmart_Trip_Type_Classification",
          "demo_url_txt" : "Kaggle Competition",
          "demo_url" : "https://www.kaggle.com/c/walmart-recruiting-trip-type-classification",
          "is_video" : false,
          "class" : "portfolio--walmart--triptype",
          "previewClass" : "walmart--triptype--preview",
          "notebookUrl" : "public/html/Walmart_TripType.html",
          "code" : "walmart_triptype"
        },
        {
          "type" : 3,
          "about" : "NLP & LDA Topic Modeling",
          "isOngoing" : true,
          "title" : "Topic modeling of Instagram posts",
          "description" : glob["insta_scrapy_description"],
          "description_detail" : sce.trustAsHtml(glob["insta_scrapy_description detail"]),
          "algorithm" : "Nature Language Processing, LDA Topic Modeling",
          "programmingLanguage" : "",
          "lang_li" : ["python"],
          "framework" : "Scrapy",
          "server" : "",
          "package" : "Numpy, Pandas, Matplotlib, Seaborn, Tensorflow",
          "product_url_txt" : "Github Repository",
          "product_url" : "https://github.com/DanialDaeHyunNam/Topic_Modeling_Of_Instagram_Posts",
          "demo_url_txt" : "",
          "demo_url" : "",
          "is_video" : false,
          "class" : "portfolio--instagram--scrapy",
          "previewClass" : "portfolio--instagram--scrapy",
          "notebookUrl" : "public/html/Instagram-Data-Clustering.html",
          "code" : "instagram--topic--modeling"
        },
        {
          "type" : 0,
          "about" : "App Development",
          "title" : "Just For Me",
          "description" : glob["jfm_description"],
          "algorithm" : "",
          "programmingLanguage" : "JAVA, HTML/CSS, Javascript, Typescript, MySQL",
          "lang_li" : ["java", "html5", "angular", "js-square", "aws"],
          "framework" : "Spring boot, Cordova, AngularJS 1.X, JPA",
          "server" : "AWS(EC2, S3, RDS, SES, Lambda)",
          "package" : "",
          "product_url_txt" : "Appstore",
          "product_url" : "https://itunes.apple.com/app/just-for-me/id1212756322?mt=8",
          "demo_url_txt" : "Youtube Demo Video",
          "demo_url" : "https://www.youtube.com/watch?v=nfakb_5zkaY",
          "is_video" : true,
          "video_url" : sce.trustAsResourceUrl("../../video/jfm_tutorial.mp4#toolbar=0"),
          "class" : "portfolio--jfm",
          "notebookUrl" : "",
          "previewClass" : "",
          "code" : "jfm"
        },
        {
          "type" : 1,
          "about" : "Linear Regression",
          "title" : "Walmart Sales in Stormy Weather Project",
          "description" : glob["walmat_stormy_description"],
          "description_detail" : sce.trustAsHtml(glob["walmat_stormy_description_detail"]),
          "programmingLanguage" : "",
          "lang_li" : ["python"],
          "algorithm" : "Ordinary Least Squares",
          "framework" : "",
          "server" : "",
          "package" : "Numpy, Pandas, Matplotlib, Seaborn, Statsmodel",
          "product_url_txt" : "Github Repository",
          "product_url" : "https://github.com/DanialDaeHyunNam/Walmart_Sales_in_Stormy_Weather_Project_by_Python",
          "demo_url_txt" : "Kaggle Competition",
          "demo_url" : "https://www.kaggle.com/c/walmart-recruiting-sales-in-stormy-weather",
          "is_video" : false,
          "video_url" : "",
          "class" : "portfolio--walmart--stormy",
          "previewClass" : "walmart--stormy--preview",
          "notebookUrl" : "public/html/Walmart Sales in Stormy Weather Project.html",
          "code" : "walmart_stormy_weather"
        },
        {
          "type" : 2,
          "about" : "Front End",
          "title" : "Danial's portfolio web site",
          "description" : glob["portfolio_description"],
          "algorithm" : "",
          "programmingLanguage" : "HTML/CSS, Javascript",
          "lang_li" : ["html5", "css3", "angular", "js-square"],
          "framework" : "AngularJS 1.X, Gulp",
          "server" : "Github Blog",
          "package" : "",
          "product_url_txt" : "Url",
          "product_url" : "?",
          "demo_url_txt" : "",
          "demo_url" : "",
          "is_video" : false,
          "video_url" : "",
          "class" : "portfolio--portfolioSite",
          "previewClass" : "portfolio--preview",
          "notebookUrl" : "",
          "code" : "portfolio_web"
        },
        {
          "type" : 2,
          "about" : "Front End",
          "title" : "Databuzz team tech blog",
          "description" : glob["databuzz_team_tech_blog"],
          "description_detail" : sce.trustAsHtml(glob["databuzz_team_tech_blog_detail"]),
          "algorithm" : "",
          "programmingLanguage" : "Pug, CSS, Markdown",
          "lang_li" : ["html5", "css3", "markdown", "js-square"],
          "framework" : "Hexo",
          "server" : "",
          "package" : "",
          "product_url_txt" : "Url",
          "product_url" : "https://databuzz-team.github.io/categories/Danial-Nam/",
          "demo_url_txt" : "",
          "demo_url" : "",
          "is_video" : false,
          "class" : "portfolio--databuzz--blog",
          "previewClass" : "databuzz--blog--preview",
          "notebookUrl" : "",
          "code" : "databuzz_blog"
        }
      ];
    }

    return {
      getPortfolios:getPortfolios
    };

  }]);

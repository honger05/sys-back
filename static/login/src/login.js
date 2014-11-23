define(function(require){

  var $ = require("jquery");
  require("easing");

  $(".login-box").animate({
    opacity:'0.9',
    width:'500px',
    height:'330px'
  },{
    duration:2000,
    easing:'easeInOutCirc'
  });

});
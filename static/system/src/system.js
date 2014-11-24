define(function(require){

  var Tip = require("tip");
  var $ = require("$");


  $(".left-bar1-ul li").each(function(){
    $(this).on("click",function(){
      if(!($(".sys-left-bar2").is(":visible"))) {
        $(".sys-left-bar2").fadeToggle();
        $("#switchBarBtn").removeClass("icon-circle-arrow-right").addClass("icon-circle-arrow-left");
      }
      var index = $(this).index(".left-bar1-ul li");
      $(".left-bar1-ul li").removeClass("bar1-active");
      $(".bar2").hide();
      $(".left-bar1-ul li").eq(index).addClass("bar1-active");
      $(".bar2").eq(index).show();
    });
  });

  $("#switchBarBtn").click(function(){
    if($(".sys-left-bar2").is(":visible")){
      $(".content").animate({left: '-1650px'}, "slow");
      $(".content").animate({left: '+1650px'}, "slow");
      $(".content").animate({left: '0px'}, "slow");
      $(".sys-left-bar2").fadeToggle();
      $(this).removeClass("icon-circle-arrow-left").addClass("icon-circle-arrow-right");
    }else{
      $(".content").animate({left: '-1650px'}, "slow");
      $(".content").animate({left: '+1650px'}, "slow");
      $(".content").animate({left: '0px'}, "slow");
      $(".sys-left-bar2").fadeToggle();
      $(this).removeClass("icon-circle-arrow-right").addClass("icon-circle-arrow-left");
    }
  });



//提示
  new Tip({
    trigger: '#sysSignOut',
    content: '<div style="padding:2px">登出</div>',
    theme: 'blue',
    effect: 'slide',
    arrowPosition: 11
  });

  new Tip({
    trigger: '#sysComments',
    content: '<div style="padding:2px">业务模块</div>',
    theme: 'blue',
    effect: 'slide',
    arrowPosition: 10
  });

  new Tip({
    trigger: '#sysSetting',
    content: '<div style="padding:2px">系统设置</div>',
    theme: 'blue',
    effect: 'slide',
    arrowPosition: 10
  });

  new Tip({
    trigger: '#sysOther',
    content: '<div style="padding:2px">其他</div>',
    theme: 'blue',
    effect: 'slide',
    arrowPosition: 10
  });


});
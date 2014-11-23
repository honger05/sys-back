define(function(require){

  var Tip = require("tip");

  new Tip({
    trigger: '#sysSignOut',       // 触发器
    content: '<div style="padding:2px">登出</div>',    // 提示框显示的内容
    theme: 'blue',
    effect: 'fade',
    arrowPosition: 11       // 11点钟的箭头位置
  });

  new Tip({
    trigger: '#sysCogs',       // 触发器
    content: '<div style="padding:2px">设置</div>',    // 提示框显示的内容
    theme: 'blue',
    effect: 'fade',
    arrowPosition: 11       // 11点钟的箭头位置
  });

});
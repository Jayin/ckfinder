CKFinder.define(function() {

  var MyPlugin = {
    init: function(finder) {
      //点击文件夹就展开             
      finder.on('folder:selected', function(evt) {
        $('.ui-btn-active').next().click();
      });
      //文件信息：日期和文件大小同一行显示
      finder.on('folder:getFiles:after', function(evt) {
        var $descs = $('.ckf-file-desc p');
        for (var i = 0; i < $descs.length; i++) {
          var e = $descs[i];
          var outerHTML = e.outerHTML;
          var innerHTML = e.innerHTML;
          var sp = innerHTML.split('<br>');
          e.innerHTML = '<span class="jy-date">' + sp[0] + '</span><span class="jy-size" style="float: right;">' + sp[1] + '</span>';
        }
      });
    }
  };

  return MyPlugin;
});

$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btncal=$('#calculate'),
      $perimeter=$("#perimeter"),
      $area=$('#area');
$btncal.click(function(){
  var w=$width.val()
      h=$height.val();
  var rect=rectangle;
  $perimeter.val(rect.perimeter);
  $area.val(rect.area);

});
  
});

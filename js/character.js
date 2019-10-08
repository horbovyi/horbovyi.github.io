$(function(){
   var mouseX = 0, mouseY = 0, limitX = window.outerWidth - 110, limitY = 93-93;
   $(window).mousemove(function(e){
      var offset = $('.character-move-wrap').offset();
         mouseX = Math.min(e.pageX - offset.left, limitX);
         mouseY = Math.min(e.pageY - offset.top, limitY);
         if (mouseX < 0) mouseX = 0;
         if (mouseY < 0) mouseY = 0;
   });
   var follower = $("#character");
   var xp = 0, yp = 0;
   var loop = setInterval(function(){
       xp += (mouseX - xp) / 20;
       yp += (mouseY - yp) / 20;
       follower.css({left:xp, top:yp});
       
   }, 10); 
});
$(function(){
    var i=0;
    time=setInterval(run,2000);
    //给图片添加移入事件
    $('.con-top .con-img').mouseenter(function(){
        clearInterval(time);
    })
    //给图片添加移出事件
    $('.con-top .con-img').mouseleave(function(){
        time=setInterval(run,2000);
    })
    //给下面小图片添加移入事件
    $('.con-btn ul li').mouseenter(function(){
        clearInterval(time);
        var t=$(this)
        //解决快速切换的效果
        dtime=setTimeout(function(){
            var tthis=t.index();
            $('.con-top .con-img').eq(tthis).stop().fadeIn(500).siblings('.con-top .con-img').stop().fadeOut(500);
            $('.con-btn ul li div').removeClass('hid');
            $('.con-btn ul li div').eq(tthis).addClass('hid')
        },100)
    })
    //给下面小图片添加移出事件
    $('.con-btn ul li').mouseleave(function(){
        clearTimeout(dtime);
        time=setInterval(run,2000);
    })
    //运动函数
    function run(){
        var t=$('.con-btn ul li div').length;
        i++;
        if(i==t){
            i=0
        }
        $('.con-top .con-img').eq(i).stop().fadeIn(500).siblings('.con-top .con-img').stop().fadeOut(500);
        $('.con-btn ul li div').removeClass('hid');
        $('.con-btn ul li div').eq(i).addClass('hid')
    }
})
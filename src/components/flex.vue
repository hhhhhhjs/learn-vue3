<script>
export default{
    name:'flex-name'
}
</script>
<template>
    <body>
    <div class="outer">



<div class="top">
<div class="top1">
    <img src="https://p3-passport.byteimg.com/img/user-avatar/bd71b126b95e858f6665cb7af147d32c~180x180.awebp" alt="小狗">
</div>
<div class="top2">
<div class="top21">Being Think</div>

<div class="top22"> 
    <div class="one">10 粉丝</div>
        <div class="two"> | </div>
            <div class="three">4 关注</div>
                <div class="four">| </div>
                    <div class="five">146 掘力值</div>
                        <div class="six">| </div>
                            <div class="seven">在掘金创作的第1208天</div>
        
    </div>

</div>
</div>
<div class="bottom"> 
<div class="bottom1">
<div class="bottom11">数据概览
    <!-- <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/4a971af564875b899b3847269d3f2a7e.svg" /> -->
</div>
<div class="bottom12">
    <div>查看更多 >  </div></div>

</div>
<div class="bottom2">

<div class="bottom31">
    <div class="bottom21">
        <div class="bottom21-1">
        <span style="color:#4e5969;line-height: 22px;font-size:14px">总粉丝数</span>
        <div style="color:#1d2129;font-weight:600;font-size:32px;">0</div>
        <span style="color:#4e5969;line-height: 22px;font-size:14px">较前日 --</span>
        </div>
    </div>
    <div class="bottom22">
        <div class="bottom22-1">
        <span style="color:#4e5969;line-height: 22px;font-size:14px">文章展现数</span>
        <div style="color:#1d2129;font-weight:600;font-size:32px;">0</div>
        <span style="color:#4e5969;line-height: 22px;font-size:14px">较前日 --</span>
        </div>
    </div>
    <div class="bottom23">
        <div class="bottom23-1">
        <span style="color:#4e5969;line-height: 22px;font-size:14px">文章阅读数</span>
        <div style="color:#1d2129;font-weight:600;font-size:32px;">0</div>
        <span style="color:#4e5969;line-height: 22px;font-size:14px">较前日 --</span>
        </div>
    </div>
    </div>
    <div class="bottom32">
    <div class="bottom24">
        <div class="bottom24-1">
        <span style="color:#4e5969;line-height: 22px;font-size:14px">文章点赞数</span>
        <div style="color:#1d2129;font-weight:600;font-size:32px;">0</div>
        <span style="color:#4e5969;line-height: 22px;font-size:14px">较前日 --</span>
        </div>
    </div>
    <div class="bottom25">
        <div class="bottom25-1">
        <span style="color:#4e5969;line-height: 22px;font-size:14px">文章评论数</span>
        <div style="color:#1d2129;font-weight:600;font-size:32px;">0</div>
        <span style="color:#4e5969;line-height: 22px;font-size:14px">较前日 --</span>
        </div>
    </div>
    <div class="bottom26">
        <div class="bottom26-1">
        <span style="color:#4e5969;line-height: 22px;font-size:14px">文章收藏数</span>
        <div style="color:#1d2129;font-weight:600;font-size:32px;">0</div>
        <span style="color:#4e5969;line-height: 22px;font-size:14px">较前日 --</span>
        </div>
    </div>
    </div>
</div>
</div>

</div>
</body>
</template>
<style scoped>
 :root{
        --primary-color:#f7f8fa;
        --primary-font-size:32px;
        --prrmary-line-height:42px;

    }
    html{
        background-color: #f2f3f5;
    }
    img{
        width: 72px;
        height:72px;
        border-radius: 50%;
        box-shadow: 5px;
      
        transition-property: none;
        /* transition-duration: 3s;
        transition-timing-function: linear;
        transition-delay:2s; */
        
    }
    /* img:hover{
        width:200px;

       
    } */
    /* .outer{ */
        
        /* display: flex;
        flex-direction: column;
         */
      
        
    /* } */
      
body{
    margin-top: 50px;
    margin-left:350px;
    margin-right:350px;

}

.top{
    display: flex;
    flex-direction: row;
    height: 100px;
    background-color: #fff;
   
}
.top2{
    margin:14px;
}



.top21{
    font-weight: 500;
    font-size: 20px;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
}

.top22{
    
    margin-top: 12px;
    cursor:pointer;
    font-style:normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #8a919f;
    display:flex;
    justify-content: center;
}
.two{
    margin-right: 6px;
    margin-left: 6px;
}

.four{
    margin-right: 6px;
    margin-left: 6px;
}
.six{
    margin-right: 6px;
    margin-left: 6px;
}


.bottom{
    margin-top: 10px;
    background-color: #fff;
    height:373px;
    
    
}
.bottom11{
    font-size: 18px;
    margin-top:10px;
    margin-bottom: 10px;
    margin-left: 10px;
}

.bottom12{
    height: 24px;
    cursor:pointer;
    font-size: 14px;
    line-height: 24px;
    color:#86909c;
    /* display: flex;
    justify-content: center;
    */

    margin-top:10px;
    margin-bottom: 10px;
    margin-right: 10px;
}
.bottom1{
    height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom-color:var(--primary-color);
    border-width: 5px;
    border-bottom-style:solid;
    
}
.bottom2{
    padding:20px;
    display: flex;
    flex-direction: column;
   
    
}
.bottom21{
    background-color:#f7f8fa ;
    width: calc(100%/3);
    margin-right: 20px;
    margin-bottom:20px;
    
}
.bottom22{
    background-color: #f7f8fa;
    width: calc(100%/3);
    margin-right:20px;
    margin-bottom:20px;
   
}

.bottom23{
    width: calc(100%/3);
    background-color: #f7f8fa;
    margin-bottom:20px;
    
}

.bottom24{
    width: calc(100%/3);
    margin-right: 20px;
    background-color: #f7f8fa;
    
}
.bottom25{
    width: calc(100%/3);
    margin-right:20px;
    background-color: #f7f8fa;
}
.bottom26{
    width: calc(100%/3);
    background-color: #f7f8fa;
    
}
.bottom21-1{
    margin-left:20px;
    height:calc(100%/2)
}
.bottom22-1{
    margin-left: 20px;
    height:calc(100%/2)
}
.bottom23-1{
    margin-left: 20px;
    height:calc(100%/2)
}
.bottom24-1{
    margin-left: 20px;
    height:calc(100%/2)
}
.bottom25-1{
    margin-left:20px;
    height:calc(100%/2)
}
.bottom26-1{
    margin-left:20px;
    height:calc(100%/2)
}
.bottom31{
    display: flex;
    justify-content: center;
}
.bottom32{
    display: flex;
    justify-content: center;
}
</style>
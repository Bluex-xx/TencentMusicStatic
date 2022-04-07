window.onload=function()//网页加载完毕后加载js
{
    let left=document.getElementById("left");
    let right=document.getElementById("right");
    let mainimg=document.getElementById("mainimg");
    let li=document.getElementsByClassName("buttonli");
    let sum=mainimg.style.left;
    let index=0;//当前页数，第一页为0
    let color=function (judge)//pointClick颜色判断
    {
        mainimg.style.left=sum+"px";
        for (let i=0;i<li.length;i++) {
            li[i].style.background = "";
            if (i==judge)//当前页数则变灰
            {
                li[i].style.background="grey";
            }
            pointClick(i);//给每个pointClick绑定响应函数
        }
    }
    let pointClick=function (a)
    {
        li[a].onclick=function ()
        {
         sum=-1200*a;
         color(a);
        }
    }
    color(index);
    right.onclick=function ()//下一张响应函数
    {
        sum-=1200;
        index++;
        if (sum<-2400)//最后一张的下一站为第一张
        {
            sum=0;
            index=0;
        }
        color(index);//每次切换后都要更新一下底部pointClick颜色
    }
    left.onclick=function ()//上一张响应函数
    {
        sum+=1200;
        index--;
        if (sum>0)//第一张的前一张为最后一张
        {
            sum=-2400;
            index=2;
        }
        color(index);//每次切换后都要更新一下底部pointClick颜色
    }
    
}

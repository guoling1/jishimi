function WritePager(pageIndex,pageCount,pageName,ext){
    if(pageCount>1){
        var pagelen=10;
        var startPage=pageIndex-3;
        if(startPage<0) startPage=0;
        var endpage=pagelen+startPage;
        if(endpage>pageCount)endpage=pageCount;

        startPage=endpage-20;
        if(startPage<0) startPage=0;
        if(pageIndex>1)  {
            document.write("<span class=\"fy01\"><a target=\"_self\" href=\""+pageName+"_"+(pageIndex-1)+"."+ext+"\">&lt;上一页</a></span>");
        }
        else if(pageIndex==1){
            document.write("<span class=\"fy01\"><a target=\"_self\" href=\""+pageName+"."+ext+"\">&lt;上一页</a></span>");
        }
        else{
            document.write("<span class=\"fy01\">&lt;上一页</span>");
        }

        for(var i=startPage;i<endpage;i++){
            if(i==pageIndex){
                document.write("<span class=\"fy02\"><font color=\"#ff0000\">"+(i+1)+"</font></span></li>");
            }else if(i==0){
                document.write("<span class=\"fy02\"><a target=\"_self\" href=\""+pageName+"."+ext+"\">"+(i+1)+"</a></span>");
            }else{
                document.write("<span class=\"fy02\"><a target=\"_self\" href=\""+pageName+"_"+i+"."+ext+"\">"+(i+1)+"</a></span>");
            }
        }
        if(pageIndex<pageCount-1){
            document.write("<span class=\"fy03\"><a target=\"_self\" href=\""+pageName+"_"+(pageIndex+1)+"."+ext+"\">下一页&gt;</a></span>");
        }
        else{
            document.write("<span class=\"fy03\">下一页&gt;</span>");
        }
    }
}
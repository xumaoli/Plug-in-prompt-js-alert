/*!
 * 
 * Released: 2018-07-20
 * Author:   xumaoli
 * Email:    
 * Company:  
 *
 */



//提示弹窗
function includeLinkStyle() {
    
        var styles = '<style>'
        +'.ymodalAlertBody{background:#fff; border-radius: 4px; box-shadow: 0 0 10px rgba(0,0,0,0.2); width:300px; position:absolute; min-height:100px; left:50%; top:35%; margin-left:-150px; z-index: 90000;-moz-animation:bounce 0.8s 0s ease both;-webkit-animation:bounce 0.8s 0s ease both;animation:bounce 0.8s 0s ease both  }'
        +'.ymodalAlert{ position:fixed; left:0; top:0; right:0; bottom:0; z-index: 90000; }'
        +'.ymodalAlert:after{ display: block; content: ""; position: fixed; z-index: 8999; background: rgba(0,0,0,0.3); left:0; top:0; right:0; bottom:0;}'
        +'.ymodalTitle{ font-size:18px; line-height: 40px; text-align: center; padding:10px;}'
        +'.ymodalonfirm{ border-top:1px solid #ccc; position:relative;}'
        +'.ymodalMsg{ padding:20px; padding-top:5px; font-size:14px; line-height:26px;  text-align: center}'
        +'.alertbtnSure{ padding:10px; text-align: center; font-size:18px; color: #26a69a; line-height: 30px;}'
        +'.confrimbtn{cursor: pointer; padding:10px; text-align: center; font-size:18px; color: #26a69a; line-height: 30px; box-sizing: border-box; width:50%; float:left; overflow:hidden;cursor:pointer;}'
        +'.confrimbtn:hover,.alertbtnSure:hover{background: #26a69a;color: #fff;cursor: pointer;}'
        +'.confrimbtnCancle{border-right: 1px solid #ddd; position: relative;}'
        +'@media (-webkit-min-device-pixel-ratio:2) {    .ymodalonfirm{ border:none;}    .ymodalonfirm:before{ content: "";display: block; background:#ccc; position: absolute; height:1px;  -moz-transform: scaleY(0.5); transform: scaleY(0.5);-webkit-transform:scaleY(0.5);-moz-transform-origin:center top;transform-origin:center top;-webkit-transform-origin:center top; top:0; left: 0; right:0;z-index: 10;}    .confrimbtnCancle{ border:none;}    .confrimbtnCancle:before{ content: "";display: block; background:#ccc; width:1px; position: absolute; height:100%;  -moz-transform: scaleX(0.5); transform: scaleX(0.5);-webkit-transform:scaleX(0.5);-moz-transform-origin:right center;transform-origin:right center;-webkit-transform-origin:right center; top:0; bottom:0; right:0;z-index: 10;}}'
        +'@-webkit-keyframes bounce{    0%,20%,50%,80%,100%{-webkit-transform:translateY(0)}    40%{-webkit-transform:translateY(-30px)}    60%{-webkit-transform:translateY(-15px)}}'
        +'@-moz-keyframes bounce{    0%,20%,50%,80%,100%{-moz-transform:translateY(0)}    40%{-moz-transform:translateY(-30px)}    60%{-moz-transform:translateY(-15px)}}'
        +'@keyframes bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}'
        +'</style>'
        $('head').append(styles);
}
function salert(t,m){
    //用来引入样式，如果直接写入样式stylepath设为:"";
    includeLinkStyle(stylepath);
    var alertstr='<div class="ymodalAlert">'+
        '<div class="ymodalAlertBody">'+
        '<div class="ymodalTitle">'+t+'</div>'+
        '<div class="ymodalMsg">'+m+'</div>'+
        '</div>'+
        '</div>';

    $("body").append(alertstr);

   setTimeout(function(){
    $(".ymodalAlert").fadeOut(function(){
                $(".ymodalAlert").remove();               
            })
   },1500)

}

function zalert(t,m,fn){
    includeLinkStyle()
 
    var alertstr='<div class="ymodalAlert">'+
        '<div class="ymodalAlertBody">'+
        '<div class="ymodalTitle">'+t+'</div>'+
        '<div class="ymodalMsg">'+m+'</div>'+
        '<div class="ymodalonfirm"><div class="alertbtn alertbtnSure">确定</div></div>'+
        '</div>'+
        '</div>';

      
    $("body").append(alertstr);
    $(".alertbtnSure").click(function () {
        $(".ymodalAlert").fadeOut(function(){
            $(".ymodalAlert").remove();
            if (typeof fn === "function"){
                fn();
            }
        })
    })
     $(document).keyup(function (e) {
        if (e.keyCode == 13) {
            $(".ymodalAlert").fadeOut(function(){
                $(".ymodalAlert").remove();
                if (typeof fn === "function"){
                    fn();
                }
            })
        }
    });
}

function showConfirm(t,m,surefn,canclefn){
    includeLinkStyle()
    var confirmstr='<div class="ymodalAlert">'+
        '<div class="ymodalAlertBody">'+
        '<div class="ymodalTitle">'+t+'</div>'+
        '<div class="ymodalMsg">'+m+'</div>'+
        '<div class="ymodalonfirm"><div class="confrimbtn confrimbtnSure">确定</div><div class="confrimbtn confrimbtnCancle">取消</div></div>'+
        '</div>'+
        '</div>';
    $("body").append(confirmstr);
    $(".confrimbtnSure").click(function () {
        $(".ymodalAlert").fadeOut(function(){
            $(".ymodalAlert").remove();
            if (typeof surefn === "function"){
                surefn();
            }
        })
    })
    $(".confrimbtnCancle").click(function () {
        $(".ymodalAlert").fadeOut(function(){
            $(".ymodalAlert").remove();
            if (typeof canclefn === "function"){
                canclefn();
            }
        })
    })
}

function maopao(event) {
    event = event || window.event;
    if(event.stopPropagation){
        event.stopPropagation();
    }else {
        event.cancelBubble = true;
    }
}






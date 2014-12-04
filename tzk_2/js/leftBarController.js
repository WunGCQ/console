/**
 * Created by WunG on 2014/11/26.
 */
//控制点击菜单显示子菜单
//var FrameBar = new Frame();
//console.log(FrameBar);


function _(father,string){
    if(father!=null){
        return father.querySelector(string);
    }
    else{
        return document.querySelector(string);
    }
}
//jquery对象列表
//function Frame() {
//    this.Snav = new ObjArray(".snav");
//    this.Pnav = new ObjArray(".ptab");
//
//    this.init = function() {
//        this.Snav.init();
//        this.Pnav.init();
//    };
//    this.fresh = function(){
//        this.Snav.fresh();
//        this.Pnav.fresh();
//    };
//
//    this.getTabBySnav = function(SnavObj) {
//        this.fresh();
//        console.log(SnavObj);
//        console.log(this.Snav.list);
//        return this.Pnav.list[this.Snav.find(SnavObj)];
//    };
//}
////jquery对象列表
//function ObjArray(selectorName) {
//    this.list = new Array();
//    this.length = this.list.length;
//    this.init = function(){
//        var  ObjArray= this;
//        $.each(
//            $(selectorName),
//            function(i,Obj) {
//                ObjArray.list.push($(Obj));
//            }
//        );
//        this.length = this.list.length;
//
//    };
//    this.fresh = function(){
//        this.list = [];
//        this.init();
//    };
//
//    this.find = function(Obj){
//        console.log(Obj);
//        return this.list.indexOf(Obj);
//    };
//}
function binder() {
    $(".pnav").attr("onclick", "showSubNav(this)");
    $(".snav").attr("onclick", "setSubNavActive(this)");
    $(".nav-div").attr("onclick", "setPtabNavActive(this)");
}
function showSubNav(PnavObj) {
    var Pnav = $(PnavObj);
    $(".pnav").attr("class", "pnav");
    $(".snav").hide();
    Pnav.attr("class", "pnav active");
    if(Pnav.siblings(".snav").css("display") == "block") {
        Pnav.siblings(".snav").hide();
    }
    else {
        Pnav.siblings(".snav").show();
        setSubNavActive(_(PnavObj.parentNode,".snav"));
    }
}

function setSubNavActive(Snav) {
    var SnavObj=$(Snav);
    $(".snav").attr("class", "snav");
    SnavObj.attr("class", "snav active-s");
    showPtabBySnav(SnavObj);
    //console.log(SnavObj);
}

function showPtabBySnav(SnavObj) {
    var PtabObj = findPtabBySnav(SnavObj);
    $(".ptab").attr("class","ptab");
    PtabObj.attr("class","ptab active");
    setPtabNavActive(PtabObj.find(".nav-div").first());
}
function findPtabBySnav(SnavObj){
    return $(".ptab").eq($(".snav").index(SnavObj));
}
function setPtabNavActive(NavDiv) {
    var NavDivObj=$(NavDiv);
    $(".nav-div").attr("class", "nav-div");
    NavDivObj.attr("class", "nav-div active");
    showStabBynNavDiv(NavDivObj);
}
function showStabBynNavDiv(NavDiv) {
    var index=$(".ptab +.active .nav-div").index(NavDiv);
    $(".stab").attr("class","stab");
    $(".ptab +.active .stab").eq(index).attr("class","stab active");
}

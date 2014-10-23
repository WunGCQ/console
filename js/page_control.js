/**
 * Created by WunG on 2014/10/23.
 */
function set_topbar_width() {
    var window_width=document.body.clientWidth;
    var topbar=document.getElementById("top-bar");
    topbar.style.width=(window_width-200).toString()+"px";
}

function set_tab_block_size(){
    var window_width=document.body.clientWidth;
    var window_height=document.body.clientHeight;
    var tab_block=document.getElementById("right-tab-block");
    tab_block.style.width=(window_width-200).toString()+"px";
    tab_block.style.height=(window_height-50).toString()+"px";
}

function set_sizes() {
    set_topbar_width();
    set_tab_block_size();
}

function set_username() {
    var username="用户名称 user";
    document.getElementById("username").innerHTML=username+'<span class="fa fa-sort-down"></span>';
}

function load_user_icon(src){
//    AJAX
    var icon_img=new Image();
    icon_img.src="img/hpcp.jpg";
    icon_img.className="user-icon";
    icon_img.alt="头像";
    var user_icon_block= document.getElementsByClassName("user-icon-block")[0];
    console.log(user_icon_block);
    user_icon_block.appendChild(icon_img);
}

function set_username_click_listener() {
    var username=document.getElementById('username');
    username.addEventListener('click','show_list_menu()');
}

function show_list_menu(){
    var list_menu=document.getElementById('list-menu');
}


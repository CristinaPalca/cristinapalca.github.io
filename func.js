
// Navbar
var md_screen = 768;
var nav_links = document.querySelectorAll(".nav_links a");
var nav_bg = document.querySelector("#nav_link_background");

nav_links.forEach(function(item){
  item.addEventListener("mouseover", function(){
    if(window.innerWidth < md_screen){
      nav_bg.innerHTML = item.innerHTML;
    }
  });
});
window.addEventListener("resize", function(){
  if(window.innerWidth >= md_screen){
    if(document.querySelector(".nav_links").style.display == "none"){
        document.querySelector(".nav_links").style.display = "block";
    }
  }
});
nav_links.forEach(function(item){
  item.addEventListener("mouseleave", function(){
    if(window.innerWidth < md_screen){
    nav_bg.innerHTML = "";
    }
  });
});
var nav_btns = document.querySelectorAll(".nav_buttons img");
nav_btns[1].addEventListener("click", function(){
  close_function();
});
nav_btns[0].addEventListener("click", function(){
  nav_btns[1].style.display = "block";
  document.querySelector(".nav_links").style.display = "block";
  nav_btns[0].style.display = "none";
});
function close_function(){
  nav_btns[1].style.display = "none";
  document.querySelector(".nav_links").style.display = "none";
  nav_btns[0].style.display = "block";
}
nav_links.forEach(function(item){
  item.addEventListener("click", function(){
    if(window.innerWidth < md_screen){
      close_function();
    }
  });
});

// Portfolio pop ups

const portfolio_items = document.querySelectorAll(".project_container");

portfolio_items.forEach(function(item){
  item.addEventListener("click", popup_project);
});

function popup_project(e){
  let tmp_cont = e.target;
  if(!e.target.classList.contains("project_container")){
    while(!tmp_cont.classList.contains("project_container") && tmp_cont.tagName.toLowerCase() != 'body'){
      tmp_cont = tmp_cont.parentNode;
    }
  }
  let project_name = tmp_cont.querySelector(".project_title").innerHTML;
  let project_skills = tmp_cont.querySelector("ul").innerHTML;
  let project_link = tmp_cont.querySelector("a.project_link").href;
  let repository_link = tmp_cont.querySelector("a.repository_link").href;
  let project_image = tmp_cont.querySelector(".image_wrapper img").src;
  let popup = document.querySelector("#extended_container");
  let popup_title = popup.querySelector("#extended_title span");
  let popup_list = popup.querySelector("ul");
  let popup_project_link = popup.querySelector("#project_link a");
  let popup_repository_link = popup.querySelector("#repository_link a");
  let popup_image = popup.querySelector("#extended_image_wrapper img");
  let popup_image_link = popup.querySelector("#right_column a");

  popup_title.innerHTML = project_name;
  popup_list.innerHTML = project_skills;
  popup_project_link.href = project_link;
  popup_repository_link.href = repository_link;
  popup_image.src = project_image;
  popup_image_link.href = project_link;
  popup.style.display = "block";

}

var popup_close = document.querySelector("#extended_title i");
var popup_extended_cont = document.querySelector("#extended_container");

popup_close.addEventListener("click", close_popup);
popup_extended_cont.addEventListener("click", close_from_background);

function close_popup(e){
  let popup = e.target;
  while(!popup.classList.contains("extended_container") && (popup.tagName.toLowerCase() != 'body')){
    popup = popup.parentNode;
  }
  popup.style.display = "none";
}

function close_from_background(e){
  if(e.target.classList.contains("extended_container")){
    e.target.style.display = "none";
  }
}

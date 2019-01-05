var navButton = document.getElementsByClassName("top-nav-button");
var navMenu = document.getElementsByClassName("top-nav-menu");
var Banner = document.getElementsByClassName("carousel-banner");
var Span = document
  .getElementsByClassName("carousel-tab")[0]
  .getElementsByTagName("span");
var Next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("prev")[0];
var on = document.getElementsByClassName("on")[0];
var num = 0;
for (var i = 0; i < navButton.length; i++) {
  navButton[i].index = i;
  navButton[i].onclick = function() {
    if (navMenu[this.index].style.display != "none") {
      for (var k = 0; k < navMenu.length; k++) {
        navMenu[k].style.display = "none";
      }
    } else {
      for (var j = 0; j < navButton.length; j++) {
        num = this.index;
        navMenu[j].style.display = "none";
      }
      navMenu[num].style.display = "block";
    }
  };
  navButton[i].onmouseover = function() {
    for (j = 0; j < navButton.length; j++) {
      navButton[j].style.borderBottom = "none";
      navButton[j].style.color = "black";
      num = this.index;
    }
    navButton[num].style.borderBottom = "3px solid #0067b8";
    navButton[num].style.color = "#0067b8";
    navButton[num].style.cursor = "pointer";
    navButton[num].onmouseout = function() {
      navButton[num].style.borderBottom = "none";
      navButton[num].style.color = "black";
    };
  };
}
//轮播图
Banner[0].style.display = "block";
Span[0].className = "on";
for (var i = 0; i < Span.length; i++) {
  Span[i].index = i;
  Span[i].onclick = function() {
    for (var j = 0; j < Span.length; j++) {
      num = this.index;
      Span[j].className = "";
      Banner[j].style.display = "none";
    }
    Span[num].className = "on";
    Banner[num].style.display = "block";
  };
  Next.onclick = function() {
    for (var j = 0; j < Span.length; j++) {
      if (Span[j].className == "on") {
        Span[j].className = "";
        Banner[j].style.display = "none";
        j++;
        num++;
        if (j > 7) {
          j = 0;
        }
        Span[j].className = "on";
        Banner[j].style.display = "block";
      }
    }
  };
  prev.onclick = function() {
    for (var j = 0; j < Span.length; j++) {
      if (Span[j].className == "on") {
        Span[j].className = "";
        Banner[j].style.display = "none";
        j--;
        num--;
        if (j < 0) {
          j = 7;
        }
        Span[j].className = "on";
        Banner[j].style.display = "block";
      }
    }
  };
}
function Time() {
  num++;
  if (num < 8) {
    for (var j = 0; j < Span.length; j++) {
      Span[j].className = "";
      Banner[j].style.display = "none";
    }
    Span[num].className = "on";
    Banner[num].style.display = "block";
  } else {
    num = -1;
  }
}
var timer = setInterval("Time()", 5000);

var tank = $("#tank");
var bullet = $("#bullet");
var dir = "t"; // 위t, 오r, 아b, 왼l

var dist = 30;
var speed = 600;

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).keydown(function (e) {
  /* 왼쪽 : 37 */
  /* 위쪽 : 38 */
  /* 오른쪽 : 39 */
  /* 아래쪽 : 40 */
  /* 스페이스바 : 32 */

  var cx = tank.css("left");
  var cy = tank.css("top");
  cx = parseInt(cx);
  cy = parseInt(cy);

  if (e.keyCode == 37) {
    dir = "l";
    tank.css("transform", "rotate(-90deg)");
    tank.css("left", cx - dist + "px");
  } else if (e.keyCode == 38) {
    dir = "t";
    tank.css("transform", "rotate(0deg)");
    tank.css("top", cy - dist + "px");
  } else if (e.keyCode == 39) {
    dir = "r";
    tank.css("transform", "rotate(90deg)");
    tank.css("left", cx + dist + "px");
  } else if (e.keyCode == 40) {
    dir = "b";
    tank.css("transform", "rotate(180deg)");
    tank.css("top", cy + dist + "px");
  } else if (e.keyCode == 32) {
    bullet.css({ left: cx + "px", top: cy + "px" });
    if (dir == "t") {
      bullet.css({ transform: "rotate(0deg)" });
      bullet.animate({ top: "-=650px" }, speed, "linear");
    } else if (dir == "b") {
      bullet.css({ transform: "rotate(180deg)" });
      bullet.animate({ top: "+=650px" }, speed, "linear");
    } else if (dir == "l") {
      bullet.css({ transform: "rotate(-90deg)" });
      bullet.animate({ left: "-=650px" }, speed, "linear");
    } else if (dir == "r") {
      bullet.css({ transform: "rotate(90deg)" });
      bullet.animate({ left: "+=650px" }, speed, "linear");
    }
  }
});

var e = 0;

function add() {
  e++;
  $("#stage").append(
    "<img id='e" + e + "' class='enemy' src='images/enemy.jpg' alt='enemy' />"
  );
  var ex = rand(0, 600);
  var ey = rand(0, 600);
  var er = rand(0, 360);
  $("#e" + e).css({
    left: ex + "px",
    top: ey + "px",
    transform: "rotate(" + er + "deg)",
  });
  setTimeout(add, rand(3000, 5000));
}

add();

function chk() {
  var x = parseInt(bullet.css("left"));
  var y = parseInt(bullet.css("top"));
  var len = $(".enemy").length;
  var e = [];
  for (i = 0; i < len; i++) {
    e[i] = parseInt($(".enemy").eq(i).css("left"));
  }
}

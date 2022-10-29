window.addEventListener("load", function () {
  // 搜索框
  ipt.addEventListener("click", function () {
    let ss = document.querySelector(".ss");
    let ssa = ss.querySelector(".ssa");
    let ipt = document.querySelector("#ipt");
    let hot_search = document.querySelector(".hot_search ");
    ss.style.backgroundColor = "#fff";
    hot_search.style.display = "block";
    ssa.style.display = "block";
    ss.style.marginTop = "200px";
  });
  // 轮播图
  var focus = document.querySelector(".focus");
  var mark = document.querySelector(".mark");
  var ul = focus.querySelector("ul");
  var ol = mark.querySelector(".circle");
  var focusWidth = focus.offsetWidth;

  // console.log(ul.children.length);
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("data-index", i);
    ol.appendChild(li);
    li.addEventListener("click", function () {
      // 为什么不行?
      // ol.querySelector('.current').classList.remove('current')
      // ol.children[i].classList.add('current')
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      // 点击小圆圈 移动图片
      var index = this.getAttribute("data-index");

      console.log(focusWidth);
      console.log(index);
      var translatex = -index * focusWidth;
      ul.style.transform = "translateX(" + translatex + "px)";
    });
  }
  // ol 的第一个li 类名为current
  ol.children[0].className = "current";
  // 点击右侧按钮图片走一张
  // var arrow_right = mark.querySelector('.arrow_right');
  // // 克隆
  // var first = ul.children[0].cloneNode(true);
  // ul.appendChild(first)
  // var num = 0;
  // arrow_right.addEventListener('click', ()=> {
  //     num++;
  //     if(num === ul.children.length) {
  //         ul.style.left = 0
  //         num = 0;
  //     }
  //     animate(ul, -num * focusWidth)
  // })
  $("#btn>button").on("click", function () {
    $(this).addClass("blue").siblings().removeClass("blue");
  });
});

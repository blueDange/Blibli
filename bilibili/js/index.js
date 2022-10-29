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


  $("#btn>button").on("click", function () {
    $(this).addClass("blue").siblings().removeClass("blue");
  });
});

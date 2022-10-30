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
  // 点击小圆点滚动图片
  const $banner = $('.banner')
  const $banner_width = $banner.width()
  console.log($banner_width)

  // 小圆点
  // 动态生成小圆点
  const $ul = $('.banner ul').children()
  const $ol = $('.banner .circle')
  $ul.each(function (index, element) {

    let li = document.createElement('li')
    $ol.append(li)
    $ol.children().first().addClass('current')

  })


  var $img = $('.banner>ul>li')
  $img.eq(0).show().siblings().hide()
  $('.circle li').on('click', function () {
    $(this).addClass('current').siblings().removeClass('current')
    const i = $(this).index()
    $img.eq(i).show().siblings().hide()
  })

  $("#btn>button").on("click", function () {
    $(this).addClass("blue").siblings().removeClass("blue");
  });
});

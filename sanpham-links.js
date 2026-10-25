/*
  Tự động trỏ mọi link /san-pham/ten-san-pham/ sang trang chi tiết chung:
  chitietsp.html?sp=ten-san-pham
  Dữ liệu từng sản phẩm nằm trong chitietsp.html (biến PRODUCTS).
*/
(function () {
  var links = document.querySelectorAll('a[href^="/san-pham/"]');
  for (var i = 0; i < links.length; i++) {
    var m = links[i].getAttribute('href').match(/^\/san-pham\/([^\/?#]+)\/?$/);
    if (m) links[i].setAttribute('href', 'chitietsp.html?sp=' + m[1]);
  }
})();
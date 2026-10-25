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

/*
  Khi bấm tải lại trang (F5): về đầu trang, bỏ phần #... trên địa chỉ.
  Chỉ chạy khi tải lại, nút Back của trình duyệt vẫn nhớ vị trí bình thường.
*/
(function () {
  var nav = performance.getEntriesByType('navigation')[0];
  if (nav && nav.type === 'reload') {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    history.replaceState(null, '', location.pathname + location.search);
    window.addEventListener('load', function () { window.scrollTo(0, 0); });
  }
})();
document.addEventListener('DOMContentLoaded', function() {
  // メールアドレスの保護（スパムボット対策）
  var emailLink = document.getElementById('email-link');
  if (emailLink) {
    var user = 'aiba_shouten';
    var domain = 'yahoo.co.jp';
    var subject = 'ご注文内容';
    var body = '以下の内容で注文をお願いします。%0D%0A%0D%0Aお名前:%0D%0Aふりがな:%0D%0A郵便番号:%0D%0Aご住所:%0D%0Aお電話番号:%0D%0AFAX番号:%0D%0A商品名:%0D%0A数量:%0D%0Aお届け希望日:%0D%0Aお届け希望時間帯:%0D%0A';

    var a = document.createElement('a');
    a.href = 'mailto:' + user + '@' + domain + '?subject=' + subject + '&body=' + body;
    a.textContent = user + '@' + domain;
    emailLink.appendChild(a);
  }

  var mapCanvas = document.getElementById('mapCanvas');

  // mapCanvasが存在しない場合は処理をスキップ
  if (!mapCanvas) {
    return;
  }

  var latlng = new google.maps.LatLng(36.265260 + 0.0015, 139.443936 - 0.001);
  var myOptions = {
    zoom: 16, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP /*表示タイプの指定*/
  };
  var map = new google.maps.Map(mapCanvas, myOptions);

  var icon = new google.maps.MarkerImage('/assets/image/map_icon.png',
    new google.maps.Size(128, 128), /*アイコンサイズ設定*/
    new google.maps.Point(0, 0) /*アイコン位置設定*/
  );

  latlng = new google.maps.LatLng(36.265260, 139.443936);
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
  };

  var marker = new google.maps.Marker(markerOptions);

  var icon2 = new google.maps.MarkerImage('/assets/image/map_icon2.png',
    new google.maps.Size(100, 100), /*アイコンサイズ設定*/
    new google.maps.Point(0, 0) /*アイコン位置設定*/
  );

  var latlng2 = new google.maps.LatLng(36.267071, 139.440147);
  var markerOptions2 = {
    position: latlng2,
    map: map,
    icon: icon2,
  };

  var marker2 = new google.maps.Marker(markerOptions2);
});

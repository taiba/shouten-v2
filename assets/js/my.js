$(function() {

  $(document).ready(function() {

    var latlng = new google.maps.LatLng(36.265260 + 0.0015, 139.443936 - 0.001);
    var myOptions = {
      zoom: 16, /*拡大比率*/
      center: latlng, /*表示枠内の中心点*/
      mapTypeId: google.maps.MapTypeId.ROADMAP /*表示タイプの指定*/
    };
    var map = new google.maps.Map(document.getElementById('mapCanvas'), myOptions);

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

});

var myMap;
ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
function init() {
  myMap = new ymaps.Map('map', {
    center: [55.7727109, 37.59316850000005], // Координаты центра карты
    zoom: 18.5, // Zoom
  });

  // Создание своей метки 
  var myPlacemark = new ymaps.Placemark(
    // Координаты метки
    [55.7727109, 37.59316850000005] , {
      // Свойства метки
      hintContent: 'Мой маркер', //Подсказка при наведении на маркер

      balloonContent: 'Столица России',
      iconContent: '<span style="color:red; font-weight:bold">2-a Тверская-Ямская улица, 28</span>'
    }, {
      iconImageHref: '../../img/logo.png', // картинка иконки
      // iconImageSize: [33, 55], // размеры картинки
      iconImageOffset: [-0, -40] // смещение картинки
    });     



  myMap.geoObjects.add(myPlacemark);

}

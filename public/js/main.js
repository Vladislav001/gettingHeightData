$('#loader').hide();
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map("map", {
    center: [48.707103, 44.516939],
    zoom: 7
  }, {
    searchControlProvider: 'yandex#search'
  });

  var countPoints = 1;
  var submitBtn = document.getElementById("submitBtn");
  submitBtn.onclick = function () {
    var data = {};
    data.latitude = $("input[name='latitude']").val();
    data.longitude = $("input[name='longitude']").val();
    //data.api =  $("select[name='api']").val();

    $.ajax({
      type: 'POST',
      url: '/elevation',
      dataType: 'json',
      data:  data,
      beforeSend: function() {
        $('#loader').show();
      },
      complete: function() {
        $('#loader').hide();
      },
      success: function(data) {
        var elevation = JSON.parse(data);
        $("input[name='elevation']").val(elevation);

        // отрисуем на карте $("input.. - т.к data нету еще
        myMap.geoObjects
        .add(new ymaps.Placemark([ $("input[name='latitude']").val(), $("input[name='longitude']").val()], {
          balloonContent: 'Широта: ' + $("input[name='latitude']").val() + '°'
          + '<br> Долгота: ' + $("input[name='longitude']").val() + '°'
          + '<br> Высота над уровнем моря: ' + $("input[name='elevation']").val() + ' м' ,
          iconCaption: 'Точка № ' + countPoints
        }, {
          preset: 'islands#greenDotIconWithCaption'
        }));
        myMap.setCenter([$("input[name='latitude']").val(), $("input[name='longitude']").val()]);

        // История запросов
        // $('#tbody').append(
        //   '<tr><th>' + countPoints + '</th>'
        //   + '<td>' + $("input[name='latitude']").val() + '</td>'
        //   + '<td>' + $("input[name='longitude']").val() + '</td>'
        //   + '<td>' + $("input[name='elevation']").val() + '</td>'
        //   + '</tr>'
        // );
        countPoints++;
      },
      error: function(data) {
        alert(data.responseText);
      }
    });
  }
}

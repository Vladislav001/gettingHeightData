const axios = require('axios');

exports.post = function(req, res) {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  //var api = req.body.api;

  // Различные сервисы
  var urlApiOpen = 'https://api.open-elevation.com/api/v1/lookup?locations=' + latitude + ',' + longitude;
  var urlElevationApi = 'https://elevation-api.io/api/elevation?points=(' + latitude + ',' + longitude + ')';
  var urlAltitude = 'https://altitude.andrewnisbet.nz/api/v1/json?locations=' + latitude + ',' + longitude;

  latitude = Number(latitude);
  longitude =  Number(longitude);

  if(latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180)
  {
    const getElevation = async url => {
      try {
        const response = await axios.get(url);
        const data = response.data;

        res.send(JSON.stringify(data.results[0].elevation)); // urlApiOpen + urlAltitude
        // res.send(JSON.stringify(data.elevations[0].elevation)); // urlElevationApi
      } catch (error) {
        res.send("Произошла непредвиденная ошибка, повторите позже");
        console.log(error);
      }
    };

    getElevation(urlAltitude);
  } else {
    res.send("Некорректные данные");
  }

};

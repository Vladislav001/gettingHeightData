const axios = require('axios');

exports.post = function(req, res) {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  var url = 'https://api.open-elevation.com/api/v1/lookup?locations=' + latitude + ',' + longitude;
  //var url2 = 'https://elevation-api.io/api/elevation?points=(' + latitude + ',' + longitude + ')';

  // на всякий случай проверим, что пришли корректные данные
  latitude = Number(latitude);
  longitude =  Number(longitude);

  if(latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180)
  {
    const getElevation = async url => {
      try {
        const response = await axios.get(url);
        const data = response.data;

        res.status(200).send({
            elevation: data.results[0].elevation,
        //  elevation: data.elevations[0].elevation,
          latitude: latitude,
          longitude: longitude,
        });

      } catch (error) {
        res.status(403).send({
          error: "Ошибка выполнения, попробуйте позже",
        });
        console.log(error);
      }
    };

    getElevation(url);
  } else {
    res.status(403).send({
      error: "Некорректные данные",
    });
  }
};

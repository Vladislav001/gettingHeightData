const axios = require('axios');

exports.post = function(req, res) {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  //var api = req.body.api;

  //var url = 'https://api.open-elevation.com/api/v1/lookup?locations=' + latitude + ',' + longitude;
  var url2 = 'https://elevation-api.io/api/elevation?points=(' + latitude + ',' + longitude + ')';

  latitude = Number(latitude);
  longitude =  Number(longitude);

  if(latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180)
  {
    const getElevation = async url => {
      try {
        const response = await axios.get(url);
        const data = response.data;

        res.send(JSON.stringify(data.elevations[0].elevation));
        //  res.send(JSON.stringify(data.results[0].elevation)); // для первого url
      } catch (error) {
        console.log(error);
      }
    };

    getElevation(url2);
  } else {
    res.send("Некорректные данные");
  }

};

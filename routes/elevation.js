const  axios = require('axios');

exports.post = function(req, res) {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  var elevation;

  // https://api.open-elevation.com/api/v1/lookup?locations=41.161758,-8.583933
  var url = 'https://api.open-elevation.com/api/v1/lookup?locations=' + latitude + ',' + longitude;

  const getLocation = async url => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      res.send(JSON.stringify(data.results[0].elevation));
    } catch (error) {
      console.log(error);
    }
  };

  getLocation(url);

}
 

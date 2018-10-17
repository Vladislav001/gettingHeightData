const axios = require('axios');

// exports.post = function(req, res) {
//   var latitude = req.body.latitude;
//   var longitude = req.body.longitude;
//   // https://api.open-elevation.com/api/v1/lookup?locations=41.161758,-8.583933
//   var url = 'https://api.open-elevation.com/api/v1/lookup?locations=' + latitude + ',' + longitude;
//
//   const getElevation = async url => {
//     try {
//       const response = await axios.get(url);
//       const data = response.data;
//
//       res.send(JSON.stringify(data.results[0].elevation));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//
//   getElevation(url);
//
// }

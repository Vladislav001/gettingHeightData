const  axios = require('axios');
const https = require('https');

exports.get = async function(req, res) {
    console.log('elev');
     var url = 'https://api.open-elevation.com/api/v1/lookup?locations=41.161758,-8.583933';
  //   https.get(url,(res)=>{
  //   let body = '';
  //   res.on('data',(elem) => body +=elem);
  //   res.on('end',()=> console.log(JSON.parse(body)));
  // });

  const getLocation = async url => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

  getLocation(url);


}

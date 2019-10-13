const request = require('request')

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZmFkZTIyMiIsImEiOiJjazB3MDlvdGQwMmR1M2NvZHZ5cTk4ZHI4In0.fLrG1hucUSlRFfDqAkcb2Q";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to locaion services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.");
    } else {
      callback(undefined, {
        longitude: body.features[0].center[1],
        latitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode
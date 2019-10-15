const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/0e061dd84a2180c151d48aadd6ef284a/" +
    longitude + "," + latitude +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location.");
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. With a high of ${body.daily.data[0].temperatureHigh} and a low of ${body.daily.data[0].temperatureLow}.`
      );
    }
  });
};

module.exports = forecast;

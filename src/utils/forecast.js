const request = require('request')

const forecast = (a, b, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a1ff68e5ef3ccc6558b328244dba9fc9&query=' + a + ',' + b + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out.')
        }
    })
}

module.exports = forecast
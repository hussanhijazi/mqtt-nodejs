var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

var temperatureTopic = "temperature"
var humidityTopic = "humidity"

client.on('connect', function () {
    client.subscribe(temperatureTopic, function (err) {
    })
    client.subscribe(humidityTopic, function (err) {
    })
})
client.on('message', function (topic, message) {
    console.log(topic + " - " + message.toString())
})

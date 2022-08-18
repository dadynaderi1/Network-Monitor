"use strict";
const net = require('net');
const find = require('local-devices');
class Network {
    constructor(hostname, port, timeout) {
        this.port = 80;
        this.hostname = hostname;
        this.port = port;
        this.timeout = timeout;
    }
    connect() {
        if (net.isIPv4(this.hostname)) {
            var connection = net.createConnection({ port: this.port, host: this.hostname });
            console.log(connection);
        }
    }
    findDevices() {
        var deviceList = [];
        find().then((devices) => {
            devices.forEach((element) => {
                // console.log(`name: ${element.name}  ip:${element.ip}  mac: ${element.mac}`);
                deviceList.push(element);
                console.log(deviceList);
            });
        });
    }
}
const boom = new Network('8.8.8.8', 80, 1400);
boom.findDevices();

const net = require('net');
const find = require('local-devices');

class Network {
  hostname: string = "";
  port = 80;
  deviceList: any = [];


  public connect(): void {
    if (net.isIPv4(this.hostname)) {
      var connection = net.createConnection({ port: this.port, host: this.hostname });
      console.log(connection);
    }
  }
  public findDevices() {
    var boom: object[] = [];
    // Return the promise, so the caller can "await" it
    return find().then((devices: any[]) => {
      // Spread devices, otherwise it will push the array instead of the values
      this.deviceList.push(...devices);
      // Promise return value
      return this.deviceList
    })
  }

}

async function run() {
  const monitor = new Network();
  let data = await monitor.findDevices();
  console.log(data)
}

run()
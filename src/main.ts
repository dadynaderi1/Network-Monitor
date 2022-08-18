const net = require('net');
const find = require('local-devices');
class Network{
  hostname : string;
  port = 80 ;
  timeout : number;

  
  constructor(hostname:string,port:number,timeout:number){
     this.hostname = hostname;
     this.port = port;
     this.timeout = timeout;
  }
  public connect(): void{
      if (net.isIPv4(this.hostname)){
          var connection = net.createConnection({port : this.port, host : this.hostname});
          console.log(connection);
      }
  }
  public findDevices(){
    var deviceList: any[] = [];
    find().then((devices:any) =>{
      devices.forEach((element:any) => {
        // console.log(`name: ${element.name}  ip:${element.ip}  mac: ${element.mac}`);
        deviceList.push(element);
        console.log(deviceList);
      });
    })
  }

}
const boom = new Network('8.8.8.8',80,1400);
boom.findDevices();
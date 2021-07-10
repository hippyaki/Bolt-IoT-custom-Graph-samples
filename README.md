# IoT-Web-Interface-samples

## Sample

<img src = "https://github.com/hippyaki/IoT-Web-Interface-samples/blob/master/gif/Angular%20Graph%20working(1).gif"> <img src = "https://github.com/hippyaki/IoT-Web-Interface-samples/blob/master/gif/Solid%20Gauge%20working.gif">
<br>
<br>
<br>


Both the gauge meter only works when connected to a Bolt IoT module. To get yours, click [here](https://shop.boltiot.com/pages/iotmltraining)

If you have yours, add your API-KEY and DEVICE-ID as mentioned below - 

For Angular Graph - visit **control.js** and add your `<api_key>` and `<d_name>`.
<br>
For Solid Graph - visit **script.js** and add your `<api_key>` and `<d_name>`.

<br>

Incase you don't have a Bolt Cloud Pro Subscription, in the below script, chnage **2000**  -->  **30000** to avoid rate limit.

```
const interval = setInterval(function(){
                    analogRead(A0,"output")
                }, 2000);  
```

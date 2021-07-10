var A0  = "A0";
var A1  = "A1";
var A2  = "A2";
var A3  = "A3";
var True = "HIGH"
var False = "LOW"
var HIGH = "HIGH"
var LOW  = "LOW"
var debug = 0

var api_key = "b71b13c6-cac1-456a-aa4e-8e61cb2c01aa";
var d_name = "BOLT8021328";
var base_url = "https://cloud.boltiot.com/remote/"

function analogRead(pin, element_id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        //document.getElementById(element_id).innerHTML = xmlhttp.responseText;
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
            //alert(xmlhttp.responseText);
            
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            
            const obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){
                
                var min = 0;
                var max = 1024;
               // var adc = 0.0048828125;
               // var lux = (250.000/(adc*obj.value))-50.00;
                const newGaugeDisplayValue = obj.value;
                const newGaugeValue = Math.floor(((newGaugeDisplayValue - min) / (max - min)) * 100);
                document.getElementById("demoGauge2").style.setProperty('--gauge-display-value', newGaugeDisplayValue);
                document.getElementById("demoGauge2").style.setProperty('--gauge-value', newGaugeValue);
            

                    //console.log(obj.value);
                    //alert(obj.value);

            }
            else{
                    //document.getElementById(element_id).innerHTML = "Error = "+xmlhttp.responseText;
            }

        }
    };
    
    xmlhttp.open("GET",base_url+api_key+"/analogRead?pin="+pin+"&deviceName="+d_name,true);
    xmlhttp.send();  


}


const interval = setInterval(function(){
                    analogRead(A0,"output")
                }, 2000);  

  


//digitalRead(0);





/* (c) Eugeny Borisov 2014 */
#target Indesign
try { var mySwatches = app.activeDocument.swatches;     } catch(err) { exit(); }

var swapData = [
  pswd("testSwatch", 1,2,3,4),
  pswd("testSwatch2", 1,2,3,4)
];

/*PrepareSWapData*/
function pswd(nameVal, c,m,y,k) {
  var swapData= {name: nameVal, cmyk: [c,m,y,k] };
  return swapData;
  }

var i = swapData.length;
while (i--) {
    try {
            mySwatches.itemByName(swapData[i].name).colorValue = swapData[i].cmyk;
    } catch(err){}
 }
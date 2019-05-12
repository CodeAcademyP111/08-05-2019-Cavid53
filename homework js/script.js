var arr = [17, 15, 14, 17, 21, 14];

function dublicate(arr) {
   var dublic = [];
   for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
         if (arr[i] === arr[j]) {
            dublic.push(arr[i]);
         }
      }
   }return dublic;
}
document.write(dublicate(arr));

var x,xmlhttp,xmlDoc
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/items.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML; 
x = xmlDoc.getElementsByTagName("item");

function showMe(i) {
	word = "";
	document.getElementById('product').innerHTML = "";
    document.getElementById('productName').innerHTML = x[i].getElementsByTagName("name")[0].innerHTML;
    document.getElementById('productImage').src = x[i].getElementsByTagName("image")[0].innerHTML;;
    b=x[i].getElementsByTagName("detail")[0].getElementsByTagName('inSize');
    console.log(b);
    for (var z = 0; z < b.length; z++) {
    	console.log(z);
    	document.getElementById('product').innerHTML += b[z].innerHTML+'<br>';
    }
    console.log(document.getElementById('price'));
    document.getElementById('price').innerHTML = x[i].getElementsByTagName("price")[0].innerHTML;
}

<!-- hide script from old browsers

var xmlhttp;
function loadDatabase(url, cfunc){
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=cfunc;  
	xmlhttp.open("GET",url,true);
	xmlhttp.send();

}


function availableProducts(){


	loadDatabase("getProducts.php", function()
		{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var obj = JSON.parse(xmlhttp.responseText);	
			var img;
			var bDiv;
			var fieldset;
			var txtDiv;
			var imgDiv;
			var pid;
			var bContainer = document.getElementById("block_container");
			
			for(i=0; i<obj.length; i++){
				pid = obj[i].pid;
			
			
				fieldset = document.createElement("fieldset");
				fieldset.className = "fblocks";
				fieldset.align = 'center';
			
				bDiv = document.createElement('div');
				bDiv.id = 'ublock'+i;
				bDiv.className = 'ublock';
				
				imgDiv = document.createElement('div');
				imgDiv.id = 'uimg'+i; 
				imgDiv.className = 'uimg';
				
				var bottomDiv = document.createElement('div');
				bottomDiv.id = 'ubttom'+i;
				bottomDiv.className = 'ubottom';	

				
				var button = document.createElement('span');
				button.innerHTML = '<button id="add' + i +'" onclick="removeProduct(' + pid + ');">Remove Product</button>';
				

								
				txtDiv = document.createElement('div');
				txtDiv.id = 'uinner'+i; 
				txtDiv.className = 'utxt';
				
				bottomDiv.appendChild(txtDiv);
				bottomDiv.appendChild(button);
				
				bDiv.appendChild(imgDiv);
				bDiv.appendChild(bottomDiv);
				
				fieldset.appendChild(bDiv)
				bContainer.appendChild(fieldset);

			
				img = new Image();
				img.height = "200";
				img.width = "200";	
				img.style = "cursor:pointer";
				img.setAttribute("onclick", "showImage('"+ obj[i].Picture +"');");
				img.onload = createOnloadHandler(imgDiv, txtDiv, img, obj[i]);
				img.src = obj[i].Picture;
				
			}	
			

			}
		});

	
	
}

function createOnloadHandler(iDiv, tDiv, image, elem){
	
	return function(){
		
		var comp = elem.Company;
		var model = elem.Model;
		var pr = elem.Price;
		var parF = parseFloat(pr);
		if( parF % 1 == 0){
			var price = "$" + parF + ".00";
		}
		else{
			var price = "$" + parseFloat(pr);
		}
		
		var pid = elem.pid;
		var txt = comp + " " + model + "<br>" + price + "    " + "pid: " + pid;
		iDiv.appendChild(image);
		tDiv.innerHTML = txt;

		
	};
	
}



function searchProducts(){




}


function removeProduct(pid){

	var q = "pid="+pid;


	loadDatabase("deleteElements.php?"+q , function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		location.reload();
		alert("Product removed!");
	
		}
	});


}




function addElements(){

	var x = document.addForm;
	var namei = x.elements[0].value;
	var companyi = x.elements[1].value;
	var modeli = x.elements[2].value;
	var pricei = x.elements[3].value;
	var pathi = x.elements[4].value;
	var categoryi = x.elements[5].value;
	var speciali = x.elements[5].value;

	var fArray = new Array();


	fArray.push("name="+namei);
	fArray.push("company="+companyi);
	fArray.push("model="+modeli);
	fArray.push("price="+pricei);
	fArray.push("path="+pathi);
	fArray.push("category="+categoryi);
	fArray.push("special="+speciali);
	var elemString = fArray.join("&");	

	loadDatabase("addElements.php?"+elemString, function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			location.reload();
		}
	});




}

function modifyElements(){

	var x = document.modForm;
	var pidi = x.elements[0].value;
	var namei = x.elements[1].value;
	var companyi = x.elements[2].value;
	var modeli = x.elements[3].value;
	var pricei = x.elements[4].value;
	var pathi = x.elements[5].value;
	var categoryi = x.elements[6].value;
	var speciali = x.elements[7].value;

	var fArray = new Array();

	fArray.push("pid="+pidi);
	fArray.push("name="+namei);
	fArray.push("company="+companyi);
	fArray.push("model="+modeli);
	fArray.push("price="+pricei);
	fArray.push("path="+pathi);
	fArray.push("category="+categoryi);
	fArray.push("special="+speciali);
	var elemString = fArray.join("&");	

	loadDatabase("modifyElements.php?"+elemString, function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			location.reload();
		}
	});









}




// stop hiding -->

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


function dailyUpdate(){


	loadDatabase("retrieveDailys.php", function()
		{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var obj = JSON.parse(xmlhttp.responseText);	
			var img;
			var bDiv;
			var fieldset;
			var txtDiv;
			var imgDiv;
			var bContainer = document.getElementById("block_container");
			for(i=0; i<obj.length; i++){
				fieldset = document.createElement("fieldset");
				fieldset.className = "fblocks";
				fieldset.align = 'center';
			
				bDiv = document.createElement('div');
				bDiv.id = 'block'+i;
				bDiv.className = 'block';
				
				imgDiv = document.createElement('div');
				imgDiv.id = 'img'+i; 
				imgDiv.className = 'gimg';
				
				txtDiv = document.createElement('div');
				txtDiv.id = 'inner'+i; 
				txtDiv.className = 'gtxt';
				
				bDiv.appendChild(imgDiv);
				bDiv.appendChild(txtDiv);
				
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
		

		var name = elem.name;
		var pr = elem.Price;
		var special = elem.special;
		var expir = elem.exp;
		var parF = parseFloat(pr);
		if( parF % 1 == 0){
			var price = "$" + parF + ".00";
		}
		else{
			var price = "$" + parseFloat(pr);
		}
		
		if(special == null){
			var txt = name + "<br>" + price;
		}
		else{
			var txt = name + "<br>" + price + "<br>" +special + " special  Expires " + expir;
		}
		
		iDiv.appendChild(image);
		tDiv.innerHTML = txt;

		
	};
	
}



function searchProducts(){

	var x = document.searchP;
	var search = x.elements[0].value;
	
		loadDatabase("searchDatabase.php?term=" + search, function()
		{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var obj = JSON.parse(xmlhttp.responseText);	
			
			if(obj != null){
			
				node = document.getElementById("block_container");
				while (node.hasChildNodes()) {
					node.removeChild(node.lastChild);
				}
				x.elements[0].value = "";
				
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
	
			

			}
		});





}

function createOnloadHandler(iDiv, tDiv, image, elem){
	
	return function(){
		
		var name = elem.name;
		var pr = elem.Price;
		var special = elem.special;
		var expir = elem.exp;
		var parF = parseFloat(pr);
		if( parF % 1 == 0){
			var price = "$" + parF + ".00";
		}
		else{
			var price = "$" + parseFloat(pr);
		}
		
		if(special == null){
			var txt = name + "<br>" + price;
		}
		else{
			var txt = name + "<br>" + price + "<br>" +special + " special  Expires " + expir;
		}
		
		iDiv.appendChild(image);
		tDiv.innerHTML = txt;

		
	};
	
}




// stop hiding -->

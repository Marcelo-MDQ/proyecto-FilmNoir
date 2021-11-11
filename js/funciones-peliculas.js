	
var peliculas=[
{id_codigo:"1",imagen:"../images/1 THE KILLERS [1946].jpg",nombre:"THE KILLERS",anio:"1946"},
{id_codigo:"2",imagen:"../images/2 THE WOMAN IN THE WINDOW [1944].jpg",nombre:"THE WOMAN IN THE WINDOW",anio:"1944"},
{id_codigo:"3",imagen:"../images/3 OUT OF THE PAST [1947].jpg",nombre:"OUT OF THE PAST",anio:"1947"},
{id_codigo:"4",imagen:"../images/4 BODY HEAT [1981].jpg",nombre:"BODY HEAT",anio:"1981"},
{id_codigo:"5",imagen:"../images/5 THE KILLERS [1964].jpg",nombre:"THE KILLERS",anio:"1964"},
{id_codigo:"6",imagen:"../images/6 DETOUR [1945].jpg",nombre:"DETOUR",anio:"1945"},
{id_codigo:"7",imagen:"../images/7 LAURA [1944].jpg",nombre:"LAURA",anio:"1944"},
{id_codigo:"8",imagen:"../images/8 WHIRLPOOL [1950].jpg",nombre:"WHIRLPOOL",anio:"1950"},
{id_codigo:"9",imagen:"../images/9 RUTHLESS [1948].jpg",nombre:"RUTHLESS",anio:"1948"},
{id_codigo:"10",imagen:"../images/10 LOST HIGHWAY [1997].jpg",nombre:"LOST HIGHWAY",anio:"1997"},
{id_codigo:"11",imagen:"../images/11 THE MALTESE FALCON [1941].jpg",nombre:"THE MALTESE FALCON",anio:"1941"},
{id_codigo:"12",imagen:"../images/12 THE BIG SLEEP [1946].jpg",nombre:"THE BIG SLEEP",anio:"1946"},
{id_codigo:"13",imagen:"../images/13 BODY AND SOUL [1947].jpg",nombre:"BODY AND SOUL",anio:"1947"},
{id_codigo:"14",imagen:"../images/14 SCARLET STREET [1945].jpg",nombre:"SCARLET STREET",anio:"1945"},
{id_codigo:"15",imagen:"../images/15 THE BIG HEAT [1953].jpg",nombre:"THE BIG HEAT",anio:"1953"},
{id_codigo:"16",imagen:"../images/16 KISS ME DEADLY [1955].jpg",nombre:"KISS ME DEADLY",anio:"1955"},
{id_codigo:"17",imagen:"../images/17 BOUND [1996].jpg",nombre:"BOUND",anio:"1996"},
{id_codigo:"18",imagen:"../images/18 THE KILLING [1956].jpg",nombre:"THE KILLING",anio:"1956"},
{id_codigo:"19",imagen:"../images/19 IN A LONELY PLACE [1950].jpg",nombre:"IN A LONELY PLACE",anio:"1950"},
{id_codigo:"20",imagen:"../images/20 THE LONG GOODBYE [1973].png",nombre:"THE LONG GOODBYE",anio:"1973"},
{id_codigo:"21",imagen:"../images/21 CROSSFIRE (1947).jpg",nombre:"CROSSFIRE",anio:"1947"},
{id_codigo:"22",imagen:"../images/22 GUN CRAZY (1950).jpg",nombre:"GUN CRAZY",anio:"1950"},
{id_codigo:"23",imagen:"../images/23 DOUBLE INDEMNITY (1944).jpg",nombre:"DOUBLE INDEMNITY",anio:"1944"},
{id_codigo:"24",imagen:"../images/24 MURDER, MY SWEET (1944).jpg",nombre:"MURDER, MY SWEET",anio:"1944"}
]

var cad=``	

if (document.getElementById("tablaPeliculas")) {
	
	for (var i=0; i<peliculas.length; i++) {
	
		cad+=` 
				<article class="entrada-blog">
				<h4>${peliculas[i].nombre}</h4>
				<img class="cajita" src="${peliculas[i].imagen}">
				</article>
			`	
	}	
}
console.log(cad);
document.getElementById("tablaPeliculas").innerHTML=cad;

					


const datos = new Array ("THE KILLERS","THE WOMAN IN THE WINDOW","OUT OF THE PAST","BODY HEAT",
"THE KILLERS","DETOUR","LAURA","WHIRLPOOL","RUTHLESS","LOST HIGHWAY","THE MALTESE FALCON",
"THE BIG SLEEP","BODY AND SOUL","SCARLET STREET","THE BIG HEAT");

const ultimas = new Array ("LE DOULOS","THE BURGLAR","CRY OF THE CITY");

const imgs = new Array ("13 BODY AND SOUL [1947].jpg");

var cad=`
			<div class="contenedor">
                <h1>Film Noir</h1>
                <input type="checkbox" id="menu-bar">
                <!-- uso la F de Facebook hasta encontrar otro icon -->
            	<label class="icon-facebook" for="menu-bar"></label>
			
				<nav class="menu">
					
					<a href=""><i class="icon-home"></i>Inicio</a>
					<a href="pages/peliculas.html"><i class="icon-videocam"></i>Películas</a>
					<a href="pages/estrellas.html">Estrellas</a>
					<a href="pages/sitios.html">Sitios</a>
					<a href="pages/multimedia.html"><i class="icon-video"></i>Multimedia</a>
					<a href="pages/registro.html"><i class="icon-address-card-o"></i>Registro</a>
					<a href="pages/ingreso.html">Ingreso</a>
				</nav>
			</div>
`
document.getElementById("idheader").innerHTML=cad;

var cad=`
	<div class="contenedor-footer">
			<p class="footer-texto">Codo a Codo @2021 - Proyecto Film Noir</p>
			<div class="footer-iconos">
					<a class="icon-twitter"></a>
					<a class="icon-github"></a>
					<a class="icon-at"></a>
			</div>
		</div>
`
document.getElementById("idfooter").innerHTML=cad;
	

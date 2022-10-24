
        let imagenes = []
        let selecciones = []
        var espera= document.getElementsByClassName("area-tarjeta");
        Gencartas()

        function Cargarimg() {
            imagenes = [
                '<img src="img/prueba.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba2.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba3.jpg" heigh:"90%" width="80%">',
                '<i class="fas fa-star"></i>',
                '<i class="far fa-star"></i>',
                '<i class="fas fa-star-of-life"></i>',
                '<i class="fas fa-star-and-crescent"></i>',
                '<i class="fab fa-old-republic"></i>',
                '<i class="fab fa-galactic-republic"></i>',
                '<i class="fas fa-sun"></i>',
                '<i class="fas fa-stroopwafel"></i>',
                '<i class="fas fa-dice"></i>',
                '<i class="fas fa-chess-knight"></i>',
                '<i class="fas fa-chess"></i>',
                '<i class="fas fa-dice-d20"></i>',
            ]
        }

        function Gencartas() {
            Cargarimg()
            selecciones = []
            let tablero = document.getElementById("tablero")
            let tarjetas = []
            for (let i = 0; i < 16; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${imagenes[0]}
                        </div>
                        <div class="cara superior">
                        
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    imagenes.splice(0, 1)
                }
            }
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
        }

        function seleccionarTarjeta(i) {
            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                selecciones.push(i)
            }
            if (selecciones.length == 2) {
                let cartas= document.getElementsByClassName("area-tarjeta");

                ValidarSelecciones(selecciones)
                selecciones = []
                

            }
        }

        function ValidarSelecciones(selecciones) {
            tablero.setAttribute('style',' pointer-events: none;');
            let trasera1 = document.getElementById("trasera" + selecciones[0])
            let trasera2 = document.getElementById("trasera" + selecciones[1])
            if (trasera1.innerHTML != trasera2.innerHTML) {
              trasera1.style.background ="red";
              trasera2.style.background ="red";
            }
            setTimeout(() => {
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                    trasera1.style.background ="lightcyan ";
                    trasera2.style.background =" lightcyan";
                }else{
                    trasera1.style.background = "green"
                    trasera2.style.background = "green"
                }
                tablero.setAttribute('style','');
            }, 1000);
        }

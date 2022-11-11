        let imagenes=[]
        let selecciones = []
        let fallos=0
        let acierto=0;
        let error=document.getElementById('errores');
        let final=document.getElementById('final');

        var espera= document.getElementsByClassName("area-tarjeta");
        Gencartas()

        function Cargarimg(foto) {
            foto = [
                '<img src="img/prueba.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba2.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba3.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba4.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba5.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba6.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba7.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba8.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba9.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba10.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba11.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba12.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba13.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba14.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba15.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba16.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba17.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba18.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba19.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba20.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba21.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba22.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba23.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba24.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba25.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba26.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba27.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba28.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba29.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba30.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba31.jpg" heigh:"90%" width="80%">',
                '<img src="img/prueba32.jpg" heigh:"90%" width="80%">',
            ]

           imagenes=foto.sort(()=> Math.random()-0.5);
        }

        function Gencartas() {
            Cargarimg()
            fallos=0;
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
            error.innerHTML='<h4>Intentos: '+fallos+'</h4>'
            final.innerHTML=''
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
                fallos++;
                error.innerHTML='<h4>Intentos: '+fallos+'</h4>'
                

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
                    acierto++;
                    if(acierto==8){
                        final.innerHTML='<br> <h4 class="text-success">Ganaste manco</h4> '
                    }
                }
                tablero.setAttribute('style',''); 
                //comentario
            }, 1000);
        }

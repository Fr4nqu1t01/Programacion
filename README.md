# Tp-Programacion

let posicionDelGanador = -1;
let acumuladorDeNumeroGanador = 0;
let NumeroSecreto = Math.floor(Math.random () * 20 )+1;
NumeroDeIntento = Math.floor (Math.random()*10)+1;
let jugadores = [0,0,0,0];
ganador = false;

function verificandoGanador (posicionjugador){
    console.log(`El jugador ${posicionjugador}, eligio el numero ${jugadores[posicionjugador]}`)
    if (jugadores[posicionjugador] === NumeroSecreto){
        acumuladorDeNumeroGanador = NumeroSecreto;
        posicionDelGanador = posicionjugador;
        ganador = true;
        
    }else 
    ganador = false;
}

function intentosAleatorios(posicionjugador){
    
    
     for(let e = 0 ; e < NumeroDeIntento; e++){
        jugadores[posicionjugador] =+ Math.floor (Math.random()*20 )+1;
        verificandoGanador(posicionjugador);
        if (ganador === true){
            
        break;
      }
      
        

    }
}
function JuegoDeAdivinar (){
    console.log(`Los jugadores tienen un numero aleatorio de intentos: ${NumeroDeIntento}, para adivinar el numero: ${NumeroSecreto}`)
    
    for (let posicionjugador = 0; posicionjugador < jugadores.length; posicionjugador ++){

        intentosAleatorios(posicionjugador);
        console.log(`-------------------`);
        if (ganador === true){
        console.log(`El jugador  Ganador ${posicionDelGanador}  adivino el numero numero secreto: ${acumuladorDeNumeroGanador}`)
        break;
        }
      
    }
    if (ganador === false){
        console.log(`Ningun jugador adivino el numero. `)
    }
    

}
JuegoDeAdivinar();
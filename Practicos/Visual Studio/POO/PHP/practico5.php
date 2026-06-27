<?php

class Auto {

private int $color;
private int $cantRuedas;

private int $velocidad;

private int $identidad = 0;

private static $contador = 0;



 public function getColor(){
    return $this->color;
 }

 public function getCantRuedas(){
    return $this->cantRuedas;
 }

 public function getVelocidad(){
    return $this->velocidad;
 }

 public function getIdentidad(){
   return $this->identidad;
 }

 public function setColor(int $nuevoColor){
    $this->color = nuevoColor;
 }

 public function setCantRuedas(int $nuevaRuedas){
    $this->cantRuedas = nuevaRuedas;
 }

 public function setVelocidad(int $nuevaVelocidad){
    $this->velocidad = nuevaVelocidad;
 }

 public function setIdentidad(int $nuevaIdentidad){
   $this->identidad = $nuevaIdentidad; 
 }

public function  __construct(int $color, int $cantRuedas){
$this->color = $color;
$this->cantRuedas = $cantRuedas;
$this->velocidad = 0;
self::$contador = self::$contador + 1;
$this->identidad = self::$contador;
}

public function igual($otroAuto) :bool {
   if($this->color == $otroAuto->getColor() && $this->cantRuedas == $otroAuto->getCantRuedas() && $this->velocidad == $otroAuto->getVelocidad()){
      return true;
   }
   else {
      return false;
   }
}

public static function crear(){

}

}


?>

<?php

class cuentaBancaria {

private string $cub;
private string $titular;
private float $saldo;
private array $movimientos;

public function getCbu(){
return $this->cub;
}

public function getTitular(){
return $this->titular;
}

public function getSaldo(){
return $this->saldo;
}

public function getMovimientos(){
return $this->movimientos;
}

public function depositar (float $importe){
	array_push($movimientos, $importe);
	$this->saldo = $saldo + $importe;
	echo "deposito realizado con exito";
}

public function extraer(float $importe){
	if (($this->saldo - $importe) < 0){
	return "saldo insuficiente";
	else
	$this->saldo = $saldo - $importe;
	}
}

public function transferir(cuentaBancaria $destino, float $importe){
	$destino->saldo = $destino->saldo + importe;
	

}
?>

<?php

class libro {

private string $isbn;
private string $titulo;
private string $autor;
private int $anioPublicacion;
private bool $prestado;

public function __construct(string $isbn, string $titulo, string $autor, int $anioPublicacion, bool $prestado){
	$this->isbn = $isbn;
	$this->titulo = $titulo;
	$this->autor = $autor;
	$this->anioPublicacion = $anioPublicacion;
	$this->prestado = $prestado;
}

public function getIsbn(){
return $this->isbn;
}

public function getTitulo(){
return $this->titulo;
}

public function getAutor(){
return $this->autor;
}

public function getAnioPublicacion(){
return $this->anioPublicacion;
}

public function getPrestado(){
return $this->prestado;
}

public function prestar() {
 $this->prestado = true;
}

public function devolver() {
 $this->prestado = false;
}

public function estaDisponible(){
 return $this->prestado;
}

public function mostrarInformacion(){
	$this->getIsbn();
	$this->getNombre();
	$this->getAutor();
	$this->getAnioPublicacion();
}

}


class socio {
private int $id;
private string $nombre;
private string $apellido;
private array $librosPrestados;


public function __construct(int $id, string $nombre, string $apellido, $librosPrestados){
	$this->id = $id;
	$this->nombre = $nombre;
	$this->apellido = $apellido;
	$this->librosPrestados = [];
}

public function getId(){
return $this->id;
}

public function getNombre() {
return $this->nombre;
}

public function getApellido() {
return $this->apellido;
}

public function getLibrosPrestados(){
return $this->librosPrestados;
}

public function prestarLibro(Libro $libro){

	if ($libro->estaDisponible()) {
	   array_push($this->librosPrestados, $libro);
	$libro->prestar();
	}
	else {
		return "el libro ya fue prestado";
	}
}

public function devolverLibro(Libro $libro){
	$indice = array_search($libro, $this->librosPrestados);
	if ($indice !== false){
	unset($this->librosPrestados[$indice]);
	$libro->devolver();
	}
	else {
	return "el socio no tiene este libro";
	}
}

public function listarLibrosPrestados() {
	foreach ($this->librosPrestados as $libro){
	    echo $libro->mostrarInformacion();
	}
}
}
?>
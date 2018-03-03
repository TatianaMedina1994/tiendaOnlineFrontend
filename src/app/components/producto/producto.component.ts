import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  cantidad:String;
  descripcion:string;
  descuento:string;
  nombre:string;
  precio:string;
  url:string;
  categoria:string;
  listaProductos: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  agregarproducto(){
    console.log("cantidad: "+this.cantidad);
    console.log("descripcion: "+this.descripcion);
    console.log("descuento: "+this.descuento);
    console.log("nombre: "+this.nombre);
    console.log("precio: "+this.precio);
    console.log("url: "+this.url);
    console.log("categoria: "+this.categoria);

    this.listaProductos.push({
      "cantidad": this.cantidad,
      "descripcion": this.descripcion,
      "descuento":this.descuento,
      "nombre":this.nombre,
      "precio":this.precio,
      "url":this.url,
      "categoria":this.categoria
    });
    this.cantidad = '';
    this.descuento='';
    this.descripcion='';
    this.nombre = '';
    this.precio='';
    this.url='';
    this.categoria='';

    console.log("Total Productos: "+this.listaProductos.length);

  }

  removerProducto(paqueteIndex) {
    this.listaProductos.splice(paqueteIndex,1);
  }
}

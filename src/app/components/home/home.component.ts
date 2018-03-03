import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articulos: any[]=[
    {"titulo":"Título del producto 1",
    "descripcion": "Decripción del Producto XXXX XXXX XXX",
    "precio":100.10,
    "cantidad":10,
    "descuento":5,
    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgRGFns_fLdPSfKQrgBbxpMZ3AlBYtiEvLOq5Pb3EzLkjR6wF"
  },
  {"titulo":"Título del producto 2",
  "descripcion": "Decripción del Producto XXXX XXXX XXX",
  "precio":100.10,
  "cantidad":10,
  "descuento":5,
  "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgRGFns_fLdPSfKQrgBbxpMZ3AlBYtiEvLOq5Pb3EzLkjR6wF"
},
{"titulo":"Título del producto 3",
"descripcion": "Decripción del Producto XXXX XXXX XXX",
"precio":100.10,
"cantidad":10,
"descuento":5,
"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgRGFns_fLdPSfKQrgBbxpMZ3AlBYtiEvLOq5Pb3EzLkjR6wF"
},
{"titulo":"Título del producto 4",
"descripcion": "Decripción del Producto XXXX XXXX XXX",
"precio":100.10,
"cantidad":10,
"descuento":5,
"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgRGFns_fLdPSfKQrgBbxpMZ3AlBYtiEvLOq5Pb3EzLkjR6wF"
},
{"titulo":"Título del producto 5",
"descripcion": "Decripción del Producto XXXX XXXX XXX",
"precio":100.10,
"cantidad":10,
"descuento":5,
"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgRGFns_fLdPSfKQrgBbxpMZ3AlBYtiEvLOq5Pb3EzLkjR6wF"
}
  ]
  constructor() { }

  ngOnInit() {
  }

}

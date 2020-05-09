import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula;
  @Output() marcarFavorita = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(pelicula){
   
    this.marcarFavorita.emit({pelicula:pelicula})
  }
}

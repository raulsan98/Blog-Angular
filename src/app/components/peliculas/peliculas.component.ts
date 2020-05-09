import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../models/Pelicula'
import { esParPipe } from '../../pipes/espar.pipe';
import { PeliculaService } from '../../service/pelicula.service'


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {
  public peliculas: Pelicula[];
  public prueba:string;
  public raul:string;
  public favorita:Pelicula;
  

 
  constructor( ) {
    this.prueba="spiderman"
   
    this.peliculas = [ new Pelicula ("spiderman",2015,"https://statics-uestudio.uecdn.es/buhomag/2019/07/lejosdecasa_editado-1.jpg"),
                       new Pelicula ("Superman",2018,"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/10/superman.jpg"),
                      new Pelicula ("LosVengadores",2019,"https://estaticos.elperiodico.com/resources/jpg/7/8/1556123252187.jpg"),]
                                                   
   }
  
  ngOnInit(): void {
    console.log(this.peliculas)
  }

  recogerFavorita(event){
    this.favorita = event.pelicula;
    console.log(this.favorita)
    
  }


}


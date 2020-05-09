import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  constructor( private _route: ActivatedRoute,
    private _router: Router) {
   
   }

  ngOnInit(): void {
  }
  redireccion(){
    this._router.navigate(['/formulario'])
    
  }



}

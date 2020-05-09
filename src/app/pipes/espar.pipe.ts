import { Pipe,PipeTransform } from '@angular/core';


@Pipe({
    name:'espar'
})

export class esParPipe implements PipeTransform{
     
    transform(value:any){
        var espar= " y el año no es par";
        if( value % 2 === 0){
            espar = " y el año es par"
        }

        return "El año es: "+value + espar ;
    }



}

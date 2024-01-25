import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';


@Component({
  selector: 'app-uncommonPage',
  templateUrl: './uncommonPage.component.html',
  styleUrls: ['./uncommonPage.component.css']
})
export class UncommonPageComponent  {
  // PROPIEDADES PUBLICAS O PRIVADAS
  // i18n select
  public name: string = 'fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap ={
    male: 'invitalo',
    female: 'invitarla'
  }
  // CONSTRUCTOR 
  changeClient(): void{
    this.name= 'Melisa';
    this.gender='female';
  }
  //METODOS 
   // i18nPlural
   public clients: string[] = ['Maria','Pedro','Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
   public clientsMap = {
     '=0': 'no tenemos ningún cliente esperando.',
     '=1': 'tenemos un cliente esperando.',
     '=2': 'tenemos 2 personas esperando.',
     'other': 'tenemos # clientes esperando.',
   }

   deleteClient(): void {
    this.clients.shift();
  }

   // KeyValue Pipe
   public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  }

    // Async Pipe
    public myObservableTimer: Observable<number> = interval(2000).pipe(
      tap( value => console.log('tap:', value ) ),
    );
  
    public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve( 'Tenemos data en la promesa.' );
        console.log( 'Tenemos data en la promesa.' );
        this.person.name = 'Otro nombre'
      }, 3500);
    })


}

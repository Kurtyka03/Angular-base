import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  daneKursanta: string = '';
  numerKursu: number = 0;
  array = ['Programowanie w C#', 'Angular dla poczatkujacych', 'Kurs Django']
  Add() {
    console.log(this.daneKursanta)
    if(this.numerKursu > 0 && this.numerKursu < 4){
      console.log(this.array[this.numerKursu - 1])
    }
    else{
      console.log('Niewlasciwy numer')
    }

  }
}

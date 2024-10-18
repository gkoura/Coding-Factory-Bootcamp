import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {

    person0: Person = {
        givenName: "Greg",
        surName: "gkoura",
        age: 26,
        email: "gkouras@icloud.com",
        address: "dimosthenous 65",
    };

    person1: Person = {
        givenName: "Helen",
        surName: "Karvounidiou",
        age: 26,
        email: "elenikar@gmail.com",
        address: "dimosthenous 65",
    };

}

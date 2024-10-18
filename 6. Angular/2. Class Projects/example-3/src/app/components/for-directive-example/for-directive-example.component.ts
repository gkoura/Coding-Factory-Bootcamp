import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {

    users: Person[] = [
        {
            givenName: "Sarah",
            surName: "Brown",
            email: "sarah_kay@ymail.com",
            age: 56,
            address: "Stockton",
        },
        {
            givenName: "Steven",
            surName: "Lee",
            email: "s_lee@yahoo.com",
            age: 50,
            address: "Rudyard",
        },
        {
            givenName: "Taylor",
            surName: "Carter",
            email: "taylorcarter@ymail.com",
            age: 73,
            address: "Abbotsford",
        },
        {
            givenName: "Katherine",
            surName: "Turner",
            email: "katherineturner@outlook.com",
            age: 77,
            address: "Carroll",
        },
        {
            givenName: "Emily",
            surName: "White",
            email: "emwhite36@yahoo.com",
            age: 28,
            address: "San Saba",
        },
        {
            givenName: "Sophia",
            surName: "Torres",
            email: "storres@gmail.com",
            age: 24,
            address: "Oldtown",
        },
        {
            givenName: "Jason",
            surName: "Jones",
            email: "j_jones@outlook.com",
            age: 68,
            address: "New Rockford",
        },
        {
            givenName: "Daniel",
            surName: "Wood",
            email: "d.a.wood@outlook.com",
            age: 65,
            address: "Dulles",
        },
        {
            givenName: "Alexandra",
            surName: "Price",
            email: "aprice@gmail.com",
            age: 69,
            address: "Panama City Beach",
        },
        {
            givenName: "Sean",
            surName: "Bryant",
            email: "seanbryant@gmail.com",
            age: 69,
            address: "Williamstown",
        },
    ];

}

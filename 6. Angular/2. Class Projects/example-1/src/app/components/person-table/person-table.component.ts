import { Component } from '@angular/core';

@Component({
    selector: 'app-person-table',
    standalone: true,
    imports: [],
    templateUrl: './person-table.component.html',
    styleUrl: './person-table.component.css',
})
export class PersonTableComponent {
    person = {
        givenName: 'Greg',
        surName: 'Gkouras',
        age: 26,
        email: 'gkouras@icloud.com',
    };

    person2 = {
        givenName: 'Helen',
        surName: 'Karvounidou',
        age: 26,
        email: 'e.karvounidou@gmail.com',
    };
}

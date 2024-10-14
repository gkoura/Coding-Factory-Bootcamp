import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, PersonTableComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'example-2';

    person: Person = {
        givenName: 'Greg',
        surName: 'Gkouras',
        age: 26,
        email: 'gkouras@icloud.com',
    };

    person2: Person = {
        givenName: 'Helen',
        surName: 'Karvounidou',
        age: 26,
        email: 'e.karvounidou@gmail.com',
    };
}

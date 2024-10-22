import { Component, Inject } from "@angular/core";
import { SimpleDatatableComponent } from "../simple-datatable/simple-datatable.component";
import { EPerson, Person } from "../../shared/interfaces/person";

import {
    Dialog,
    DialogRef,
    DIALOG_DATA,
    DialogModule,
} from "@angular/cdk/dialog";
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: "app-component-output-example",
    standalone: true,
    imports: [SimpleDatatableComponent, DialogModule],
    templateUrl: "./component-output-example.component.html",
    styleUrls: ["./component-output-example.component.css"], // Fixed typo to use `styleUrls`
})
export class ComponentOutputExampleComponent {
    constructor(public dialog: Dialog) {}

    showPersonClicked(person: EPerson) {
        // Open the dialog when a person is clicked, passing the person data
        this.dialog.open(PersonDialogComponent, {
            data: person,
        });
    }

    personTemplate(person: EPerson) {
        return `Person Details
        
        First Name: ${person.givenName}
        Last Name: ${person.surName}
        Age: ${person.age}
        Email: ${person.email}
        Address: ${person.address}`;
    }
}

@Component({
    selector: "app-person-dialog", // Added selector for completeness
    imports: [PersonTableComponent],
    standalone: true,
    template: `
        <app-person-table [person]="person"></app-person-table>
        <button class="btn btn-primary btn-sm" (click)="dialogRef.close()">
            Close
        </button>
    `,
    styles: [
        `
            :host {
                display: block;
                background: #fff;
                border-radius: 8px;
                padding: 8px 16px 16px;
            }
        `,
    ],
})
export class PersonDialogComponent {
    constructor(
        public dialogRef: DialogRef,
        @Inject(DIALOG_DATA) public person: Person // Corrected injection for dialog data
    ) {}
}

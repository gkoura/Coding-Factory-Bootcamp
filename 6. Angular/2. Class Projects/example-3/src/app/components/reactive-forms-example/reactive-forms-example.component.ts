import { Component } from "@angular/core";
import { ReactiveFormStructureComponent } from "./reactive-form-structure/reactive-form-structure.component";
import { PersonTableComponent } from "../person-table/person-table.component";
import { SimpleDatatableComponent } from "../simple-datatable/simple-datatable.component";
import { EPerson, ManyPerson } from "../../shared/interfaces/person";

@Component({
    selector: "app-reactive-forms-example",
    standalone: true,
    imports: [
        ReactiveFormStructureComponent,
        PersonTableComponent,
        SimpleDatatableComponent,
    ],
    templateUrl: "./reactive-forms-example.component.html",
    styleUrl: "./reactive-forms-example.component.css",
})
export class ReactiveFormsExampleComponent {
    currentPerson: EPerson | undefined;

    onPerson(person: EPerson) {
        console.log(">>>>", person);
        ManyPerson.push(person);
        this.currentPerson = person;
    }
}

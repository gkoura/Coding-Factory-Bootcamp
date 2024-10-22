import { Component, EventEmitter, Output, output } from "@angular/core";
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { EPerson } from "../../../shared/interfaces/person";

@Component({
    selector: "app-reactive-form-structure",
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
    ],
    templateUrl: "./reactive-form-structure.component.html",
    styleUrls: ["./reactive-form-structure.component.css"],
})
export class ReactiveFormStructureComponent {
    @Output() person = new EventEmitter <EPerson>()

    userForm = new FormGroup({
        givenName: new FormControl("", Validators.required),
        surName: new FormControl("", Validators.required),
        age: new FormControl(18, [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.min(18),
            Validators.max(100),
        ]),
        email: new FormControl("", [Validators.required, Validators.email]),
        address: new FormControl("road1", Validators.required),
    });

    onSubmit(value: any) {
        this.person.emit (value as EPerson)
        this.userForm.reset();
    }
}

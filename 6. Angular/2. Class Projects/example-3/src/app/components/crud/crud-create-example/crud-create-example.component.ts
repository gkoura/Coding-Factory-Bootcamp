import { Component } from "@angular/core";
import { CrudNavbarComponent } from "../crud-navbar/crud-navbar.component";
import { CustomerService } from "../../../shared/services/customer.service";
import { Customer } from "../../../shared/interfaces/customer";

import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";

@Component({
    selector: "app-crud-create-example",
    standalone: true,
    imports: [
        CrudNavbarComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
    ],
    templateUrl: "./crud-create-example.component.html",
    styleUrl: "./crud-create-example.component.css",
})
export class CrudCreateExampleComponent {

    form = new FormGroup({
        givenName: new FormControl("", Validators.required),
        surName: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        afm: new FormControl("", Validators.required),
        phoneNumbers: new FormArray ([
            new FormGroup({
                number: new FormControl("", Validators.required),
                type: new FormControl("", Validators.required)
            })
        ]),
        address: new FormGroup({
                street: new FormControl("", Validators.required),
                city: new FormControl("", Validators.required),
                zipcode: new FormControl("", Validators.required)
            })
    })

    phoneNumbers = this.form.get("phoneNumbers") as FormArray

    removePhoneNumber(index:number){
        
    }
    addPhoneNumber(){
        this.phoneNumbers.push(
            new FormGroup({
                number:new FormControl("", Validators.required),
                type:new FormControl("", Validators.required)
            })
        )

    }

    onSubmit(){
        
    }

    formReset(){}
}

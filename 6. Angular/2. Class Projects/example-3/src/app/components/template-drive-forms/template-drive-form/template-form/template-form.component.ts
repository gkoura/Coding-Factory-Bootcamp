import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { EPerson } from "../../../../shared/interfaces/person";

import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-template-form",
    standalone: true,
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        FormsModule,
    ],
    templateUrl: "./template-form.component.html",
    styleUrl: "./template-form.component.css",
})
export class TemplateFormComponent {
    @Output() person = new EventEmitter<EPerson>

    onSubmit(value: any) {
        console.log(value);
        this.person.emit(value as EPerson)
    }
}

import { Component } from '@angular/core';
import { TemplateFormComponent } from './template-drive-form/template-form/template-form.component';
import { EPerson, ManyPerson} from '../../shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-template-drive-forms',
  standalone: true,
  imports: [TemplateFormComponent, SimpleDatatableComponent, PersonTableComponent],
  templateUrl: './template-drive-forms.component.html',
  styleUrl: './template-drive-forms.component.css'
})
export class TemplateDriveFormsComponent {

    currentPerson: EPerson | undefined;

    onPerson(person: EPerson) {
        console.log(">>>>")
        console.log(person)
        this.currentPerson = person;
        ManyPerson.push(person)

    }




}

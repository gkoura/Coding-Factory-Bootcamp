import { Component, EventEmitter, Output } from "@angular/core";
import { EPerson, ManyPerson } from "../../shared/interfaces/person";
import { sortBy } from "lodash-es";

@Component({
    selector: "app-simple-datatable",
    standalone: true,
    imports: [],
    templateUrl: "./simple-datatable.component.html",
    styleUrl: "./simple-datatable.component.css",
})
export class SimpleDatatableComponent {
    @Output() personClicked = new EventEmitter<EPerson>();
    manyPerson = ManyPerson;

    sortOrder = {
        givenName: "none",
        surName: "none",
        age: "none",
        email: "none",
        address: "none",
    };

    sortData(sortKey: keyof typeof this.sortOrder): void {
        const currentOrder = this.sortOrder[sortKey] || "none";
        const newOrder = currentOrder === "asc" ? "desc" : "asc";
        this.sortOrder[sortKey] = newOrder;

        // Sort using lodash
        this.manyPerson = sortBy(this.manyPerson, [sortKey]);
        if (newOrder === "desc") {
            this.manyPerson.reverse();
        }
    }

    sortSign(sortKey: keyof typeof this.sortOrder): string {
        if (this.sortOrder[sortKey] === "asc") {
            return "&darr;";
        } else if (this.sortOrder[sortKey] === "desc") {
            return "&uarr;";
        } else {
            return "";
        }
    }

    onPersonClick(person: EPerson) {
        this.personClicked.emit(person);
        console.log("hell")
    }
}

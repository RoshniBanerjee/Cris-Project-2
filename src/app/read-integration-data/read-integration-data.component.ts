import { Component } from '@angular/core';

@Component({
  selector: 'app-read-integration-data',
  templateUrl: './read-integration-data.component.html',
  styleUrls: ['./read-integration-data.component.css']
})
export class ReadIntegrationDataComponent {
  tableData: any[] = [];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const jsonData = JSON.parse(e.target.result);
      this.tableData = jsonData;
    };
    reader.readAsText(file);
  }
}

import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent {

  constructor(private service:SharedService){}

  @Input() emp:any;
  employee_name:string = "";
  department_name: string = "";
  date_of_join: string = "";
  PhotoFileName: string = "";

  ngOnInit(){
    this.employee_name = this.emp.employee_name;
    this.department_name = this.emp.department_name;
    this.date_of_join = this.emp.date_of_join;
    this.PhotoFileName = this.emp.PhotoFileName
  }

  addEmployee(){
    var val = {employee_name: this.employee_name,
                department_name: this.department_name,
                date_of_join: this.date_of_join,
                PhotoFileName: this.PhotoFileName
              }
    this.service.addEmployee(val).subscribe(res =>{
      alert(res.toString());
    });
  }

  updateEmployee(){

  }
}

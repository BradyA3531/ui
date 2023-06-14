import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent {

  constructor(private service:SharedService){}

  EmployeeList: any = [];
  @Input() ModalTitle: string = "";
  ActivateAddEditEmpComp: boolean = false;
  @Input() emp:any;

  ngOnInit(){
    this.refreshEmployeeList();
  }

  refreshEmployeeList(){
    this.service.getEmpList().subscribe(data => {
      this.EmployeeList = data
    })
  }

  addClick(){
    this.emp={
      employee_id: 0,
      employee_name:"",
      department_name:"",
      date_of_join:"",
    }
    this.ModalTitle = "Add an Employee";
    this.ActivateAddEditEmpComp = true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.refreshEmployeeList();
  }

}

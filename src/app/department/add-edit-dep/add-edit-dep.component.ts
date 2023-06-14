import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent {

constructor(private service: SharedService){}

  @Input() dep:any;
  department_id : string = "";
  department_name : string = "";

  ngOnInit(): void{
    this.department_id=this.dep.department_id;
    this.department_name=this.dep.department_name;
  }

  addDepartment(){
    var val = {department_id:this.department_id,
                department_name:this.department_name};
    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {department_id:this.department_id,
      department_name:this.department_name};
    this.service.updateDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }
}

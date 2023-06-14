import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit{

  constructor(private service:SharedService){}
  
  DepartmentList:any=[];

  ModalTitle: string = "Add a Department";
  ActivateAddEditDepComp: boolean = false;
  @Input() dep:any;


  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      department_id:0,
      department_name:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp = true;
  }

  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  editClick(item:any){
    this.dep = item;
    this.ModalTitle ="Edit Department"
    this.ActivateAddEditDepComp = true;
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
    });
  }

  deleteClick(item:any){
    if(confirm('Are you sure you want to delete this record?')){
      this.service.deleteDepartment(item.department_id).subscribe(data =>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }


}

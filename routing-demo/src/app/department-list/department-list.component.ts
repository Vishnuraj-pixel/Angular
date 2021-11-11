import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department-list
    </h3>
    <ul class="items">
    <div class="btn-group-vertical">
      <li class="btn btn-info" (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor = "let department of departments">
        <span class= "badge">{{department.id}}</span>{{department.name}}
      </li>
    </div>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId: any;

  departments = [
    {"id":1, "name": "Angular"},
    {"id":2, "name": "Node"},
    {"id":3, "name": "MangoDB"},
    {"id":4, "name": "Ruby"},
    {"id":5, "name": "Bootstrap"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.selectedId = id;
    });
  }
  onSelect(department:any) {
    // this.router.navigate(['/departments', department.id])
    this.router.navigate([department.id], {relativeTo:this.route});
  }

  isSelected(department:any) {
    return department.id ===this.selectedId;
  }




}
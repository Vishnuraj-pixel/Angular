import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap, Router  } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>

    <router-outlet></router-outlet> 

    <p>
      <button (click)="showOverview()" class="btn btn-primary">Overview</button>
      <button (click)="showContact()" class="btn btn-success">Contact</button>
    </p>

    <p>
    <button class='active' (click)= "goPrevious()" class="btn btn-info">Previous</button>
    <button class='active' (click)= "goNext()" class="btn btn-danger">Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()" class="btn btn-warning">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {  

  public departmentId: any;



  constructor(private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    // let _id = this.id; 
    // console.log(_id);
    // this.departmentId = _id; 
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      // console.log(id);
      this.departmentId = id;
    })
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
    console.log(previousId)
  };
  goNext() {
    
    let nextId = parseInt(this.departmentId) + 1;
    this.router.navigate(['/departments', nextId]);
    console.log(nextId)
  };
 
  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id:selectedId, test: 'testvalue'}])
    this.router.navigate(['../', {id:selectedId}], {relativeTo: this.route})
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route})
  }
  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route})
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-sort-doj',
  templateUrl: './sort-doj.component.html',
  styleUrls: ['./sort-doj.component.css']
})
export class SortDojComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService,
              private route: Router) { }

  ngOnInit(): void {

    this.userService.sortByDoj().subscribe(data=>{
      this.users=data;
    });
  }

  
  private getUsers(){
    this.userService.getEmployeeList().subscribe(data => {
      this.users=data;
    })

}



  updateUser(id:number){
    this.route.navigate(['update-user',id]);
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(data=>{
      console.log(data);
      this.getUsers();
    })
  }

  softDeleteUser(id:number){
    this.userService.softDeleteUser(id).subscribe(data=>{
      console.log(data);
      this.getUsers();
    })
  }

  viewUser(id:number){
    this.route.navigate(['user-details',id]);

  }


  



}

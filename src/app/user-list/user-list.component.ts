import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  name: '';
  value: any;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

    private getUsers(){
      this.userService.getEmployeeList().subscribe(data => {
        this.users=data;
      })

  }

  sortByDoj(){
    this.router.navigate(['sort-doj']);

  }

  sortByDob(){
    this.router.navigate(['sort-dob']);
  }



  updateUser(id:number){
    this.router.navigate(['update-user',id]);
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
    this.router.navigate(['user-details',id]);

  }

  searchByName(){
    this.userService.findByName(this.name).subscribe(data => {
      if(data)
      {
      this.users=data;
      }
      if(this.name.includes("all"))
      {
        console.log("Name:"+this.name)
        this.getUsers();
      }
    }, error => console.log(error));
  }


  goToUserList(){
    this.router.navigate(['/users']);
  }


}

import { Component, OnInit } from '@angular/core';

import { UserRoleService } from '../../service/user-role.service';

//import { UserRole } from '../../interface/userRole';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  code: String;
  description: String;
  status: String = "";

  constructor(private userRoleService:UserRoleService) { }

  ngOnInit() {
  }

  onClickSave() {
    const userRole = {
      code: this.code,
      description: this.description,
      status: this.status
    };    
    console.log(JSON.stringify(userRole));
    this.userRoleService.saveUserRole(userRole);

  }

}

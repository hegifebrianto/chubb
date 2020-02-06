import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserListService } from 'app/services/user-list.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  constructor(
    private userService: UserListService,
    public formBuilder: FormBuilder,

  ) { }
  roleData = [{
    id: '10',
    roleName: "Super Administrator"
  }, {
    id: '11',
    roleName: "Administrator"
  }, {
    id: '12',
    roleName: "Head Departement of Agency"
  }
  ];
  agentFormGroup: FormGroup;

  ngOnInit() {
    // this.getRoleData();
    this.initForm();
  }
  initForm() {
    this.agentFormGroup = this.formBuilder.group({
      fullName: [''],
      role: [''],
      email: [''],
      phone: [''],
    });
  }
  getRoleData() {
    this.userService.getRoleData().subscribe(
      (result: any) => {
        this.roleData = result.data;
        console.log(this.roleData);
      });
  }
  save() {
    const payload = {
      fullName: this.agentFormGroup.getRawValue().fullName,
      agentType: this.agentFormGroup.getRawValue().role,
      email: this.agentFormGroup.getRawValue().email,
      phoneNumber: this.agentFormGroup.getRawValue().phone,
      roleId: this.roleData.find(x => x.roleName === this.agentFormGroup.getRawValue().role).id,
    };

    this.userService.saveAgent(payload).subscribe((response: any) => {
      alert(response);
    })
  }


}

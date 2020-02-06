import { Component, OnInit } from '@angular/core';
import { UserListService } from 'app/services/user-list.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-agent',
  templateUrl: './form-agent.component.html',
  styleUrls: ['./form-agent.component.scss']
})
export class FormAgentComponent implements OnInit {

  constructor(
    private userService: UserListService,
    public formBuilder: FormBuilder,

  ) { }

  roleData = [];
  agentFormGroup: FormGroup;

  ngOnInit() {
    this.getRoleData();
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

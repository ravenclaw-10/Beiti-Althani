import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout().subscribe((res)=>{
      console.log(res);
      Swal.fire(
        'Logged out successfully',
        'Thank you!',
        'success'
      )
      this.router.navigate(["/"]);
    });
    
    
  }

}

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private usuarioService:UsuarioService,private router:Router) { }

  ngOnInit() {
  }
  registro(user:any,email:any,password:any){
    this.usuarioService.registrarse(user.value,email.value,password.value).subscribe({
      next:(dato:any)=>{
        localStorage.setItem('user',dato.users.user)
        localStorage.setItem('token',dato.token)
        localStorage.setItem('id',dato.users.id)

        if(dato){
          this.router.navigateByUrl('/principal')
        }
        console.log(dato)
      },error:(err)=>{
console.log(err)
      }
    })
  }

}

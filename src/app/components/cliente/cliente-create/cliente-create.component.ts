import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    clNome: '',
    clIdade: 0,
    clEmail: '',
    clTelefone: '',
    clCPF: '',
    clEndereco: ''
  }
  //importando productService
  constructor(private clienteService: ClienteService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente adicionado!')
      this.router.navigate(['/cliente'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cliente'])
  }  
}

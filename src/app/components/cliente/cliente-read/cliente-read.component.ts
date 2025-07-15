import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  cliente!: Cliente[]
  displayedColumns = ['clId', 'clNome', 'clIdade', 'clTelefone', 'clCPF', 'clEndereco', 'action']

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(cliente => {
      this.cliente = cliente
      console.log(cliente)  
    })
  }

}


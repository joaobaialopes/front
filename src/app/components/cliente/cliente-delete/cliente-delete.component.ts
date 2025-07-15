import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const clId = this.route.snapshot.paramMap.get('clId');
    this.clienteService.readById(clId!).subscribe(cliente =>{
      this.cliente = cliente
    })
  }

  deleteCliente(): void {
    this.clienteService.delete(this.cliente.clId!).subscribe(() =>{
    this.clienteService.showMessage('Cliente excluido com sucesso!')  
    this.router.navigate(['/cliente'])
    })
  }

  cancel(): void{
    this.router.navigate(['/cliente'])
  }
}

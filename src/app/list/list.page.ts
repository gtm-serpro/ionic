import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage implements OnInit {

  processos = [
    {
      numero: '0001234-56.2024.1.00.0000',
      assunto: 'Contrato de Prestação de Serviços',
      status: 'Assinar',
      observacao: true
    },
    {
      numero: '0009876-54.2024.1.00.0000',
      assunto: 'Análise Técnica',
      status: 'Editar',
      observacao: false
    },
    {
      numero: '0004567-89.2024.1.00.0000',
      assunto: 'Parecer Jurídico',
      status: 'Assinado',
      observacao: false
    }
  ];

  constructor() {}

  ngOnInit() {}

  getIcon(status: string): string {
    switch (status) {
      case 'Assinar':
        return 'create-outline';
      case 'Editar':
        return 'document-text-outline';
      case 'Assinado':
        return 'checkmark-done-outline';
      default:
        return 'folder-outline';
    }
  }

  getColor(status: string): string {
    switch (status) {
      case 'Assinar':
        return 'danger';
      case 'Editar':
        return 'tertiary';
      case 'Assinado':
        return 'success';
      default:
        return 'medium';
    }
  }
}

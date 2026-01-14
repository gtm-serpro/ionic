import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processo } from '../models/processo.model';
import { ProcessoService } from '../services/processo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone:false
})
export class ListPage implements OnInit {
  processosAlta: Processo[] = [];
  processosMedia: Processo[] = [];
  processosBaixa: Processo[] = [];
  totalPendentes = 0;

  constructor(
    private router: Router,
    private processoService: ProcessoService
  ) {}

  ngOnInit() {
    this.carregarProcessos();
  }

  carregarProcessos() {
    this.processoService.getProcessos().subscribe(
      processos => {
        this.processosAlta = processos.filter(p => p.urgencia === 'alta');
        this.processosMedia = processos.filter(p => p.urgencia === 'media');
        this.processosBaixa = processos.filter(p => p.urgencia === 'baixa');
        this.totalPendentes = processos.length;
      }
    );
  }

  abrirDetalhes(processo: Processo) {
    this.router.navigate(['/processo', processo.id]);
  }

  assinar(processo: Processo) {
    console.log('Assinar:', processo.numero);
  }

  liberar(processo: Processo) {
    console.log('Liberar:', processo.numero);
  }

  arquivar(processo: Processo) {
    console.log('Arquivar:', processo.numero);
  }
}
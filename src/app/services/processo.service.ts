import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Processo } from '../models/processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  private processos: Processo[] = [
     {
      id: '1',
      numero: '12345.678910/2024-00',
      interessado: 'João da Silva',
      dataDistribuicao: new Date('2024-01-15'),
      urgencia: 'alta',
      temAssinatura: true,
      temLiberacao: false,
      icones: {
        trancado: true,
        assinaturaAlerta: true
      }
    },
    {
      id: '2',
      numero: '23456.789012/2024-01',
      interessado: 'Maria Santos Oliveira',
      dataDistribuicao: new Date('2024-01-10'),
      urgencia: 'media',
      temAssinatura: true,
      temLiberacao: true,
      icones: {
        envelope: true,
        file: true
      }
    },
    {
      id: '3',
      numero: '34567.890123/2024-02',
      interessado: 'Empresa XYZ LTDA',
      dataDistribuicao: new Date('2024-01-20'),
      urgencia: 'baixa',
      temAssinatura: false,
      temLiberacao: true,
      icones: {
        file: true
      }
    },
    {
      id: '4',
      numero: '45678.901234/2024-03',
      interessado: 'Pedro Henrique Costa',
      dataDistribuicao: new Date('2024-01-08'),
      urgencia: 'alta',
      temAssinatura: true,
      temLiberacao: false,
      icones: {
        trancado: true,
        assinaturaAlerta: true,
        envelope: true
      }
    },
    {
      id: '5',
      numero: '56789.012345/2024-04',
      interessado: 'Ana Paula Ferreira',
      dataDistribuicao: new Date('2024-01-18'),
      urgencia: 'media',
      temAssinatura: false,
      temLiberacao: true,
      icones: {
        envelope: true
      }
    },
    {
      id: '6',
      numero: '67890.123456/2024-05',
      interessado: 'Tech Solutions S/A',
      dataDistribuicao: new Date('2024-01-12'),
      urgencia: 'alta',
      temAssinatura: true,
      temLiberacao: true,
      icones: {
        assinaturaAlerta: true,
        file: true
      }
    },
    {
      id: '7',
      numero: '78901.234567/2024-06',
      interessado: 'Carlos Eduardo Souza',
      dataDistribuicao: new Date('2024-01-22'),
      urgencia: 'baixa',
      temAssinatura: true,
      temLiberacao: false,
      icones: {}
    },
    {
      id: '8',
      numero: '89012.345678/2024-07',
      interessado: 'Comércio ABC Ltda',
      dataDistribuicao: new Date('2024-01-05'),
      urgencia: 'alta',
      temAssinatura: true,
      temLiberacao: true,
      icones: {
        trancado: true,
        assinaturaAlerta: true,
        envelope: true,
        file: true
      }
    },
    {
      id: '9',
      numero: '90123.456789/2024-08',
      interessado: 'Juliana Rocha Lima',
      dataDistribuicao: new Date('2024-01-16'),
      urgencia: 'media',
      temAssinatura: false,
      temLiberacao: true,
      icones: {
        file: true
      }
    },
    {
      id: '10',
      numero: '01234.567890/2024-09',
      interessado: 'Roberto Alves Pereira',
      dataDistribuicao: new Date('2024-01-14'),
      urgencia: 'baixa',
      temAssinatura: true,
      temLiberacao: false,
      icones: {
        envelope: true
      }
    },
    {
      id: '11',
      numero: '11223.344556/2024-10',
      interessado: 'Indústria Nacional LTDA',
      dataDistribuicao: new Date('2024-01-07'),
      urgencia: 'alta',
      temAssinatura: false,
      temLiberacao: true,
      icones: {
        trancado: true,
        file: true
      }
    },
    {
      id: '12',
      numero: '22334.455667/2024-11',
      interessado: 'Fernanda Costa Ribeiro',
      dataDistribuicao: new Date('2024-01-19'),
      urgencia: 'media',
      temAssinatura: true,
      temLiberacao: true,
      icones: {
        assinaturaAlerta: true
      }
    }
  ];

  constructor() { }

  getProcessos(): Observable<Processo[]> {
  const ordenados = [...this.processos].sort((a, b) => {
    const prioridades = { alta: 1, media: 2, baixa: 3 };
    return prioridades[a.urgencia] - prioridades[b.urgencia];
  });
  
  return of(ordenados);
}

  getProcessoById(id: string): Observable<Processo | undefined> {
    return of(this.processos.find((p: Processo) => p.id === id));
  }
}
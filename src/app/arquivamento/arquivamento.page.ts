import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

interface HoraOpcao {
  label: string;
  value: string | number;
}

interface Processo {
  numero: string;
  descricao: string;
}

interface Alerta {
  tipo: 'warning' | 'error';
  titulo: string;
  processos: Processo[];
  expandido: boolean;
}

@Component({
  selector: 'app-arquivamento',
  templateUrl: './arquivamento.page.html',
  styleUrls: ['./arquivamento.page.scss'],
  standalone:false
})
export class ArquivamentoPage implements OnInit {
  // Form fields
  trabalhoRealizado: string = 'sim';
  motivoNaoTrabalhou: string = '';
  atividadeConcluida: string = 'sim';
  horasSelecionadas: string | number = 3;
  horasCustomizadas: number = 0;
  motivoArquivamento: string = '';

  // Opções de horas
  horasOpcoes: HoraOpcao[] = [
    { label: '1h', value: 1 },
    { label: '3h', value: 3 },
    { label: '5h', value: 5 },
    { label: '8h', value: 8 },
    { label: 'Personalizar', value: 'custom' }
  ];

  // Exemplos de texto
  exemplosTexto: string[] = [
    'Acórdão publicado e transitado em julgado. Processo encaminhado para arquivamento definitivo.',
    'Decisão monocrática proferida. Aguardando prazo recursal para arquivamento.',
    'Processo sem movimentação há mais de 180 dias. Arquivamento por inatividade processual.'
  ];

  // Alertas
  alertsView: string = 'mensagem';
  alertas: Alerta[] = [
    {
      tipo: 'warning',
      titulo: 'FRA não preenchido',
      expandido: false,
      processos: [
        {
          numero: 'Processo 10580.123456/2024-78',
          descricao: 'FRA do mês anterior pendente de preenchimento'
        },
        {
          numero: 'Processo 10580.789012/2024-34',
          descricao: 'FRA do mês anterior pendente de preenchimento'
        }
      ]
    },
    {
      tipo: 'error',
      titulo: 'Ficha de quesitos ausente',
      expandido: false,
      processos: [
        {
          numero: 'Processo 10580.345678/2024-90',
          descricao: 'É necessário anexar a ficha de quesitos antes do arquivamento'
        }
      ]
    },
    {
      tipo: 'warning',
      titulo: 'Classificação do Tema ACT ausente',
      expandido: false,
      processos: [
        {
          numero: 'Processo 10580.123456/2024-78',
          descricao: 'Recomenda-se classificar o tema antes do arquivamento'
        }
      ]
    }
  ];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Inicialização
  }

  selecionarHoras(value: string | number) {
    this.horasSelecionadas = value;
    if (value !== 'custom') {
      this.horasCustomizadas = 0;
    }
  }

  copiarTexto(texto: string) {
    this.motivoArquivamento = texto;
    this.showToast('Texto copiado!', 'success');
  }

  toggleAlert(alerta: Alerta) {
    alerta.expandido = !alerta.expandido;
  }

  async confirmarArquivamento() {
    // Validações
    if (!this.motivoArquivamento || this.motivoArquivamento.trim().length < 20) {
      await this.showAlert('Atenção', 'O motivo do arquivamento deve ter no mínimo 20 caracteres.');
      return;
    }

    if (this.trabalhoRealizado === 'nao' && !this.motivoNaoTrabalhou) {
      await this.showAlert('Atenção', 'Por favor, selecione o motivo de não ter trabalhado a atividade.');
      return;
    }

    if (this.atividadeConcluida === 'sim' && !this.horasSelecionadas) {
      await this.showAlert('Atenção', 'Por favor, selecione a distribuição de horas.');
      return;
    }

    if (this.horasSelecionadas === 'custom' && (!this.horasCustomizadas || this.horasCustomizadas <= 0)) {
      await this.showAlert('Atenção', 'Por favor, informe o número de horas customizadas.');
      return;
    }

    // Verificar alertas impeditivos
    const alertasImpeditivos = this.alertas.filter(a => a.tipo === 'error');
    if (alertasImpeditivos.length > 0) {
      await this.showAlert(
        'Alertas Impeditivos',
        'Existem alertas impeditivos que precisam ser resolvidos antes de confirmar o arquivamento.'
      );
      return;
    }

    // Confirmação final
    const alert = await this.alertController.create({
      header: 'Confirmar Arquivamento',
      message: `
        Deseja confirmar o arquivamento de <strong>3 processos</strong>?
        <br><br>
        <small>As seguintes ações serão executadas automaticamente:</small>
        <ul style="text-align: left; margin-top: 8px; font-size: 0.9em;">
          <li>✓ Priorização parametrizada</li>
          <li>✓ Envio ao Portal CARF</li>
          <li>✓ Envio ao COMPROT</li>
          <li>✓ Atualização de palavras-chave</li>
          <li>✓ Atualização do andamento no SEI</li>
        </ul>
      `,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.executarArquivamento();
          }
        }
      ]
    });

    await alert.present();
  }

  async executarArquivamento() {
    // Simular processamento
    const loading = await this.alertController.create({
      message: 'Processando arquivamento...',
      // spinner: 'crescent'
    });
    await loading.present();

    // Simular delay
    setTimeout(async () => {
      await loading.dismiss();
      
      await this.showAlert(
        'Sucesso!',
        'Processos arquivados com sucesso! Todas as ações automáticas foram executadas.'
      );

      // Voltar para a página anterior
      this.router.navigate(['/home']);
    }, 2000);
  }

  cancelar() {
    this.router.navigate(['/home']);
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color
    });
    await toast.present();
  }
}

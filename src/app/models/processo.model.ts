export interface Processo {
  id: string;
  numero: string;
  interessado: string;
  dataDistribuicao: Date;
  urgencia: 'baixa' | 'media' | 'alta';
  temAssinatura: boolean;
  temLiberacao: boolean;
  icones?: {
    trancado?: boolean;
    assinaturaAlerta?: boolean;
    envelope?: boolean;
    file?: boolean;
  };
}
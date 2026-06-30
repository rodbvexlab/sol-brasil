export interface GalleryItem {
  id: string
  title: string
  category: string // 'funilaria' | 'martelinho' | 'polimento' | 'parachoques'
  beforeBg: string
  afterBg: string
  beforeDesc: string
  afterDesc: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'case-1',
    title: 'Porta Lateral e Paralama — Honda Civic',
    category: 'funilaria',
    beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
    afterBg: 'linear-gradient(135deg, #2c3540 0%, #161c24 100%)',
    beforeDesc: 'Colisão profunda, lataria deformada e vinco original comprometido.',
    afterDesc: 'Lataria alinhada a laser, funilaria artesanal e pintura idêntica à de fábrica.'
  },
  {
    id: 'case-2',
    title: 'Amassado na Tampa Traseira — Toyota Corolla',
    category: 'martelinho',
    beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
    afterBg: 'linear-gradient(135deg, #40352c 0%, #201a15 100%)',
    beforeDesc: 'Amassado de estacionamento (sem vinco ou quebra da tinta na chapa).',
    afterDesc: 'Recuperado 100% sem repintura em apenas 3 horas com martelinho de ouro.'
  },
  {
    id: 'case-3',
    title: 'Parachoques Dianteiro Trincado — Jeep Compass',
    category: 'parachoques',
    beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
    afterBg: 'linear-gradient(135deg, #262e26 0%, #121812 100%)',
    beforeDesc: 'Trinca estrutural de 15cm na lateral inferior e ralados profundos.',
    afterDesc: 'Soldagem plástica com tela de aço, pintura localizada e fixação refeita.'
  },
  {
    id: 'case-4',
    title: 'Paralama Dianteiro e Capô — Chevrolet Onix',
    category: 'funilaria',
    beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
    afterBg: 'linear-gradient(135deg, #202b36 0%, #0d1318 100%)',
    beforeDesc: 'Colisão com danos significativos no paralama e parte lateral do capô.',
    afterDesc: 'Substituição do paralama, funilaria no capô e pintura profissional combinada.'
  },
  {
    id: 'case-5',
    title: 'Recuperação de Brilho — Hyundai HB20',
    category: 'polimento',
    beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
    afterBg: 'linear-gradient(135deg, #38312e 0%, #1e1a18 100%)',
    beforeDesc: 'Pintura queimada de sol, marcas severas de lavagem e opacidade geral.',
    afterDesc: 'Polimento técnico em 3 etapas e aplicação de selante cristalizador.'
  },
  {
    id: 'case-6',
    title: 'Teto Amassado (Granizo) — Volkswagen Polo',
    category: 'martelinho',
    beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
    afterBg: 'linear-gradient(135deg, #2d2d35 0%, #16161a 100%)',
    beforeDesc: 'Múltiplos pequenos amassados na folha do teto causados por chuva de granizo.',
    afterDesc: 'Recuperação minuciosa sem alterar a pintura original ou a forração interna.'
  }
]

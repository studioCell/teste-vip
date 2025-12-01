

export type ThemeType = 
  | 'padrao' 
  | 'natal'
  | 'maes'
  | 'namorados'
  | 'pais'
  | 'consumidor'
  | 'criancas'
  | 'saldao'
  | 'queima'
  | 'melhores'
  | 'verao'
  | 'white'
  | 'colorful'
  | 'sky'
  | 'tech'
  | 'roxo';

export type BrandType = 'apple' | 'realme' | 'poco' | 'redmi' | 'starlink' | 'jbl' | 'applewatch' | 'macbook' | 'airpods' | 'ipad' | 'acessorios' | 'games' | 'drones' | 'perfumes';

export interface ProductData {
  img: string;
  memories: string[];
}

export interface BrandData {
  [model: string]: ProductData;
}

export interface ModelsData {
  apple: BrandData;
  realme: BrandData;
  poco: BrandData;
  redmi: BrandData;
  starlink: BrandData;
  jbl: BrandData;
  applewatch: BrandData;
  macbook: BrandData;
  airpods: BrandData;
  ipad: BrandData;
  acessorios: BrandData;
  games: BrandData;
  drones: BrandData;
  perfumes: BrandData;
}

export interface FormState {
  theme: ThemeType;
  brand: BrandType;
  model: string;
  memory: string; 
  price: number;
  installments: number;
  totalPrice: number;
  paymentCondition: string;
  customCta: string;
  ctaType: string;
  instagram: string;
  contact: string;
  address: string;
  logo: string | null;
  
  // Custom Logo placement
  useCustomLogoAsTheme: boolean;
  
  // Visibility Toggles
  hidePrice: boolean;
  hideContact: boolean;
  hideAddress: boolean;
  hideCta: boolean;
  hideCustomLogo: boolean;
  hideInstagram: boolean;
  hideMemory: boolean;
  
  // Feature Toggles
  showAiSpecsInVitrine: boolean;
  
  // Animation
  animationsEnabled: boolean;
}

export interface AIState {
  caption: string;
  specs: string;
  isLoadingCaption: boolean;
  isLoadingSpecs: boolean;
}
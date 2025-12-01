

import { ModelsData, ThemeType } from './types';

// THEME CONFIGURATION
interface ThemeConfig {
  label: string;
  bg: string;
  isDark: boolean; // if true, text is usually white/gold. if false, text is black.
  highlight: string; // Color for borders, CTAs, accents
  textShadow?: string;
}

export const THEME_CONFIG: Record<ThemeType, ThemeConfig> = {
  padrao: {
    label: "⚫ Black Friday (Padrão)",
    bg: "https://i.ibb.co/dJHQmDh1/Adobe-Express-file-7.png",
    isDark: true,
    highlight: "#FFD700"
  },
  natal: {
    label: "🎅 Natal / Fim de Ano",
    bg: "https://i.ibb.co/LDpntyXv/Design-sem-nome-2.jpg",
    isDark: true,
    highlight: "#FFD700"
  },
  maes: {
    label: "🌹 Dia das Mães",
    bg: "https://images.unsplash.com/photo-1490750967868-58cb7506deed?q=80&w=1000&auto=format&fit=crop",
    isDark: false,
    highlight: "#D4145A"
  },
  namorados: {
    label: "💘 Dia dos Namorados",
    bg: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop",
    isDark: true,
    highlight: "#FF1493"
  },
  pais: {
    label: "👔 Dia dos Pais",
    bg: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1000&auto=format&fit=crop",
    isDark: true,
    highlight: "#87CEEB"
  },
  consumidor: {
    label: "🤝 Dia do Consumidor",
    bg: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop",
    isDark: true,
    highlight: "#FFA500"
  },
  criancas: {
    label: "🧸 Dia das Crianças",
    bg: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop",
    isDark: false,
    highlight: "#FF4500"
  },
  saldao: {
    label: "🏷️ Saldão de Fim de Mês",
    bg: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=1000&auto=format&fit=crop",
    isDark: true,
    highlight: "#FFFF00"
  },
  queima: {
    label: "🔥 Queima de Estoque",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    isDark: true,
    highlight: "#FF4500"
  },
  melhores: {
    label: "🏆 Os Melhores Produtos",
    bg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop", // Gold luxury texture
    isDark: true,
    highlight: "#FFD700"
  },
  verao: {
    label: "☀️ Ofertas de Verão",
    bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    isDark: false,
    highlight: "#FF8C00"
  },
  white: {
    label: "⚪ Clean White (iPhone)",
    bg: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=1000&auto=format&fit=crop", // Abstract white/grey
    isDark: false,
    highlight: "#000000"
  },
  colorful: {
    label: "🎨 Abstrato Colorido",
    bg: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    isDark: true,
    highlight: "#FFFFFF"
  },
  sky: {
    label: "☁️ Céu Azul",
    bg: "https://images.unsplash.com/photo-1595116900115-4228303f9a76?q=80&w=1000&auto=format&fit=crop",
    isDark: false,
    highlight: "#1E90FF"
  },
  tech: {
    label: "🤖 Tech / Cyber",
    bg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop", // Matrix/Cyber style
    isDark: true,
    highlight: "#00FF00"
  },
  roxo: {
    label: "🟣 Roxo Digital",
    bg: "https://images.unsplash.com/photo-1614850523060-8da1d56e37ad?q=80&w=1000&auto=format&fit=crop",
    isDark: true,
    highlight: "#DA70D6"
  }
};


export const THEME_LOGOS = {
  padrao: "https://i.ibb.co/RG4YVHqL/TECMAUTAS-Black-Friday-removebg-preview.png",
  natal: "https://i.ibb.co/0RRLDW1T/Design-sem-nome-1-removebg-preview.png"
  // For other themes, it defaults to the user's custom logo or hides if none
};

export const INSTAGRAM_ICON = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"; 
export const WHATSAPP_ICON = "https://i.ibb.co/XZgwV8S1/Snap-2025-11-26-06-56-17-removebg-preview.png";

// Placeholder images
const PLACEHOLDER_PHONE = "https://via.placeholder.com/300x400/333333/FFFFFF?text=Smartphone";
const PLACEHOLDER_TABLET = "https://via.placeholder.com/400x300/333333/FFFFFF?text=Tablet";
const PLACEHOLDER_LAPTOP = "https://via.placeholder.com/400x300/333333/FFFFFF?text=MacBook";
const PLACEHOLDER_WATCH = "https://via.placeholder.com/300x300/333333/FFFFFF?text=Apple+Watch";
const PLACEHOLDER_AUDIO = "https://via.placeholder.com/300x300/333333/FFFFFF?text=Audio";
const PLACEHOLDER_STARLINK = "https://via.placeholder.com/300x300/333333/FFFFFF?text=Starlink";
const PLACEHOLDER_JBL = "https://via.placeholder.com/300x300/333333/FFFFFF?text=JBL+Speaker";
const PLACEHOLDER_GAME = "https://via.placeholder.com/300x300/333333/FFFFFF?text=Games+Console";
const PLACEHOLDER_ACCESSORY = "https://via.placeholder.com/300x300/333333/FFFFFF?text=Acessorio";
const PLACEHOLDER_DRONE = "https://via.placeholder.com/300x300/333333/FFFFFF?text=Drone";
const PLACEHOLDER_PERFUME = "https://via.placeholder.com/300x400/333333/FFFFFF?text=Perfume";

export const PRODUCT_DATA: ModelsData = {
  apple: { 
    // iPhones (Mantidos aqui)
    'iPhone 11': { 
      img: 'https://freepngpik.com/wp-content/uploads/2025/07/White-iPhone-11-Front-and-Back-View-PNG-600x391.jpg',
      memories: ['64GB', '128GB', '256GB']
    },
    'iPhone 11 Pro': { 
      img: 'https://i.ibb.co/YFdR70LF/95fd8611e66409279650e04974d0269f-removebg-preview.png', 
      memories: ['64GB', '256GB', '512GB'] 
    },
    'iPhone 11 Pro Max': { img: 'https://purepng.com/public/uploads/medium/smartphone-iphone-11-pro-max-silver-wut.png', memories: ['64GB', '256GB', '512GB'] },
    'iPhone 12': { img: 'https://assets.getmobil.com/uploads/8497/getmobil-apple-iphone12-white-00png.png', memories: ['64GB', '128GB', '256GB'] },
    'iPhone 12 Pro': { img: 'https://pngimg.com/d/iphone_12_PNG3.png', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 12 Pro Max': { img: 'https://media-play.pl/ecommerce/medias/productimages/48733/TE-AP-12PM1-PL1-BU/square.png', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 13': { img: 'https://assets.getmobil.com/uploads/11831/getmobil-apple-iphone13-blue-00png.png', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 13 Pro': { img: 'https://assets.getmobil.com/uploads/12513/getmobil-apple-iphone13pro-gold-02webp.png', memories: ['128GB', '256GB', '512GB', '1TB'] },
    'iPhone 13 Pro Max': { img: 'https://assets.getmobil.com/uploads/13637/getmobil-apple-iphone13promax-sierrablue-02webpwebp.png', memories: ['128GB', '256GB', '512GB', '1TB'] },
    'iPhone 14': { img: 'https://mtscdn.ru/upload/iblock/897/1.png', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 14 Plus': { img: 'https://assets.getmobil.com/uploads/54744/getmobil-apple-iphone14plus-blue-00png.png', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 14 Pro': { img: 'https://assets.getmobil.com/uploads/53958/getmobil-apple-iphone14promax-deeppurple-00png.png', memories: ['128GB', '256GB', '512GB', '1TB'] },
    'iPhone 14 Pro Max': { img: 'https://assets.getmobil.com/uploads/53958/getmobil-apple-iphone14promax-deeppurple-00png.png', memories: ['128GB', '256GB', '512GB', '1TB'] },
    'iPhone 15': { img: 'https://cdn.tele2.lt/media/catalog/product/cache/dbcf5aa662ff89c0e9aef6b35435161e/i/p/iphone_15_blue_pure_back_iphone_15_blue_pure_front_2up_screen__wwen.png', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 15 Plus': { img: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-plus-black.png', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 15 Pro': { img: 'https://www.ais.th/content/dam/ais/consumer/store/devices/apple/iphone/iphone-15-series/iphone-15-pro/iphone-15-pro-natural-titanium.png', memories: ['128GB', '256GB', '512GB', '1TB'] },
    'iPhone 15 Pro Max': { img: 'https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/09/pbi-iphone-15-pro-max.png', memories: ['256GB', '512GB', '1TB'] },
    'iPhone 16': { img: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-16.png', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 16 Plus': { img: 'https://leapfone.com.br/_next/image?url=%2Fimages%2Fvariants%2Fapple-iphone-16-preto.webp&w=1080&q=75', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 16 Pro': { img: 'https://leapfone.com.br/_next/image?url=%2Fimages%2Fvariants%2Fapple-iphone-16-pro-preto.webp&w=1080&q=75', memories: ['128GB', '256GB', '512GB', '1TB'] },
    'iPhone 16 Pro Max': { img: 'https://directunlocks.com/devices/compressed/iphone-16-pro.png', memories: ['256GB', '512GB', '1TB'] },
    'iPhone 16e': { img: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/122208-iphone-16e.png', memories: ['128GB', '256GB'] },
    'iPhone 17': { 
      img: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-17-pro-17-pro-max-hero.png',
      memories: ['128GB', '256GB', '512GB', '1TB']
    },
    'iPhone 17 Air': { img: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-air-hero.png', memories: ['128GB', '256GB', '512GB'] },
    'iPhone 17 Pro': { img: 'https://static.iphoned.nl/orca/products/27185/apple-iphone-17-pro.png', memories: ['256GB', '512GB', '1TB', '2TB'] },
    'iPhone 17 Pro Max': { img: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-17-pro-17-pro-max-hero.png', memories: ['256GB', '512GB', '1TB', '2TB'] },
    'iPhone XR': { img: 'https://www.essentiallymobile.com.au/wp-content/uploads/2022/03/iPhone-Xr.png', memories: ['64GB', '128GB'] },
  },
  
  ipad: {
    'iPad 9 Geração': { img: 'https://www.dimprice.co.uk/image/cache/catalog/Apple/ipad-2021-hero-grey-02-1-1100x1100.png', memories: ['64GB', '256GB'] },
    'iPad 10 Geração': { img: 'https://www.oister.dk/globalassets/kundeshop/tablets/apple/ipad-10th-gen-64gb/apple-ipad-10th-gen-silver.png', memories: ['64GB', '256GB'] },
    'iPad 11': { img: 'https://ddfndelma2gpn.cloudfront.net/color/1875/iPad_11th_Gen_Silver.webp', memories: ['64GB', '256GB'] },
    'iPad Air M2': { img: 'https://www.apple.com/v/ipad-air/aa/images/overview/hero/hero_endframe__fvm22b45e5me_large.png', memories: ['128GB', '256GB', '512GB', '1TB'] },
    'iPad Air M4': { img: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/122241-122242-ipad-air-11inch-13inch-m3.png', memories: ['128GB', '256GB', '512GB', '1TB'] },
  },

  applewatch: {
    'Apple Watch Series 11': { img: PLACEHOLDER_WATCH, memories: ['42mm', '46mm'] },
    'Apple Watch Series 10': { img: 'https://www.pngall.com/wp-content/uploads/15/Apple-Watch-PNG-File.png', memories: ['42mm', '46mm'] },
    'Apple Watch Series 9': { img: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png', memories: ['41mm', '45mm'] },
    'Apple Watch SE': { img: 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-watch-se-2nd-gen-2022-40mm/carousel/silveraluminumwhitesportml/silveraluminumwhitesportm-l-1.png', memories: ['40mm', '44mm'] },
    'Apple Watch SE 2': { img: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111853_apple-watch-se-2nd-gen.png', memories: ['40mm', '44mm'] },
    'Apple Watch Ultra 2': { img: 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-watch-ultra-49mm/defaultimage/tita-orange-alpine-loop-l-hero-zoom.png', memories: ['49mm'] },
    'Apple Watch Series 8': { img: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/05/graphite-apple-watch-series-8-with-black-band-on-transparent-background.png', memories: ['41mm', '45mm'] },
  },

  macbook: {
    'MacBook Air M1': { img: 'https://photos5.appleinsider.com/price_guide/m1-macbook-pro-pp-header.png', memories: ['256GB SSD / 8GB RAM', '512GB SSD / 8GB RAM'] },
    'MacBook Air M2': { img: 'https://photos5.appleinsider.com/price_guide/macbook-air-m2-midnight-pp-header.png', memories: ['256GB SSD / 8GB RAM', '512GB SSD / 8GB RAM'] },
    'MacBook Air M3': { img: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/03/m3-macbook-air.png', memories: ['256GB SSD / 8GB RAM', '512GB SSD / 16GB RAM'] },
    'MacBook Air M4': { img: 'https://assets.mcshark.at/uploads/2025/03/nav_mbair-m4.png', memories: ['256GB SSD / 16GB RAM', '512GB SSD / 16GB RAM'] },
    'MacBook Pro M1': { img: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png', memories: ['256GB SSD / 8GB RAM', '512GB SSD / 8GB RAM'] },
    'MacBook Pro M2': { img: 'https://photos5.appleinsider.com/price_guide/macbook-pro-14-inch-2023-pp-header.png', memories: ['256GB SSD / 8GB RAM', '512GB SSD / 8GB RAM'] },
    'MacBook Pro M3': { img: 'https://i.ibb.co/j9pGYY4W/Mac-Book-Pro-Space-Black-M3-Pro-removebg-preview.png', memories: ['512GB SSD / 8GB RAM', '1TB SSD / 16GB RAM'] },
    'MacBook Pro M4': { img: 'https://i.ibb.co/GvfdNcm7/M4-Mac-Book-Pro-6-removebg-preview.png', memories: ['512GB SSD / 16GB RAM', '1TB SSD / 24GB RAM'] },
  },

  airpods: {
    'AirPods (3ª geração)': { img: 'https://i.ibb.co/6cj89nG4/airpods-4-blue-removebg-preview.png', memories: ['Lightning', 'MagSafe'] },
    'AirPods Pro (2ª geração)': { img: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/airpods-pro-2.png', memories: ['MagSafe USB-C'] },
    'AirPods Max': { img: 'https://i.ibb.co/NnF6y1xZ/apple-airpods-max-5-removebg-preview.png', memories: ['Prateado', 'Cinza', 'Azul', 'Rosa', 'Verde'] },
  },

  acessorios: {
    'Carregador MagSafe': { img: PLACEHOLDER_ACCESSORY, memories: ['Original', 'Primeira Linha'] },
    'Smartwatch Genérico': { img: PLACEHOLDER_WATCH, memories: ['Preto', 'Prata', 'Rose', 'Gold'] },
    'Caixa de Som Bluetooth': { img: PLACEHOLDER_JBL, memories: ['Pequena', 'Média', 'Grande'] },
    'Fone de Ouvido (Com Fio)': { img: PLACEHOLDER_AUDIO, memories: ['P2', 'Lightning', 'Tipo C'] },
    'Fone Bluetooth (TWS)': { img: PLACEHOLDER_AUDIO, memories: ['Branco', 'Preto'] },
    'Power Bank': { img: PLACEHOLDER_ACCESSORY, memories: ['5.000mAh', '10.000mAh', '20.000mAh'] },
    'Capa Transparente': { img: PLACEHOLDER_ACCESSORY, memories: ['Silicone', 'Anti-Impacto'] },
    'Capa Case (Silicone)': { img: PLACEHOLDER_ACCESSORY, memories: ['Várias Cores'] },
    'Carregador Android (Kit)': { img: PLACEHOLDER_ACCESSORY, memories: ['Completo Tipo C', 'Completo V8'] },
    'Carregador iPhone (Kit)': { img: PLACEHOLDER_ACCESSORY, memories: ['Completo Lightning', 'Completo USB-C'] },
    'AirTag': { img: PLACEHOLDER_ACCESSORY, memories: ['1 Unidade', 'Pack com 4'] },
    'Fonte Apple 20W': { img: PLACEHOLDER_ACCESSORY, memories: ['Original', 'Foxconn'] },
    'Cabo Tipo C': { img: PLACEHOLDER_ACCESSORY, memories: ['1 Metro', '2 Metros'] },
    'Cabo Lightning': { img: PLACEHOLDER_ACCESSORY, memories: ['1 Metro', '2 Metros'] },
  },

  games: {
    'PlayStation 5 (Mídia Física)': { img: PLACEHOLDER_GAME, memories: ['825GB', '1TB Slim'] },
    'PlayStation 5 (Digital)': { img: PLACEHOLDER_GAME, memories: ['825GB', '1TB Slim'] },
    'PlayStation 4': { img: PLACEHOLDER_GAME, memories: ['500GB', '1TB', 'Pro 1TB'] },
    'Xbox Series S': { img: PLACEHOLDER_GAME, memories: ['512GB', '1TB Black'] },
    'Nintendo Switch': { img: PLACEHOLDER_GAME, memories: ['V2', 'OLED'] },
    'Controle PS5 DualSense': { img: PLACEHOLDER_GAME, memories: ['Branco', 'Preto', 'Midnight Black', 'Cosmic Red'] },
    'Controle PS4 DualShock': { img: PLACEHOLDER_GAME, memories: ['Preto', 'Branco'] },
    'Controle Xbox Series': { img: PLACEHOLDER_GAME, memories: ['Robot White', 'Carbon Black', 'Shock Blue'] },
    'Controle Xbox 360': { img: PLACEHOLDER_GAME, memories: ['Com Fio', 'Sem Fio'] },
    'Game Stick Blurolre': { img: PLACEHOLDER_GAME, memories: ['64GB / 10mil Jogos', '128GB / 20mil Jogos'] },
    'Game Stick 4K (PS5 Style)': { img: PLACEHOLDER_GAME, memories: ['64GB', '128GB'] },
    'Fone Gamer Headset': { img: PLACEHOLDER_GAME, memories: ['Preto/Vermelho', 'Preto/Azul', 'RGB'] },
  },

  drones: {
    'DJI Neo': { img: PLACEHOLDER_DRONE, memories: ['Standard', 'Combo Fly More'] },
    'DJI Mini 3': { img: PLACEHOLDER_DRONE, memories: ['Sem Controle', 'RC-N1', 'DJI RC'] },
    'DJI Mini 3 Pro': { img: PLACEHOLDER_DRONE, memories: ['Sem Controle', 'RC-N1', 'DJI RC'] },
    'DJI Mini 4': { img: PLACEHOLDER_DRONE, memories: ['Standard', 'Combo Fly More'] },
    'DJI Mini 4 Pro': { img: PLACEHOLDER_DRONE, memories: ['DJI RC-N2', 'DJI RC 2'] },
    'DJI Avata': { img: PLACEHOLDER_DRONE, memories: ['Explorer Combo', 'Pro-View Combo'] },
    'DJI Avata 2': { img: PLACEHOLDER_DRONE, memories: ['Fly More Combo (1 bateria)', 'Fly More Combo (3 baterias)'] },
    'Drone Genérico': { img: PLACEHOLDER_DRONE, memories: ['4K Dual Câmera', '8K Profissional'] },
  },

  perfumes: {
    'Lattafa Asad (Black)': { img: PLACEHOLDER_PERFUME, memories: ['100ml'] },
    'Lattafa Asad Zanzibar (Azul)': { img: PLACEHOLDER_PERFUME, memories: ['100ml'] },
    'Lattafa Asad (Marrom)': { img: PLACEHOLDER_PERFUME, memories: ['100ml'] },
    'Lattafa Yara': { img: PLACEHOLDER_PERFUME, memories: ['100ml', '50ml'] },
    'Lattafa Fakhar Black (Prata)': { img: PLACEHOLDER_PERFUME, memories: ['100ml'] },
    'Lattafa Fakhar Gold': { img: PLACEHOLDER_PERFUME, memories: ['100ml'] },
    'Sabah Al Ward': { img: PLACEHOLDER_PERFUME, memories: ['100ml'] },
    'Ameer Al Oudh': { img: PLACEHOLDER_PERFUME, memories: ['100ml'] },
    'Armaf Club de Nuit': { img: PLACEHOLDER_PERFUME, memories: ['105ml', '200ml'] },
    '212 VIP Men': { img: PLACEHOLDER_PERFUME, memories: ['50ml', '100ml', '200ml'] },
    '212 VIP Rosé': { img: PLACEHOLDER_PERFUME, memories: ['50ml', '80ml', '125ml'] },
    'Bleu de Chanel': { img: PLACEHOLDER_PERFUME, memories: ['50ml', '100ml', '150ml'] },
    'Paco Rabanne Phantom': { img: PLACEHOLDER_PERFUME, memories: ['50ml', '100ml', '150ml'] },
    'Paco Rabanne 1 Million': { img: PLACEHOLDER_PERFUME, memories: ['50ml', '100ml', '200ml'] },
    'Ferrari Black': { img: PLACEHOLDER_PERFUME, memories: ['75ml', '125ml'] },
    'Paco Rabanne Invictus': { img: PLACEHOLDER_PERFUME, memories: ['50ml', '100ml', '200ml'] },
  },

  starlink: {
    'Starlink V2': { img: 'https://autostar.group/wp-content/uploads/2024/04/4p7q9183.png', memories: ['Kit Padrão'] },
    'Starlink V4': { img: PLACEHOLDER_STARLINK, memories: ['Kit Padrão'] },
    'Starlink Mini': { img: 'https://www.starlink.com/public-files/Starlink_Mini_500x500.png', memories: ['Kit Viagem'] },
  },
  jbl: {
    // Portáteis
    'JBL Flip 6': { img: PLACEHOLDER_JBL, memories: ['Preto', 'Azul', 'Vermelho', 'Camuflado'] },
    'JBL Flip 7': { img: PLACEHOLDER_JBL, memories: ['Preto', 'Azul', 'Vermelho', 'Camuflado'] },
    'JBL Charge 5': { img: PLACEHOLDER_JBL, memories: ['Preto', 'Azul', 'Vermelho', 'Camuflado'] },
    'JBL Xtreme 3': { img: PLACEHOLDER_JBL, memories: ['Preto', 'Azul', 'Camuflado'] },
    'JBL Boombox 3': { img: PLACEHOLDER_JBL, memories: ['Preto', 'Camuflado'] },
    'JBL Boombox 4': { img: PLACEHOLDER_JBL, memories: ['Preto'] },
    'JBL Go 3': { img: PLACEHOLDER_JBL, memories: ['Preto', 'Azul', 'Vermelho'] },
    'JBL Go 4': { img: PLACEHOLDER_JBL, memories: ['Preto', 'Azul', 'Vermelho', 'Roxo'] },
    'JBL Clip 4': { img: PLACEHOLDER_JBL, memories: ['Preto', 'Azul', 'Vermelho'] },
    'JBL Clip 5': { img: PLACEHOLDER_JBL, memories: ['Preto', 'Azul', 'Vermelho', 'Roxo'] },
    
    // Fones
    'JBL Tune 230NC': { img: PLACEHOLDER_AUDIO, memories: ['Preto', 'Branco', 'Azul'] },
    'JBL Tune 520BT': { img: PLACEHOLDER_AUDIO, memories: ['Preto', 'Branco', 'Azul', 'Roxo'] },

    // PartyBox
    'JBL PartyBox Encore': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
    'JBL PartyBox Encore 2': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
    'JBL PartyBox On-The-Go': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
    'JBL PartyBox 100': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
    'JBL PartyBox 120 Club': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
    'JBL PartyBox 310': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
    'JBL PartyBox 320': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
    'JBL PartyBox 710': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
    'JBL PartyBox 1000': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
    'JBL PartyBox 1100': { img: PLACEHOLDER_JBL, memories: ['Bivolt'] },
  },
  realme: {
    'Realme 14': { 
      img: 'https://image01.realme.net/general/20250124/1737698280700bc77fad69da0452f836be9189492f15b.png', 
      memories: ['128GB / 6GB RAM', '256GB / 8GB RAM'] 
    },
    'Realme 14T': { 
      img: 'https://image01.realme.net/general/20250417/17448912744340d7d77f0b19641adaaa27bb6f105838a.png?width=1440&height=1440&size=473189', 
      memories: ['128GB / 6GB RAM', '256GB / 8GB RAM'] 
    },
    'Realme C61': { 
      img: 'https://image01.realme.net/general/20240920/172682715431330882f20bb6748dcbb32ccbe896265fb.png', 
      memories: ['64GB / 4GB RAM', '128GB / 6GB RAM'] 
    },
    'Realme C63': { 
      img: 'https://image01.realme.net/general/20241112/1731395814596990878a8879745f28fb98a93efcdde63.png', 
      memories: ['128GB / 4GB RAM', '128GB / 8GB RAM'] 
    },
    'Realme C67': {
       img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_136026497/fee_786_587_png',
       memories: ['128GB / 4GB RAM', '256GB / 8GB RAM']
    },
    'Realme C71': { 
      img: 'https://image01.realme.net/general/20250603/1748913697462ea9c2945beae4c68ac201dbcc2a10509.png', 
      memories: ['128GB / 6GB RAM'] 
    },
    'Realme C75': { 
      img: 'https://image05.realme.net/general/20250813/1755051424576726086dea07745e5b6d7e2de17b5bd63.png', 
      memories: ['256GB / 8GB RAM'] 
    },
    'Realme C75x': { 
      img: 'https://image01.realme.net/general/20250224/174036517113707cd5eb25dfc4529a27082faa11dd81d.png?width=1080&height=1080&size=993690', 
      memories: ['256GB / 8GB RAM'] 
    },
    'Realme Note 60': { 
      img: 'https://image01.realme.net/general/20241203/1733217675732871f510e306c49c78bef1f91867a8173.png', 
      memories: ['64GB / 4GB RAM', '128GB / 4GB RAM'] 
    },
    'Realme Note 60x': { 
      img: 'https://image01.realme.net/general/20241206/1733475703329dc8d7b49f3f141d9838f6952daae3306.png', 
      memories: ['128GB / 4GB RAM'] 
    },
    'Realme Note 70': { 
      img: 'https://image01.realme.net/general/20241212/17339679873027b691f7443c145b6a14e7be528f17f71.png', 
      memories: ['128GB / 6GB RAM', '256GB / 8GB RAM'] 
    },
  },
  poco: {
    'Poco C71': { img: 'https://i02.appmifile.com/846_operator_sg/07/04/2025/1987d86786560de719f36f7d4d365db1.png', memories: ['128GB / 4GB RAM'] },
    'Poco C75': { img: 'https://i02.appmifile.com/507_operator_sg/12/10/2024/acddbcf0f5e658e5c471971217df435a.png', memories: ['256GB / 8GB RAM'] },
    'Poco C85': { img: 'https://i02.appmifile.com/250_operator_sg/22/08/2025/4420debe3086c2ddb343e53c537d5153.png', memories: ['256GB / 8GB RAM'] },
    'Poco F7 Pro': { img: 'https://i02.appmifile.com/551_operator_sg/12/03/2025/de183c9fe0f4b74c5eeaf488d552601d.png', memories: ['256GB / 8GB RAM', '512GB / 12GB RAM'] },
    'Poco M7 Pro': { img: 'https://i02.appmifile.com/249_item_my/01/04/2025/264894f7e49c2dd260c1cfe244369511.png?thumb=1&q=85', memories: ['128GB / 6GB RAM', '256GB / 8GB RAM'] },
    'Poco X7': { img: 'https://i02.appmifile.com/616_operator_sg/16/12/2024/b5d992bbab50f80b106c1ca96b909b29.png', memories: ['256GB / 8GB RAM', '512GB / 12GB RAM'] },
    'Poco X7 Pro': { 
      img: 'https://i.ibb.co/PZ37ZQBh/56b51295abe5648063dfa24601641213-removebg-preview.png',
      memories: ['128GB / 6GB RAM', '256GB / 8GB RAM', '512GB / 12GB RAM']
    },
  },
  redmi: {
    'Redmi A5': { 
      img: 'https://static.androidplanet.nl/orca/products/25830/xiaomi-redmi-a5.png', 
      memories: ['32GB / 2GB RAM', '64GB / 3GB RAM'] 
    },
    'Redmi 13C': { 
      img: 'https://i02.appmifile.com/477_operatorx_operatorx_opx/08/11/2023/a69b2ced4a4e2403fbfd446994c26a06.png', 
      memories: ['128GB / 4GB RAM', '256GB / 8GB RAM'] 
    },
    'Redmi 13x': { 
      img: 'https://i02.appmifile.com/834_operator_sg/17/03/2025/ca95b2cbef85e142fa0756eb9758fb7e.png', 
      memories: ['128GB / 4GB RAM'] 
    },
    'Redmi 14C': { 
      img: 'https://www.pakmobizone.pk/wp-content/uploads/2024/01/Xiaomi-Redmi-14C-25.png',
      memories: ['64GB / 4GB RAM', '128GB / 6GB RAM', '256GB / 8GB RAM']
    },
    'Redmi 15': { 
      img: 'https://files.tecnoblog.net/wp-content/uploads/2025/08/redmi-15-4g-sandy-purple-violeta.png', 
      memories: ['128GB / 6GB RAM', '256GB / 8GB RAM'] 
    },
    'Redmi 15C': { 
      img: 'https://xiaomi-store.co.ke/wp-content/uploads/2025/08/918807ee1b45d77c7202bd69bd24da0e600x60085.png', 
      memories: ['128GB / 6GB RAM'] 
    },
    'Redmi Note 12': { 
      img: 'https://i02.appmifile.com/224_operator_sg/10/03/2023/cdf4a7f40a92668d1c8fe2fcc5045ea8.png', 
      memories: ['128GB / 4GB RAM', '128GB / 6GB RAM'] 
    },
    'Redmi Note 13': { 
      img: 'https://www.xiaomistore.tn/wp-content/uploads/2024/01/Redmi-Note-13-blue.png', 
      memories: ['128GB / 6GB RAM', '256GB / 8GB RAM'] 
    },
    'Redmi Note 13 Pro': {
      img: 'https://t.ctcdn.com.br/Y7lq7iqqwxb-YvaNdDl0hu2SA-s=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i802461.png',
      memories: ['256GB / 8GB RAM', '512GB / 12GB RAM']
    },
    'Redmi Note 13 Pro+': {
      img: 'https://i02.appmifile.com/520_operator_sg/03/01/2024/fa139703d84c8960ea41b9e85e0d9394.png',
      memories: ['256GB / 8GB RAM', '512GB / 12GB RAM', '512GB / 16GB RAM']
    },
    'Redmi Note 14': { 
      img: 'https://files.tecnoblog.net/wp-content/uploads/2025/01/Redmi-Note-14-4G-Azul-oceano.png', 
      memories: ['128GB / 6GB RAM', '256GB / 8GB RAM'] 
    },
    'Redmi Note 14 Pro': { 
      img: 'https://itc.ua/wp-content/uploads/2024/09/2507.png', 
      memories: ['256GB / 8GB RAM', '512GB / 12GB RAM'] 
    },
    'Redmi Note 14 Pro+': { 
      img: 'https://mobilex.ir/storage/files/1/Phones/Xiaomi/Note14ProPlus/colors/note-14-pro-plus-green-01.png', 
      memories: ['256GB / 12GB RAM', '512GB / 16GB RAM'] 
    },
    'Redmi Note 14 S': { 
      img: 'https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-14s/pc/91af9ea917cdc7333e230ebd8c7aa7c3.png', 
      memories: ['256GB / 8GB RAM'] 
    },
    
    // Tablets
    'Redmi Pad': { 
      img: 'https://www.xiaomistore.tn/wp-content/uploads/2024/08/Redmi-Pad-SE-8.7-4G-Aurora-Green.png', 
      memories: ['128GB / 4GB RAM', '128GB / 6GB RAM'] 
    },
    'Redmi Pad 2': { 
      img: 'https://i.ibb.co/7NRQyzTm/Mi-Redmi-Pad-2-Wi-fi-Qmart-2-removebg-preview-1.png', 
      memories: ['128GB / 4GB RAM', '256GB / 8GB RAM'] 
    },
    'Redmi Pad SE': { 
      img: 'https://www.kibotek.com/wp-content/uploads/2023/08/kiboTEK_redmi_pad_se_002.png', 
      memories: ['128GB / 4GB RAM', '256GB / 8GB RAM'] 
    },
  }
};

export const PAYMENT_CONDITIONS = [
  'À VISTA', 
  'NO PIX', 
  'NO ATACADO', 
  'NO BOLETO', 
  'NO CARTÃO'
];

export const CTA_OPTIONS = [
  "Imperdível!",
  "Enquanto Durar o Estoque!",
  "Promoção Limitada!",
  "Compre Agora!",
  "Nos Chame no Zap!",
  "Não Perca!",
  "Personalizado"
];
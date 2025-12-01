









import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Download, Share2, Wand2, Smartphone, DollarSign, Image as ImageIcon, Settings, CheckCircle2, Copy, MapPin, Bell } from 'lucide-react';

import { FormState, AIState, BrandType, ThemeType } from './types';
import { PRODUCT_DATA, PAYMENT_CONDITIONS, CTA_OPTIONS, THEME_CONFIG, THEME_LOGOS, INSTAGRAM_ICON, WHATSAPP_ICON } from './constants';
import * as geminiService from './services/geminiService';

const INITIAL_STATE: FormState = {
  theme: 'padrao',
  brand: 'apple', // Updated default brand
  model: '',
  memory: '',
  price: 999.99,
  installments: 12,
  totalPrice: 1000.00,
  paymentCondition: 'À VISTA',
  customCta: '',
  ctaType: 'Imperdível!',
  instagram: '@seu_instagram',
  contact: '(99) 99999-9999',
  address: 'Seu Endereço Aqui',
  logo: null,
  useCustomLogoAsTheme: false,
  hidePrice: false,
  hideContact: false,
  hideAddress: false,
  hideCta: true,
  hideCustomLogo: false,
  hideInstagram: false,
  hideMemory: false,
  showAiSpecsInVitrine: false,
  animationsEnabled: false,
};

export default function App() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [aiState, setAiState] = useState<AIState>({
    caption: '',
    specs: '',
    isLoadingCaption: false,
    isLoadingSpecs: false,
  });
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Notification State
  const [notification, setNotification] = useState({ show: false, message: '' });

  const previewRef = useRef<HTMLDivElement>(null);

  // Load initial model/memory when brand changes
  useEffect(() => {
    const models = Object.keys(PRODUCT_DATA[form.brand]);
    if (models.length > 0 && !models.includes(form.model)) {
      const firstModel = models[0];
      const memories = PRODUCT_DATA[form.brand][firstModel]?.memories || [];
      setForm(prev => ({
        ...prev,
        model: firstModel,
        memory: memories.length > 0 ? memories[0] : ''
      }));
    }
  }, [form.brand, form.model]);

  // Update memory when model changes
  useEffect(() => {
    const memories = PRODUCT_DATA[form.brand]?.[form.model]?.memories || [];
    if (memories.length > 0 && !memories.includes(form.memory)) {
       setForm(prev => ({ ...prev, memory: memories[0] }));
    }
  }, [form.brand, form.model, form.memory]);

  // Auto-generate specs if showAiSpecsInVitrine is enabled and specs are empty
  useEffect(() => {
    if (form.showAiSpecsInVitrine && !aiState.specs && !aiState.isLoadingSpecs) {
      handleGenerateSpecs();
    }
  }, [form.showAiSpecsInVitrine]);

  // Handle Input Changes
  const updateForm = (key: keyof FormState, value: any) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };
  
  // Notification Helper
  const showToast = (message: string) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        updateForm('logo', ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      updateForm('logo', null);
      updateForm('useCustomLogoAsTheme', false); // Disable replacement if logo removed
    }
  };

  // Export to Image
  const handleDownload = async () => {
    if (!previewRef.current) return;
    
    setIsDownloading(true);

    // Temporarily disable animations for clean capture
    const wasAnimated = form.animationsEnabled;
    if (wasAnimated) updateForm('animationsEnabled', false);
    
    // Wait for render cycle
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: -window.scrollY,
      });
      
      const link = document.createElement('a');
      link.download = `oferta-${form.model.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error("Export failed", err);
      alert("Erro ao exportar imagem. Tente novamente.");
    } finally {
      if (wasAnimated) updateForm('animationsEnabled', true);
      setIsDownloading(false);
    }
  };

  // AI Generation Handlers
  const handleGenerateCaption = async () => {
    setAiState(prev => ({ ...prev, isLoadingCaption: true }));
    // Updated call with new parameters
    const caption = await geminiService.generateCaption(
      form.model, 
      form.price, 
      form.paymentCondition, 
      form.brand,
      form.memory,
      form.theme,
      form.instagram
    );
    setAiState(prev => ({ ...prev, caption, isLoadingCaption: false }));
  };

  const handleGenerateSpecs = async () => {
    setAiState(prev => ({ ...prev, isLoadingSpecs: true }));
    // Pass memory and brand category to the service
    const specs = await geminiService.generateSpecs(form.model, form.memory, form.brand);
    setAiState(prev => ({ ...prev, specs, isLoadingSpecs: false }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copiado!");
  };

  const shareWhatsApp = (text: string) => {
    const finalMsg = `*${form.model}*\n\n${text}\n\n*${form.ctaType === 'Personalizado' ? form.customCta : form.ctaType}*`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(finalMsg)}`, '_blank');
  };

  // Helper to get current product image
  const currentProductData = PRODUCT_DATA[form.brand]?.[form.model];
  const currentProductImg = currentProductData?.img || '';
  const currentMemories = currentProductData?.memories || [];
  
  // Installment Calc
  const installmentValue = form.totalPrice / form.installments;

  // Generate CTA Options (Standard + Memories + Contact)
  const availableCtaOptions = [
    ...CTA_OPTIONS,
    ...currentMemories, // Add memories as options
    form.contact // Add contact as option
  ].filter(Boolean); // Filter out empty strings

  // THEME HELPERS
  const currentThemeConfig = THEME_CONFIG[form.theme];
  const themeTextColor = currentThemeConfig.isDark ? 'text-white' : 'text-black';
  // Use specific highlight color for price/cta if defined, else gold
  const themeHighlightColor = currentThemeConfig.highlight; 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row gap-6 p-4 md:p-8 font-poppins">
      
      {/* FLOATING NOTIFICATION TOAST */}
      {notification.show && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-pulse-fast border border-gray-700">
          <Bell className="text-yellow-400" size={20} />
          <span className="font-bold text-sm">{notification.message}</span>
        </div>
      )}

      {/* LEFT: CONTROLS */}
      <div className="w-full md:w-1/3 min-w-[320px] bg-white rounded-xl shadow-lg p-6 overflow-y-auto h-auto md:h-[calc(100vh-4rem)]">
        <div className="flex items-center gap-2 mb-6 border-b pb-4">
          <Settings className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Editor de Oferta</h1>
        </div>

        <div className="space-y-6">
          
          {/* Theme Selection */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <label className="block text-sm font-bold text-gray-700 mb-2">🎨 Tema do Encarte</label>
            <select 
              value={form.theme}
              onChange={(e) => updateForm('theme', e.target.value as ThemeType)}
              className="w-full p-2 border rounded bg-white text-sm"
            >
              {Object.entries(THEME_CONFIG).map(([key, config]) => (
                <option key={key} value={key}>{config.label}</option>
              ))}
            </select>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-600 flex items-center gap-2">
              <Smartphone size={18} /> Produto
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs font-semibold text-gray-500">Marca / Categoria</label>
                <select 
                  value={form.brand}
                  onChange={(e) => updateForm('brand', e.target.value as BrandType)}
                  className="w-full p-2 border rounded"
                >
                  <optgroup label="Smartphones">
                    <option value="apple">iPhone (Apple)</option>
                    <option value="realme">Realme</option>
                    <option value="poco">Poco</option>
                    <option value="redmi">Redmi</option>
                  </optgroup>
                  <optgroup label="Ecosystem Apple">
                     <option value="applewatch">Apple Watch</option>
                     <option value="ipad">iPad</option>
                     <option value="macbook">MacBook (Air/Pro)</option>
                     <option value="airpods">AirPods</option>
                  </optgroup>
                  <optgroup label="Outros">
                    <option value="drones">Drones</option>
                    <option value="games">Games / Consoles</option>
                    <option value="acessorios">Acessórios</option>
                    <option value="perfumes">Perfumes Importados</option>
                    <option value="starlink">Starlink</option>
                    <option value="jbl">JBL</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500">Modelo</label>
                <select 
                  value={form.model}
                  onChange={(e) => updateForm('model', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  {Object.keys(PRODUCT_DATA[form.brand]).map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Memory Selection */}
            <div>
               <label className="text-xs font-semibold text-gray-500">Detalhe / Memória / Cor</label>
               <select
                 value={form.memory}
                 onChange={(e) => updateForm('memory', e.target.value)}
                 className="w-full p-2 border rounded"
               >
                 {currentMemories.map(mem => (
                   <option key={mem} value={mem}>{mem}</option>
                 ))}
                 {!currentMemories.length && <option value="">N/A</option>}
               </select>
            </div>
          </div>

          {/* Price & Payment */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-600 flex items-center gap-2">
              <DollarSign size={18} /> Preço & Pagamento
            </h3>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                 <label className="text-xs font-semibold text-gray-500">Valor (R$)</label>
                 <input 
                    type="number" 
                    value={form.price}
                    onChange={(e) => updateForm('price', parseFloat(e.target.value))}
                    step="0.01"
                    className="w-full p-2 border rounded"
                 />
              </div>
              <div>
                 <label className="text-xs font-semibold text-gray-500">Condição</label>
                 <select 
                    value={form.paymentCondition}
                    onChange={(e) => updateForm('paymentCondition', e.target.value)}
                    className="w-full p-2 border rounded text-xs"
                 >
                    {PAYMENT_CONDITIONS.map(c => <option key={c} value={c}>{c}</option>)}
                 </select>
              </div>
            </div>

            {(form.paymentCondition.includes('CARTÃO') || form.paymentCondition.includes('BOLETO')) && (
              <div className="bg-blue-50 p-3 rounded text-sm space-y-2">
                <div className="flex justify-between items-center">
                  <span>Parcelas:</span>
                  <select 
                    value={form.installments}
                    onChange={(e) => updateForm('installments', parseInt(e.target.value))}
                    className="border rounded p-1"
                  >
                    {[...Array(17)].map((_, i) => (
                      <option key={i} value={i+2}>{i+2}x</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold">Valor Total Parcelado:</label>
                  <input 
                    type="number"
                    value={form.totalPrice}
                    onChange={(e) => updateForm('totalPrice', parseFloat(e.target.value))}
                    className="w-full p-1 border rounded"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Contact & Customization */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-600 flex items-center gap-2">
              <ImageIcon size={18} /> Personalização
            </h3>

             <div>
                <label className="text-xs font-semibold text-gray-500">Instagram (@)</label>
                <input 
                  type="text"
                  value={form.instagram}
                  onChange={(e) => updateForm('instagram', e.target.value)}
                  maxLength={30}
                  placeholder="@seu_instagram"
                  className="w-full p-2 border rounded"
                />
             </div>
             
             <div>
                <label className="text-xs font-semibold text-gray-500">WhatsApp / Contato</label>
                <input 
                  type="text"
                  value={form.contact}
                  onChange={(e) => updateForm('contact', e.target.value)}
                  maxLength={20}
                  placeholder="(99) 99999-9999"
                  className="w-full p-2 border rounded"
                />
             </div>
            
            <div className="border border-gray-200 rounded p-2">
              <label className="text-xs font-semibold text-gray-500 mb-1 block">Logo da Loja</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
              
              {form.logo && (
                <label className="flex items-center space-x-2 mt-2 text-xs text-blue-800 cursor-pointer bg-blue-50 p-2 rounded">
                  <input 
                    type="checkbox" 
                    checked={form.useCustomLogoAsTheme} 
                    onChange={(e) => updateForm('useCustomLogoAsTheme', e.target.checked)} 
                    className="rounded text-blue-600" 
                  />
                  <span>Substituir Logo do Topo (Tema)</span>
                </label>
              )}
            </div>

             <div>
                <label className="text-xs font-semibold text-gray-500">CTA (Chamada)</label>
                <select 
                  value={form.ctaType}
                  onChange={(e) => updateForm('ctaType', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  {availableCtaOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {form.ctaType === 'Personalizado' && (
                  <input 
                    type="text"
                    value={form.customCta}
                    onChange={(e) => updateForm('customCta', e.target.value)}
                    placeholder="Digite sua CTA..."
                    className="w-full p-2 border rounded mt-2"
                  />
                )}
             </div>

             <div>
                <label className="text-xs font-semibold text-gray-500">Endereço (Texto)</label>
                <input 
                  type="text"
                  value={form.address}
                  onChange={(e) => updateForm('address', e.target.value)}
                  maxLength={80}
                  className="w-full p-2 border rounded"
                />
             </div>
          </div>

          {/* Toggles */}
          <div className="space-y-2 border-t pt-4">
             <div className="bg-gray-50 p-2 rounded">
               <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                 <input 
                   type="checkbox" 
                   checked={form.hidePrice} 
                   onChange={(e) => {
                      updateForm('hidePrice', e.target.checked);
                      if (e.target.checked) showToast("Modo Vitrine Ativado! 🛍️");
                   }} 
                   className="rounded text-blue-600" 
                 />
                 <span className="font-bold text-blue-700">Modo Vitrine (Sem Preço)</span>
               </label>

               {form.hidePrice && (
                 <label className="flex items-center space-x-2 text-xs text-gray-600 cursor-pointer mt-2 ml-6">
                   <input 
                     type="checkbox" 
                     checked={form.showAiSpecsInVitrine} 
                     onChange={(e) => {
                        updateForm('showAiSpecsInVitrine', e.target.checked);
                        if (e.target.checked && !aiState.specs) {
                           showToast("Gerando Características... 🤖");
                        }
                     }} 
                     className="rounded text-blue-400" 
                   />
                   <span>Mostrar Características (IA)</span>
                 </label>
               )}
             </div>

             <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={form.hideInstagram} 
                 onChange={(e) => {
                    updateForm('hideInstagram', e.target.checked);
                    if (e.target.checked) showToast("Instagram Ocultado! 🙈");
                 }} 
                 className="rounded text-blue-600" 
               />
               <span>Ocultar Instagram</span>
             </label>
             
             <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={form.hideContact} 
                 onChange={(e) => {
                    updateForm('hideContact', e.target.checked);
                    if (e.target.checked) showToast("Contato Ocultado! 📞");
                 }} 
                 className="rounded text-blue-600" 
               />
               <span>Ocultar Contato</span>
             </label>
             
             <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={form.hideAddress} 
                 onChange={(e) => {
                    updateForm('hideAddress', e.target.checked);
                    if (e.target.checked) showToast("Endereço Ocultado! 📍");
                 }} 
                 className="rounded text-blue-600" 
               />
               <span>Ocultar Endereço</span>
             </label>

             <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={form.hideCustomLogo} 
                 onChange={(e) => {
                    updateForm('hideCustomLogo', e.target.checked);
                    if (e.target.checked) showToast("Logo Personalizada Ocultada! 🖼️");
                 }} 
                 className="rounded text-blue-600" 
               />
               <span>Ocultar Logo Personalizada</span>
             </label>
             
             <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={form.hideCta} 
                 onChange={(e) => {
                    updateForm('hideCta', e.target.checked);
                    if (e.target.checked) showToast("CTA Ocultada! 🔇");
                 }} 
                 className="rounded text-blue-600" 
               />
               <span>Ocultar CTA (Chamada)</span>
             </label>

             <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={form.hideMemory} 
                 onChange={(e) => {
                    updateForm('hideMemory', e.target.checked);
                    if (e.target.checked) showToast("Memória Ocultada! 💾");
                 }} 
                 className="rounded text-blue-600" 
               />
               <span>Ocultar Memória</span>
             </label>
             
             <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
               <input type="checkbox" checked={form.animationsEnabled} onChange={(e) => updateForm('animationsEnabled', e.target.checked)} className="rounded text-blue-600" />
               <span className="font-bold text-blue-600">Ativar Animações (Motion)</span>
             </label>
          </div>

          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className={`
              w-full font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors
              ${isDownloading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}
            `}
          >
            <Download size={20} /> {isDownloading ? 'Processando...' : 'Baixar Encarte (PNG)'}
          </button>

        </div>
      </div>

      {/* MIDDLE: PREVIEW */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-200 rounded-xl p-4 overflow-hidden relative">
        <h2 className="text-gray-500 font-bold mb-4 uppercase tracking-wider text-sm">Preview (337.5px x 600px)</h2>
        
        {/* === CANVAS === */}
        <div 
          ref={previewRef}
          id="encarte-preview"
          className={`
            w-[337.5px] h-[600px] relative flex flex-col items-center justify-between text-center overflow-hidden shrink-0 transition-all duration-300 shadow-2xl
            ${isDownloading ? 'rounded-none' : 'rounded-[10px]'}
            ${/* If theme is NOT padrao or natal, we might use white text depending on config, handled below via style/classes */ ''}
          `}
          style={{
             backgroundImage: `url(${currentThemeConfig.bg})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat'
          }}
        > 
           {/* INSTAGRAM ICON (INDEPENDENT) */}
           {!form.hideInstagram && (
             <img 
               src={INSTAGRAM_ICON} 
               alt="Instagram" 
               className={`
                 absolute left-4 z-30 w-6 h-6 object-contain drop-shadow-md
                 ${!isDownloading ? 'top-[15px]' : 'top-[15px]'}
               `}
             />
           )}
           
           {/* INSTAGRAM TEXT (INDEPENDENT) */}
           {!form.hideInstagram && form.instagram && (
             <span className={`
               absolute left-12 z-30 font-bold tracking-wide drop-shadow-md text-sm
               ${!isDownloading ? 'top-[15px]' : 'top-[15px]'}
               ${themeTextColor}
             `}>
               {form.instagram}
             </span>
           )}

           {/* LOGO TEMA (OR CUSTOM LOGO) */}
           {/* We show theme logo ONLY if not custom replacement. But generic themes often don't have a logo.
               We check if THEME_LOGOS has a specific logo for this theme. If not, we rely on custom logo or user uploaded.
            */}
           <img 
             src={form.useCustomLogoAsTheme && form.logo ? form.logo : (THEME_LOGOS[form.theme as keyof typeof THEME_LOGOS] || "")} 
             alt="Logo Principal" 
             className={`
               max-w-[48%] h-auto z-10 absolute left-0 right-0 mx-auto
               ${form.theme === 'natal' && !form.useCustomLogoAsTheme ? '-top-6' : (form.useCustomLogoAsTheme ? 'top-[25px]' : 'top-0')}
               ${form.useCustomLogoAsTheme ? 'mt-4 max-h-[120px] object-contain' : ''}
               ${form.hidePrice ? 'translate-y-0' : ''}
               ${form.animationsEnabled && !form.hidePrice ? 'animate-float' : ''}
               transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]
             `}
             // Hide image if src is empty (generic themes)
             style={{ display: (form.useCustomLogoAsTheme && form.logo) || THEME_LOGOS[form.theme as keyof typeof THEME_LOGOS] ? 'block' : 'none' }}
           />

           {/* MAIN CONTENT AREA */}
           <div className={`
             relative z-10 p-[25px_15px] w-full flex-grow flex flex-col items-center 
             ${form.hidePrice ? 'justify-center pt-20' : 'justify-center'}
           `}>
             
             {/* Product Image */}
             <img 
                src={currentProductImg} 
                alt={form.model} 
                className={`
                  object-contain z-10 transition-all duration-300
                  ${form.hidePrice ? 'max-w-[90%] max-h-[400px] mt-1' : 'max-w-[80%] max-h-[200px] mt-12'}
                  ${form.animationsEnabled ? 'animate-float' : ''}
                `}
             />

             {/* CTA (Chamada) - Fixed Position Above Product Name */}
             {!form.hideCta && (
               <div className={`
                 font-luckiest uppercase tracking-wider text-[1.4em] z-20
                 drop-shadow-[2px_2px_0_#000] -rotate-2 mb-[-5px] mt-4
                 ${form.animationsEnabled ? 'animate-pulse-fast' : ''}
               `}
               style={{ 
                 color: themeHighlightColor,
                 textShadow: '2px 2px 0 #000' 
               }}
               >
                 {form.ctaType === 'Personalizado' ? form.customCta : form.ctaType}
               </div>
             )}

             {/* Product Name */}
             <div className={`
               font-poppins font-black leading-none z-10 drop-shadow-lg transition-all duration-300 text-center px-2
               ${themeTextColor}
               ${form.hidePrice ? 'text-[2.4em] mt-1' : ((form.paymentCondition.includes('CARTÃO') || form.paymentCondition.includes('BOLETO')) ? 'text-[2.0em] mt-2' : ((form.paymentCondition === 'À VISTA' || form.paymentCondition.includes('PIX') || form.paymentCondition.includes('ATACADO')) ? 'text-[2.0em] mt-0' : 'text-[2.0em] mt-2'))}
             `}>
               {form.model || 'SELECIONE UM MODELO'}
             </div>

             {/* AI SPECS (VITRINE MODE ONLY) - Appears below product name */}
             {form.hidePrice && form.showAiSpecsInVitrine && aiState.specs && (
               <div className="z-10 mt-3 text-white text-[0.7rem] text-left bg-black/60 p-2 rounded backdrop-blur-sm border border-white/20 w-full max-w-[280px]">
                  {aiState.specs.split('\n').map((line, i) => (
                    <div key={i} className="mb-0.5">{line.replace(/^\*|^-/, '•')}</div>
                  ))}
               </div>
             )}

             {/* Memory (Below Name) - Hidden if CTA is VISIBLE OR if AI Specs are shown in Vitrine Mode - OR if manually hidden */}
             {form.hideCta && form.memory && !form.hideMemory && !form.showAiSpecsInVitrine && (
               <div className={`z-10 mt-1 font-bold text-lg drop-shadow-md ${themeTextColor}`}>
                 {form.memory}
               </div>
             )}
           </div>

           {/* PRICE CONTAINER */}
           {!form.hidePrice && (
             <div className={`
               absolute left-0 w-full z-20 flex flex-col items-center
               ${(form.paymentCondition.includes('CARTÃO') || form.paymentCondition.includes('BOLETO')) 
                  ? ((!isDownloading && !form.hideCta && (form.paymentCondition.includes('BOLETO') || form.paymentCondition.includes('CARTÃO'))) ? 'bottom-[35px]' : 'bottom-[50px]') 
                  : ((!isDownloading && !form.hideCta) ? 'bottom-[65px]' : 'bottom-[80px]')
               }
             `}>
               
               {/* Price Logic */}
               {(form.paymentCondition.includes('CARTÃO') || form.paymentCondition.includes('BOLETO')) ? (
                  // Installment Layout
                  <div className="relative flex items-center justify-center mb-1">
                    <span className="absolute right-[100%] top-1 font-bold text-[1.2em] mr-1 shadow-black drop-shadow-sm leading-none" style={{ color: themeHighlightColor }}>
                      {form.installments}X
                    </span>
                    <div className={`
                      bg-transparent text-[2.8em] font-bold font-poppins leading-none
                      drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]
                      ${themeTextColor === 'text-black' ? 'text-black drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]' : 'text-bf-text'}
                      ${form.animationsEnabled ? 'animate-zoom-impact' : ''}
                    `}
                    style={{ color: themeTextColor === 'text-black' ? '#000' : themeHighlightColor }}
                    >
                      <span className="text-[0.6em] mr-1">R$</span>
                      {installmentValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>
               ) : (
                  // Cash Layout
                  <div className={`
                    bg-transparent text-[2.8em] font-bold font-poppins leading-none mb-1
                    ${themeTextColor === 'text-black' ? 'text-black drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]' : 'text-bf-text'}
                    ${form.animationsEnabled ? 'animate-zoom-impact' : ''}
                  `}
                  style={{ color: themeTextColor === 'text-black' ? '#000' : themeHighlightColor }}
                  >
                     <span className="text-[0.6em] mr-1">R$</span>
                     {form.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
               )}

               <div className={`text-[1.2em] font-bold uppercase font-poppins`} style={{ color: themeTextColor === 'text-black' ? '#333' : themeHighlightColor }}>
                 {form.paymentCondition}
               </div>

               {(form.paymentCondition.includes('CARTÃO') || form.paymentCondition.includes('BOLETO')) && (
                 <div className={`text-[0.8em] font-semibold mt-0.5 drop-shadow-md ${themeTextColor}`}>
                   Total: R$ {form.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                 </div>
               )}
             </div>
           )}
           
           {/* USER LOGO (BOTTOM) - Hidden if used as theme logo */}
           {!form.hideCustomLogo && form.logo && !form.useCustomLogoAsTheme && (
             <img 
               src={form.logo} 
               alt="Logo Cliente" 
               className={`
                  absolute bottom-[15px] object-contain z-10 pointer-events-none max-w-[100px] max-h-[80px]
                  ${form.hidePrice 
                    ? 'left-0 right-0 mx-auto' 
                    : 'left-[5px]'
                  }
               `}
             />
           )}

           {/* FOOTER ADDRESS - Hidden in Vitrine Mode */}
           {!form.hideAddress && form.address && !form.hidePrice && (
             <div className={`
                absolute bottom-[8px] z-30 pointer-events-none flex items-center gap-1
                ${form.hidePrice ? 'left-0 right-0 mx-auto w-fit text-center' : 'left-[4px] text-left max-w-[150px]'}
                ${themeTextColor}
             `}>
               <MapPin size={14} className={`shrink-0 ${themeTextColor}`} />
               <span className="font-bold text-[0.7em] leading-tight">{form.address}</span>
             </div>
           )}

            {/* === FOOTER: CONTACT === */}
           {!form.hideContact && !form.hidePrice && (
                 // STANDARD MODE: RIGHT ALIGNED
                 <>
                    <img 
                      src={WHATSAPP_ICON} 
                      alt="WhatsApp" 
                      className={`
                        absolute z-30 w-8 h-8 object-contain drop-shadow-md
                        ${!isDownloading ? 'bottom-0' : 'bottom-0'} 
                      `}
                      style={{ right: '130px' }}
                    />
                    <span 
                      className={`
                        absolute right-2 z-30 font-luckiest tracking-wide text-lg
                        ${form.theme === 'padrao' ? 'text-black shadow-none' : 'text-[#FFD700]'}
                        ${!isDownloading ? 'bottom-[4px]' : 'bottom-[12px]'}
                      `}
                      style={{ textShadow: form.theme === 'padrao' ? 'none' : '2px 2px 0 #000' }}
                    >
                      {form.contact}
                    </span>
                 </>
           )}

        </div>
        {/* === END CANVAS === */}

      </div>

      {/* RIGHT: AI TOOLS */}
      <div className="w-full md:w-1/4 min-w-[300px] bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="flex items-center gap-2 mb-4 border-b pb-4">
          <Wand2 className="text-purple-600" />
          <h2 className="text-xl font-bold text-gray-800">Gemini AI 🤖</h2>
        </div>

        {/* Caption Generator */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Legenda para Story</label>
          <textarea 
            readOnly 
            value={aiState.caption}
            placeholder="Gere uma legenda automática aqui..." 
            className="w-full h-24 p-2 border rounded bg-gray-50 text-xs resize-none"
          />
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={handleGenerateCaption}
              disabled={aiState.isLoadingCaption}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded p-2 text-xs font-bold disabled:opacity-50"
            >
              {aiState.isLoadingCaption ? 'Gerando...' : 'Gerar'}
            </button>
            <button 
              onClick={() => copyToClipboard(aiState.caption)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2 flex items-center justify-center"
            >
              <Copy size={16} />
            </button>
            <button 
              onClick={() => shareWhatsApp(aiState.caption)}
              className="bg-green-500 hover:bg-green-600 text-white rounded p-2 flex items-center justify-center"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* Specs Generator */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Ficha Técnica</label>
          <textarea 
            readOnly 
            value={aiState.specs}
            placeholder="Gere especificações técnicas..." 
            className="w-full h-24 p-2 border rounded bg-gray-50 text-xs resize-none"
          />
          <div className="grid grid-cols-3 gap-2">
            <button 
               onClick={handleGenerateSpecs}
               disabled={aiState.isLoadingSpecs}
               className="bg-purple-600 hover:bg-purple-700 text-white rounded p-2 text-xs font-bold disabled:opacity-50"
            >
              {aiState.isLoadingSpecs ? 'Gerando...' : 'Gerar'}
            </button>
            <button 
              onClick={() => copyToClipboard(aiState.specs)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2 flex items-center justify-center"
            >
              <Copy size={16} />
            </button>
             <button 
              onClick={() => shareWhatsApp(aiState.specs)}
              className="bg-green-500 hover:bg-green-600 text-white rounded p-2 flex items-center justify-center"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded text-xs text-yellow-800 border border-yellow-200">
           <p className="font-bold flex items-center gap-1"><CheckCircle2 size={12}/> Dica Pro:</p>
           <p>Gere a legenda com a IA, copie e cole no seu Instagram ao postar a imagem gerada!</p>
        </div>

      </div>

    </div>
  );
}
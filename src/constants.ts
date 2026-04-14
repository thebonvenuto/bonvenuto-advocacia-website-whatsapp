const WHATSAPP_DEFAULT_MESSAGE = "Quero conversar com um especialista em Direito de Família";

const WHATSAPP_MESSAGE_BY_PATH: Record<string, string> = {
  "/": "Quero conversar com um especialista em Direito de Família",
  "/pensao-alimenticia": "Quero conversar sobre pensão alimentícia",
  "/pensao-atrasada": "Quero conversar sobre pensão atrasada",
  "/revisao-de-pensao": "Quero conversar sobre revisão de pensão",
  "/paternidade-e-pensao": "Quero conversar sobre paternidade e pensão",
  "/alimentos-gravidicos": "Quero conversar sobre alimentos gravídicos",
  "/guarda-e-convivencia": "Quero conversar sobre guarda e convivência",
  "/como-funciona": "Quero entender como funciona o atendimento",
  "/sobre": "Quero conversar com a Bonvenuto Advocacia",
  "/faq": "Quero tirar dúvidas sobre meu caso",
  "/contato": "Quero falar com um especialista",
  "/politica-de-privacidade": "Quero conversar com um especialista",
  "/tipografia-preview": "Quero conversar com um especialista",
};

export function getWhatsAppMessageByPath(pathname: string): string {
  return WHATSAPP_MESSAGE_BY_PATH[pathname] || WHATSAPP_DEFAULT_MESSAGE;
}

export function getWhatsAppLinkByPath(pathname: string, phone = "5511955893906"): string {
  const message = getWhatsAppMessageByPath(pathname);
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

export const CONTACT_INFO = {
  phone: "5511955893906",
  phoneFormatted: "(11) 95589-3906",
  email: "contato@bonvenuto.adv.br",
  get whatsappLink() {
    if (typeof window === "undefined") {
      return getWhatsAppLinkByPath("/");
    }
    return getWhatsAppLinkByPath(window.location.pathname, this.phone);
  },
  cnpj: "34.240.835/0001-30",
  oabFirm: "30.721",
  lawyerName: "Carlo Bonvenuto",
  lawyerOab: "156.660"
};

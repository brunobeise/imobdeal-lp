"use client";

interface WhatsAppButtonProps {
  message: string;
  children: React.ReactNode;
  className?: string;
}

export function WhatsAppIntegrationButton({ message, children, className }: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5551995529578?text=${encodedMessage}`, "_blank");
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export function CheckCRMButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <WhatsAppIntegrationButton
      message="Olá! Gostaria de consultar se meu CRM já tem integração com o ImobDeal."
      className={className}
    >
      {children}
    </WhatsAppIntegrationButton>
  );
}

export function PartnershipButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <WhatsAppIntegrationButton
      message="Olá! Somos uma empresa/CRM e gostaríamos de integrar com o ImobDeal. Vamos conversar?"
      className={className}
    >
      {children}
    </WhatsAppIntegrationButton>
  );
}

export function ContactButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <WhatsAppIntegrationButton
      message="Olá! Gostaria de saber mais sobre as integrações do ImobDeal com CRMs."
      className={className}
    >
      {children}
    </WhatsAppIntegrationButton>
  );
}

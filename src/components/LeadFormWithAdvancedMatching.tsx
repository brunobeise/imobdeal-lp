"use client";

import { useState } from 'react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';

interface LeadFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
}

export default function LeadFormWithAdvancedMatching({ onSubmit, className = "" }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: ''
  });
  
  const { trackStartFreeTrial, updateAdvancedMatching } = useFacebookPixel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Atualiza a correspondência avançada do Facebook Pixel
    const [firstName, ...lastNameParts] = formData.name.split(' ');
    const lastName = lastNameParts.join(' ');
    
    updateAdvancedMatching({
      email: formData.email,
      phone: formData.phone,
      firstName: firstName,
      lastName: lastName,
      city: formData.city
    });
    
    // Rastreia o evento de lead com dados enriquecidos
    trackStartFreeTrial('lead_form');
    
    // Chama callback personalizado se fornecido
    if (onSubmit) {
      onSubmit(formData);
    }
    
    // Redireciona para o teste grátis
    window.open('https://app.imobdeal.com.br/cadastro', '_blank');
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nome Completo *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          WhatsApp *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="(11) 99999-9999"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          Cidade
        </label>
        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Sua cidade"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Começar Teste Grátis
      </button>

      <p className="text-xs text-gray-500 text-center">
        Ao continuar, você concorda com nossos{' '}
        <a href="/termos-servico" className="text-primary hover:underline">
          Termos de Serviço
        </a>{' '}
        e{' '}
        <a href="/politica-privacidade" className="text-primary hover:underline">
          Política de Privacidade
        </a>
      </p>
    </form>
  );
}
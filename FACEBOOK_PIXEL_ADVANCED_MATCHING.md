# 🎯 Facebook Pixel - Correspondência Avançada (Advanced Matching)

## 📋 O que foi implementado

### ✅ Inicialização Básica
O Facebook Pixel agora é inicializado com correspondência avançada básica:

```javascript
fbq('init', '1253769810303729', {
  external_id: 'imobdeal_visitor',
  em: 'auto',          // Email automático (quando disponível no browser)
  ph: 'auto'           // Telefone automático (quando disponível no browser)
});
```

### ✅ Componente de Correspondência Avançada
- **Arquivo**: `src/components/FacebookPixelAdvanced.tsx`
- **Função**: Carrega dados do usuário salvos no localStorage
- **Automático**: Executa em todas as páginas via layout

### ✅ Hook Atualizado
- **Arquivo**: `src/hooks/useFacebookPixel.ts`
- **Nova função**: `updateAdvancedMatching()`
- **Funcionalidade**: Atualiza dados do pixel em tempo real

## 🔧 Como usar

### 1. **Captura Automática**
O pixel já captura automaticamente dados básicos quando disponíveis no navegador.

### 2. **Captura Manual (Recomendado)**
Quando o usuário preenche um formulário:

```tsx
import { useFacebookPixel } from '@/hooks/useFacebookPixel';

function MeuFormulario() {
  const { updateAdvancedMatching, trackStartFreeTrial } = useFacebookPixel();
  
  const handleSubmit = (dadosUsuario) => {
    // Atualiza correspondência avançada
    updateAdvancedMatching({
      email: dadosUsuario.email,
      phone: dadosUsuario.phone,
      firstName: dadosUsuario.firstName,
      lastName: dadosUsuario.lastName,
      city: dadosUsuario.city,
      state: dadosUsuario.state
    });
    
    // Rastreia evento com dados enriquecidos
    trackStartFreeTrial('formulario_contato');
  };
}
```

### 3. **Exemplo Completo**
Veja o componente `src/components/LeadFormWithAdvancedMatching.tsx` para um exemplo completo de formulário com correspondência avançada.

## 📊 Parâmetros Suportados

| Parâmetro | Descrição | Exemplo |
|-----------|-----------|---------|
| `em` | E-mail do usuário | `'joao@email.com'` ou `'auto'` |
| `ph` | Telefone | `'11999999999'` ou `'auto'` |
| `fn` | Primeiro nome | `'João'` |
| `ln` | Último nome | `'Silva'` |
| `ct` | Cidade | `'São Paulo'` |
| `st` | Estado | `'SP'` |
| `country` | País | `'br'` (fixo) |
| `external_id` | ID externo | Email ou identificador único |

## 🎯 Benefícios da Correspondência Avançada

### 📈 Melhor Rastreamento
- **Maior precisão**: Identifica usuários mesmo sem cookies
- **Cross-device**: Rastreia usuários em diferentes dispositivos
- **Sessões offline**: Conecta ações online com conversões offline

### 🎯 Otimização de Campanhas
- **Audiências mais precisas**: Melhores audiências customizadas
- **Lookalike melhoradas**: Audiências similares mais eficazes
- **Atribuição aprimorada**: Melhor entendimento do funil de conversão

### 💰 Resultados Financeiros
- **Menor CPL**: Custo por lead reduzido
- **Maior ROAS**: Retorno sobre investimento melhorado
- **Conversões otimizadas**: Algoritmo encontra usuários mais propensos a converter

## 🔍 Como Verificar se Está Funcionando

### 1. **Console do Navegador**
```javascript
// Abra F12 → Console e digite:
console.log(window.fbq);
// Deve mostrar a função do pixel

// Teste manual:
fbq('track', 'Lead', {test: true});
```

### 2. **Facebook Events Manager**
1. Acesse [Events Manager](https://business.facebook.com/events_manager2)
2. Selecione seu Pixel ID: `1253769810303729`
3. Vá em "Test Events"
4. Verifique se os parâmetros de correspondência aparecem

### 3. **Facebook Pixel Helper**
- Instale a extensão do Chrome
- Verifique se mostra "Advanced Matching Parameters Found"

## 🚨 Importante - Privacidade

### ✅ Dados Hasheados
- Todos os dados pessoais são automaticamente hasheados (SHA-256)
- Facebook nunca recebe dados em texto claro
- Conformidade com LGPD/GDPR

### ✅ Consentimento
- Dados só são coletados após interação do usuário
- Respeita preferências de privacidade
- Permite opt-out

## 🎯 Próximos Passos

### 1. **Implementar em Formulários**
- Adicione o hook em todos os formulários de lead
- Capture dados progressivamente
- Atualize correspondência em tempo real

### 2. **Testar e Otimizar**
- Monitor eventos no Events Manager
- Verifique qualidade das correspondências
- Ajuste parâmetros conforme necessário

### 3. **Criar Campanhas Otimizadas**
- Use audiências com correspondência avançada
- Crie lookalikes mais precisas
- Otimize para conversões com dados enriquecidos

---

## ✅ Status da Implementação

- ✅ **Inicialização básica** configurada
- ✅ **Componente avançado** criado  
- ✅ **Hook atualizado** com novos métodos
- ✅ **Exemplo de formulário** implementado
- ✅ **Documentação** completa
- ⏳ **Testes** em andamento
- ⏳ **Implementação em formulários** específicos

**🚀 A correspondência avançada está pronta para uso!**
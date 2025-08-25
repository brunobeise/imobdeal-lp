# 📊 Eventos Personalizados do Facebook Pixel - ImobDeal

## 🎯 Eventos Implementados

### ✅ Eventos Principais

| Evento | Tipo | Quando Dispara | Dados Enviados |
|--------|------|---------------|----------------|
| **Lead** | Padrão | Clique em "Teste Grátis" | `content_name`, `source`, `value` |
| **StartFreeTrial** | Customizado | Clique em "Teste Grátis" | `source`, `timestamp` |
| **ViewContent** | Padrão | Ver demonstração | `content_name: "Demo ImobDeal"` |
| **Contact** | Padrão | Clique no WhatsApp | `content_name: "WhatsApp Contact"` |

### 🎯 Fontes de Tráfego Rastreadas

#### Página Principal (Homepage):
- **hero_section**: Botão principal no topo da página
- **cta_section**: Botão na seção de call-to-action final

#### Página Como Funciona:
- **como_funciona_hero**: Botão no hero da página Como Funciona
- **como_funciona_portfolio**: Botão na seção de portfólio
- **como_funciona_tracking**: Botão na seção de acompanhamento
- **como_funciona_final_cta**: Botão no call-to-action final

#### Página Preços:
- **precos_hero**: Botão no hero da página de preços
- **precos_final_cta**: Botão no call-to-action final

#### Outros:
- **demo**: Abertura do modal de demonstração
- **whatsapp**: Contato via WhatsApp (botão fixo + botões específicos)

## 🔍 Como Monitorar no Facebook Ads Manager

### 1. **Verificar se os Eventos Estão Funcionando**

1. Acesse [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Selecione seu Pixel ID: `1253769810303729`
3. Vá em "Teste de Eventos"
4. Digite sua URL: `https://imobdeal.com.br`
5. Navegue pelo site e clique nos botões
6. Verifique se os eventos aparecem em tempo real

### 2. **Visualizar Dados dos Eventos**

#### No Events Manager:
- **Visão Geral**: Veja todos os eventos dos últimos 7 dias
- **Conjuntos de Dados**: Filtre por evento específico
- **Insights**: Analise tendências e performance

#### Eventos para Monitorar:
```
📈 Lead (Teste Grátis)
📺 ViewContent (Demo + Pricing)  
📞 Contact (WhatsApp)
🎯 StartFreeTrial (Customizado)
```

### 3. **Criar Audiências Customizadas**

#### Baseado em Eventos:
1. Vá em "Audiências" → "Criar Audiência" → "Audiência Customizada"
2. Selecione "Website Traffic"
3. Configure as condições:

**Exemplo - Interesse em Teste Grátis:**
```
Pessoas que visitaram páginas específicas:
- Evento: Lead
- Em: Últimos 30 dias
```

**Exemplo - Visualizaram Demo:**
```
Pessoas que visitaram páginas específicas:
- Evento: ViewContent
- content_name contém: Demo
- Em: Últimos 30 dias
```

### 4. **Criar Campanhas Otimizadas**

#### Para Conversões:
1. **Objetivo**: Conversões
2. **Evento de Otimização**: Lead (para teste grátis)
3. **Audiência**: Interesses relacionados a imóveis
4. **Remarketing**: Pessoas que viram demo mas não converteram

#### Para Remarketing:
```
Audiência: Visitaram o site MAS NÃO fizeram Lead
Evento de Exclusão: Lead (últimos 30 dias)
Objetivo: Converter pessoas interessadas
```

## 🛠️ Implementação Técnica

### Estrutura dos Eventos:

```javascript
// Evento Lead (Padrão)
fbq('track', 'Lead', {
  content_name: 'Teste Grátis ImobDeal',
  content_category: 'Free Trial',
  source: 'hero_section',
  value: 0,
  currency: 'BRL'
});

// Evento Customizado
fbq('trackCustom', 'StartFreeTrial', {
  source: 'hero_section',
  timestamp: '2025-01-XX'
});
```

### Componentes com Tracking:
- ✅ `FreeTrialButton.tsx` - Botões "Teste Grátis" (8 botões no total)
- ✅ `DemoModal.tsx` - Modal de demonstração  
- ✅ `WhatsappButton.tsx` - Botão fixo do WhatsApp
- ✅ `WhatsAppButtons.tsx` - Botões específicos de WhatsApp
- ✅ `useFacebookPixel.ts` - Hook centralizado

### Páginas Refatoradas:
- ✅ **Homepage** (`page.tsx`) - 2 botões FreeTrialButton
- ✅ **Como Funciona** (`como-funciona/page.tsx`) - 4 botões FreeTrialButton  
- ✅ **Preços** (`precos/page.tsx`) - 2 botões FreeTrialButton

## 📋 Checklist de Configuração

### ⚙️ Configuração Inicial:
- [x] Facebook Pixel instalado (`1253769810303729`)
- [x] Eventos padrão configurados
- [x] Eventos customizados criados
- [x] Hook reutilizável implementado
- [x] Componentes com tracking

### 📊 Próximos Passos:

1. **Testar Eventos** (URGENTE)
   - [ ] Verificar no Events Manager
   - [ ] Testar cada botão
   - [ ] Confirmar dados corretos

2. **Criar Audiências** 
   - [ ] Audiência "Interessados em Teste Grátis"
   - [ ] Audiência "Visualizaram Demo"
   - [ ] Audiência "Contato WhatsApp"

3. **Configurar Campanhas**
   - [ ] Campanha para conversão (Lead)
   - [ ] Campanha de remarketing
   - [ ] Lookalike audiences

4. **Otimizações Avançadas**
   - [ ] Adicionar evento CompleteRegistration
   - [ ] Tracking de scroll profundo
   - [ ] Eventos de tempo na página

## 🔧 Debugging

### Como Testar se Está Funcionando:

1. **Browser Console:**
```javascript
// Abra F12 → Console e digite:
fbq('track', 'Lead', {test: true});
// Deve aparecer no Events Manager
```

2. **Extensão Facebook Pixel Helper:**
   - Instale a extensão do Chrome
   - Navegue pelo site
   - Veja os eventos em tempo real

3. **Events Manager Test:**
   - Use a ferramenta de teste do Facebook
   - Digite sua URL
   - Simule cliques nos botões

### Problemas Comuns:
- **Eventos não aparecem**: Verificar se o Pixel ID está correto
- **Dados incorretos**: Verificar parâmetros enviados
- **Múltiplos disparos**: Verificar se não há double-tracking

## 📈 Métricas Importantes

### KPIs para Acompanhar:
- **CTR**: Taxa de clique nos anúncios
- **CPC**: Custo por clique
- **CPL**: Custo por lead (teste grátis)
- **Conversion Rate**: Taxa de conversão
- **ROAS**: Retorno sobre investimento

### Metas Sugeridas:
- **CTR**: > 2%
- **CPL**: < R$ 50
- **Conversion Rate**: > 5%
- **Cost per StartFreeTrial**: < R$ 30

---

## 🚀 Implementação Concluída!

Todos os eventos estão configurados e prontos para usar. Agora você pode:

1. ✅ Rastrear cliques em "Teste Grátis" 
2. ✅ Monitorar visualizações de demo
3. ✅ Acompanhar contatos via WhatsApp
4. ✅ Criar audiências customizadas
5. ✅ Otimizar campanhas do Facebook Ads

**Próximo passo**: Testar os eventos no Facebook Events Manager!

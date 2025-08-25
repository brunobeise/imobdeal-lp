# SEO Setup - ImobDeal

## Implementações de SEO Realizadas

### 1. Meta Tags Otimizadas
- ✅ Títulos únicos para cada página focados em "envio de propostas de imóveis"
- ✅ Descrições otimizadas com keywords relevantes
- ✅ Keywords estratégicas para ranking
- ✅ Open Graph para redes sociais
- ✅ Twitter Cards
- ✅ Meta tags técnicas (robots, canonical, etc.)

### 2. Dados Estruturados (Schema.org)
- ✅ Organization Schema
- ✅ LocalBusiness Schema  
- ✅ Software Application Schema
- ✅ FAQ Schema
- ✅ Service Schema
- ✅ Breadcrumb Schema

### 3. Sitemap e Robots
- ✅ Sitemap dinâmico (`/sitemap.xml`)
- ✅ Robots.txt otimizado (`/robots.txt`)

### 4. Configurações Técnicas
- ✅ Next.js otimizado para SEO
- ✅ Compressão GZIP
- ✅ Headers de segurança
- ✅ Cache otimizado
- ✅ Imagens WebP/AVIF
- ✅ PWA Manifest

### 5. Configuração do Google Search Console

#### Passo 1: Verificar Propriedade
1. Acesse [Google Search Console](https://search.google.com/search-console/)
2. Adicione a propriedade: `https://imobdeal.com.br`
3. Escolha o método de verificação:
   - **Meta tag HTML**: Adicione o código no metadata do layout.tsx
   - **Arquivo HTML**: Faça upload do arquivo de verificação
   - **Google Analytics**: Se já estiver configurado

#### Passo 2: Enviar Sitemap
1. No Search Console, vá em "Sitemaps"
2. Adicione a URL: `https://imobdeal.com.br/sitemap.xml`
3. Clique em "Enviar"

#### Passo 3: Verificar Indexação
1. Use a ferramenta "Inspeção de URL"
2. Teste URLs importantes:
   - `https://imobdeal.com.br/`
   - `https://imobdeal.com.br/precos`
   - `https://imobdeal.com.br/como-funciona`

#### Passo 4: Monitorar Performance
- Acompanhe métricas de busca
- Monitore impressões e cliques
- Verifique queries de pesquisa
- Analise Core Web Vitals

### 6. Palavras-chave Alvo

#### Primárias:
- "envio de propostas de imóveis"
- "propostas imobiliárias"  
- "software imobiliário"
- "corretor de imóveis"

#### Secundárias:
- "criar propostas imóveis"
- "acompanhar propostas"
- "gestão imobiliária"
- "plataforma corretor"
- "automação imobiliária"
- "sistema propostas"

#### Long-tail:
- "como criar propostas imobiliárias profissionais"
- "software para envio de propostas de imóveis"
- "plataforma para corretores de imóveis"
- "acompanhar visualizações propostas"

### 7. Próximos Passos Recomendados

1. **Google Analytics 4**: Configurar para monitorar comportamento
2. **Google Ads**: Criar campanhas para keywords alvo
3. **Blog/Conteúdo**: Criar artigos sobre:
   - "Como criar propostas imobiliárias que convertem"
   - "Guia completo para corretores de imóveis"
   - "Tendências do mercado imobiliário 2025"
4. **Link Building**: Buscar parcerias com:
   - Blogs de imóveis
   - Associações de corretores
   - Portais imobiliários
5. **Reviews**: Incentivar avaliações no Google Meu Negócio

### 8. Métricas a Monitorar

- Posição média para keywords alvo
- CTR (Click Through Rate)
- Impressões e cliques
- Core Web Vitals
- Taxa de conversão (teste → assinatura)
- Tempo de permanência
- Taxa de rejeição

### 9. Ferramentas Úteis

- [Google Search Console](https://search.google.com/search-console/)
- [Google Analytics](https://analytics.google.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [SEMrush](https://semrush.com/) ou [Ahrefs](https://ahrefs.com/)
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)

## Configuração do Google Verification

Para configurar a verificação do Google Search Console:

1. Substitua `'your-google-verification-code'` no arquivo `layout.tsx` pelo código real
2. Ou adicione o arquivo HTML de verificação na pasta `public/`

```typescript
verification: {
  google: 'seu-codigo-de-verificacao-aqui',
},
```

## Status: ✅ Implementação Completa

O site está totalmente otimizado para SEO com foco em "envio de propostas de imóveis" e palavras-chave relacionadas. Todas as práticas modernas de SEO foram aplicadas mantendo o copy original.

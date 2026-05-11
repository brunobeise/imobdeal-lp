import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade do Aplicativo | ImobDeal",
  description:
    "Como o aplicativo móvel ImobDeal coleta, utiliza, armazena e compartilha dados pessoais. Conformidade com LGPD, Apple App Store e Google Play.",
};

const LAST_UPDATE = "10 de Maio de 2026";
const COMPANY_NAME = "ImobDeal LTDA";
const COMPANY_CNPJ = "62.081.400/0001-26";
const COMPANY_ADDRESS = "Santa Cruz do Sul, Rio Grande do Sul, Brasil";
const SUPPORT_EMAIL = "suporte@imobdeal.com.br";
const DPO_EMAIL = "privacidade@imobdeal.com.br";

export default function PoliticaPrivacidadeApp() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-2">
            Aplicativo móvel
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Política de Privacidade do App ImobDeal
          </h1>
          <p className="text-base md:text-lg text-white/90">
            Específica para o aplicativo móvel iOS e Android
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 mb-2">
              Última atualização: <strong>{LAST_UPDATE}</strong>
            </p>
            <p className="text-sm text-gray-600 mb-8">
              Esta política aplica-se exclusivamente ao aplicativo móvel
              ImobDeal disponível na Apple App Store e Google Play. Para a versão
              web (app.imobdeal.com.br), consulte a{" "}
              <a
                href="/politica-privacidade"
                className="text-primary underline"
              >
                política de privacidade geral
              </a>
              .
            </p>

            <div className="prose prose-lg max-w-none space-y-10">
              {/* 1. Quem somos */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  1. Identificação do Controlador
                </h2>
                <p className="text-gray-700">
                  O aplicativo móvel ImobDeal é desenvolvido e operado por{" "}
                  <strong>{COMPANY_NAME}</strong>, inscrita no CNPJ sob o nº{" "}
                  {COMPANY_CNPJ}, com sede em {COMPANY_ADDRESS}. Para fins desta
                  política, somos o &quot;Controlador&quot; dos seus dados pessoais nos
                  termos da Lei Geral de Proteção de Dados (Lei 13.709/2018 -
                  LGPD).
                </p>
                <p className="text-gray-700 mt-3">
                  <strong>Encarregado pelo Tratamento de Dados (DPO):</strong>{" "}
                  Para exercer seus direitos ou tirar dúvidas sobre privacidade,
                  entre em contato pelo e-mail{" "}
                  <a
                    href={`mailto:${DPO_EMAIL}`}
                    className="text-primary underline"
                  >
                    {DPO_EMAIL}
                  </a>
                  .
                </p>
              </div>

              {/* 2. Quem usa o app */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  2. Público do Aplicativo
                </h2>
                <p className="text-gray-700">
                  O app ImobDeal é destinado exclusivamente a{" "}
                  <strong>profissionais do mercado imobiliário</strong>{" "}
                  (corretores, gestores e administradores) com vínculo a uma
                  imobiliária ou autônomos cadastrados. Não é direcionado ao
                  público geral nem a menores de 18 anos. Não criamos contas
                  para pessoas físicas que não sejam profissionais do setor.
                </p>
              </div>

              {/* 3. Dados coletados */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  3. Dados Pessoais Coletados
                </h2>
                <p className="text-gray-700 mb-4">
                  Coletamos as seguintes categorias de dados, todas vinculadas
                  ao seu cadastro como profissional:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      3.1 Dados de cadastro (fornecidos por você)
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Nome completo</li>
                      <li>E-mail</li>
                      <li>Telefone / WhatsApp</li>
                      <li>Foto de perfil (opcional)</li>
                      <li>CRECI e cargo (corretor, gestor, etc)</li>
                      <li>Senha (armazenada com hash bcrypt - nunca em texto puro)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      3.2 Dados operacionais do CRM (gerados pelo uso)
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Contatos de clientes (nome, telefone, e-mail, CPF/CNPJ, foto)</li>
                      <li>Negócios em andamento, valores, etapas do funil</li>
                      <li>Imóveis cadastrados, fotos e características</li>
                      <li>Tarefas, agendamentos, anotações</li>
                      <li>Histórico de mensagens enviadas via WhatsApp</li>
                      <li>Documentos vinculados a negócios e contatos</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      <em>
                        Ao cadastrar contatos de clientes você atua como Operador
                        do tratamento desses dados. É sua responsabilidade obter
                        o consentimento ou base legal apropriada perante esses
                        terceiros.
                      </em>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      3.3 Dados técnicos do dispositivo
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>
                        <strong>Token de notificação push (Expo Push Token):</strong>{" "}
                        identificador anônimo emitido pela Apple/Google para
                        permitir o envio de notificações push ao seu dispositivo
                      </li>
                      <li>
                        <strong>Identificador do dispositivo (Android ID / IDFA):</strong>{" "}
                        coletado por SDKs analíticos para diagnóstico e métricas
                        agregadas
                      </li>
                      <li>
                        <strong>Modelo do aparelho, versão do sistema operacional, idioma, fuso horário</strong>
                      </li>
                      <li>
                        <strong>Endereço IP e logs de acesso</strong> (segurança)
                      </li>
                      <li>
                        <strong>Dados de telemetria de uso e crashes</strong>{" "}
                        (PostHog e Sentry, agregados e pseudonimizados)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      3.4 Dados derivados de permissões do dispositivo
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>
                        <strong>Câmera:</strong> usada para tirar fotos de
                        imóveis e da sua foto de perfil. As fotos só são
                        capturadas quando você toca em &quot;Tirar foto&quot;
                      </li>
                      <li>
                        <strong>Galeria de fotos:</strong> usada para selecionar
                        fotos de imóveis e perfil. Acessamos apenas as imagens
                        que você seleciona explicitamente
                      </li>
                      <li>
                        <strong>Notificações:</strong> para enviar push de leads
                        novos, mensagens, lembretes de tarefas. Você pode
                        desativar a qualquer momento nas configurações do
                        sistema operacional
                      </li>
                      <li>
                        <strong>Microfone:</strong> usado quando você grava
                        áudio dentro de notas ou comentários. O áudio é enviado
                        para transcrição (Whisper / OpenAI) e descartado após o
                        processamento
                      </li>
                      <li>
                        <strong>Documentos:</strong> usada quando você faz
                        upload de PDFs ou planilhas para vincular a um negócio
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      3.5 Dados que NÃO coletamos
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>
                        <strong>Não coletamos sua localização (GPS) em momento algum</strong>{" "}
                        — nem em primeiro plano (com o app aberto), nem em segundo
                        plano. O aplicativo não solicita a permissão de localização
                        do sistema operacional
                      </li>
                      <li>Não rastreamos seu uso fora do aplicativo ImobDeal</li>
                      <li>Não acessamos seus contatos pessoais do telefone</li>
                      <li>Não vendemos seus dados a anunciantes ou data brokers</li>
                      <li>Não usamos seus dados para perfilamento publicitário</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Finalidades */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  4. Finalidades do Tratamento
                </h2>
                <p className="text-gray-700 mb-3">
                  Tratamos seus dados pessoais para as seguintes finalidades, com
                  as respectivas bases legais previstas no art. 7º da LGPD:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 border-b border-gray-200">
                          Finalidade
                        </th>
                        <th className="text-left p-3 border-b border-gray-200">
                          Base legal (LGPD)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          Autenticação e prestação do serviço de CRM
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Execução de contrato (art. 7º, V)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          Envio de notificações push e e-mails operacionais
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Execução de contrato e legítimo interesse (art. 7º, IX)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          Segurança, prevenção a fraudes e logs de acesso
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Legítimo interesse (art. 7º, IX)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          Análise de uso agregada e correção de bugs (telemetria)
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Legítimo interesse (art. 7º, IX)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          Comunicação de novidades e atualizações do produto
                        </td>
                        <td className="p-3">
                          Consentimento (art. 7º, I) - revogável a qualquer
                          momento nas configurações do app
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. Compartilhamento */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  5. Compartilhamento com Terceiros
                </h2>
                <p className="text-gray-700 mb-4">
                  Compartilhamos seus dados apenas com fornecedores que prestam
                  serviços essenciais ao funcionamento do aplicativo, mediante
                  contrato com cláusulas de proteção de dados. Não vendemos
                  dados pessoais.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 border-b border-gray-200">
                          Fornecedor
                        </th>
                        <th className="text-left p-3 border-b border-gray-200">
                          Função
                        </th>
                        <th className="text-left p-3 border-b border-gray-200">
                          País
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Render Inc.</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Hospedagem do servidor backend
                        </td>
                        <td className="p-3 border-b border-gray-100">EUA</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Neon Inc.</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Banco de dados PostgreSQL gerenciado
                        </td>
                        <td className="p-3 border-b border-gray-100">EUA</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Cloudflare Inc.</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Armazenamento de imagens e arquivos (R2 / Images)
                        </td>
                        <td className="p-3 border-b border-gray-100">EUA</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Evolution API / Z-API</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Envio de mensagens via WhatsApp Business
                        </td>
                        <td className="p-3 border-b border-gray-100">Brasil</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>OpenAI L.L.C.</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Recursos de IA (geração de descrições, transcrição de
                          áudio Whisper). Apenas o conteúdo enviado pelo usuário
                          é processado, sem retenção para treino
                        </td>
                        <td className="p-3 border-b border-gray-100">EUA</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Expo (Exponent Inc.)</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Roteamento de notificações push para Apple Push
                          Notification Service e Firebase Cloud Messaging
                        </td>
                        <td className="p-3 border-b border-gray-100">EUA</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Apple Inc.</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Apple Push Notification Service (APNs)
                        </td>
                        <td className="p-3 border-b border-gray-100">EUA</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Google LLC</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Firebase Cloud Messaging (FCM) para push no Android
                        </td>
                        <td className="p-3 border-b border-gray-100">EUA</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>PostHog Inc.</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Análise agregada de uso (eventos pseudonimizados)
                        </td>
                        <td className="p-3 border-b border-gray-100">EUA</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Sentry (Functional Software Inc.)</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Monitoramento de erros e crashes
                        </td>
                        <td className="p-3 border-b border-gray-100">EUA</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Google LLC (Maps)</strong>
                        </td>
                        <td className="p-3">
                          Visualização de mapa quando você abre o detalhe de um
                          imóvel com endereço cadastrado
                        </td>
                        <td className="p-3">EUA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mt-4">
                  Também podemos compartilhar dados com autoridades públicas
                  quando exigido por lei, ordem judicial ou solicitação válida
                  de autoridade competente.
                </p>
              </div>

              {/* 6. Transferencia internacional */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  6. Transferência Internacional de Dados
                </h2>
                <p className="text-gray-700">
                  Alguns dos fornecedores listados acima estão localizados nos
                  Estados Unidos. As transferências internacionais de dados
                  pessoais são realizadas com base em cláusulas contratuais
                  padrão e/ou outros mecanismos previstos nos arts. 33 e 35 da
                  LGPD, sempre com nível de proteção compatível com o
                  estabelecido pela legislação brasileira.
                </p>
              </div>

              {/* 7. Push */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  7. Notificações Push
                </h2>
                <p className="text-gray-700 mb-3">
                  Ao autorizar notificações push no momento da instalação ou nas
                  configurações do sistema, geramos um token anônimo de
                  notificação (Expo Push Token / APNs Token / FCM Token) que é
                  associado ao seu cadastro. Esse token é usado para entregar:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Aviso de novo lead atribuído a você</li>
                  <li>Aviso de mensagem WhatsApp recebida em conversa do CRM</li>
                  <li>Lembrete de tarefa próxima do horário</li>
                  <li>Aviso de menção em comentário ou nota</li>
                  <li>Avisos do sistema (manutenção, atualizações importantes)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Você pode desativar todas as notificações push a qualquer
                  momento nas configurações do sistema operacional do dispositivo,
                  ou desligar tipos específicos dentro do próprio app em &quot;Perfil
                  &gt; Notificações&quot;. Quando você faz logout, o token é
                  desvinculado da sua conta.
                </p>
              </div>

              {/* 8. Retencao */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  8. Retenção dos Dados
                </h2>
                <p className="text-gray-700 mb-3">
                  Mantemos seus dados pelo tempo necessário ao cumprimento das
                  finalidades descritas:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Conta ativa:</strong> seus dados ficam armazenados
                    enquanto sua conta estiver ativa
                  </li>
                  <li>
                    <strong>Após exclusão da conta:</strong> dados pessoais são
                    apagados em até 30 dias, salvo:
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>
                        Dados financeiros e fiscais (notas fiscais, comprovantes
                        de pagamento) ficam retidos por 5 anos para cumprimento
                        de obrigação legal/tributária
                      </li>
                      <li>
                        Logs de acesso ficam retidos por 6 meses para fins de
                        segurança (Marco Civil da Internet, art. 15)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Após o término da retenção legal:</strong> os dados
                    são destruídos de forma segura ou anonimizados de forma
                    irreversível
                  </li>
                </ul>
              </div>

              {/* 9. Excluir conta */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  9. Como Excluir sua Conta
                </h2>
                <p className="text-gray-700 mb-3">
                  Em conformidade com as diretrizes da Apple App Store e da
                  Google Play, oferecemos a exclusão da conta diretamente pelo
                  aplicativo. Para excluir sua conta:
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-1">
                  <li>Abra o app ImobDeal</li>
                  <li>
                    Toque na aba <strong>&quot;Mais&quot;</strong> {" → "} {" "}
                    <strong>&quot;Perfil&quot;</strong>
                  </li>
                  <li>
                    Role até o final e toque em{" "}
                    <strong>&quot;Excluir minha conta&quot;</strong>
                  </li>
                  <li>
                    Confirme com sua senha ou código enviado por e-mail
                  </li>
                  <li>
                    Sua conta e dados pessoais serão excluídos em até 30 dias
                    corridos
                  </li>
                </ol>
                <p className="text-gray-700 mt-3">
                  Alternativamente, você pode solicitar a exclusão diretamente
                  pelo nosso formulário web, sem precisar abrir o aplicativo:{" "}
                  <a
                    href="/excluir-conta"
                    className="text-primary underline font-semibold"
                  >
                    imobdeal.com.br/excluir-conta
                  </a>
                  . Você também pode escrever para{" "}
                  <a
                    href={`mailto:${DPO_EMAIL}`}
                    className="text-primary underline"
                  >
                    {DPO_EMAIL}
                  </a>{" "}
                  a partir do e-mail cadastrado, com o assunto{" "}
                  <strong>&quot;Solicitação de exclusão de conta&quot;</strong>.
                </p>
                <p className="text-gray-700 mt-3">
                  <strong>Atenção:</strong> a exclusão é irreversível. Após a
                  confirmação, todos os dados pessoais associados à sua conta
                  (contatos, negócios, imóveis, anotações, fotos) serão
                  removidos definitivamente, exceto os dados retidos por
                  obrigação legal listados na seção 8. Se você está vinculado a
                  uma imobiliária com outros usuários, dados compartilhados
                  podem ser mantidos para garantir a continuidade da operação
                  do CRM da imobiliária; contate seu gestor para alternativas.
                </p>
              </div>

              {/* 10. Direitos do titular */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  10. Seus Direitos como Titular dos Dados (LGPD)
                </h2>
                <p className="text-gray-700 mb-3">
                  A LGPD garante os seguintes direitos, exercíveis a qualquer
                  momento por solicitação ao nosso DPO em{" "}
                  <a
                    href={`mailto:${DPO_EMAIL}`}
                    className="text-primary underline"
                  >
                    {DPO_EMAIL}
                  </a>
                  :
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Confirmação e acesso:</strong> saber se tratamos
                    seus dados e obter cópia
                  </li>
                  <li>
                    <strong>Correção:</strong> corrigir dados incompletos,
                    inexatos ou desatualizados
                  </li>
                  <li>
                    <strong>Anonimização, bloqueio ou eliminação:</strong> de
                    dados desnecessários, excessivos ou tratados em desconformidade
                  </li>
                  <li>
                    <strong>Portabilidade:</strong> receber seus dados em
                    formato estruturado e interoperável
                  </li>
                  <li>
                    <strong>Eliminação:</strong> dos dados tratados com base em
                    consentimento (vide seção 9)
                  </li>
                  <li>
                    <strong>Informação:</strong> sobre entidades públicas e
                    privadas com as quais compartilhamos seus dados
                  </li>
                  <li>
                    <strong>Revogação do consentimento:</strong> a qualquer
                    momento, para tratamentos baseados em consentimento
                  </li>
                  <li>
                    <strong>Oposição:</strong> ao tratamento realizado com
                    fundamento em legítimo interesse, em caso de
                    descumprimento da LGPD
                  </li>
                  <li>
                    <strong>Revisão de decisões automatizadas:</strong> nosso
                    motor de automações pode mover negócios entre etapas, atribuir
                    a corretores e disparar mensagens automaticamente. Você pode
                    solicitar revisão humana de qualquer ação automatizada
                  </li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Atendemos solicitações em até 15 dias. Em caso de recusa
                  fundamentada (ex: solicitação que conflite com obrigação
                  legal), justificaremos por escrito.
                </p>
              </div>

              {/* 11. Seguranca */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  11. Segurança da Informação
                </h2>
                <p className="text-gray-700 mb-3">
                  Adotamos medidas técnicas e organizacionais para proteger
                  seus dados:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Criptografia em trânsito (TLS 1.3) entre app e servidores</li>
                  <li>Criptografia em repouso no banco de dados</li>
                  <li>Senhas armazenadas com hash bcrypt (custo 10+)</li>
                  <li>
                    Token de autenticação JWT armazenado no Secure Enclave do
                    iOS / Keystore do Android (via expo-secure-store)
                  </li>
                  <li>
                    Acesso a dados de produção restrito a engenheiros
                    autorizados, com auditoria
                  </li>
                  <li>
                    Backups automáticos diários do banco com retenção de 7 dias
                  </li>
                  <li>Política de senhas e proteção contra força bruta</li>
                  <li>
                    Comunicação obrigatória ao titular e à ANPD em até 72 horas
                    em caso de incidente de segurança que possa acarretar risco
                    relevante (art. 48 LGPD)
                  </li>
                </ul>
              </div>

              {/* 12. Cookies / Storage local */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  12. Armazenamento Local no Dispositivo
                </h2>
                <p className="text-gray-700 mb-3">
                  O aplicativo armazena os seguintes dados no seu dispositivo:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>
                    <strong>Token JWT de autenticação:</strong> em armazenamento
                    seguro do sistema (Keychain iOS / Keystore Android), removido
                    no logout
                  </li>
                  <li>
                    <strong>Cache de imagens e dados de listas:</strong>{" "}
                    armazenamento padrão do app, limpo automaticamente pelo SO
                    quando necessário
                  </li>
                  <li>
                    <strong>Preferências do app:</strong> idioma, último filtro
                    usado, etc - apagado quando você desinstala o aplicativo
                  </li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Não usamos cookies de rastreamento, beacons ou pixels de
                  terceiros dentro do app.
                </p>
              </div>

              {/* 13. Crianças */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  13. Crianças e Adolescentes
                </h2>
                <p className="text-gray-700">
                  O aplicativo ImobDeal não é destinado a menores de 18 anos. Não
                  coletamos intencionalmente dados de menores. Caso identifiquemos
                  que coletamos dados de um menor, esses dados serão excluídos
                  imediatamente. Se você é responsável por um menor e acredita
                  que ele forneceu informações pessoais ao app, entre em contato
                  conosco em{" "}
                  <a
                    href={`mailto:${DPO_EMAIL}`}
                    className="text-primary underline"
                  >
                    {DPO_EMAIL}
                  </a>
                  .
                </p>
              </div>

              {/* 14. Permissoes detalhadas */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  14. Permissões do Sistema Operacional
                </h2>
                <p className="text-gray-700 mb-3">
                  O aplicativo solicita as seguintes permissões. Você pode
                  conceder ou revogar a qualquer momento nas configurações do
                  sistema:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 border-b border-gray-200">
                          Permissão
                        </th>
                        <th className="text-left p-3 border-b border-gray-200">
                          Por que pedimos
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Câmera</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Para fotografar imóveis e capturar foto de perfil
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Galeria de fotos</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Para selecionar fotos existentes ao cadastrar imóveis
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Notificações</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Para entregar alertas de leads, mensagens e tarefas
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-gray-100">
                          <strong>Microfone</strong>
                        </td>
                        <td className="p-3 border-b border-gray-100">
                          Para gravar áudios em notas e comentários (opcional)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <strong>Documentos</strong>
                        </td>
                        <td className="p-3">
                          Para anexar arquivos PDF ou planilhas a negócios
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mt-3">
                  <strong>
                    Não solicitamos a permissão de localização (GPS) do sistema
                    operacional.
                  </strong>{" "}
                  O aplicativo não acessa sua localização em nenhum momento, nem
                  em primeiro plano (com o app aberto) nem em segundo plano. Da
                  mesma forma, não acessamos sua agenda de contatos do sistema.
                </p>
              </div>

              {/* 15. Mudanças */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  15. Alterações desta Política
                </h2>
                <p className="text-gray-700">
                  Podemos atualizar esta política periodicamente para refletir
                  mudanças no aplicativo, em fornecedores ou na legislação. Quando
                  fizermos alterações relevantes, notificaremos você por e-mail
                  e/ou por aviso dentro do app pelo menos 15 dias antes da
                  vigência. A versão em vigor estará sempre disponível em{" "}
                  <a
                    href="https://imobdeal.com.br/politica-privacidade-app"
                    className="text-primary underline"
                  >
                    imobdeal.com.br/politica-privacidade-app
                  </a>
                  , com a data da última atualização no topo do documento.
                </p>
              </div>

              {/* 16. Lei aplicavel */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  16. Lei Aplicável e Foro
                </h2>
                <p className="text-gray-700">
                  Esta política é regida pela legislação brasileira,
                  especialmente pela Lei Geral de Proteção de Dados (Lei
                  13.709/2018) e pelo Marco Civil da Internet (Lei 12.965/2014).
                  Fica eleito o foro da Comarca de Santa Cruz do Sul (RS) para
                  dirimir quaisquer controvérsias decorrentes desta política,
                  com renúncia a qualquer outro, por mais privilegiado que seja,
                  sem prejuízo da possibilidade de o titular reclamar perante a
                  Autoridade Nacional de Proteção de Dados (ANPD) por meio de
                  petição em{" "}
                  <a
                    href="https://www.gov.br/anpd"
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gov.br/anpd
                  </a>
                  .
                </p>
              </div>

              {/* 17. Contato */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  17. Contato
                </h2>
                <p className="text-gray-700 mb-3">
                  Para qualquer dúvida, solicitação ou exercício de direito
                  previsto nesta política:
                </p>
                <ul className="list-none text-gray-700 space-y-1">
                  <li>
                    <strong>Encarregado de Dados (DPO):</strong>{" "}
                    <a
                      href={`mailto:${DPO_EMAIL}`}
                      className="text-primary underline"
                    >
                      {DPO_EMAIL}
                    </a>
                  </li>
                  <li>
                    <strong>Suporte geral:</strong>{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-primary underline"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <strong>Empresa:</strong> {COMPANY_NAME} - CNPJ {COMPANY_CNPJ}
                  </li>
                  <li>
                    <strong>Endereço:</strong> {COMPANY_ADDRESS}
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600 text-center">
              Documento em vigor desde {LAST_UPDATE}. Versão específica para o
              aplicativo móvel ImobDeal nas plataformas Apple App Store e Google
              Play.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

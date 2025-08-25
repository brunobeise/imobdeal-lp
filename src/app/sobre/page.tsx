export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre o ImobDeal
          </h1>
          <p className="text-xl text-white/90">
            Revolucionando o mercado imobiliário com tecnologia e inovação
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Nossa História */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Nossa História
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                O ImobDeal nasceu da necessidade de modernizar e simplificar o processo de criação e 
                acompanhamento de propostas imobiliárias. Fundada por profissionais com vasta experiência 
                no mercado imobiliário e tecnológico, nossa empresa entende as dificuldades enfrentadas 
                por corretores e imobiliárias no dia a dia.
              </p>
              <p>
                Percebemos que muitos profissionais ainda perdiam tempo criando propostas manualmente, 
                enviando documentos por WhatsApp sem controle, e não tinham visibilidade sobre o 
                interesse real dos clientes. Foi assim que desenvolvemos uma solução completa que 
                combina praticidade, profissionalismo e inteligência.
              </p>
            </div>
          </div>

          {/* Nossa Missão */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-700">
              Capacitar corretores e imobiliárias com ferramentas tecnológicas que aumentem sua 
              produtividade, melhorem o relacionamento com clientes e potencializem suas vendas, 
              tornando o processo de vendas imobiliárias mais eficiente e profissional.
            </p>
          </div>

          {/* Nossa Visão */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Nossa Visão
            </h2>
            <p className="text-lg text-gray-700">
              Ser a principal plataforma de gestão de propostas imobiliárias do Brasil, 
              reconhecida pela inovação, facilidade de uso e resultados excepcionais para 
              nossos clientes.
            </p>
          </div>

          {/* Nossos Valores */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Inovação
                </h3>
                <p className="text-gray-700">
                  Buscamos constantemente novas formas de melhorar e evoluir 
                  nossa plataforma para atender às necessidades do mercado.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Simplicidade
                </h3>
                <p className="text-gray-700">
                  Acreditamos que tecnologia deve simplificar, não complicar. 
                  Por isso, criamos soluções intuitivas e fáceis de usar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Resultados
                </h3>
                <p className="text-gray-700">
                  Nosso foco é entregar resultados concretos que impactem 
                  positivamente o negócio de nossos clientes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Transparência
                </h3>
                <p className="text-gray-700">
                  Mantemos comunicação clara e transparente com nossos 
                  clientes, parceiros e colaboradores.
                </p>
              </div>
            </div>
          </div>

          {/* Informações da Empresa */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Informações da Empresa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Razão Social:</h3>
                <p className="text-gray-700">IMOBDEAL LTDA</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">CNPJ:</h3>
                <p className="text-gray-700">62.081.400/0001-26</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Atividade Principal:</h3>
                <p className="text-gray-700">Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Localização:</h3>
                <p className="text-gray-700">Santa Cruz do Sul, Rio Grande do Sul</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

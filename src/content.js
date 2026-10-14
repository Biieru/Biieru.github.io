// ============================================================
// TODO O TEXTO DO SITE FICA AQUI, EM PORTUGUÊS (pt) E INGLÊS (en).
// Para mudar um texto, edite as duas versões.
// Para adicionar um projeto, copie um bloco dentro de `projects`.
// ============================================================

export const links = {
  email: "coleho.biel@gmail.com",
  linkedin: "https://www.linkedin.com/in/gabrielcoelho-dev/", // troque se a URL ficar diferente
  github: "https://github.com/Biieru",
  devto: "https://dev.to/bordercansado",
  cvPt: "curriculo-gabriel-coelho.pdf",
  cvEn: "resume-gabriel-coelho.pdf",
};

// Categorias usadas no filtro de projetos
export const categories = ["all", "front", "back", "qa", "games"];

export const projects = [
  {
    id: "feira",
    name: "Feira Plus+",
    category: "front",
    team: "solo",
    stack: ["React", "Vite", "Capacitor", "localStorage"],
    links: [{ kind: "code", href: "https://github.com/Biieru/Feira-PLUS" }],
    pt: {
      type: "App mobile",
      summary:
        "Lista de compras que organiza os itens pelos corredores do Novo Atacarejo, Assaí e Atacadão. Entende quantidade e unidade digitadas, deixa marcar o que já pegou e exporta em TXT ou JPG.",
      reward: "Interface com tema escuro e letras grandes, pensada para quem tem dificuldade de leitura.",
    },
    en: {
      type: "Mobile app",
      summary:
        "Shopping list that sorts items by aisle for three Brazilian wholesale chains. It parses typed quantities and units, lets you tick off items and exports to TXT or JPG.",
      reward: "Dark theme with large type, designed for people who struggle to read small text.",
    },
  },
  {
    id: "canes",
    name: "Canes",
    category: "front",
    team: "team",
    stack: ["Kotlin", "Android", "SQLite"],
    links: [{ kind: "code", href: "https://github.com/caiobarrosmelo/Canes_PI_2025" }],
    pt: {
      type: "App Android · projeto integrador",
      summary:
        "App para cadastrar pilares e ações estratégicas de uma organização, distribuir responsabilidades e gerar relatórios. Equipe de 6 pessoas.",
      reward: "Fiquei com a gestão do projeto e desenvolvi todo o fluxo do perfil de coordenador.",
    },
    en: {
      type: "Android app · capstone project",
      summary:
        "App to register an organization's strategic pillars and actions, assign responsibilities and generate reports. Team of 6.",
      reward: "I handled project management and built the entire coordinator user flow.",
    },
  },
  {
    id: "etl",
    name: "etlBCB",
    category: "back",
    team: "solo",
    stack: ["Python", "pandas", "SQL", "scikit-learn", "Prophet"],
    links: [{ kind: "code", href: "https://github.com/Biieru/etlBCB" }],
    pt: {
      type: "Dados",
      summary:
        "Pipeline que extrai dados de meios de pagamento da API do Banco Central, trata com pandas e grava em SQLite ou MySQL. Em cima disso, análises de Pix e cartões e previsão do gasto com cartão.",
      reward: "ETL completo de ponta a ponta e meus primeiros modelos de previsão.",
    },
    en: {
      type: "Data",
      summary:
        "Pipeline that pulls payment data from Brazil's Central Bank API, cleans it with pandas and loads it into SQLite or MySQL, feeding analyses of Pix and card payments and a credit card spending forecast.",
      reward: "A full end-to-end ETL and my first forecasting models.",
    },
  },
  {
    id: "books",
    name: "BooksAPI",
    category: "back",
    team: "solo",
    stack: ["Python", "Flask", "SQLAlchemy", "Swagger", "pytest"],
    links: [{ kind: "code", href: "https://github.com/Biieru/BooksAPI" }],
    pt: {
      type: "API REST",
      summary:
        "API de livros com CRUD completo, banco SQLite via SQLAlchemy e documentação Swagger gerada automaticamente.",
      reward: "Testes automatizados com pytest e cobertura acompanhada.",
    },
    en: {
      type: "REST API",
      summary:
        "Book API with full CRUD, SQLite through SQLAlchemy and auto-generated Swagger documentation.",
      reward: "Automated tests with pytest and tracked coverage.",
    },
  },
  {
    id: "estab",
    name: "Estabelecimentos Credenciados",
    category: "back",
    team: "team",
    stack: ["Python", "OData", "SQL"],
    links: [{ kind: "code", href: "https://github.com/Biieru/EstabelecimentosCredenciados" }],
    pt: {
      type: "Dados · em dupla",
      summary:
        "Estudo dos estabelecimentos credenciados para cartão de crédito e débito, por bandeira e por trimestre, com dados abertos do Banco Central.",
      reward: "Consultas OData com filtros, ordenação e paginação.",
    },
    en: {
      type: "Data · pair project",
      summary:
        "Study of merchants accredited for credit and debit cards, by card brand and quarter, using Central Bank open data.",
      reward: "OData queries with filters, sorting and pagination.",
    },
  },
  {
    id: "qa4",
    name: "QA4",
    category: "qa",
    team: "solo",
    stack: ["Python", "unittest"],
    links: [{ kind: "code", href: "https://github.com/Biieru/QA4" }],
    pt: {
      type: "Testes",
      summary:
        "Calculadora com testes unitários cobrindo entradas positivas e negativas, multiplicação por zero e divisão por zero.",
      reward: "Escrever casos de teste antes de pensar só no caminho feliz.",
    },
    en: {
      type: "Testing",
      summary:
        "Calculator with unit tests covering positive and negative inputs, multiplication by zero and division by zero.",
      reward: "Writing test cases beyond the happy path.",
    },
  },
  {
    id: "constelacoes",
    name: "Caminho das Constelações",
    category: "games",
    team: "solo",
    stack: ["Game design", "Narrativa", "Site"],
    links: [{ kind: "site", href: "https://caminho-das-constelacoes.onrender.com/" }],
    pt: {
      type: "RPG de mesa",
      summary:
        "Sistema de RPG autoral com site próprio. Rolagens em d100, pontos narrativos e um mundo em que entidades míticas assistem e julgam as escolhas dos jogadores.",
      reward: "Criar regras que geram história, não só números.",
    },
    en: {
      type: "Tabletop RPG",
      summary:
        "Original RPG system with its own website. d100 rolls, narrative points and a world where mythic entities watch and judge the players' choices.",
      reward: "Designing rules that create story, not just numbers.",
    },
  },
];

export const text = {
  pt: {
    langName: "Português",
    switchTo: "English",
    nav: { projects: "Projetos", about: "Sobre", journey: "Jornada", contact: "Contato" },
    skip: "Pular para o conteúdo",
    hero: {
      role: "Desenvolvedor de software",
      intro:
        "Front-end, mobile e games. Estudo Análise e Desenvolvimento de Sistemas no Senac PE e estou em busca de estágio.",
      menuLabel: "Escolha uma opção",
      menu: ["Ver projetos", "Baixar currículo", "Falar comigo"],
      hint: "Use ↑ ↓ e Enter, ou clique",
      portraitAlt: "Ilustração de Gabriel Coelho sorrindo",
    },
    about: {
      title: "Sobre",
      sheet: [
        ["Classe", "Desenvolvedor de software"],
        ["Origem", "Recife, PE"],
        ["Formação", "ADS · Senac PE · até dez/2026"],
        ["Idiomas", "Português, inglês fluente, espanhol avançado, japonês básico"],
        ["Disponível para", "Estágio · híbrido, presencial ou remoto"],
      ],
      body: [
        "Gosto de construir coisas que as pessoas usam de verdade, como o Feira Plus+, que nasceu de uma ida ao atacarejo.",
        "Antes da tecnologia, dei aulas particulares por vários anos e cursei Biomedicina. Isso me ensinou a explicar coisas complexas de forma simples e a trabalhar com método.",
        "Games são minha paixão: crio sistemas de RPG, mundos e roteiros, e quero levar isso para o código.",
      ],
      mainGear: "Uso no dia a dia",
      sideGear: "Também uso",
      portraitAlt: "Ilustração de Gabriel Coelho de perfil",
    },
    projects: {
      title: "Projetos",
      lead: "Cada projeto mostra o que eu fiz e o que aprendi.",
      filters: {
        all: "Todos",
        front: "Front-end e mobile",
        back: "Back-end e dados",
        qa: "Testes",
        games: "Games",
      },
      solo: "Individual",
      team: "Em equipe",
      learned: "O que ganhei",
      code: "Ver código",
      site: "Abrir site",
      empty: "Nenhum projeto nesta categoria ainda.",
    },
    journey: {
      title: "Jornada",
      items: [
        ["2024 – 2026", "Análise e Desenvolvimento de Sistemas", "Faculdade Senac PE, com monitoria de TI"],
        ["2023 – 2025", "Professor particular", "Fundamental, física, história, inglês e redação"],
        ["2021 – 2023", "Biomedicina", "Unibra"],
        ["2016 – 2018", "Professor particular", "Primeiras turmas de reforço"],
        ["2013 – 2015", "Ensino médio", "EREM Porto Digital"],
      ],
    },
    writing: {
      title: "Escrevo no dev.to",
      lead: "Sobre IA, engenharia de software, games e educação.",
      posts: [
        "AI as a Learning Tool: Tutor, Crutch, or Cognitive Trap?",
        "Gamification in Education: Engagement Is Not Learning",
        "Augmented Reality in Educational Games: What Evidence Actually Supports",
      ],
      all: "Ler todos os artigos",
    },
    contact: {
      title: "Contato",
      lead: "Tem uma vaga de estágio ou um projeto de jogo? Me chama.",
      cv: "Currículo em PDF",
    },
    footer: "Feito por Gabriel Coelho com React e Vite",
  },

  en: {
    langName: "English",
    switchTo: "Português",
    nav: { projects: "Projects", about: "About", journey: "Journey", contact: "Contact" },
    skip: "Skip to content",
    hero: {
      role: "Software developer",
      intro:
        "Front-end, mobile and games. I study Systems Analysis and Development at Senac PE and I'm looking for an internship.",
      menuLabel: "Choose an option",
      menu: ["See projects", "Download résumé", "Get in touch"],
      hint: "Use ↑ ↓ and Enter, or click",
      portraitAlt: "Illustration of Gabriel Coelho smiling",
    },
    about: {
      title: "About",
      sheet: [
        ["Class", "Software developer"],
        ["Home", "Recife, Brazil"],
        ["Education", "Systems Analysis & Development · Senac PE · until Dec 2026"],
        ["Languages", "Portuguese, fluent English, advanced Spanish, basic Japanese"],
        ["Open to", "Internships · hybrid, on-site or remote"],
      ],
      body: [
        "I like building things people actually use, like Feira Plus+, which started on a trip to the wholesale store.",
        "Before tech, I spent years as a private tutor and studied Biomedicine. That taught me to explain complex things simply and to work with method.",
        "Games are my passion: I design RPG systems, worlds and stories, and I want to bring that into code.",
      ],
      mainGear: "Everyday tools",
      sideGear: "Also use",
      portraitAlt: "Profile illustration of Gabriel Coelho",
    },
    projects: {
      title: "Projects",
      lead: "Each project shows what I built and what I learned.",
      filters: {
        all: "All",
        front: "Front-end & mobile",
        back: "Back-end & data",
        qa: "Testing",
        games: "Games",
      },
      solo: "Solo",
      team: "Team",
      learned: "What I gained",
      code: "View code",
      site: "Open site",
      empty: "No projects in this category yet.",
    },
    journey: {
      title: "Journey",
      items: [
        ["2024 – 2026", "Systems Analysis and Development", "Senac PE, including IT teaching assistant"],
        ["2023 – 2025", "Private tutor", "Elementary school, physics, history, English and writing"],
        ["2021 – 2023", "Biomedicine", "Unibra"],
        ["2016 – 2018", "Private tutor", "First tutoring students"],
        ["2013 – 2015", "High school", "EREM Porto Digital"],
      ],
    },
    writing: {
      title: "I write on dev.to",
      lead: "About AI, software engineering, games and education.",
      posts: [
        "AI as a Learning Tool: Tutor, Crutch, or Cognitive Trap?",
        "Gamification in Education: Engagement Is Not Learning",
        "Augmented Reality in Educational Games: What Evidence Actually Supports",
      ],
      all: "Read all articles",
    },
    contact: {
      title: "Contact",
      lead: "Hiring interns or working on a game? Let's talk.",
      cv: "Résumé (PDF)",
    },
    footer: "Built by Gabriel Coelho with React and Vite",
  },
};

export const mainGear = ["React", "JavaScript", "Python", "SQL", "Kotlin"];
export const sideGear = ["Vite", "HTML", "CSS", "Flask", "pytest", "pandas", "Capacitor", "Android", "Git", "Figma"];

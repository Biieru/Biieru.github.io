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
    "id": "books",
    "name": "BooksAPI",
    "category": "back",
    "team": "solo",
    "stack": [
      "Python",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "Swagger",
      "pytest"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/BooksAPI"
      }
    ],
    "pt": {
      "type": "API REST",
      "summary": "API de livros com CRUD completo, persistência em SQLite e documentação Swagger. Código organizado em modelos, controladores e rotas, com testes automatizados e acompanhamento de cobertura.",
      "reward": "Construção de APIs REST, separação de responsabilidades e validação de endpoints com pytest."
    },
    "en": {
      "type": "REST API",
      "summary": "Book API with full CRUD, SQLite persistence and Swagger documentation. Code organized into models, controllers and routes, with automated tests and coverage tracking.",
      "reward": "REST API development, separation of concerns and endpoint validation with pytest."
    }
  },
  {
    "id": "estab",
    "name": "BCB-Merchant-ETL",
    "category": "back",
    "team": "team",
    "stack": [
      "Python",
      "pandas",
      "OData",
      "SQLite",
      "SQLAlchemy",
      "Power BI"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/BCB-Merchant-ETL"
      }
    ],
    "pt": {
      "type": "ETL e análise de dados · em dupla",
      "summary": "Pipeline de estabelecimentos credenciados e ativos para cartões, por bandeira e trimestre. Extrai dados do Banco Central, transforma com pandas e exporta para CSV e SQLite; inclui notebook e relatório Power BI.",
      "reward": "Integração com API OData, persistência relacional e apresentação de dados em Power BI."
    },
    "en": {
      "type": "ETL and data analysis · pair project",
      "summary": "Pipeline for accredited and active card merchants by card brand and quarter. Extracts Central Bank data, transforms it with pandas and exports to CSV and SQLite; includes a notebook and Power BI report.",
      "reward": "OData API integration, relational persistence and data presentation in Power BI."
    }
  },
  {
    "id": "forex-etl",
    "name": "BCB-Forex-ETL",
    "category": "back",
    "team": "solo",
    "stack": [
      "Python",
      "pandas",
      "requests",
      "PyMongo",
      "MongoDB Atlas"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/BCB-Forex-ETL"
      }
    ],
    "pt": {
      "type": "ETL de câmbio",
      "summary": "Coleta cotações cambiais da API PTAX do Banco Central por data e período, organiza respostas JSON com pandas e armazena os registros em coleções no MongoDB Atlas.",
      "reward": "Consumo de dados financeiros, transformação de JSON em DataFrames e persistência em banco NoSQL."
    },
    "en": {
      "type": "Foreign exchange ETL",
      "summary": "Collects exchange rates from the Central Bank's PTAX API by date and period, organizes JSON responses with pandas and stores records in MongoDB Atlas collections.",
      "reward": "Financial data ingestion, JSON-to-DataFrame transformation and NoSQL persistence."
    }
  },
  {
    "id": "card-etl",
    "name": "BCB-CardTransactions-ETL",
    "category": "back",
    "team": "solo",
    "stack": [
      "Python",
      "requests",
      "PyMongo",
      "MongoDB",
      "python-dotenv"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/BCB-CardTransactions-ETL"
      }
    ],
    "pt": {
      "type": "ETL de transações",
      "summary": "Pipeline de transações nacionais e internacionais de cartões de crédito e débito. Separa modelos, serviços, pré-processamento e repositórios para coletar, validar e armazenar dados do Banco Central no MongoDB.",
      "reward": "Arquitetura em camadas, configuração por variáveis de ambiente e processamento com logs e modo de teste."
    },
    "en": {
      "type": "Card transaction ETL",
      "summary": "Pipeline for domestic and international credit and debit card transactions. Separates models, services, preprocessing and repositories to collect, validate and store Central Bank data in MongoDB.",
      "reward": "Layered architecture, environment-based configuration and processing with logs and a test mode."
    }
  },
  {
    "id": "forex-pipeline",
    "name": "Forex-Data-Pipeline",
    "category": "back",
    "team": "solo",
    "stack": [
      "Python",
      "requests",
      "PyMongo",
      "MongoDB",
      "python-dotenv"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/Forex-Data-Pipeline"
      }
    ],
    "pt": {
      "type": "Pipeline modular",
      "summary": "Coleta dados cambiais de uma API REST, limpa e valida os registros e os envia ao MongoDB. Configuração, serviços, pré-processadores e repositórios ficam em módulos separados.",
      "reward": "Separação de responsabilidades, normalização de dados e validação da configuração de conexão."
    },
    "en": {
      "type": "Modular pipeline",
      "summary": "Collects exchange data from a REST API, cleans and validates records and sends them to MongoDB. Configuration, services, preprocessors and repositories live in separate modules.",
      "reward": "Separation of concerns, data normalization and connection configuration validation."
    }
  },
  {
    "id": "etl",
    "name": "etlBCB",
    "category": "back",
    "team": "solo",
    "stack": [
      "Python",
      "pandas",
      "SQLite",
      "SQLAlchemy",
      "scikit-learn",
      "Prophet"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/etlBCB"
      }
    ],
    "pt": {
      "type": "ETL e modelos de previsão",
      "summary": "Extrai dados de meios de pagamento do Banco Central, trata com pandas e grava em CSV ou bancos relacionais. Notebooks exploram Pix e cartões, correlações e modelos de previsão com Random Forest e Prophet.",
      "reward": "Pipeline de ponta a ponta, análise exploratória e experimentação com modelos de previsão."
    },
    "en": {
      "type": "ETL and forecasting models",
      "summary": "Extracts Central Bank payment data, processes it with pandas and loads it into CSV or relational databases. Notebooks explore Pix and cards, correlations and forecasting models with Random Forest and Prophet.",
      "reward": "End-to-end pipelines, exploratory analysis and experimentation with forecasting models."
    }
  },
  {
    "id": "employee-analysis",
    "name": "Employee-Data-Analysis",
    "category": "back",
    "team": "solo",
    "stack": [
      "Python",
      "pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/Employee-Data-Analysis"
      }
    ],
    "pt": {
      "type": "Análise exploratória",
      "summary": "Notebook que explora uma base de funcionários: distribuição de idades, salários por escolaridade e estado civil e composição familiar. Trata valores ausentes e apresenta histogramas, boxplots e gráficos de dispersão.",
      "reward": "Preparação de dados, estatística descritiva e visualizações para investigar relações entre variáveis."
    },
    "en": {
      "type": "Exploratory analysis",
      "summary": "Notebook exploring an employee dataset: age distribution, salaries by education and marital status, and family composition. Handles missing values and presents histograms, boxplots and scatter plots.",
      "reward": "Data preparation, descriptive statistics and visualizations to investigate relationships between variables."
    }
  },
  {
    "id": "totp",
    "name": "Flask-TOTP-Authentication",
    "category": "back",
    "team": "solo",
    "stack": [
      "Python",
      "Flask",
      "PyOTP",
      "Werkzeug",
      "qrcode"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/Flask-TOTP-Authentication"
      }
    ],
    "pt": {
      "type": "Protótipo de autenticação MFA",
      "summary": "Demonstra login com senha e uma segunda etapa com códigos TOTP. Inclui cadastro, QR Code para configurar o autenticador e uma área protegida por sessão, em um protótipo educacional.",
      "reward": "Fluxos de autenticação multifator, hash de senhas, sessões Flask e identificação de limites de segurança."
    },
    "en": {
      "type": "MFA authentication prototype",
      "summary": "Demonstrates password login followed by a second step using TOTP codes. Includes registration, a QR code for authenticator setup and a session-protected area in an educational prototype.",
      "reward": "Multifactor authentication flows, password hashing, Flask sessions and identifying security limitations."
    }
  },
  {
    "id": "feira",
    "name": "Feira Plus+",
    "category": "front",
    "team": "solo",
    "stack": [
      "React",
      "JavaScript",
      "Capacitor",
      "localStorage"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/Feira-PLUS"
      }
    ],
    "pt": {
      "type": "App mobile",
      "summary": "Lista de compras que organiza itens pelos corredores de três redes de atacarejo. Interpreta quantidades e unidades, acompanha itens encontrados e exporta listas em TXT ou JPG; inclui versão Android.",
      "reward": "Gerenciamento de estado, classificação por regras e interface com letras grandes voltada ao uso durante as compras."
    },
    "en": {
      "type": "Mobile app",
      "summary": "Shopping list that organizes items by aisle for three wholesale chains. Parses quantities and units, tracks collected items and exports lists to TXT or JPG; includes an Android version.",
      "reward": "State management, rule-based classification and a large-type interface designed for shopping."
    }
  },
  {
    "id": "paz",
    "name": "P.A.Z",
    "category": "front",
    "team": "solo",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "SVG"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/P.A.Z"
      },
      {
        "kind": "site",
        "href": "https://p-a-z.onrender.com/"
      }
    ],
    "pt": {
      "type": "Website de comunidade gamer",
      "summary": "Site da comunidade Predators of the Abyssal Zone, com navegação dinâmica, seções da tripulação, transições e áudio ambiente. Atualiza o conteúdo mantendo elementos compartilhados da interface.",
      "reward": "Manipulação do DOM, navegação entre páginas e construção de uma experiência temática sem frameworks."
    },
    "en": {
      "type": "Gaming community website",
      "summary": "Website for the Predators of the Abyssal Zone community, with dynamic navigation, crew sections, transitions and ambient audio. Updates content while keeping shared interface elements.",
      "reward": "DOM manipulation, page navigation and building a themed experience without frameworks."
    }
  },
  {
    "id": "giums-site",
    "name": "GIUMS-SITE",
    "category": "front",
    "team": "solo",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/GIUMS-SITE"
      }
    ],
    "pt": {
      "type": "Portfólio artístico",
      "summary": "Site para a artista GIUMS, com galeria por categorias, apresentação de serviços e informações sobre comissões. Conteúdo, preços e disponibilidade são configurados em um arquivo de dados JavaScript.",
      "reward": "Design responsivo, organização de conteúdo e separação entre dados e interface para facilitar atualizações."
    },
    "en": {
      "type": "Artist portfolio",
      "summary": "Website for artist GIUMS, with a categorized gallery, service presentation and commission information. Content, prices and availability are configured in a JavaScript data file.",
      "reward": "Responsive design, content organization and separation of data from the interface to simplify updates."
    }
  },
  {
    "id": "giums-mediakit",
    "name": "GIUMS.Mediakit",
    "category": "front",
    "team": "solo",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "i18n",
      "Print CSS"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/GIUMS.Mediakit"
      }
    ],
    "pt": {
      "type": "Media kit bilíngue",
      "summary": "Apresentação comercial para a artista GIUMS em português e inglês. Reúne perfil, serviços e informações de audiência em três páginas A4, com alternância de idioma, impressão e acesso a PDFs.",
      "reward": "Internacionalização, atualização dinâmica de textos e CSS para conciliar leitura no navegador e impressão."
    },
    "en": {
      "type": "Bilingual media kit",
      "summary": "Commercial presentation for artist GIUMS in Portuguese and English. Brings together profile, services and audience information in three A4 pages, with language switching, printing and PDF access.",
      "reward": "Internationalization, dynamic text updates and CSS for both browser reading and printing."
    }
  },
  {
    "id": "portfolio-site",
    "name": "Portfolio-Site",
    "category": "front",
    "team": "solo",
    "stack": [
      "React",
      "Vite",
      "React Router",
      "Framer Motion"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/Portfolio-Site"
      },
      {
        "kind": "site",
        "href": "https://gabriel-caraujo.onrender.com/"
      }
    ],
    "pt": {
      "type": "Portfólio interativo",
      "summary": "Portfólio com componentes React, navegação entre páginas via React Router, transições com Framer Motion e áudio ambiente. Explora uma apresentação profissional com recursos multimídia.",
      "reward": "Componentização, roteamento no cliente e animações declarativas em React."
    },
    "en": {
      "type": "Interactive portfolio",
      "summary": "Portfolio with React components, page navigation through React Router, Framer Motion transitions and ambient audio. Explores professional presentation with multimedia features.",
      "reward": "Component-based development, client-side routing and declarative animation in React."
    }
  },
  {
    "id": "github-portfolio",
    "name": "Biieru.github.io",
    "category": "front",
    "team": "solo",
    "stack": [
      "React",
      "Vite",
      "CSS",
      "GitHub Actions",
      "GitHub Pages"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/Biieru.github.io"
      },
      {
        "kind": "site",
        "href": "https://biieru.github.io/"
      }
    ],
    "pt": {
      "type": "Portfólio bilíngue",
      "summary": "Este portfólio: interface inspirada em menus de RPG, cartões filtráveis e conteúdo em português e inglês. Inclui navegação por teclado e publicação automática no GitHub Pages.",
      "reward": "Componentização, persistência de idioma, acessibilidade e automação de build e deploy."
    },
    "en": {
      "type": "Bilingual portfolio",
      "summary": "This portfolio: an RPG-menu-inspired interface, filterable cards and content in Portuguese and English. Includes keyboard navigation and automatic publishing to GitHub Pages.",
      "reward": "Component-based development, language persistence, accessibility and build and deployment automation."
    }
  },
  {
    "id": "recielo",
    "name": "ReciELO",
    "category": "front",
    "team": "team",
    "stack": [
      "HTML",
      "CSS",
      "Bootstrap",
      "SQL",
      "MySQL"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/ReciELO"
      }
    ],
    "pt": {
      "type": "Protótipo de participação comunitária",
      "summary": "Projeto acadêmico com telas estáticas de login, cadastro e perfil, além de um modelo MySQL para usuários, publicações, comentários e votações. As interfaces e o banco ainda não estão integrados.",
      "reward": "Prototipação de formulários e modelagem relacional com chaves primárias e estrangeiras."
    },
    "en": {
      "type": "Community participation prototype",
      "summary": "Academic project with static login, registration and profile screens, plus a MySQL model for users, posts, comments and polls. The interfaces and database are not yet integrated.",
      "reward": "Form prototyping and relational modeling with primary and foreign keys."
    }
  },
  {
    "id": "qa4",
    "name": "Python-Unit-Testing",
    "category": "qa",
    "team": "solo",
    "stack": [
      "Python",
      "unittest"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/Python-Unit-Testing"
      }
    ],
    "pt": {
      "type": "Testes unitários",
      "summary": "Calculadora com quatro operações e testes que verificam números positivos e negativos, multiplicação por zero e tratamento de divisão por zero.",
      "reward": "Construção de casos de teste, verificação de resultados esperados e cobertura de condições excepcionais."
    },
    "en": {
      "type": "Unit testing",
      "summary": "Four-operation calculator with tests checking positive and negative numbers, multiplication by zero and division-by-zero handling.",
      "reward": "Test case design, expected-result verification and coverage of exceptional conditions."
    }
  },
  {
    "id": "class-selector",
    "name": "Tales-Class-Selector",
    "category": "games",
    "team": "solo",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/Tales-Class-Selector"
      }
    ],
    "pt": {
      "type": "Interface e mecânicas de RPG",
      "summary": "Seletor de classes que apresenta 15 cartas e sorteia raridades com probabilidades ponderadas. Ao escolher uma carta, uma animação revela a classe enquanto as demais desaparecem.",
      "reward": "Aleatoriedade ponderada, programação orientada a eventos e animações CSS para dar resposta às ações do jogador."
    },
    "en": {
      "type": "RPG interface and mechanics",
      "summary": "Class selector presenting 15 cards and drawing rarities with weighted probabilities. Selecting a card triggers an animation that reveals its class while the other cards fade away.",
      "reward": "Weighted randomness, event-driven programming and CSS animations to respond to player actions."
    }
  },
  {
    "id": "constelacoes",
    "name": "Caminho das Constelações",
    "category": "games",
    "team": "solo",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Game design",
      "Narrative design"
    ],
    "links": [
      {
        "kind": "code",
        "href": "https://github.com/Biieru/Caminho-das-Constelacoes"
      },
      {
        "kind": "site",
        "href": "https://caminho-das-constelacoes.onrender.com/"
      }
    ],
    "pt": {
      "type": "Website e RPG de mesa",
      "summary": "Universo autoral de RPG baseado no Sistema Tales, com resolução d100 e escolhas narrativas. O site reúne regras, mecânicas, personagens, ambientação e um seletor interativo de classes.",
      "reward": "Modelagem de mecânicas, construção de mundo e organização de documentação em uma interface web temática."
    },
    "en": {
      "type": "Website and tabletop RPG",
      "summary": "Original RPG universe based on the Tales System, with d100 resolution and narrative choices. The website brings together rules, mechanics, characters, setting and an interactive class selector.",
      "reward": "Mechanics design, worldbuilding and documentation organization in a themed web interface."
    }
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
  }
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

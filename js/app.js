// --- TECNOLOGIAS ---
const tecnologias = [
  {
    nome: 'React', categoria: 'frontend', nivel: 'intermediário',
    descricao: 'Biblioteca para interfaces dinâmicas.',
    pros: ['Componentização', 'Grande comunidade'],
    contras: ['Curva de aprendizado', 'JSX pode confundir'],
    evitar: 'Projetos muito simples',
    link: 'https://react.dev',
    resumo: ['Ideal para SPAs', 'Quando precisa de reatividade', 'Projetos escaláveis']
  },
  {
    nome: 'Vue', categoria: 'frontend', nivel: 'intermediário',
    descricao: 'Framework progressivo para interfaces.',
    pros: ['Fácil de aprender', 'Leve'],
    contras: ['Menor mercado', 'Menos recursos nativos'],
    evitar: 'Projetos corporativos grandes',
    link: 'https://vuejs.org',
    resumo: ['Ótimo para protótipos', 'Projetos pequenos/médios', 'Quando simplicidade importa']
  },
  {
    nome: 'Angular', categoria: 'frontend', nivel: 'avançado',
    descricao: 'Framework completo para aplicações web.',
    pros: ['Completo', 'TypeScript integrado'],
    contras: ['Complexo', 'Pesado'],
    evitar: 'Projetos pequenos',
    link: 'https://angular.io',
    resumo: ['Grandes equipes', 'Aplicações corporativas', 'Necessidade de estrutura']
  },
  {
    nome: 'Node.js', categoria: 'backend', nivel: 'intermediário',
    descricao: 'Ambiente JS para servidor.',
    pros: ['Rápido', 'Grande ecossistema'],
    contras: ['Single thread', 'Callback hell'],
    evitar: 'Processos intensivos de CPU',
    link: 'https://nodejs.org',
    resumo: ['APIs rápidas', 'Quando já usa JS', 'Projetos escaláveis']
  },
  {
    nome: 'Python/Django', categoria: 'backend', nivel: 'intermediário',
    descricao: 'Framework web em Python.',
    pros: ['Rápido para prototipar', 'Muitas bibliotecas'],
    contras: ['Menos performático', 'Hospedagem específica'],
    evitar: 'Apps de alta performance',
    link: 'https://www.djangoproject.com',
    resumo: ['Projetos rápidos', 'Quando já usa Python', 'Sites institucionais']
  },
  {
    nome: 'Java/Spring', categoria: 'backend', nivel: 'avançado',
    descricao: 'Framework robusto para Java.',
    pros: ['Escalável', 'Seguro'],
    contras: ['Complexo', 'Configuração extensa'],
    evitar: 'Projetos simples',
    link: 'https://spring.io',
    resumo: ['Grandes empresas', 'Sistemas críticos', 'Necessidade de robustez']
  },
  {
    nome: 'MySQL', categoria: 'database', nivel: 'básico',
    descricao: 'Banco de dados relacional popular.',
    pros: ['Fácil de usar', 'Gratuito'],
    contras: ['Menos escalável', 'Menos recursos avançados'],
    evitar: 'Grandes volumes de dados',
    link: 'https://www.mysql.com',
    resumo: ['Sites pequenos', 'Projetos educacionais', 'Quando simplicidade basta']
  },
  {
    nome: 'PostgreSQL', categoria: 'database', nivel: 'intermediário',
    descricao: 'Banco de dados relacional avançado.',
    pros: ['Recursos avançados', 'Escalável'],
    contras: ['Configuração complexa', 'Menos suporte comercial'],
    evitar: 'Projetos muito simples',
    link: 'https://www.postgresql.org',
    resumo: ['Projetos médios/grandes', 'Necessidade de recursos avançados', 'Quando performance importa']
  },
  {
    nome: 'MongoDB', categoria: 'database', nivel: 'intermediário',
    descricao: 'Banco de dados NoSQL.',
    pros: ['Flexível', 'Escalável'],
    contras: ['Menos integridade', 'Consultas complexas'],
    evitar: 'Dados altamente relacionais',
    link: 'https://mongodb.com',
    resumo: ['Apps dinâmicos', 'Dados flexíveis', 'Quando agilidade importa']
  },
  {
    nome: 'Docker', categoria: 'devops', nivel: 'intermediário',
    descricao: 'Contêineres para deploy.',
    pros: ['Portabilidade', 'Isolamento'],
    contras: ['Curva de aprendizado', 'Configuração inicial'],
    evitar: 'Projetos muito simples',
    link: 'https://docker.com',
    resumo: ['Ambientes controlados', 'Deploy ágil', 'Quando precisa escalar']
  },
  {
    nome: 'CI/CD', categoria: 'devops', nivel: 'intermediário',
    descricao: 'Integração e entrega contínua.',
    pros: ['Automatiza deploy', 'Reduz erros'],
    contras: ['Configuração complexa', 'Demanda tempo'],
    evitar: 'Projetos pequenos',
    link: 'https://about.gitlab.com/topics/ci-cd/',
    resumo: ['Equipes colaborativas', 'Projetos frequentes', 'Quando agilidade importa']
  },
  {
    nome: 'Jest', categoria: 'testes', nivel: 'básico',
    descricao: 'Framework de testes JS.',
    pros: ['Fácil de usar', 'Rápido'],
    contras: ['Menos recursos avançados', 'Focado em JS'],
    evitar: 'Testes complexos',
    link: 'https://jestjs.io',
    resumo: ['Projetos JS', 'Testes unitários', 'Quando simplicidade basta']
  },
  {
    nome: 'Cypress', categoria: 'testes', nivel: 'intermediário',
    descricao: 'Testes end-to-end para web.',
    pros: ['Automatiza navegação', 'Interface visual'],
    contras: ['Consome recursos', 'Focado em front-end'],
    evitar: 'Testes backend',
    link: 'https://cypress.io',
    resumo: ['Testes de interface', 'Projetos front-end', 'Quando precisa automação']
  }
];
// --- FLUXOGRAMA ---
const etapas = [
  {
    nome: 'Descoberta', entregaveis: ['Briefing', 'Pesquisa inicial'], riscos: ['Falta de entendimento do problema', 'Pouca pesquisa'] },
  {
    nome: 'Requisitos', entregaveis: ['Lista de requisitos', 'Documentação'], riscos: ['Requisitos mal definidos', 'Mudanças frequentes'] },
  {
    nome: 'Protótipo', entregaveis: ['Wireframes', 'Mockups'], riscos: ['Protótipo incompleto', 'Não validar com usuário'] },
  {
    nome: 'Design', entregaveis: ['Layout final', 'Guia de estilos'], riscos: ['Design sem acessibilidade', 'Falta de responsividade'] },
  {
    nome: 'Implementação', entregaveis: ['Código funcional', 'Documentação técnica'], riscos: ['Bugs', 'Falta de testes'] },
  {
    nome: 'Testes', entregaveis: ['Relatório de testes', 'Correções'], riscos: ['Testes superficiais', 'Ignorar erros'] },
  {
    nome: 'Deploy', entregaveis: ['Ambiente configurado', 'Deploy realizado'], riscos: ['Configuração errada', 'Falha no deploy'] },
  {
    nome: 'Publicação', entregaveis: ['Site publicado', 'Divulgação'], riscos: ['Site fora do ar', 'Problemas de SEO'] },
  {
    nome: 'Monitoramento', entregaveis: ['Relatórios de uso', 'Correções contínuas'], riscos: ['Não monitorar', 'Ignorar feedback'] }
];

function showTooltip(evt, etapa) {
  let tooltip = document.getElementById('fluxo-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'fluxo-tooltip';
    tooltip.style.position = 'absolute';
    tooltip.style.background = '#fff';
    tooltip.style.border = '1px solid #E5E7EB';
    tooltip.style.padding = '1rem';
    tooltip.style.borderRadius = '8px';
    tooltip.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    tooltip.style.zIndex = '1000';
    document.body.appendChild(tooltip);
  }
  tooltip.innerHTML = `<strong>${etapa.nome}</strong><br><u>Entregáveis:</u><ul>${etapa.entregaveis.map(e=>`<li>${e}</li>`).join('')}</ul><u>Riscos comuns:</u><ul>${etapa.riscos.map(r=>`<li>${r}</li>`).join('')}</ul>`;
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
  tooltip.hidden = false;
}

function hideTooltip() {
  const tooltip = document.getElementById('fluxo-tooltip');
  if (tooltip) tooltip.hidden = true;
}

document.addEventListener('DOMContentLoaded', function() {
  // ACCORDION e CHECKLIST (Boas Práticas)
  if (document.getElementById('accordion')) {
    const toggles = document.querySelectorAll('.accordion-toggle');
    toggles.forEach(btn => {
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if (!expanded) {
          panel.hidden = false;
          panel.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
          panel.classList.remove('open');
          panel.style.maxHeight = null;
          setTimeout(() => panel.hidden = true, 320);
        }
      });
      // teclado
      btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') btn.click(); });
    });
  }

  if (document.getElementById('checklist')) {
    const form = document.querySelector('#checklist form');
    const progress = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    const keys = Array.from(form.querySelectorAll('input[type="checkbox"]')).map(i => i.name);
    // carregar estado
    const saved = JSON.parse(localStorage.getItem('bp-checklist') || '{}');
    keys.forEach(name => {
      const el = form.querySelector(`input[name="${name}"]`);
      if (saved[name]) el.checked = true;
      el.addEventListener('change', updateProgress);
    });
    function updateProgress() {
      const values = keys.map(name => form.querySelector(`input[name="${name}"]`).checked);
      const done = values.filter(Boolean).length;
      progress.value = done;
      progress.max = keys.length;
      progressText.textContent = Math.round((done / keys.length) * 100) + '% completo';
      // salvar
      const obj = {};
      keys.forEach(name => obj[name] = form.querySelector(`input[name="${name}"]`).checked);
      localStorage.setItem('bp-checklist', JSON.stringify(obj));
    }
    updateProgress();
  }

  // QUIZ
  if (document.getElementById('quiz')) {
    const quizData = [
      {
        pergunta: 'Qual tag HTML é usada para títulos principais?',
        opcoes: ['<title>', '<h1>', '<header>', '<main>'],
        resposta: 1,
        explicacao: 'A tag <h1> é usada para o título principal da página.'
      },
      {
        pergunta: 'Qual propriedade CSS altera a cor do texto?',
        opcoes: ['background', 'color', 'font-size', 'border'],
        resposta: 1,
        explicacao: 'A propriedade color define a cor do texto.'
      },
      {
        pergunta: 'Qual comando Git cria um novo branch?',
        opcoes: ['git commit', 'git branch', 'git merge', 'git push'],
        resposta: 1,
        explicacao: 'git branch cria um novo branch.'
      },
      {
        pergunta: 'Qual tecnologia é usada para interatividade na web?',
        opcoes: ['HTML', 'CSS', 'JS', 'SQL'],
        resposta: 2,
        explicacao: 'JavaScript (JS) é responsável pela interatividade.'
      },
      {
        pergunta: 'Qual é uma boa prática de acessibilidade?',
        opcoes: ['Imagens sem alt', 'Contraste baixo', 'Labels conectadas', 'Texto pequeno'],
        resposta: 2,
        explicacao: 'Labels conectadas a inputs melhoram a acessibilidade.'
      },
      {
        pergunta: 'Qual framework é indicado para grandes equipes?',
        opcoes: ['Vue', 'Angular', 'Jest', 'MongoDB'],
        resposta: 1,
        explicacao: 'Angular é robusto e indicado para grandes equipes.'
      },
      {
        pergunta: 'Qual unidade CSS é relativa ao tamanho da fonte?',
        opcoes: ['px', 'em', '%', 'vh'],
        resposta: 1,
        explicacao: 'em é relativa ao tamanho da fonte do elemento.'
      },
      {
        pergunta: 'Qual banco de dados é NoSQL?',
        opcoes: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
        resposta: 2,
        explicacao: 'MongoDB é um banco de dados NoSQL.'
      },
      {
        pergunta: 'Qual prática melhora a performance?',
        opcoes: ['Imagens grandes', 'Lazy loading', 'CSS duplicado', 'JS desnecessário'],
        resposta: 1,
        explicacao: 'Lazy loading otimiza o carregamento de imagens.'
      },
      {
        pergunta: 'Qual comando salva alterações no Git?',
        opcoes: ['git push', 'git commit', 'git clone', 'git status'],
        resposta: 1,
        explicacao: 'git commit salva alterações localmente.'
      }
    ];
    let atual = 0;
    let pontos = 0;
    const quizEl = document.getElementById('quiz');
    const scoreEl = document.getElementById('score');
    function renderQuiz() {
      if (atual < quizData.length) {
        const q = quizData[atual];
        quizEl.innerHTML = `<h2>${q.pergunta}</h2>
          <form id='quiz-form'>
            ${q.opcoes.map((op, i) => `<label><input type='radio' name='opcao' value='${i}' required> ${op}</label><br>`).join('')}
            <button type='submit'>Responder</button>
          </form>`;
      } else {
        const melhor = Math.max(pontos, Number(localStorage.getItem('quizScore') || 0));
        localStorage.setItem('quizScore', melhor);
        quizEl.innerHTML = `<h2>Quiz finalizado!</h2><p>Sua pontuação: ${pontos}/${quizData.length}</p><p>Melhor pontuação: ${melhor}/${quizData.length}</p>`;
      }
      scoreEl.innerHTML = '';
    }
    renderQuiz();
    quizEl.addEventListener('submit', function(e) {
      e.preventDefault();
      const form = e.target;
      const escolha = Number(form.opcao.value);
      const q = quizData[atual];
      let correto = escolha === q.resposta;
      if (correto) pontos++;
      scoreEl.innerHTML = `<p>${correto ? 'Correto!' : 'Errado.'} <br>Explicação: ${q.explicacao}</p>`;
      atual++;
      setTimeout(renderQuiz, 1200);
    });
  }
  // FLUXOGRAMA
  if (document.getElementById('fluxograma')) {
    const svg = document.querySelector('#fluxograma svg');
    if (svg) {
      const rects = svg.querySelectorAll('rect');
      rects.forEach((rect, i) => {
        rect.style.cursor = 'pointer';
        rect.setAttribute('tabindex', '0');
        rect.setAttribute('aria-label', etapas[i].nome);
        rect.addEventListener('click', evt => showTooltip(evt, etapas[i]));
        rect.addEventListener('keydown', evt => {
          if (evt.key === 'Enter' || evt.key === ' ') showTooltip(evt, etapas[i]);
        });
        rect.addEventListener('mouseleave', hideTooltip);
        rect.addEventListener('blur', hideTooltip);
      });
      svg.addEventListener('click', function(e) {
        if (e.target.tagName !== 'rect') hideTooltip();
      });
    }
  }
});

function renderCards(filtro = 'all', busca = '') {
  const cards = document.getElementById('tech-cards');
  let filtradas = tecnologias.filter(t => filtro === 'all' || t.categoria === filtro);
  if (busca) {
    filtradas = filtradas.filter(t => t.nome.toLowerCase().includes(busca.toLowerCase()));
  }
  cards.innerHTML = filtradas.map(t => `
    <div class="card" tabindex="0" data-nome="${t.nome}" data-categoria="${t.categoria}" aria-label="${t.nome}">
      <h3>${t.nome} <span class="badge">${t.nivel}</span></h3>
      <p>${t.descricao}</p>
      <ul>
        <li><strong>Prós:</strong> ${t.pros.join(', ')}</li>
        <li><strong>Contras:</strong> ${t.contras.join(', ')}</li>
      </ul>
      <small>Quando evitar: ${t.evitar}</small><br>
      <a href="${t.link}" target="_blank">Site oficial</a>
    </div>
  `).join('');
}

function salvarFiltro(filtro) {
  localStorage.setItem('techFiltro', filtro);
}

function carregarFiltro() {
  return localStorage.getItem('techFiltro') || 'all';
}

function abrirModal(nome) {
  const tech = tecnologias.find(t => t.nome === nome);
  if (!tech) return;
  const modal = document.getElementById('tech-modal');
  const details = document.getElementById('modal-details');
  details.innerHTML = `
    <h2>${tech.nome}</h2>
    <ul>
      ${tech.resumo.map(b => `<li>${b}</li>`).join('')}
    </ul>
    <a href="${tech.link}" target="_blank">Site oficial</a>
  `;
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
}

function fecharModal() {
  const modal = document.getElementById('tech-modal');
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
}

document.addEventListener('DOMContentLoaded', function() {
  // TECNOLOGIAS
  if (document.getElementById('tech-cards')) {
    let filtro = carregarFiltro();
    renderCards(filtro);
    document.querySelectorAll('#tech-filters button').forEach(btn => {
      btn.addEventListener('click', function() {
        filtro = btn.dataset.category;
        salvarFiltro(filtro);
        renderCards(filtro, document.getElementById('tech-search').value);
        document.querySelectorAll('#tech-filters button').forEach(b => b.setAttribute('aria-expanded', 'false'));
        btn.setAttribute('aria-expanded', 'true');
      });
    });
    document.getElementById('tech-search').addEventListener('input', function(e) {
      renderCards(filtro, e.target.value);
    });
    document.getElementById('tech-cards').addEventListener('click', function(e) {
      const card = e.target.closest('.card');
      if (card) abrirModal(card.dataset.nome);
    });
    document.getElementById('tech-cards').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const card = e.target.closest('.card');
        if (card) abrirModal(card.dataset.nome);
      }
    });
    document.getElementById('close-modal').addEventListener('click', fecharModal);
    document.getElementById('tech-modal').addEventListener('click', function(e) {
      if (e.target === this) fecharModal();
    });
  }
});
// JS principal do Guia Profissional de Desenvolvimento Web
// Modularize funções aqui

// Exemplo: Toggle tema claro/escuro
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

// Carregar preferência de tema
(function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') document.body.classList.add('dark');
})();

// Menu toggle e theme button - comportamento acessível
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelectorAll('.nav-toggle');
  navToggle.forEach(btn => {
    btn.addEventListener('click', function() {
      const links = document.getElementById('nav-links');
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('show');
    });
  });
  // não há mais botão de alternar tema (persistência mantida)
});

// --- Enhancements: Theme toggle UI, CSV export and keyboard shortcuts ---
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle button (insere comportamento se existir)
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    // reflect saved state
    const saved = localStorage.getItem('theme') || (document.body.classList.contains('dark') ? 'dark' : 'light');
    themeBtn.setAttribute('aria-pressed', saved === 'dark' ? 'true' : 'false');
    themeBtn.addEventListener('click', function() {
      toggleTheme();
      themeBtn.setAttribute('aria-pressed', document.body.classList.contains('dark') ? 'true' : 'false');
      themeBtn.focus();
    });
  }

  // CSV export for tecnologias (name, category, pros, contras) of currently rendered cards
  const exportBtn = document.getElementById('export-csv');
  if (exportBtn) {
    exportBtn.addEventListener('click', function() {
      const cards = Array.from(document.querySelectorAll('#tech-cards .card'));
      if (!cards.length) {
        alert('Nenhum card para exportar. Aplique um filtro ou busca.');
        return;
      }
      const rows = [['Nome','Categoria','Prós','Contras']];
      cards.forEach(c => {
        const nome = c.dataset.nome || '';
        const categoria = c.dataset.categoria || '';
        const pros = c.querySelector('ul li strong') ? c.querySelector('ul li').textContent.replace(/^Prós:\s*/,'') : '';
        const contras = (() => {
          const lis = c.querySelectorAll('ul li');
          return lis[1] ? lis[1].textContent.replace(/^Contras:\s*/,'') : '';
        })();
        rows.push([nome, categoria, pros, contras]);
      });
      const csvContent = rows.map(r => r.map(cell => '"' + String(cell).replace(/"/g,'""') + '"').join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tecnologias_filtradas.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  }

  // Keyboard shortcuts: '/' focus search, Alt+M focus menu, Home scroll to top
  document.addEventListener('keydown', function(e) {
    // '/' focus search, avoid when typing in inputs
    if (e.key === '/' && !(document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA'))) {
      const s = document.getElementById('tech-search');
      if (s) { e.preventDefault(); s.focus(); s.select(); }
    }
    // Alt+M focus menu
    if (e.altKey && (e.key === 'm' || e.key === 'M')) {
      const firstLink = document.querySelector('.nav-links a');
      if (firstLink) { e.preventDefault(); firstLink.focus(); }
    }
    // Home to top
    if (e.key === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

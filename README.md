<div align="center">

<h1>
  <code>{007}</code> — Felipe Silva · Analytics Engineer Portfolio
</h1>

<p>
  <strong>Portfolio web profissional</strong> de Felipe Silva, Senior BI Analyst em transição consolidada para Analytics Engineering.<br/>
  Arquitetura desacoplada com <strong>Django 6 + DRF</strong> no backend e <strong>React 19 + Vite</strong> no frontend.
</p>

<p>
  <img src="https://img.shields.io/badge/Python-3.12%2B-blue?style=flat-square&logo=python" alt="Python 3.12+"/>
  <img src="https://img.shields.io/badge/Django-6.x-green?style=flat-square&logo=django" alt="Django 6"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React 19"/>
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite" alt="Vite 7"/>
  <img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=flat-square&logo=tailwindcss" alt="Tailwind 4"/>
  <img src="https://img.shields.io/badge/uv-package%20manager-orange?style=flat-square" alt="uv"/>
  <img src="https://img.shields.io/badge/ruff-linter-red?style=flat-square" alt="ruff"/>
</p>

<p>
  <a href="https://github.com/wfcs/">GitHub</a> ·
  <a href="https://linkedin.com/in/wfcs93">LinkedIn</a>
</p>

</div>

---

## 📋 Visão Geral

Este repositório contém o código-fonte do portfólio profissional de **Felipe Silva**, desenvolvido com uma stack moderna e desacoplada (API-first). O backend expõe dados via API REST e o frontend consome esses dados de forma dinâmica.

**Design:** tema claro/escuro ("Light/Dark") com estética clean, gradientes azul/roxo e tipografia Poppins.

---

## 🏗️ Arquitetura

```
saas/
├── core/                   # Configurações Django (settings, urls, wsgi)
├── portfolio/              # App Django principal
│   ├── models.py           # Experience, Education, Skill, Project
│   ├── serializers.py      # DRF serializers
│   ├── views.py            # ReadOnlyModelViewSets
│   ├── urls.py             # Router DRF → /api/...
│   └── admin.py            # Admin customizado para cada model
├── frontend/               # SPA React + Vite
│   ├── public/
│   │   └── profile.jpg     # Foto de perfil
│   └── src/
│       ├── services/
│       │   └── api.js      # Axios client centralizado
│       ├── hooks/
│       │   └── usePortfolioData.js  # Custom hooks (useExperiences, useProjects…)
│       ├── App.jsx          # Componentes: Navbar, Hero, TechStack, Projects, Contact, Footer
│       ├── index.css        # Design system (Tailwind v4 + dark mode)
│       └── main.jsx         # Entry point React
├── pyproject.toml           # Configuração ruff (Python 3.12+)
├── manage.py
└── db.sqlite3
```

---

## 🚀 Tecnologias

### Backend

| Tecnologia | Versão | Uso |
|---|---|---|
| Python | 3.12+ | Linguagem base |
| Django | 6.x | Framework web |
| Django REST Framework | latest | API REST + serializers |
| django-cors-headers | latest | CORS para o frontend |
| uv | latest | Gerenciamento de pacotes (ultrarrápido) |
| ruff | latest | Linting + formatação (PEP 8) |
| SQLite | - | Banco de desenvolvimento |

### Frontend

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | UI framework |
| Vite | 7 | Build tool + HMR |
| Tailwind CSS | 4 | Estilização utility-first |
| Framer Motion | 12 | Animações e transições |
| Axios | 1.x | Requisições HTTP para a API |
| Lucide React | latest | Ícones |

---

## ⚙️ Pré-requisitos

- **Python** 3.12+
- **Node.js** 18+ e **npm**
- **uv** (recomendado) — `pip install uv` ou `curl -LsSf https://astral.sh/uv/install.sh | sh`

---

## 🛠️ Setup e Desenvolvimento

### 1. Clone o repositório

```bash
git clone https://github.com/wfcs/portfolio.git
cd portfolio
```

### 2. Backend (Django)

```bash
# Criar e ativar o ambiente virtual com uv
uv venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate  # Linux/macOS

# Instalar dependências
uv pip install django djangorestframework django-cors-headers

# Aplicar migrações
python manage.py migrate

# Criar superusuário (para o Admin)
python manage.py createsuperuser

# Iniciar servidor
python manage.py runserver
```

O backend estará disponível em: `http://localhost:8000`

### 3. Frontend (React)

```bash
cd frontend

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

---

## 🔌 Endpoints da API

Base URL: `http://localhost:8000/api/`

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/experiences/` | Lista experiências profissionais |
| GET | `/api/experiences/{id}/` | Detalhe de uma experiência |
| GET | `/api/projects/` | Lista projetos |
| GET | `/api/projects/{id}/` | Detalhe de um projeto |
| GET | `/api/skills/` | Lista habilidades por categoria |
| GET | `/api/skills/{id}/` | Detalhe de uma habilidade |
| GET | `/api/educations/` | Lista formações acadêmicas |
| GET | `/api/educations/{id}/` | Detalhe de uma formação |

> **Autenticação:** endpoints são públicos (read-only) em desenvolvimento.

---

## 🗄️ Modelos de Dados

### `Experience`
| Campo | Tipo | Descrição |
|---|---|---|
| `company` | CharField | Nome da empresa |
| `position` | CharField | Cargo/posição |
| `location` | CharField | Localização (opcional) |
| `start_date` | DateField | Data de início |
| `end_date` | DateField | Data de término (null se atual) |
| `is_current` | BooleanField | Se é o emprego atual |
| `description` | TextField | Descrição (suporta bullets com `\n`) |

### `Project`
| Campo | Tipo | Descrição |
|---|---|---|
| `title` | CharField | Título do projeto |
| `description` | TextField | Descrição |
| `github_url` | URLField | Link do repositório |
| `live_url` | URLField | Link da demo (opcional) |
| `technologies` | M2M → Skill | Tecnologias utilizadas |

### `Skill`
| Campo | Tipo | Descrição |
|---|---|---|
| `name` | CharField | Nome (ex: DAX, Python) |
| `category` | CharField | Categoria (ex: Data Modeling, BI) |
| `proficiency` | IntegerField | Nível 1–5 |

### `Education`
| Campo | Tipo | Descrição |
|---|---|---|
| `institution` | CharField | Instituição |
| `degree` | CharField | Título/curso |
| `field_of_study` | CharField | Área de estudo |
| `start_date` / `end_date` | DateField | Período |

---

## 📦 Populando o Banco de Dados

Acesse o **Django Admin** em `http://localhost:8000/admin/` com as credenciais do superusuário para cadastrar:

- Experiências profissionais
- Projetos (com tecnologias associadas)
- Habilidades (Skills) por categoria
- Formação acadêmica

---

## 🎨 Features do Frontend

- **Dark Mode** — toggle Light/Dark com persistência em `localStorage` e respeito a `prefers-color-scheme`
- **SPA de scroll** — navegação suave entre seções via `IntersectionObserver`
- **Navbar fixa** — highlight automático da seção ativa durante o scroll
- **Animações** — entrada progressiva de elementos com Framer Motion (`whileInView`)
- **Tech Stack** — grid de ícones via Devicons CDN
- **Projects Grid** — cards 3×2 com imagens, tags coloridas por categoria e links para GitHub
- **API Integration** — hooks customizados (`useExperiences`, `useProjects`, `useSkills`) com estados de loading, erro e cancelamento

---

## 🔧 Variáveis de Ambiente

Crie `frontend/.env` para configurar a URL da API:

```env
VITE_API_URL=http://localhost:8000/api
```

---

## 📏 Qualidade de Código

```bash
# Linting e formatação Python (ruff)
ruff check .
ruff format .

# Linting JavaScript
cd frontend && npm run lint
```

A configuração do `ruff` em `pyproject.toml` aplica regras `E, W, F, I, C4, B, UP` para Python 3.12+.

---

## 🌐 Deploy

### Opções recomendadas

| Serviço | Backend | Frontend |
|---|---|---|
| **Railway** | ✅ Django | ✅ Vite build |
| **Render** | ✅ Django | ✅ Static site |
| **Vercel** | ❌ | ✅ Vite/React |
| **Fly.io** | ✅ Django | — |

> Para produção, substitua `db.sqlite3` por PostgreSQL e configure `DEBUG=False`, `SECRET_KEY` e `ALLOWED_HOSTS` via variáveis de ambiente.

---

## 📁 Estrutura de Commits

```
feat: nova funcionalidade
fix: correção de bug
style: ajuste visual / CSS
refactor: refatoração sem mudança de comportamento
docs: documentação
chore: configurações, dependencies
```

---

## 📄 Licença

MIT © [Felipe Silva](https://github.com/wfcs/)

---

<div align="center">
  <sub>Built with ❤️ and ☕ by Felipe Silva</sub>
</div>

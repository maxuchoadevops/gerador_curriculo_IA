# ⚡ AI Tech Resume Generator + ATS Analyzer
> **Desenvolvedora:** Ingrid Farias  
> **Assistente de IA:** PETER (Personal Expert Tech Entity & Resume-analyst)

---

## 📝 Sobre o Projeto

Este é um **Gerador de Currículos Tech** focado em alta performance e aprovação em sistemas de triagem automática (**ATS - Applicant Tracking System**). O projeto nasceu da necessidade de facilitar a criação de currículos profissionais para desenvolvedores, unindo um editor minimalista a uma consultoria de carreira via Inteligência Artificial.

### 🤖 O Diferencial: PETER
O projeto conta com o **PETER**, uma entidade de IA integrada via API do Groq, que atua como um mentor. Ele analisa o conteúdo do seu currículo em tempo real e fornece feedbacks diretos sobre:
* **Densidade de Keywords:** Sugestões de termos técnicos essenciais (React, Node, TypeScript).
* **Escaneabilidade:** Avaliação de como os algoritmos de RH lerão seus blocos de texto.
* **Sugestões de Melhoria:** Dicas práticas para subir no ranking de candidatos.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído seguindo o princípio de **Separação de Preocupações (Separation of Concerns)**, garantindo um código limpo e de fácil manutenção:

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Layout flexível, variáveis globais (`:root`), estética Dark/Cyberpunk e regras de `@media print` para PDF impecável.
* **JavaScript (ES6+):** Manipulação de DOM, sincronização em tempo real e integração com API assíncrona (`fetch`).
* **Groq API (Llama 3.3):** Processamento de linguagem natural para a consultoria do PETER.

---

## ✨ Funcionalidades

- [x] **Live Preview:** Veja as alterações no currículo instantaneamente enquanto digita.
- [x] **Estética Dual:** Editor em modo escuro (Cyberpunk) e currículo final em modo impressão profissional (fundo branco).
- [x] **Consultoria IA:** Botão de análise ATS que invoca o PETER para revisar seu texto.
- [x] **Exportação PDF:** Configuração otimizada para salvar como PDF A4 sem elementos desnecessários da interface.
- [x] **Layout Justificado:** Formatação de texto rigorosa para garantir a melhor leitura visual.

---

## 📂 Estrutura do Repositório

```text
/
├── index.html     # Estrutura e semântica da aplicação
├── styles.css     # Identidade visual e regras de impressão
├── scripts.js     # Lógica de sincronização e integração com PETER (IA)
└── README.md      # Documentação do projeto

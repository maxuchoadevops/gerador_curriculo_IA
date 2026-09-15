/* GERADOR DE CURRÍCULO TECH + ANALISADOR ATS
    Desenvolvedora: Ingrid Farias
    Assistente: PETER (IA Groq)
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. Configurações de campos de texto simples
    const textFields = {
        'inputName': { display: 'displayName', default: 'NOME COMPLETO' },
        'inputNationality': { display: 'displayNationality', default: 'Nacionalidade' },
        'inputAddress': { display: 'displayAddress', default: 'Cidade-Estado' },
        'inputPhone': { display: 'displayPhone', default: '(00) 0 0000-0000' },
        'inputEmail': { display: 'displayEmail', default: 'email@exemplo.com' },
        'inputLinkedin': { display: 'displayLinkedin', default: 'linkedin.com/in/perfil' },
        'inputGithub': { display: 'displayGithub', default: 'github.com/username' },
        'inputJobTitle': { display: 'displayJobTitle', default: 'TÍTULO PROFISSIONAL' },
        'inputPortfolio': { display: 'displayPortfolio', default: 'seuportfolio.com' }
    };

    // 2. Configurações de campos de lista (Textareas)
    const listFields = {
        'inputSummary': 'displaySummaryList',
        'inputEducation': 'displayEducationList',
        'inputLanguages': 'displayLanguagesList',
        'inputExperience': 'displayExperienceList',
        'inputTraining': 'displayTrainingList',
        'inputSkills': 'displaySkillsList'
    };

    // Função para atualizar campos simples (Inputs)
    function setupTextFields() {
        for (let id in textFields) {
            const input = document.getElementById(id);
            const config = textFields[id];
            const display = document.getElementById(config.display);

            if (input && display) {
                const update = () => {
                    display.textContent = input.value.trim() !== "" ? input.value : config.default;
                };
                input.addEventListener('input', update);
                update(); // Inicializa com o valor padrão
            }
        }
    }

    // Função para atualizar listas (cada linha de Textarea vira um <li>)
    function setupListFields() {
        for (let id in listFields) {
            const input = document.getElementById(id);
            const display = document.getElementById(listFields[id]);

            if (input && display) {
                const updateList = () => {
                    const lines = input.value.split('\n');
                    display.innerHTML = '';
                    const activeLines = lines.filter(line => line.trim() !== "");

                    if (activeLines.length > 0) {
                        activeLines.forEach(line => {
                            const li = document.createElement('li');
                            li.textContent = line.trim();
                            display.appendChild(li);
                        });
                    } else {
                        display.innerHTML = '<li>...</li>';
                    }
                };
                input.addEventListener('input', updateList);
                updateList(); // Inicializa
            }
        }
    }

    // --- LÓGICA DA CONSULTORIA IA (PETER + ANÁLISE ATS) ---

    const aiBtn = document.getElementById('aiConsultantBtn');
    const aiPanel = document.getElementById('aiFeedbackPanel');
    const closeAiBtn = document.getElementById('closeAiPanel');
    const aiContent = document.getElementById('aiResponseContent');

    if (aiBtn && aiPanel) {
        aiBtn.addEventListener('click', () => {
            aiPanel.classList.remove('hidden');
            analyzeResumeWithAI();
        });
    }

    if (closeAiBtn) {
        closeAiBtn.addEventListener('click', () => {
            aiPanel.classList.add('hidden');
        });
    }

    async function analyzeResumeWithAI() {
    const API_KEY = "SUA_CHAVE_AQUI"; // Substitua pela sua chave de API Groq

        // Coleta os dados atuais do formulário para enviar ao PETER
        const resumeData = {
            objetivo: document.getElementById('inputJobTitle').value || "Desenvolvedora Tech",
            resumo: document.getElementById('inputSummary').value || "",
            experiencia: document.getElementById('inputExperience').value || "",
            skills: document.getElementById('inputSkills').value || ""
        };

        aiContent.innerHTML = '<p class="scanning-text">PETER simulando escaneamento ATS...</p>';

        try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        {
                            role: "system",
                            content: `Você é o PETER, um especialista em algoritmos ATS. Analise o currículo e seja técnico.
                            Avalie: 1. Densidade de Keywords. 2. Escaneabilidade. 3. Sugestões práticas.
                            Retorne apenas itens <li>, sem saudações.`
                        },
                        {
                            role: "user",
                            content: `Vaga: ${resumeData.objetivo}. Resumo: ${resumeData.resumo}. Experiência: ${resumeData.experiencia}. Habilidades: ${resumeData.skills}`
                        }
                    ],
                    temperature: 0.5
                })
            });

            if (!response.ok) throw new Error(`Erro: ${response.status}`);

            const data = await response.json();

            if (data.choices && data.choices[0]) {
                const aiFeedback = data.choices[0].message.content;

                aiContent.innerHTML = `
                    <div style="animation: fadeIn 0.4s ease;">
                        <p style="color: #00ffcc; font-family: 'Courier New'; font-weight: bold; font-size: 0.8rem;">[ ATS SCAN COMPLETED ]</p>
                        <ul style="padding-left: 18px; color: #e0e0e0; font-size: 0.85rem; line-height: 1.5; margin-top: 10px;">
                            ${aiFeedback}
                        </ul>
                        <hr style="border: 0; border-top: 1px solid #333; margin: 10px 0;">
                        <p style="font-size: 0.7rem; color: #888;">* Dica: Use palavras-chave como 'Clean Code' e 'Mobile First'.</p>
                    </div>
                `;
            }

        } catch (error) {
            aiContent.innerHTML = `<p style="color: #ff4444; font-size: 0.85rem;">🔴 Erro na análise do PETER.</p>`;
            console.error("Erro Groq:", error);
        }
    }

    // Inicialização do Script
    setupTextFields();
    setupListFields();

    // Lógica do Botão Imprimir
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
});
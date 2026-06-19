/* ==========================================================================
   BANCO DE DADOS CRÍTICO COM TEXTOS DE IMPACTO GLOBAL AMBIENTAL
   ========================================================================== */
const modulesData = [
    {
        title: "Módulo 1: O Impacto Atual",
        impactInfo: "<strong>O Impacto no Mundo Real:</strong> Quando escolhemos o lucro imediato ignorando a degradação, geramos um efeito dominó catastrófico. Erros como queimadas e uso massivo de agrotóxicos aceleram a desertificação. Se o mundo mantiver essas decisões, enfrentaremos a perda total da fertilidade dos solos globais em poucas décadas.",
        didYouKnow: "A degradação do solo afeta diretamente a segurança alimentar de mais de 3.2 bilhões de pessoas no mundo hoje. Recuperar uma camada de apenas 1 centímetro de solo fértil pode demorar até 1.000 anos por vias naturais!",
        linkReal: "https://www.embrapa.br/tema-conservacao-do-solo",
        questions: [
            {
                q: "Você assume uma fazenda onde o dono anterior desmatou a mata ciliar para plantar. O rio local está secando e enchendo de lama. O que você faz?",
                options: [
                    { t: "Ignoro o rio e invisto em fertilizantes químicos pesados para compensar a perda do solo.", p: 0 },
                    { t: "Paro a produção na borda do rio e inicio imediatamente o plantio de árvores nativas para conter a erosão.", p: 10 },
                    { t: "Construo uma barreira de concreto na margem do rio para impedir que a terra caia nele.", p: 3 }
                ]
            },
            {
                q: "Pragas começam a destruir sua plantação de soja. Vizinhos sugerem aplicar um agrotóxico ultraforte proibido. Qual sua postura?",
                options: [
                    { t: "Uso o veneno em segredo. O importante é não perder o lucro imediato da safra.", p: 0 },
                    { t: "Pesquiso métodos de manejo biológico e introduzo insetos predadores naturais das pragas.", p: 10 },
                    { t: "Mudo o foco da plantação para outra cultura temporariamente sem tratar o solo.", p: 5 }
                ]
            },
            {
                q: "O solo da sua propriedade está tão desgastado que as plantas nascem fracas. Qual a melhor estratégia de recuperação crítica?",
                options: [
                    { t: "Deixo o solo descansar fazendo rotação de culturas e plantando leguminosas para fixar nitrogênio.", p: 10 },
                    { t: "Coloco o dobro de adubo químico industrial e sigo plantando a mesma cultura.", p: 0 },
                    { t: "Vendo a terra degradada e compro outra área de mata nativa para desmatar.", p: 0 }
                ]
            },
            {
                q: "Moradores locais reclamam que a poeira e fumaça da sua queima de palha estão causando problemas respiratórios. Como agir?",
                options: [
                    { t: "Ignoro, pois a queima é o método mais barato e rápido de limpar o terreno.", p: 0 },
                    { t: "Substituo a queima pela trituração mecanizada dos resíduos, deixando-os como cobertura protetora no solo.", p: 10 },
                    { t: "Faço as queimadas apenas de madrugada para que ninguém veja a fumaça acontecer.", p: 2 }
                ]
            },
            {
                q: "Sua produção caiu 30% devido às secas causadas pelas mudanças climáticas regionais. Como preparar sua fazenda para o futuro?",
                options: [
                    { t: "Continuo esperando que o clima volte ao normal nos próximos anos.", p: 0 },
                    { t: "Diversifico a produção misturando plantas de sombra com as culturas principais para reter umidade.", p: 10 },
                    { t: "Instalo bombas gigantescas para puxar toda a água do lençol freático subterrâneo.", p: 2 }
                ]
            },
            {
                q: "Fiscais ambientais alertam que sua reserva legal está abaixo do limite da lei. Qual sua resposta como gestor ético?",
                options: [
                    { t: "Tento contestar judicialmente para atrasar o processo o máximo possível.", p: 0 },
                    { t: "Isolo a área degradada faltante e planejo o plantio escalonado de espécies nativas da região.", p: 10 },
                    { t: "Suborno ou engano a fiscalização mudando as cercas de lugar.", p: 0 }
                ]
            }
        ]
    },
    {
        title: "Módulo 2: Painéis Solares",
        impactInfo: "<strong>O Impacto no Mundo Real:</strong> Adiar a transição energética mantém o planeta refém do carbono. Se a sociedade global falhar na migração real para matrizes limpas, o aquecimento global passará do ponto de não-retorno, inviabilizando colheitas inteiras.",
        didYouKnow: "A energia solar rural cresce exponencialmente. Sistemas fotovoltaicos modernos em fazendas conseguem se pagar totalmente entre 4 e 6 anos de uso, gerando energia limpa gratuita por mais de duas décadas.",
        linkReal: "https://www.wwf.org.br/natureza_brasileira/reducao_de_impactos2/clima/energia/",
        questions: [
            {
                q: "Você quer instalar energia solar, mas o custo inicial é muito alto para o seu orçamento atual. Qual decisão tomar?",
                options: [
                    { t: "Desisto da ideia e continuo usando o gerador a diesel poluente indefinidamente.", p: 0 },
                    { t: "Busco financiamentos verdes/linhas de crédito governamentais focadas em sustentabilidade rural.", p: 10 },
                    { t: "Instalo painéis falsos apenas para fazer marketing ecológico na internet.", p: 0 }
                ]
            },
            {
                q: "Para instalar os painéis solares, um técnico sugerer derrubar uma área de mata nativa intocada. O que você faz?",
                options: [
                    { t: "Aceito, pois energia solar compensa o desmatamento daquela pequena área.", p: 2 },
                    { t: "Recuso e exijo que o projeto seja refeito para usar o teto dos galpões ou áreas já limpas.", p: 10 },
                    { t: "Cancelo totalmente o projeto de energia solar e volto pro diesel.", p: 4 }
                ]
            },
            {
                q: "Após instalar a energia solar, você percebe que tem um pico de sobra de energia durante o dia. Como aproveitar isso?",
                options: [
                    { t: "Deixo a energia ser desperdiçada, já que não me custa nada a mais.", p: 2 },
                    { t: "Uso a sobra para alimentar um sistema automatizado e otimizado de irrigação diurna.", p: 10 },
                    { t: "Ligo aparelhos desnecessários na fazenda apenas para gastar o excedente.", p: 0 }
                ]
            },
            {
                q: "Sua região enfrenta uma sequência de dias nublados e a produção solar cai. Como manter a fazenda funcionando?",
                options: [
                    { t: "Uso um sistema híbrido com baterias ou fontes biomáscas limpas preparadas para emergências.", p: 10 },
                    { t: "Paro todas as atividades da fazenda até o sol voltar a brilhar forte.", p: 3 },
                    { t: "Reativo geradores antigos a óleo pesado sem qualquer filtro de poluição.", p: 1 }
                ]
            },
            {
                q: "Poeira da colheita acumulou nos painéis, reduzindo a eficiência deles em 40%. Qual sua ação de manutenção?",
                options: [
                    { t: "Ignoro e deixo assim até que uma chuva forte limpe sozinha em alguns meses.", p: 1 },
                    { t: "Crio um cronograma de limpeza usando água de reuso para não desperdiçar recursos limpos.", p: 10 },
                    { t: "Substituo os painéis sujos por novos, descartando os antigos no lixo comum.", p: 0 }
                ]
            },
            {
                q: "Um fazendeiro vizinho critica seus painéis dizendo que 'isso é bobagem e não dá lucro'. Como você responde?",
                options: [
                    { t: "Discuto agressivamente e quebro relações comerciais com ele.", p: 0 },
                    { t: "Mostro os dados de redução de custos mensais e a valorização do nosso produto sustentável.", p: 10 },
                    { t: "Fico inseguro e desligo o sistema para evitar falatórios na região.", p: 0 }
                ]
            }
        ]
    },
    {
        title: "Módulo 3: Captação de Água",
        impactInfo: "<strong>O Impacto no Mundo Real:</strong> O erro de superexplorar fontes subterrâneas sem criar sistemas pluviais quebra o ciclo hidrológico. Se continuarmos errando na gestão hídrica, metrópoles e áreas agrícolas disputarão água em crises severas.",
        didYouKnow: "A agricultura consome cerca de 70% de toda a água doce captada no planeta. Sistemas inteligentes como a irrigação por gotejamento combinados com cisternas reduzem a necessidade de captação em rios em até 60%!",
        linkReal: "https://www.ana.gov.br",
        questions: [
            {
                q: "Ao projetar as cisternas de captação de chuva, você nota que elas podem coletar impurezas do telhado. O que fazer?",
                options: [
                    { t: "Deixo a água suja ir direto para as plantas, pois terra não faz mal.", p: 3 },
                    { t: "Instalo filtros de descarte das primeiras águas da chuva para reter folhas e poeira pesada.", p: 10 },
                    { t: "Abandono o projeto de captação e decido bombear água do rio subterrâneo.", p: 0 }
                ]
            },
            {
                q: "A seca durou mais do que o esperado e sua água armazenada está chegando ao fim. Qual a medida racional?",
                options: [
                    { t: "Raciono severamente aplicando gotejamento direto na raiz das plantas, evitando desperdício por evaporação.", p: 10 },
                    { t: "Uso toda a água restante de uma vez para tentar salvar a colheita mais rápido.", p: 2 },
                    { t: "Abro poços artesianos ilegais sem autorização dos órgãos ambientais.", p: 0 }
                ]
            },
            {
                q: "Sua cisterna de captação virou um potencial foco de mosquitos transmissores de doenças. Como resolver isso ecologicamente?",
                options: [
                    { t: "Jogo veneno químico diretamente na água que vai regar os alimentos.", p: 0 },
                    { t: "Selo completamente as entradas com telas finas e mantenho a manutenção física em dia.", p: 10 },
                    { t: "Esvazio a cisterna e desisto de armazenar água da chuva.", p: 1 }
                ]
            },
            {
                q: "A água da chuva coletada está com excesso de acidez devido à poluição de indústrias da cidade vizinha. Como agir?",
                options: [
                    { t: "Uso assim mesmo e deixo o solo se acidificar.", p: 1 },
                    { t: "Trato a água com compostos naturais alcalinizantes e denuncio as indústrias aos órgãos competentes.", p: 10 },
                    { t: "Misturo com água potável cara comprada de caminhões-pipa.", p: 4 }
                ]
            },
            {
                q: "Seu vizinho de baixo está sem água por causa da seca, mas suas cisternas estão cheias. O que você faz sob a ótica da sustentabilidade social?",
                options: [
                    { t: "Vendo a água para ele por um preço abusivo para lucrar com a crise.", p: 0 },
                    { t: "Compartilho uma cota de segurança e o ajudo a desenho seu próprio sistema de captação.", p: 10 },
                    { t: "Escondo que tenho água guardada para evitar conflitos.", p: 2 }
                ]
            },
            {
                q: "Seu sistema coletou tanta água que está prestes a transbordar. Qual o destino inteligente para o excedente?",
                options: [
                    { t: "Deixo alagar os galpões da fazenda.", p: 0 },
                    { t: "Direciono o excesso para lagos artificiais que ajudam a recarregar o lençol freático local.", p: 10 },
                    { t: "Abro as válvulas e jogo toda a água direto na estrada de terra.", p: 3 }
                ]
            }
        ]
    },
    {
        title: "Módulo 4: Reflorestamento e SAFs",
        impactInfo: "<strong>O Impacto no Mundo Real:</strong> Monoculturas limpas sem biodiversidade destroem a resiliência da natureza. Sem o reflorestamento integrado, o planeta perde barreiras climáticas cruciais, desregulando o regime de chuvas continentais.",
        didYouKnow: "Os Sistemas Agroflorestais (SAFs) mimetizam florestas naturais. Eles conseguem reter até 5 vezes mais umidade no solo do que plantações comuns e aumentam a presença de polinizadores essenciais em até 400%.",
        linkReal: "https://www.ibflorestas.org.br",
        questions: [
            {
                q: "Você quer implantar um Sistema Agroflorestal (SAF), mas as árvores vão fazer sombra nas suas plantas menores. Como balancear?",
                options: [
                    { t: "Derrubo as árvores para o sol entrar totalmente.", p: 0 },
                    { t: "Escolho espécies de árvores com copas ralas ou planejo linhas espaçadas que combinem com plantas que gostam de sombra.", p: 10 },
                    { t: "Mantenho o plano, mesmo sabendo que as plantas de baixo vão morrer sem luz.", p: 2 }
                ]
            },
            {
                q: "Para reflorestar mais rápido, uma empresa oferece sementes baratas de uma árvore exótica invasora. O que você faz?",
                options: [
                    { t: "Aceito. O importante é ter folhas verdes cobrindo o espaço rápido.", p: 1 },
                    { t: "Recuso e exijo o uso exclusivo de árvores nativas da região para não desequilibrar a fauna local.", p: 10 },
                    { t: "Decido não plantar árvore nenhuma.", p: 0 }
                ]
            },
            {
                q: "Pássaros e animais silvestres voltaram a habitar sua fazenda por causa das árvores e estão comendo algumas frutas. Qual sua reação?",
                options: [
                    { t: "Instalo armadilhas e caço os animais para proteger 100% do meu lucro.", p: 0 },
                    { t: "Entendo isso como sinal de equilíbrio ecológico e calculo essa pequena perda como parte do ecossistema saudável.", p: 10 },
                    { t: "Uso repelentes químicos perigosos para espantar as espécies.", p: 1 }
                ]
            },
            {
                q: "Um incêndio na região ameaça a sua nova área de reflorestamento. Como agir preventivamente de forma eficiente?",
                options: [
                    { t: "Crio aceiros (faixas limpas de terra) ao redor da floresta para impedir a propagação do fogo.", p: 10 },
                    { t: "Rezo para que chova antes que o fogo chegue perto.", p: 0 },
                    { t: "Molho a floresta inteira usando água potável escassa sem estratégia de contenção.", p: 4 }
                ]
            },
            {
                q: "Seu solo melhorou tanto com as árvores que agora você tem excesso de matéria orgânica (folhas secas). O que faz com isso?",
                options: [
                    { t: "Varro tudo e queimo para deixar a fazenda com aspecto 'limpo'.", p: 0 },
                    { t: "Deixo no chão como cobertura morta para proteger a umidade e alimentar microrganismos benéficos.", p: 10 },
                    { t: "Enterro profundamente usando tratores pesados que compactam o solo.", p: 3 }
                ]
            },
            {
                q: "Comunidades locais pedem para coletar sementes e frutos medicinais na sua área protegida. Como reagir?",
                options: [
                    { t: "Proíbo a entrada de qualquer pessoa armada com segurança privada.", p: 0 },
                    { t: "Autorizo a coleta sob um plano de manejo sustentável e comunitário, fortalecendo a economia local.", p: 10 },
                    { t: "Deixo entrarem sem controle nenhum, correndo risco de depreciação.", p: 4 }
                ]
            }
        ]
    }
];

/* ==========================================================================
   ESTADOS DO SISTEMA E PROGRESSO
   ========================================================================== */
let currentModuleIndex = null;
let currentQuestionIndex = 0;
let currentModuleScore = 0;
const modulesSavedScores = [0, 0, 0, 0]; 

function updateGlobalScores() {
    const totalScore = modulesSavedScores.reduce((a, b) => a + b, 0);
    document.getElementById('total-score-display').innerText = `${totalScore} / 240`;
    
    const completedCount = modulesSavedScores.filter(s => s > 0).length;
    document.getElementById('modules-completed-display').innerText = `${completedCount} / 4`;
}

function openQuizModule(moduleIndex) {
    currentModuleIndex = moduleIndex;
    currentQuestionIndex = 0;
    currentModuleScore = 0;

    document.getElementById('main-cards-section').style.display = 'none';
    document.getElementById('quiz-page-container').style.display = 'block';

    loadCriticalQuestion();
}

function backToMainPage() {
    document.getElementById('quiz-page-container').style.display = 'none';
    const mainSection = document.getElementById('main-cards-section');
    mainSection.style.display = 'block';
    
    mainSection.classList.remove('fade-in');
    void mainSection.offsetWidth;
    mainSection.classList.add('fade-in');
    
    window.scrollTo(0, 0);
}

let selectedPointsValue = null;

function loadCriticalQuestion() {
    const module = modulesData[currentModuleIndex];
    const question = module.questions[currentQuestionIndex];

    const quizBox = document.getElementById('quiz-box-element');
    quizBox.classList.remove('fade-in');
    void quizBox.offsetWidth; 
    quizBox.classList.add('fade-in');

    document.getElementById('module-title').innerText = module.title;
    document.getElementById('quiz-progress').innerText = `Pergunta ${currentQuestionIndex + 1} de 6`;
    document.getElementById('question-text').innerText = question.q;

    const optionsBox = document.getElementById('options-box');
    optionsBox.innerHTML = '';
    document.getElementById('btn-next').style.display = 'none';
    selectedPointsValue = null;

    question.options.forEach((opt) => {
        const button = document.createElement('button');
        button.classList.add('btn-option');
        button.innerText = opt.t;
        button.onclick = () => selectCriticalOption(opt.p, button);
        optionsBox.appendChild(button);
    });
}

function selectCriticalOption(points, clickedButton) {
    selectedPointsValue = points;
    
    const allOptions = document.querySelectorAll('.btn-option');
    allOptions.forEach(btn => {
        btn.style.backgroundColor = '#faf9f5';
        btn.style.borderColor = '#ebdcd4';
        btn.style.color = '#4a4737';
    });

    clickedButton.style.backgroundColor = '#f4f3e6';
    clickedButton.style.borderColor = '#8b7d3b'; 
    clickedButton.style.color = '#8b7d3b';

    document.getElementById('btn-next').style.display = 'block';
}

function nextQuestion() {
    currentModuleScore += selectedPointsValue;
    currentQuestionIndex++;

    const module = modulesData[currentModuleIndex];

    if (currentQuestionIndex < module.questions.length) {
        loadCriticalQuestion();
    } else {
        modulesSavedScores[currentModuleIndex] = currentModuleScore;
        updateGlobalScores();

        let avaliacao = "";
        if(currentModuleScore >= 50) {
            avaliacao = "🍂 <strong>Excelente Gestão Sustentável!</strong> Suas decisões foram maduras, resilientes e totalmente alinhadas com a preservação do futuro ecológico global.";
        } else if(currentModuleScore >= 30) {
            avaliacao = "🦊 <strong>Gestão Moderada com Riscos.</strong> Você buscou equilibrar as finanças, mas acabou aceitando caminhos perigosos que causam pequenos estragos graduais ao bioma.";
        } else {
            avaliacao = "🔥 <strong>Alerta de Colapso Ecológico!</strong> Suas decisões priorizaram ganhos rápidos e imediatos baseados em velhos vícios industriais destrutivos.";
        }

        document.getElementById('options-box').innerHTML = '';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('quiz-progress').innerText = "Resultados e Diagnóstico";
        
        document.getElementById('question-text').innerHTML = `
            <div style="text-align: center; padding: 0.5rem;" class="fade-in">
                <h3 style="font-size: 1.5rem; color: #8b7d3b;">Resultado Global do Módulo</h3>
                <p style="font-size: 2.3rem; font-weight: 900; color: #6b8e23; margin: 0.8rem 0;">${currentModuleScore} / 60 PTS</p>
                <p style="font-size: 1rem; line-height: 1.5; margin-bottom: 1.5rem;">${avaliacao}</p>
                
                <div class="impact-report-card">
                    <h4>🌍 Diagnóstico de Impacto do Modelo</h4>
                    <p>${module.impactInfo}</p>
                </div>

                <div class="did-you-know-card">
                    <h4>💡 Você Sabia?</h4>
                    <p>${module.didYouKnow}</p>
                </div>

                <a href="${module.linkReal}" target="_blank" class="btn-learn-more">🔎 Ver Dados Científicos Reais sobre o Tema</a>

                <button class="btn-card-action" style="margin-top: 2rem; width: 100%; padding: 1.1rem;" onclick="backToMainPage()">Salvar e Atualizar Placar Global</button>
            </div>
        `;
    }
}

updateGlobalScores();

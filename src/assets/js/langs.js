// Função para definir o idioma com base no valor do seletor
function setLanguage() {
    const selectedLanguage = document.getElementById("language-selector").value;
    localStorage.setItem("preferredLanguage", selectedLanguage);
    updateContent(selectedLanguage);
}

// Função para atualizar o conteúdo com base no idioma selecionado
function updateContent(language) {
    const textElements = document.querySelectorAll(".lang");

    textElements.forEach(function (element) {
        const key = element.getAttribute("data-lang-key");
        element.textContent = translations[language][key];
    });
}

// Objeto com traduções em diferentes idiomas
const translations = {
    "en": {
        "greeting": "Hello, how are you?",
        "instruction": "Please select your preferred language:",
    },
    "pt-BR": {
        "greeting": "Olá, como você está?",
        "instruction": "Por favor, selecione o seu idioma preferido:",
    },
};

// Verifica se há um idioma preferido no localStorage e atualiza o seletor de idioma
const preferredLanguage = localStorage.getItem("preferredLanguage");
if (preferredLanguage) {
    document.getElementById("language-selector").value = preferredLanguage;
    setLanguage();
}

// Adiciona um ouvinte de eventos para o seletor de idioma
document.getElementById("language-selector").addEventListener("change", setLanguage);

// Define o idioma inicial
setLanguage();

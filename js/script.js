// JavaScript para demonstração
(function() {
    'use strict';
    
    // Função para inicializar a aplicação
    function init() {
        console.log('Aplicação inicializada');
        setupEventListeners();
        loadContent();
    }
    
    // Configurar event listeners
    function setupEventListeners() {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
        
        // Event listener para scroll
        window.addEventListener('scroll', handleScroll);
    }
    
    // Manipular cliques nos botões
    function handleButtonClick(event) {
        const button = event.target;
        console.log('Botão clicado:', button.textContent);
        
        // Adicionar efeito visual
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Manipular scroll da página
    function handleScroll() {
        const scrollTop = window.pageYOffset;
        const header = document.querySelector('.header');
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Carregar conteúdo dinamicamente
    function loadContent() {
        const content = document.querySelector('.content');
        if (content) {
            content.innerHTML += '<p>Conteúdo carregado dinamicamente via JavaScript!</p>';
        }
    }
    
    // Utilitários
    const utils = {
        // Debounce function
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        // Throttle function
        throttle: function(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    };
    
    // Inicializar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Exportar para uso global se necessário
    window.AppUtils = utils;
})();

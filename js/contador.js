// Contador regressivo para 13 de setembro de 2025
function initCountdown() {
    // Data alvo: 13 de setembro de 2025 às 00:00:00
    const targetDate = new Date('2025-09-13T00:00:00').getTime();

    // Função para atualizar o contador
    function updateCountdown() {
        // Data atual
        const now = new Date().getTime();

        // Diferença entre a data alvo e atual
        const difference = targetDate - now;

        // Verificar se a data já passou
        if (difference < 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            console.log('A data alvo já passou!');
            return;
        }

        // Calcular dias, horas, minutos e segundos
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Atualizar os elementos HTML
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        // Verificar se os elementos existem antes de atualizar
        if (daysElement) {
            daysElement.textContent = days;
        }

        if (hoursElement) {
            hoursElement.textContent = hours;
        }

        if (minutesElement) {
            minutesElement.textContent = minutes;
        }

        if (secondsElement) {
            secondsElement.textContent = seconds;
        }

        // Log para debug (opcional)
        console.log(`Faltam: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`);
    }

    // Executar imediatamente
    updateCountdown();

    // Atualizar a cada segundo (1000 ms) para mostrar os segundos
    const intervalId = setInterval(updateCountdown, 1000);

    // Retornar o ID do intervalo para poder cancelar se necessário
    return intervalId;
}

// // Iniciar o contador quando a página carregar
// document.addEventListener('DOMContentLoaded', function () {
//     initCountdown();
// });

// Versão alternativa mais robusta com formatação
function initCountdownAdvanced() {
    const targetDate = new Date('2025-09-13T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            // Data já passou
            updateElements('0', '0', '0', '0');
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Formatar números com zero à esquerda se necessário
        const formattedDays = days.toString();
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        updateElements(formattedDays, formattedHours, formattedMinutes, formattedSeconds);
    }

    function updateElements(days, hours, minutes, seconds) {
        const elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };

        if (elements.days) elements.days.textContent = days;
        if (elements.hours) elements.hours.textContent = hours;
        if (elements.minutes) elements.minutes.textContent = minutes;
        if (elements.seconds) elements.seconds.textContent = seconds;
    }

    updateCountdown();
    return setInterval(updateCountdown, 1000);
}

// Versão com segundos (atualização mais frequente)
function initCountdownWithSeconds() {
    const targetDate = new Date('2025-09-13T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            updateElements('0', '0', '0', '0');
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        updateElements(days, hours, minutes, seconds);
    }

    function updateElements(days, hours, minutes, seconds) {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    return setInterval(updateCountdown, 1000); // Atualiza a cada segundo
}

// Para usar, descomente uma das opções abaixo:

// Opção 1: Versão básica (recomendada)
// initCountdown();

// Opção 2: Versão avançada com formatação
// initCountdownAdvanced();

// Opção 3: Versão com atualização por segundo
initCountdownWithSeconds();
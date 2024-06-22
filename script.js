document.addEventListener('DOMContentLoaded', function() {
    const animacao = document.querySelector('.animacao');
    const minhaimagem = document.querySelector('#minhaimagem');
    const colors = ['red', 'blue', 'green'];

    // Função para iniciar a animação
    function startAnimation() {
        // Mostra a sombra preta antes da animação principal
        const shadowOverlay = document.createElement('div');
        shadowOverlay.classList.add('shadow-overlay');
        document.body.appendChild(shadowOverlay);

        // Mostra a imagem principal e inicia a animação após um breve atraso
        setTimeout(() => {
            animacao.classList.add('active');
            minhaimagem.style.opacity = '1';
        }, 500); // Atraso antes de mostrar a animação principal

        // Cria e anima as duplicatas da imagem principal
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const duplicate = minhaimagem.cloneNode(true);
                duplicate.classList.add('duplicate-image', colors[i % 3]);
                document.body.appendChild(duplicate);
                setTimeout(() => {
                    duplicate.style.opacity = '0';
                    duplicate.style.transform = `translate(${randomIntFromInterval(-300, 300)}px, ${randomIntFromInterval(-300, 300)}px) scale(3)`;
                }, 50);
            }, i * 1000); // Intervalo de 1 segundo entre cada duplicata
        }

        // Remove a animação e a sombra após 5 segundos
        setTimeout(() => {
            animacao.classList.remove('active');
            minhaimagem.style.opacity = '0';
            setTimeout(() => {
                // Remove todas as duplicatas após a animação
                const duplicates = document.querySelectorAll('.duplicate-image');
                duplicates.forEach(duplicate => duplicate.remove());
                // Remove a sombra preta
                shadowOverlay.remove();
            }, 1000); // Tempo extra para garantir que todas as duplicatas sumiram
        }, 5000); // Duração total da animação é de 5 segundos
    }

    // Função auxiliar para gerar número aleatório entre um intervalo
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Adiciona evento de clique na imagem do logo para iniciar a animação
    const logoImage = document.querySelector('.logo img');
    logoImage.addEventListener('click', startAnimation);
});

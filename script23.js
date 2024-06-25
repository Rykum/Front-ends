document.addEventListener('DOMContentLoaded', function() {
    const animacao = document.querySelector('.animacao');
    const minhaimagem = document.querySelector('#minhaimagem');
    const colors = ['red', 'blue', 'green'];

    // Função para iniciar a animação de clique
    function startClickAnimation() {
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

    // Função para iniciar a animação de carregamento da página
    function startPageLoadAnimation() {
        const pageLoadOverlay = document.createElement('div');
        pageLoadOverlay.classList.add('page-load-overlay');
        document.body.appendChild(pageLoadOverlay);

        // Iniciar a animação imediatamente
        setTimeout(() => {
            pageLoadOverlay.classList.add('active');
        }, 0);

        
    }

    // Adiciona evento de clique na imagem do logo para iniciar a animação
    const logoImage = document.querySelector('.logo img');
    logoImage.addEventListener('click', startClickAnimation);

    // Inicia a animação de carregamento da página
    startPageLoadAnimation();

    // Função auxiliar para gerar número aleatório entre um intervalo
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-box');
    const background2 = document.querySelector('.background-image-2');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const runAnimation = () => {
        images.forEach((image) => {
            if (isElementInViewport(image)) {
                if (image.id === 'image1') {
                    image.classList.add('fade-in-right');
                } else if (image.id === 'image2') {
                    image.classList.add('fade-in-left');
                } else if (image.id === 'image3') {
                    image.classList.add('fade-in-right');
                } else if (image.id === 'image4') {
                    image.classList.add('fade-in-left');
                }
            }
        });

        // Verifica se a segunda imagem de fundo está na viewport
        if (window.scrollY > window.innerHeight) {
            background2.classList.add('visible');
        } else {
            background2.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', runAnimation);
    runAnimation(); // Executa na carga para verificar se os elementos já estão na vista
});

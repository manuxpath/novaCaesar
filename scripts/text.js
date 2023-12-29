const textArray = ["B","Bi","Bie","Bien","Bienv","Bienve","Bienven","Bienveni","Bienvenid","Bienvenido","Bienvenido a","Bienvenido a N", "Bienvenido a No", "Bienvenido a Nov", "Bienvenido a Nova", "Bienvenido a NovaC", "Bienvenido a NovaCa", "Bienvenido a NovaCae", "Bienvenido a NovaCaes", "Bienvenido a NovaCaesa", "Bienvenido a NovaCaesar"];
        let textIndex = 0;
        const animatedText = document.getElementById('texto');

        function animateText() {
            animatedText.textContent = textArray[textIndex];
            textIndex = (textIndex + 1) % textArray.length;
        }

        setInterval(animateText, 200);
document.addEventListener("DOMContentLoaded", function () {
    const profileData = {
         name: "Janette Ramirez",
        subtitle: "whatever you want to happen will happen",
        links: [
            {
                text: "Portfolio Web",
                url: "https://alexandergomez.netlify.app/",
                bgImage: "./img/CajaDesing.png"
            },
            {
                text: "LinkedIn",
                url: "https://www.linkedin.com/in/janette-ramirez-ulloa-transformacion-digital/",
                bgImage: "./img/CajaDesing.png"
            },
            {
                text: "Youtube",
                url: "https://www.youtube.com/@janetterm8016",
                bgImage: "./img/CajaDesing.png"
            },
            {
                text: "Github",
                url: "https://github.com/Janette-Ramirez-Ulloa",
                bgImage: "./img/CajaDesing.png"
            }
        ]
    };

    // Rellenar el contenido del perfil
    document.getElementById("profile-name").textContent = profileData.name;
    document.getElementById("profile-subtitle").textContent = profileData.subtitle;



    const copyButtons = document.querySelectorAll(".copy-btn");
    const toast = document.getElementById("toast");

    // Rellenar los enlaces dinámicamente
    const linksContainer = document.getElementById("links-container");
    profileData.links.forEach(link => {
        const linkElement = document.createElement("div");
        linkElement.classList.add("link");
        linkElement.style.backgroundImage = `url(${link.bgImage})`; // Imagen de fondo

        const linkContent = `
            <span><a href="${link.url}" target="_blank">${link.text}</a></span>
            <i class="fa fa-copy copy-btn"></i>
        `;
        linkElement.innerHTML = linkContent;

        // Agregar funcionalidad para copiar el enlace
        linkElement.querySelector(".copy-btn").addEventListener("click", function () {
            navigator.clipboard.writeText(link.url).then(() => {
                const toast = document.getElementById("toast");
                toast.classList.add("show");
                setTimeout(() => toast.classList.remove("show"), 3000);
            });
        });

        linksContainer.appendChild(linkElement);
    });
});

(async () => {
    try {
        // Accéder à l'API via l'objet global
        const Extensions = window["trimble-connect-project-workspace-api"];
        
        if (!Extensions) {
            console.error("L'API Trimble Connect n'est pas disponible !");
            return;
        }

        console.log("Initialisation de l'extension...");

        // Connexion à l'API de Trimble Connect
        const API = await Extensions.connect(
            window.parent,
            (event, args) => {
                switch (event) {
                    case "extension.command":
                        console.log("Command executed by the user:", args.data);
                        break;
                    case "extension.accessToken":
                        console.log("AccessToken or status:", args.data);
                        break;
                    case "extension.userSettingsChanged":
                        console.log("User settings changed!");
                        break;
                    default:
                        console.log("Unknown event:", event);
                }
            },
            30000
        );

        console.log("API connectée :", API);

        // Configuration du menu principal avec un bouton pour la vidéo
        API.ui.setMenu({
            title: "Vidéo formation",
            icon: "https://consultantsecteurtransports.github.io/TestExtension/Logo.png", // Icône de l'extension
            command: "video_main_menu",
            subMenus: [
                {
                    title: "Lire la Vidéo",
                    icon: "https://consultantsecteurtransports.github.io/TestExtension/Logo.png", // Icône pour le sous-menu
                    command: "open_video_button"
                }
            ]
        });

        // Gestion de la commande déclenchée par le bouton
        API.extension.onCommand((command) => {
            if (command === "open_video_button") {
                console.log("Commande détectée : Lecture de la vidéo");
                afficherModaleAvecVideo("https://consultantsecteurtransports.github.io/TestExtension/videoMP4.mp4");
            }
        });
    } catch (error) {
        console.error("Erreur lors de l'initialisation de l'extension:", error);
    }
})();

/** Fonction pour afficher la vidéo dans une modale */
function afficherModaleAvecVideo(videoUrl) {
    // Création de la modale
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "white";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    modal.style.borderRadius = "8px";
    modal.style.zIndex = "1000";

    // Ajout de la vidéo
    const video = document.createElement("video");
    video.src = videoUrl;
    video.controls = true;
    video.autoplay = true;
    video.style.width = "100%";
    video.style.borderRadius = "8px";

    // Bouton de fermeture
    const closeButton = document.createElement("button");
    closeButton.innerText = "Fermer";
    closeButton.style.marginTop = "10px";
    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "#007bff";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "4px";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = () => {
        document.body.removeChild(modal);
    };

    // Ajout des éléments dans la modale
    modal.appendChild(video);
    modal.appendChild(closeButton);
    // Ajout de la modale au document
    document.body.appendChild(modal);
}

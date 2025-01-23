import * as Extensions from "trimble-connect-project-workspace-api";

/** Instantiate extension .
   *  @param window - Parent window object.
   *  @param callback - Listen the events with args from the parent.
   *  @param timeout - Connect timeout in milliseconds.
   *  @returns TCExtensionAPI - Object with the interaction methods.
*/
this.API = await Extensions.connect(
  window.parent,
  (event, args) => {
    switch (event) {
      case "extension.command":
        //"Command executed by the user: args.data"
        break;
      case "extension.accessToken":
        //"Accestoken or status: args.data"
        break;
      case "extension.userSettingsChanged":
        //"User settings changed!"
        break;
      default:
    }
  },
  30000
);


// Configuration du menu principal avec un bouton pour la vidéo
this.API.ui.setMenu({
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
this.API.extension.onCommand((command) => {
    if (command === "open_video_button") {
        // Affiche la vidéo dans une modale
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
        video.src = "https://consultantsecteurtransports.github.io/TestExtension/vid%C3%A9otest.mp4";
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
});

t(async () => {
    try {
        // "async" signifie que les opérations dans ton code peuvent être exécutées en arrière-plan 
        // sans bloquer l'exécution des autres instructions.
        

        // Création de la constante API, une constante ne peut pas être réasignée
        //Si il y aun event qui correspond à extension.command et qui a pour attribut data open_menu alos l'API est crée.  
        const API = await TrimbleConnectWorkspace.connect(window.parent, (event, data) => {
            console.log("Event reçu :", event, data);
            if (event === "extension.command") {
                if (data.data === "open_menu") {  //Attention, il faut recupere data dans date !
                    console.log("Commande reçue : Création du menu.");
                }

                //Premier sous-menu
                if (data.command === "submenu_1_clicked") {
                    console.log("Sous-menu 1' sélectionné !! ");

                    // Scroller vers la div spécifique
                    const targetDiv = document.getElementById("content"); // Remplace par l'ID de ta div
                    if (targetDiv) {
                        targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
                        console.log("Scrolled to 'videosSection'.");
                    } else {
                        console.warn("Div 'videosSection' introuvable.");
                    }
                }
                
                //Deuxième sous-menu
                if (data.command === "submenu_2_clicked") {
                    console.log("Sous-menu 2' sélectionné !! ");

                    // Scroller vers la div spécifique
                    const targetDiv = document.getElementById("pdf-content"); // Remplace par l'ID de ta div
                    if (targetDiv) {
                        targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
                        console.log("Scrolled to 'videosSection'.");
                    } else {
                        console.warn("Div 'videosSection' introuvable.");
                    }
                }
            }
        });

        
        // Configuration du menu principal
        const mainMenuObject = {
            title: "Supports de formation",
            icon: "https://consultantsecteurtransports.github.io/TestExtension/Logos/Logo-formation.png",
            command: "main_nav_menu_clicked",
            subMenus: [
                {
                    title: "Videos",
                    icon: "https://consultantsecteurtransports.github.io/TestExtension/Logos/Logo-video.png",
                    command: "submenu_1_clicked",
                },
                {
                    title: "PDF",
                    icon: "https://consultantsecteurtransports.github.io/TestExtension/Logos/Logo-pdf.png",
                    command: "submenu_2_clicked",
                },
            ],
        };
        
        // Mise à jour du menu via l'API
        API.ui.setMenu(mainMenuObject);
        console.log("Menu principal configuré avec succès.");

        // Mise à jour du sous-menu actif
        //API.ui.setActiveMenuItem("submenu_1_clicked");
        //console.log("Sous-menu actif défini sur 'Vidéos'.");

        // Appel de la méthode `getCurrentProject`
        const currentProject = await API.project.getCurrentProject();
        console.log("Projet actuel récupéré :", currentProject);

        // Appel de la méthode `getUserSettings`
        const userSettings = await API.user.getUserSettings();
        console.log("Paramètres utilisateur récupérés :", userSettings);

        // Appel de la méthode `setStatusMessage`
        const statusMessage = "Bienvenue dans l'extension de formation !";
        API.extension.setStatusMessage(statusMessage);
        console.log("Message de statut défini :", statusMessage);


        
        // Demande de jeton d'accès
        const accessToken = await API.extension.requestPermission("accesstoken");
        console.log("Jeton d'accès récupéré :", accessToken);

        console.log("Connexion avec l'API réussie !");
        
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API Trimble Connect :", error);
    }

    
})();
// Fin du monde asynchrone

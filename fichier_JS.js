(async () => {
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

        // Demande de jeton d'accès
        const accessToken = await API.extension.requestPermission("accesstoken");
        console.log("Jeton d'accès récupéré :", accessToken);

        console.log("Connexion avec l'API réussie !");
        
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API Trimble Connect :", error);
    }

    
})();
// Fin du monde asynchrone

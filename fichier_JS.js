(async () => {
    try {
        // Connexion à l'API
        const API = await TrimbleConnectWorkspace.connect(window.parent, (event, data) => {
            console.log("Event reçu !!! :", event, data);

            // Gestion des événements de commande
            if (event === "command") {
                if (data.command === "open_video_button") {
                    console.log("Commande reçue : Création du menu.");

                    // Configuration du menu principal
                    const mainMenuObject = {
                        title: "Test extension app",
                        icon: "https://consultantsecteurtransports.github.io/TestExtension/Logos/Logo-formation.png",
                        command: "main_nav_menu_clicked",
                        subMenus: [
                            {
                                title: "Vidéos",
                                icon: "https://consultantsecteurtransports.github.io/TestExtension/Logos/Logo-formation.png",
                                command: "submenu_1_clicked",
                            },
                            {
                                title: "PDF",
                                icon: "https://consultantsecteurtransports.github.io/TestExtension/Logos/Logo-formation.png",
                                command: "submenu_2_clicked",
                            },
                        ],
                    };

                    // Mise à jour du menu via l'API
                    await API.ui.setMenu(mainMenuObject);
                    console.log("Menu principal configuré avec succès.");

                    // Mise à jour du sous-menu actif
                    await API.ui.setActiveMenuItem("submenu_1_clicked");
                    console.log("Sous-menu actif défini sur 'Vidéos'.");
                }
            }
        });

        // Demande de jeton d'accès
        const accessToken = await API.extension.requestPermission("accesstoken");
        console.log("Jeton d'accès récupéré :", accessToken);

        console.log("Connexion avec l'API réussie !");
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API Trimble Connect :", error);
    }
})();

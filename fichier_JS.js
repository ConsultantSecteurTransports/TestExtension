(async () => {
    try {
        var API = await TrimbleConnectWorkspace.connect(window.parent, (event, data) => {
            console.log("Event: ", event, data);
        });
        const mainMenuObject = {
              title: "Test extension app",
              icon: "https://consultantsecteurtransports.github.io/TestExtension/Logos/Logo-formation.png",
              command: "main_nav_menu_cliked",
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

        // Updating the menu object.
        this.API.ui.setMenu(mainMenuObject);
        
        // Updating the active submenu.
        this.API.ui.setActiveMenuItem("submenu_1_clicked");
        

        API.project.getProject().then(project => {
            console.log(project); // Trimble Connect project details
        });
        //Updating the status message.
        this.API.extension.setStatusMessage("<statusMessage>:string");
        //Request for the access token.
        this.API.extension.requestPermission("accesstoken").then((accessToken: string) => {
            //Current user access token or status: accessToken

        console.log("Connexion avec l'API réussie !"); 

        
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API Trimble Connect :", error);
    }
})();

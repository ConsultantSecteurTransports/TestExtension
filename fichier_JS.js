(async () => {
    try {
        var API = await TrimbleConnectWorkspace.connect(window.parent, (event, data) => {
            console.log("Event: ", event, data);
        });
        
        API.project.getProject().then(project => {
            console.log(project); // Trimble Connect project details
        });


        console.log("Connexion avec l'API réussie !"); 

        
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API Trimble Connect :", error);
    }
})();

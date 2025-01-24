(async () => {
    try {
        // Utilisez TrimbleConnectWorkspace.connect pour établir une connexion
        const API = await TrimbleConnectWorkspace.connect(window.parent);

        console.log("API Trimble Connect récupérée :", API);

        // Exemple : Récupérer les détails du projet
        const project = await API.project.getProject();
        console.log("Détails du projet :", project);

        // Exemple : Interaction avec le visualiseur 3D
        const viewer = await API.viewer.getViewer();
        console.log("Visualiseur récupéré :", viewer);
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API Trimble Connect :", error);
    }
})();

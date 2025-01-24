(async () => {
    try {
        // Établir une connexion à l'API Trimble Connect Workspace
        const API = await WorkspaceAPI.connect(window.parent);

        // Une fois connecté, utilisez l'API pour interagir avec Trimble Connect
        console.log("API Trimble Connect récupérée :", API);

        // Exemple : récupérer les informations du projet
        const project = await API.project.getProject();
        console.log("Détails du projet :", project);

        // Exemple : interagir avec le visualiseur 3D
        const viewer = await API.viewer.getViewer();
        console.log("Visualiseur récupéré :", viewer);
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API Trimble Connect :", error);
    }
})();

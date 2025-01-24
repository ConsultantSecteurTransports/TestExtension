document.addEventListener("DOMContentLoaded", async () => {
    if (typeof WorkspaceAPI !== "undefined") {
        try {
            const API = await WorkspaceAPI.connect(window.parent);
            console.log("API Trimble Connect récupérée :", API);

            // Exemple d'utilisation
            const project = await API.project.getProject();
            console.log("Détails du projet :", project);
        } catch (error) {
            console.error("Erreur lors de la connexion à l'API Trimble Connect :", error);
        }
    } else {
        console.error("WorkspaceAPI n'est pas défini. Vérifiez le chargement de l'API.");
    }
});

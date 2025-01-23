console.log("Extension en cours de chargement...");
this.API.ui.setMenu({
  title: "Extension Test",
  icon: "https://consultantsecteurtransports.github.io/TestExtension/Logo.png",
  command: "test_menu",
  subMenus: [
    {
      title: "Test Bouton",
      icon: "https://consultantsecteurtransports.github.io/TestExtension/Logo.png",
      command: "test_command"
    }
  ]
});

this.API.extension.onCommand((command) => {
  if (command === "test_command") {
    console.log("Commande test détectée !");
    alert("Test réussi !");
  }
});

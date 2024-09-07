export default class Employe {
  createEmploye(employe) {
    this.nom = employe.nom;
    this.prenom = employe.prenom;
    this.email = employe.email;
    this.poste = employe.poste;
    this.dateEmbauche = employe.dateEmbauche;
    this.statut = employe.statut;
    console.log(
      `Employe: ${this.nom}, ${this.prenom}, ${this.email}, ${this.poste}, ${this.dateEmbauche},${this.statut} has been created`
    );
  }

  destroyEmploye() {
    this.nom = null;
    this.prenom = null;
    this.email = null;
    this.poste = null;
    this.dateEmbauche = null;
    this.statut = null;
    console.log(`Employe has been deleted`);
  }

  editEmploye(newEmploye) {
    this.nom = newEmploye.nom;
    this.prenom = newEmploye.prenom;
    this.email = newEmploye.email;
    this.poste = newEmploye.poste;
    this.dateEmbauche = newEmploye.dateEmbauche;
    this.statut = newEmploye.statut;
    console.log(
      `Employe: ${this.nom}, ${this.prenom}, ${this.email}, ${this.poste}, ${this.dateEmbauche},${this.statut} has been updated`
    );
  }
  getEmploye() {
    console.log(
      `Employe: ${this.nom}, ${this.prenom}, ${this.email}, ${this.poste}, ${this.dateEmbauche},${this.statut}`
    );
    return {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      poste: this.poste,
      dateEmbauche: this.dateEmbauche,
      statut: this.statut,
    };
  }
}

export default class Tache {
  createTache(tache) {
    this.nom = tache.nom;
    this.description = tache.description;
    this.dateDebut = tache.dateDebut;
    this.dateFin = tache.dateFin;
    this.statut = tache.statut;
    this.priorite = tache.priorite;
    console.log(
      `Tache: ${this.nom}, ${this.description}, ${this.dateDebut}, ${this.dateFin}, ${this.statut}, ${this.priorite} has been created`
    );
  }

  destroyTache() {
    this.nom = null;
    this.description = null;
    this.dateDebut = null;
    this.dateFin = null;
    this.statut = null;
    this.priorite = null;
    console.log(`Tache has been deleted`);
  }

  editTache(newTache) {
    this.nom = newTache.nom;
    this.description = newTache.description;
    this.dateDebut = newTache.dateDebut;
    this.dateFin = newTache.dateFin;
    this.statut = newTache.statut;
    this.priorite = newTache.priorite;
    console.log(
      `Tache: ${this.nom}, ${this.description}, ${this.dateDebut}, ${this.dateFin}, ${this.statut},${this.priorite} has been updated`
    );
  }
  getTache() {
    console.log(
      `Tache: ${this.nom}, ${this.description}, ${this.dateDebut}, ${this.dateFin}, ${this.statut},${this.priorite}`
    );
    return {
      nom: this.nom,
      description: this.description,
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      statut: this.statut,
      priorite: this.priorite,
    };
  }
}

export default class Assignation {
  static tabAssignation = [];

  static assignerTache({ employe, tache, dateAssignation }) {
    Assignation.tabAssignation.push({ employe, tache, dateAssignation });
  }

  static getTab() {
    return Assignation.tabAssignation;
  }

  static obtenirTachesAssigne(employe) {
    if (employe) {
      return Assignation.tabAssignation
        .filter((emp) => emp.employe.nom === employe.nom)
        .map((ass) => {
          return {
            tache: ass.tache,
            dateAssignation: ass.dateAssignation,
          };
        });
    }
  }

  static obtenirEmployeAssigne(tache) {
    if (tache) {
      return Assignation.tabAssignation
        .filter((t) => t.tache.nom === tache.nom)
        .map((ass) => {
          return {
            employe: ass.employe,
            dateAssignation: ass.dateAssignation,
          };
        });
    }
  }

  static retirerTâche(employe) {
    if (employe) {
      return Assignation.tabAssignation
        .filter((emp) => emp.employe.nom === employe.nom)
        .map((ass) => {
          return {
            tache: (ass.tache = null),
            dateAssignation: ass.dateAssignation,
          };
        });
    }
    console.log(`Tache has been deleted`);
  }
}

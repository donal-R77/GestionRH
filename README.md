# TV OASIS - Plateforme de Gestion RH et d'Ordonnancement des Ressources (Média)

Projet de fin d'études - Master 2 en Informatique  
Structure d'accueil : **Télévision OASIS / Maison de la Communication (Fédération Madagascar Centre)**  
Développeur : **Stagiaire Master 2**  
Accompagnement & Architecture : **Pair-Programming & Mentorat Antigravity**

---

## 🎯 Vision du Projet
Moderniser intégralement la gestion opérationnelle de la chaîne TV OASIS en remplaçant les fiches de suivi papier par une plateforme logicielle résiliente, sécurisée et intelligente.

Le projet concilie :
1. **L'efficacité opérationnelle immédiate pour TV Oasis** : Pointage instantané, saisie numérique des tâches d'antenne/régie, calcul automatique des heures et génération des états de paie.
2. **L'exigence d'ingénierie d'un Master 2** : Architecture logicielle découplée (Clean Architecture), résilience hors-ligne (Offline-First pour reporters terrain) et moteur d'aide à la décision pour l'ordonnancement sous contraintes des ressources de production.

---

## 🏗️ Structure Prévisionnelle du Projet

```text
tv_oasis_rh/
├── backend/            # API REST, logique métier, moteur d'ordonnancement, base de données
│   ├── app/
│   │   ├── core/       # Configuration, sécurité (JWT/OAuth2), bases de données
│   │   ├── domain/     # Modèles métier et entités (Clean Architecture)
│   │   ├── services/   # Services métier (calcul des heures, ordonnancement)
│   │   └── api/        # Contrôleurs / Endpoints HTTP
│   └── tests/          # Tests unitaires et d'intégration automatisés
├── frontend/           # Interface utilisateur (PWA, responsive PC & tablette)
│   ├── src/
│   │   ├── components/ # Composants UI réutilisables (pointage, fiches, badges)
│   │   ├── views/      # Écrans (Employé, Chef de desk, RH, Direction)
│   │   └── offline/    # Gestion du cache IndexedDB & synchronisation locale
├── docs/               # Spécifications, diagrammes UML/Merise, journal de bord
└── docker/             # Conteneurisation pour déploiement local facile sur serveur TV Oasis
```

---

## 📅 Roadmap des 6 Mois (Sprint par Sprint)

| Sprint / Mois | Objectif Principal | Livrable Clé |
| :--- | :--- | :--- |
| **Mois 1** | Cadrage, spécifications & Modélisation | Modèle relationnel BDD validé & Wireframes |
| **Mois 2** | Socle MVP (Pointage & Authentification) | Pointage Arrivée/Sortie fonctionnel avec rôles |
| **Mois 3** | Fiche de tâches numérique & Validation | Numérisation de la fiche de suivi et validation chef |
| **Mois 4** | Moteur de calcul RH & Module M2 (Planning) | Algorithme d'ordonnancement sous contraintes / PWA Offline |
| **Mois 5** | Reporting, Exports Paie & Sécurisation | Génération PDF/Excel & Piste d'audit inviolable |
| **Mois 6** | Déploiement LAN, Conduite du changement | Mise en production chez TV Oasis & Rédaction du mémoire |

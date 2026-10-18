# Dossier de Conception & Choix Réalisés — Site Lola Gest Naturopathe

Ce document récapitule l'ensemble des choix stratégiques, graphiques, techniques et légaux mis en place pour le site vitrine de **Lola Gest**, Naturopathe et Praticienne en Drainage Lymphatique sur la Côte d'Opale (Cucq).

---

## 1. Contexte & Cahier des Charges

Lola Gest souhaitait un site élégant, moderne et fluide, inspiré de l'univers du site **COÂMES**, valorisant son identité sans surcharger l'utilisateur :
- **Inspiration** : univers épuré, formes arrondies, typographies raffinées, sensation d'apaisement.
- **Palette naturelle exigée** : Terracotta (dominant), Lin / Écru, et touches de Vert d'eau.
- **Organisation du contenu** : Ne pas détailler individuellement chaque sous-prestation, mais structurer la présentation autour de **3 axes clairs** :
  1. Drainage Lymphatique Méthode Renata França® (avec mention de la marque déposée).
  2. Accompagnement Naturopathique & Nutrithérapie.
  3. Gestion du stress & Méditation guidée.
- **Call-to-Action central** : Redirection fluide et directe vers la prise de rendez-vous en ligne sur **Planity**.
- **Préparation média** : Une section d'accueil pensée pour intégrer prochainement une vidéo de présentation.

---

## 2. Choix Graphiques & Direction Artistique

### A. La palette chromatique
- **Terracotta (`#C26D53` et `#A85840`)** : Couleur dominante chaleureuse, évoquant la terre, l'énergie vitale et la douceur. Nous avons évité les dégradés complexes pour privilégier des aplats purs et élégants qui ne fatiguent pas l'œil.
- **Lin / Crème (`#F6F0E6`)** : Utilisé pour les cartes, les fonds secondaires et la barre de navigation. Il apporte de la lumière naturelle, de l'élégance et une respiration visuelle indispensables pour ne pas étouffer l'écran avec un seul ton.
- **Vert d'eau doux (`#EBF2F0` et accents `#5B7E74`)** : Clin d'œil à la nature, au bien-être végétal et à la sérénité.
- **Noir doux (`#2C2620`)** : Choisi à la place du noir pur `#000000` pour un confort de lecture optimal et une texture plus organique.

### B. Typographie éditoriale
- **Fraunces (Titres)** : Une typographie à empattements contemporaine, à la fois chaleureuse et haut de gamme, qui rappelle les magazines d'art de vivre et le positionnement soigné de Lola.
- **Work Sans (Corps de texte & Boutons)** : Linéale moderne, ultra-lisible, assurant une parfaite clarté des textes sur mobile et ordinateur.

### C. Formes & Rythme visuel
- Formes douces et angles arrondis (`border-radius: 24px` à `32px` pour les cartes, `50px` pour les boutons).
- Les sections sont calibrées pour structurer le scroll : l'utilisateur découvre une ambiance à la fois plutôt qu'un mélange chaotique de couleurs.

---

## 3. Détail des Éléments & Composants

### 1. La Barre de Navigation (`Header.tsx` & `Header.css`)
- **Pourquoi ce choix ?** Précédemment, la navbar se fondait dans le Hero. Elle arbore désormais un fond **lin crème** avec effet de flou (*glassmorphism*), garantissant une lisibilité parfaite des liens et du logo tout en restant fine et discrète.
- **Bouton d'action** : Bouton terracotta vers Planity immédiatement accessible.

### 2. L'Accueil (`Hero.tsx` & `Hero.css`)
- **Composition épurée** : Titre accrocheur mettant en avant les spécialités maîtresses (*Drainage Lymphatique & Naturopathie*).
- **Prêt pour la vidéo** : Le layout est centré et structuré afin que la future vidéo de Lola s'intègre en arrière-plan sans perturber la lisibilité du texte ni la disposition des boutons.
- **Suppression du scroll indicator** : Retrait du pictogramme de défilement pour alléger l'espace visuel et aller directement à l'essentiel.

### 3. Les 3 Axes d'Accompagnement (`Axes.tsx` & `Axes.css`)
- Les cartes reposent sur un fond lin contrasté avec badge d'accentuation en vert d'eau.
- **Textes authentiques** : Le texte du Drainage Lymphatique Renata França® reprend fidèlement les mots de Lola partagés sur son compte Instagram (action stimulante, toxines, sensation de légèreté, prise en charge sur Planity).
- **Uniformisation des boutons** : Chaque axe dispose du même CTA clair : **« Prendre RDV »**, orienté directement vers la réservation en ligne.

### 4. Le Cabinet (`Cabinet.tsx` & `Cabinet.css`)
- Présentation du lieu d'exercice : **Cabinet Opale Santé à Cucq**.
- Horaires et accès clairs pour rassurer et guider la patientèle locale.

### 5. Le Pied de Page (`Footer.tsx` & `Footer.css`)
- Logo, liens vers Instagram et Planity.
- **Lien actif vers les Mentions Légales** pour se conformer au droit numérique.

---

## 4. Conformité Légale & Page Dédiée (`/mentions-legales`)

Conformément à la législation française (loi LCEN et RGPD), un site professionnel en ligne doit obligatoirement présenter des mentions légales. Nous avons créé la page [mentions-legales](file:///Users/matteoturpin-hannequand/Desktop/ProjetsPlanity/LolaGest/lola-gest-naturopathe/app/mentions-legales/page.tsx) comprenant 8 sections :
1. **Éditeur du site** : Identité, adresse du cabinet, liens de contact. *(Des balises [à compléter] sont prévues pour le SIRET et le numéro ADELI / RPPS de Lola)*.
2. **Hébergement** : Mention claire de l'hébergeur.
3. **Propriété intellectuelle** : Protection des photos, textes et visuels de la marque.
4. **RGPD & Données personnelles** : Précision que la prise de rendez-vous est déléguée à Planity (qui assure sa propre conformité RGPD).
5. **Cookies** : Absence de cookies traceurs tiers ou intrusifs.
6. **Clause de non-responsabilité médicale** : Rappel indispensable en naturopathie (la pratique complète la médecine sans s'y substituer).
7. **Liens hypertextes**.
8. **Droit applicable** (droit français).

---

## 5. Préparation pour la Mise en Ligne & SEO

Tous les éléments indispensables au référencement naturel et à la publication ont été mis en place :
- **`app/robots.ts`** : Génération automatique du fichier `robots.txt` autorisant l'exploration par les moteurs de recherche.
- **`app/sitemap.ts`** : Génération dynamique du `sitemap.xml` listant la page d'accueil et les mentions légales avec leurs priorités.
- **Métadonnées complètes (`app/layout.tsx`)** :
  - `metadataBase` configuré.
  - Balises OpenGraph complètes pour des partages soignés sur Instagram, WhatsApp, Facebook et SMS.
  - Balises de géolocalisation et mots-clés ciblés (Cucq, Côte d'Opale, Naturopathie, Drainage lymphatique, Renata França®).
- **Favicon vectoriel (`app/icon.svg`)** : Symbole végétal terracotta et lin parfaitement net sur tous les écrans (Retina, mobile, desktop).

---

## 6. Nettoyage du Projet

- **Suppression des fichiers inutiles** : Les anciens composants d'ébauche (`Approche.tsx`, `Approche.css`, `Methode.tsx`, `Methode.css`) et les SVG initiaux non utilisés de Next.js ont été nettoyés.
- **Codebase légère & performante** : 100 % statique (`next build` génère du HTML pré-rendu ultra-rapide).

---

## 7. Checklist Finale avant le Lancement Officiel

- [ ] **Numéro SIRET** : Ouvrir `app/mentions-legales/page.tsx` et renseigner le numéro SIRET de Lola.
- [ ] **Vidéo d'accueil (optionnel)** : Quand Lola aura tourné sa vidéo, la déposer dans `public/` (par exemple `public/hero-video.mp4`) et l'ajouter en arrière-plan dans `Hero.tsx`.
- [ ] **Déploiement** : Suivre le guide hébergement situé dans `GuideIonos/Guide_Hebergement_IONOS_Lola.pdf` ou déployer en un clic sur Vercel.

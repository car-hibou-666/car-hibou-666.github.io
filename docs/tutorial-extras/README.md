---
title: tutorial extras
id: testa
pagination_label: def
hide_title: false
hide_table_of_contents: false
toc_max_heading_level: 4
pagination_next: tutorial-extras/manage-docs-versions
pagination_prev: intro
custom_edit_url: Aubin
keywords: [testa,testb,testc]
description: Une description
image: https://i.imgur.com/mErPwqL.png
tags: [testa,testb]
draft: true
last_update:
  date: 09/19/2022
  author: nom auteur personnalisé
  slug: tutorial-extras/
sidebar_label: test
sidebar_position: 2
---


## Titre 2
### Titre 3
#### Titre 4
##### Titre 5
###### Titre 6
Titre 7

## Bonjour de Docusaurus

Êtes-vous prêt à créer le site de documentation de votre projet open source ?

## Les entêtes

s'afficheront sur la table des matières en haut à droite

Ainsi, vos utilisateurs sauront de quoi il s'agit sans faire défiler la page ou même sans trop la lire.

## Seuls les h2 et h3 seront par défaut dans la table des matières.

Vous pouvez configurer les niveaux d'entête de la table des matières soit par document, soit dans la configuration du thème.

Les entêtes sont bien espacés pour que la hiérarchie soit claire.

- Les listes vous aideront à
- présenter les points clés
- que vous voulez que vos utilisateurs retiennent
  - et vous pouvez les imbriquer
    - plusieurs fois

## Entêtes avec ID personnalisées {#custom-id}

Avec la syntaxe `{#custom-id}` vous pouvez définir votre propre ID d'entête.

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

blabla
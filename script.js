//compteur
document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector("footer");
    footer.addEventListener("click", function() {
        console.log("clique");
    });
});

//menu hamburger
document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarHeader = document.getElementById("navbarHeader");

    navbarToggler.addEventListener("click", function() {
        navbarHeader.classList.toggle("collapse");
    });
});

//firt card (red)
document.addEventListener("DOMContentLoaded", function() {
    // Pointer sur la première carte
    var firstCard = document.querySelector(".card");
    console.log(firstCard);

    // Pointer sur le bouton "Edit" de la première carte
    var editButton = firstCard.querySelector(".btn-outline-secondary");
    console.log(editButton);

    // Ajouter l'écouteur d'événement pour changer la couleur du texte
    editButton.addEventListener("click", function() {
        var cardText = firstCard.querySelector(".card-text");
        cardText.style.color = "red";
    });
});

//2cards (vert)
document.addEventListener("DOMContentLoaded", function() {
    // Pointer sur la deuxième carte
    var secondCard = document.querySelectorAll(".card")[1];
    console.log(secondCard);

    // Pointer sur le bouton "Edit" de la deuxième carte
    var editButton = secondCard.querySelector(".btn-outline-secondary");
    console.log(editButton);

    // Ajouter l'écouteur d'événement pour basculer la couleur du texte
    editButton.addEventListener("click", function() {
        var cardText = secondCard.querySelector(".card-text");
        if (cardText.style.color === 'green') {
            cardText.style.color = '';
        } else {
            cardText.style.color = 'green';
        }
    });
});

//bombNuck
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner la navbar
    var navbar = document.querySelector(".navbar");

    // Ajouter un écouteur d'événement pour le double-clic
    navbar.addEventListener("dblclick", function() {
        // Sélectionner le tag <link> qui charge Bootstrap
        var bootstrapLink = document.querySelector('link[href*="bootstrap"]');
        
        // Vérifier si le tag <link> est activé ou non et basculer l'état
        if (bootstrapLink.disabled) {
            bootstrapLink.disabled = false;
        } else {
            bootstrapLink.disabled = true;
        }
    });
});

// reduir cards
document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour restaurer les propriétés CSS de la carte
    function restoreCard(card) {
      var img = card.querySelector('.card-img-top');
      var text = card.querySelector('.card-text');
      var editButton = card.querySelector('.btn-outline-secondary');
      img.style.width = '';
      text.style.display = '';
      editButton.style.display = '';
    }
  
    // Sélectionner tous les boutons "View"
    var viewButtons = document.querySelectorAll('.btn-success');
  
    // Boucle à travers tous les boutons "View"
    viewButtons.forEach(function(button) {
      // Ajouter les écouteurs d'événements
      button.addEventListener('mouseenter', function() {
        // Sélectionner la carte parente
        var card = button.closest('.card');
  
        // Restaurer les propriétés CSS des autres cartes
        var allCards = document.querySelectorAll('.card');
        allCards.forEach(function(otherCard) {
          if (otherCard !== card) {
            restoreCard(otherCard);
          }
        });
  
        // Réduire l'image et masquer le texte
        var img = card.querySelector('.card-img-top');
        var text = card.querySelector('.card-text');
        var editButton = card.querySelector('.btn-outline-secondary');
        img.style.width = '20%';
        text.style.display = 'none';
        editButton.style.display = 'block';
      });
  
      button.addEventListener('mouseleave', function() {
        // Sélectionner la carte parente
        var card = button.closest('.card');
  
        // Restaurer les propriétés CSS de cette carte
        restoreCard(card);
      });
    });
  });
  
  // tourne card
  document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le bouton "Edit" de la dernière carte
    var lastCardEditButton = document.querySelector('.col-md-4:last-child .btn-outline-secondary');
  
    // Ajouter un écouteur d'événements au clic sur ce bouton
    lastCardEditButton.addEventListener('click', function() {
      // Sélectionner le parent des cartes
      var cardContainer = document.querySelector('.album .container .row');
  
      // Sélectionner la dernière carte
      var lastCard = cardContainer.lastElementChild;
  
      // Déplacer la dernière carte vers le début de la liste des cartes
      cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
  
      // Réinitialiser les écouteurs d'événements sur les boutons "View" pour chaque carte
      resetViewButtonListeners();
    });
  
    // Fonction pour réinitialiser les écouteurs d'événements sur les boutons "View" pour chaque carte
    function resetViewButtonListeners() {
      // Sélectionner tous les boutons "View"
      var viewButtons = document.querySelectorAll('.btn-success');
  
      // Boucle à travers tous les boutons "View"
      viewButtons.forEach(function(button) {
        // Ajouter les écouteurs d'événements pour chaque bouton "View"
        button.addEventListener('mouseenter', function() {
          // Sélectionner la carte parente
          var card = button.closest('.card');
  
          // Réduire la carte en laissant le bouton "Edit" visible
          var img = card.querySelector('.card-img-top');
          var text = card.querySelector('.card-text');
          img.style.width = '20%';
          text.style.display = 'none';
        });
  
        button.addEventListener('mouseleave', function() {
          // Sélectionner la carte parente
          var card = button.closest('.card');
  
          // Restaurer la taille de l'image et afficher le texte
          var img = card.querySelector('.card-img-top');
          var text = card.querySelector('.card-text');
          img.style.width = '';
          text.style.display = '';
        });
      });
    }
  
    // Appeler la fonction pour réinitialiser les écouteurs d'événements sur les boutons "View" initialement
    resetViewButtonListeners();
  });
  
  //1er card 
  document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le bouton "Edit" de la première carte
    var firstCardEditButton = document.querySelector('.album .container .row .card:first-child .btn-outline-secondary');
  
    // Ajouter un écouteur d'événements au clic sur ce bouton
    firstCardEditButton.addEventListener('click', function(event) {
      // Bloquer le comportement par défaut du lien HTML sur le bouton
      event.preventDefault();
  
      // Sélectionner le parent des cartes
      var cardContainer = document.querySelector('.album .container .row');
  
      // Sélectionner la première carte
      var firstCard = cardContainer.firstElementChild;
  
      // Déplacer la première carte vers la fin de la liste des cartes
      cardContainer.appendChild(firstCard);
  
      // Réinitialiser les écouteurs d'événements sur les boutons "View" pour chaque carte
      resetViewButtonListeners();
    });
  
    // Fonction pour réinitialiser les écouteurs d'événements sur les boutons "View" pour chaque carte
    function resetViewButtonListeners() {
      // Sélectionner tous les boutons "View"
      var viewButtons = document.querySelectorAll('.btn-success');
  
      // Boucle à travers tous les boutons "View"
      viewButtons.forEach(function(button) {
        // Ajouter les écouteurs d'événements pour chaque bouton "View"
        button.addEventListener('mouseenter', function() {
          // Sélectionner la carte parente
          var card = button.closest('.card');
  
          // Réduire la carte en laissant le bouton "Edit" visible
          var img = card.querySelector('.card-img-top');
          var text = card.querySelector('.card-text');
          img.style.width = '20%';
          text.style.display = 'none';
        });
  
        button.addEventListener('mouseleave', function() {
          // Sélectionner la carte parente
          var card = button.closest('.card');
  
          // Restaurer la taille de l'image et afficher le texte
          var img = card.querySelector('.card-img-top');
          var text = card.querySelector('.card-text');
          img.style.width = '';
          text.style.display = '';
        });
      });
    }
  
    // Appeler la fonction pour réinitialiser les écouteurs d'événements sur les boutons "View" initialement
    resetViewButtonListeners();
  });
  

  //final
  document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le texte du logo "JS & Events"
    var logoText = document.querySelector('.navbar-brand');
  
    // Ajouter un écouteur d'événements pour la touche spécifique du clavier
    logoText.addEventListener('keypress', function(event) {
      // Récupérer la touche pressée
      var key = event.key;
  
      // Sélectionner le corps de la page
      var body = document.querySelector('body');
  
      // Retirer toutes les classes de mise en page actuelles du <body>
      body.classList.remove('col-4', 'offset-md-4', 'offset-md-8');
  
      // Appliquer les modifications en fonction de la touche pressée
      switch (key) {
        case 'a':
          // Tout condenser sur 4 colonnes Bootstrap à gauche de l'écran
          body.classList.add('col-4');
          break;
        case 'y':
          // Tout condenser sur 4 colonnes Bootstrap au milieu de l'écran
          body.classList.add('col-4', 'offset-md-4');
          break;
        case 'p':
          // Tout condenser sur 4 colonnes Bootstrap à droite de l'écran
          body.classList.add('col-4', 'offset-md-8');
          break;
        case 'b':
          // Tout redevient normal
          break;
        default:
          break;
      }
    });
  });
  

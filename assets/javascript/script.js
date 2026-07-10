//toggle
const toggle = document.getElementById('dark-toggle')

// Restaurer le choix au chargement
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark')
  toggle.checked = true
}

// Un seul écouteur
toggle.addEventListener('change', function() {
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', this.checked ? 'dark' : 'light')
})



//filtres
  function filtrer(boutonClique, categorie) {
    const tousLesBoutons = document.querySelectorAll('.filtre-btn')

    tousLesBoutons.forEach(function(bouton) {
      bouton.classList.remove('bg-[#0A2540]', 'text-white', 'actif')
      bouton.classList.add('bg-transparent', 'text-[#0A2540]')
    })

    boutonClique.classList.add('bg-[#0A2540]', 'text-white', 'actif')
    boutonClique.classList.remove('bg-transparent', 'text-[#0A2540]')

    const toutesLesCards = document.querySelectorAll('.event-card')

    toutesLesCards.forEach(function(card) {

      if (categorie === 'tous' || card.dataset.category === categorie) {
        card.style.display = 'flex'
      } else {
        card.style.display = 'none'
      }
    })
  }
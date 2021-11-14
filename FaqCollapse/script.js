const toggles = document.querySelectorAll('.faq-toggle')
const facts = document.querySelectorAll('.faq')

toggles.forEach(toggle =>{
    toggle.addEventListener('click', () =>{
        toggle.parentNode.classList.toggle('active')
    })
})

// facts.forEach(fact =>{
//     fact.addEventListener('click', () =>{
//         fact.classList.toggle('active')
//     })
// })
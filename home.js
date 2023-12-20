if (document.getElementById('cards') != null) {
    document.getElementById('cards').onmousemove = e => {
        for (const card of document.getElementsByClassName('card')) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`)
            card.style.setProperty("--mouse-y", `${y}px`)
        }
    }
}


var scroll = document.querySelector('.downward-container')
scroll.addEventListener('click', () => {
    const container = document.querySelector('.card-container')
    const transition = container.scrollIntoView({ behavior: 'smooth', top: 'cardContainer'.offsetTop })
})

let heading1 = document.getElementById('heading1');
function recall() {
    // while (document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(() => {
        heading1.style.opacity = '100'
        heading1.style.transition = '1s ease-in-out'
        heading1.innerText = "Decentralizing your";
        setTimeout(()=>{
            heading1.style.opacity = '0'
        },1000)
    }, 2000);
    setTimeout(() => {
        heading1.style.opacity = '100'
        heading1.style.transition = '1s ease-in-out'
        heading1.innerText = "Securing your";
        setTimeout(()=>{
            heading1.style.opacity = '0'
        },1000)
    }, 4000);
    setTimeout(() => {
        heading1.style.opacity = '100'
        heading1.style.transition = '1s ease-in-out'
        heading1.innerText = "Validating your";
        setTimeout(()=>{
            heading1.style.opacity = '0'
        },1000)
    }, 6000);
}

setTimeout(recall,10)
setInterval(recall,6100)

// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

  // Function to handle the scroll event
//   var reveals2 = document.querySelectorAll('.stat-text-2')
//   var reveals3 = document.querySelectorAll('.stat-text-3')

  var reveal = () => {
    function revealing1() {
        var reveals1 = document.querySelectorAll('.stat-text-1');

        reveals1.forEach((element) => {
            const winHeight = window.innerHeight;
            const revealTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < winHeight - revealPoint) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    revealing1();
}
  var reveal2 = () => {
    function revealing2() {
        var reveals2 = document.querySelectorAll('.stat-text-2');

        reveals2.forEach((element) => {
            const winHeight = window.innerHeight;
            const revealTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < winHeight - revealPoint) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    revealing2();
}
  var reveal3 = () => {
    function revealing3() {
        var reveals3 = document.querySelectorAll('.stat-text-3');

        reveals3.forEach((element) => {
            const winHeight = window.innerHeight;
            const revealTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < winHeight - revealPoint) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    revealing3();
}

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', reveal2);
window.addEventListener('scroll', reveal3);


// function handleScroll() {
//     var statText1Element = document.getElementById("stat-text-1");
    
//     if (isElementInViewport(statText1Element) && !statText1Element.classList.contains("active")) {
//         // Add a class to mark t[he element as "active" to avoid multiple triggers
//         statText1Element.classList.add("active");
        
        
//     }
// }

  // Attach the scroll event listener
// window.addEventListener("scroll", handleScroll);

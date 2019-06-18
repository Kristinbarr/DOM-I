const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
}

// NAVBAR
const navbar = document.querySelector('nav')

const headerNames = Object.values(siteContent.nav)

const navbarEls = document.querySelectorAll('a')
navbarEls.forEach((link, i) => {
  link.textContent = headerNames[i]
})

// add two more nav items
const navBlogTitle = document.createElement('a')
navBlogTitle.textContent = 'Blog'
navBlogTitle.href = '#'

const navMoreTitle = document.createElement('a')
navMoreTitle.textContent = 'More'
navMoreTitle.href = '#'

navbar.prepend(navBlogTitle)
navbar.appendChild(navMoreTitle)

// change color of nav text
const navbarLinks = document.querySelectorAll('nav a')
navbarLinks.forEach((link) => {
  link.style.color = 'green'
})

let logo = document.getElementById('logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])

// SECTION - CTA
const ctaText = document.querySelectorAll('.cta-text')
ctaText.forEach((el) => {
  el.style.marginLeft = '15rem'
})

// cta Title
const ctaTitle = document.querySelector('.cta-text h1')
ctaTitle.textContent = siteContent['cta']['h1']

// cta button
const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['button']

// cta image
const ctaImage = document.getElementById('cta-img')
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

// SECTION - MAIN CONTENT
const mainContents = document.querySelectorAll('.main-content')

// This took way too long and probably terrible performance (N^4?)
// probably could be done with recursion (attempt below)
const mainSiteContent = Object.values(siteContent['main-content'])

let i = 0
mainContents.forEach((el) => {
  if (el.childNodes.length > 0) {
    el.childNodes.forEach((ele) => {
      if (ele.nodeName === 'IMG') {
        ele.src = mainSiteContent[4]
        i++
      }
      if (ele.childNodes.length > 0) {
        ele.childNodes.forEach((elem) => {
          if (elem.childNodes.length > 0) {
            elem.childNodes.forEach((eleme) => {
              if (eleme.nodeName !== '#text') {
                eleme.textContent = mainSiteContent[i]
                i++
              }
            })
          }
        })
      }
    })
  }
})

// // Attempt at recursion. not iterating properly
// function fill(nodeList) {
//   // base case: if nodelist has sub-nodes
//   if (nodeList.childNodes === 0) return nodeList
//   let i = 0
//   // iterate through current nodelist
//   nodeList.forEach((el) => {
//     // if node is Img
//     if (el.nodeName === 'IMG') {
//       console.log('img', el)
//       el.src = mainSiteContent[4]
//       i++
//     }
//     // if node has sub-nodes, iterate through that nodeList
//     if (el.childNodes.length > 0) {
//       console.log('recurse', i, el.childNodes)
//       fill(el.childNodes)
//     }
//     // if node is not strange text between elems,
//     // apply new content and iterate
//     if (el.nodeName !== '#text') {
//       el.textContent = mainSiteContent[i]
//       i++
//     }
//   })
//   return nodeList
// }
// fill(mainContents)

// CONTACT
const contact = document.querySelectorAll('.contact h4, .contact p')

contact.forEach((el, i) => {
  el.textContent = Object.values(siteContent.contact)[i]
})

let contactAddress = document.querySelector('.contact p')
contactAddress.style.width = '150px' // adding line break

// FOOTER
const footerText = document.querySelector('footer p')
footerText.textContent = siteContent.footer.copyright

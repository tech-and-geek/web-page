// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize basic functionality
  initCounters()
  initGalleryFilters()
  initPasswordToggle()
  initVendorRegistration()
})

// Import Bootstrap
const bootstrap = window.bootstrap

// Simple Counter without animations
function initCounters() {
  const counters = document.querySelectorAll(".counter")
  if (counters.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = +counter.getAttribute("data-target")
          counter.innerText = target
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => {
    observer.observe(counter)
  })
}

// Simple Gallery Filters
function initGalleryFilters() {
  const filterButtons = document.querySelectorAll(".gallery-filters button")
  const galleryItems = document.querySelectorAll(".gallery-item")

  if (filterButtons.length === 0 || galleryItems.length === 0) return

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active", "btn-primary"))
      filterButtons.forEach((btn) => btn.classList.add("btn-outline-primary"))

      this.classList.add("active", "btn-primary")
      this.classList.remove("btn-outline-primary")

      const filter = this.getAttribute("data-filter")

      galleryItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })
    })
  })
}

// Handle opening the lightbox
function openLightbox(imageSrc, title) {
  const modal = new bootstrap.Modal(document.getElementById("lightboxModal"))
  document.getElementById("lightboxImage").src = imageSrc
  document.getElementById("lightboxTitle").textContent = title
  modal.show()
}

// Handle image download
function downloadImage() {
  const imageUrl = document.getElementById("lightboxImage").src
  const imageName = document.getElementById("lightboxTitle").textContent

  const a = document.createElement("a")
  a.href = imageUrl
  a.download = imageName.replace(/\s+/g, "-").toLowerCase() + ".jpg"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

// Handle opening WhatsApp
function openWhatsApp() {
  window.open("https://wa.me/919919998802", "_blank")
}

// Handle opening Map
function openMap() {
  window.open("https://goo.gl/maps/YourLocationLink", "_blank")
}

// Simple contact form submission
function handleContactForm(event) {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)
  const formObject = {}

  formData.forEach((value, key) => {
    formObject[key] = value
  })

  const submitBtn = form.querySelector('button[type="submit"]')
  submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!'

  setTimeout(() => {
    alert("Thank you for contacting us! We will get back to you soon.")
    form.reset()
    submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message'
  }, 1000)

  console.log("Form data:", formObject)
}

// Simple login form submission
function handleLogin(event) {
  event.preventDefault()

  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  setTimeout(() => {
    alert(`Login attempted with username: ${username}`)
  }, 500)

  console.log("Login attempt:", { username, password })
}

// Simple password toggle
function initPasswordToggle() {
  const togglePasswordButton = document.getElementById("togglePassword")

  if (!togglePasswordButton) return

  togglePasswordButton.addEventListener("click", function () {
    const passwordInput = document.getElementById("password")
    const icon = this.querySelector("i")

    if (passwordInput.type === "password") {
      passwordInput.type = "text"
      icon.classList.remove("fa-eye")
      icon.classList.add("fa-eye-slash")
    } else {
      passwordInput.type = "password"
      icon.classList.remove("fa-eye-slash")
      icon.classList.add("fa-eye")
    }
  })
}

// Simple scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    })
  }
}

// Simple load more images
function loadMoreImages() {
  const loadBtn = event.target
  loadBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...'

  setTimeout(() => {
    alert("In a live website, this would load more images from the server.")
    loadBtn.innerHTML = '<i class="fas fa-plus me-2"></i>Load More Images'
  }, 1000)
}

// Simple vendor registration
function initVendorRegistration() {
  const form = document.getElementById("vendorForm")

  if (!form) return

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("vendorName")?.value.trim()
    const company = document.getElementById("companyName")?.value.trim()
    const email = document.getElementById("email")?.value.trim()
    const phone = document.getElementById("phone")?.value.trim()
    const service = document.getElementById("serviceType")?.value

    if (name && company && email && phone && service) {
      console.log("Vendor Registered:", { name, company, email, phone, service })
      alert("Thank you for registering as a vendor!")
      form.reset()
    } 
  })
}

// Simple search handling
function handleSearch(event) {
  event.preventDefault()

  const searchInput = document.getElementById("searchInput")

  setTimeout(() => {
    alert(`Searching for: ${searchInput.value}`)
  }, 500)
}

// Electric Effects Initialization
function initElectricalEffects() {
  // Add electric hover effects to all buttons
  const buttons = document.querySelectorAll(".electric-btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)"
      this.style.boxShadow = "0 0 20px var(--electric-blue)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = ""
      this.style.boxShadow = ""
    })
  })

  // Add electric effects to cards
  const cards = document.querySelectorAll(".electric-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) rotateX(5deg)"
      this.style.boxShadow = "0 15px 30px rgba(0, 212, 255, 0.3)"
      this.style.borderColor = "var(--electric-blue)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = ""
      this.style.boxShadow = ""
      this.style.borderColor = ""
    })
  })

  // Add electric glow to icons on hover
  const icons = document.querySelectorAll(".electric-glow, .electric-pulse")
  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.color = "var(--electric-blue)"
      this.style.textShadow = "0 0 15px var(--electric-blue)"
      this.style.transform = "scale(1.2)"
    })

    icon.addEventListener("mouseleave", function () {
      this.style.color = ""
      this.style.textShadow = ""
      this.style.transform = ""
    })
  })

  // Electric title letter animation
  const electricLetters = document.querySelectorAll(".electric-letter")
  electricLetters.forEach((letter, index) => {
    letter.addEventListener("mouseenter", function () {
      this.style.color = "var(--electric-blue)"
      this.style.textShadow = "0 0 10px var(--electric-blue)"
      this.style.transform = "translateY(-5px) scale(1.1)"
    })

    letter.addEventListener("mouseleave", function () {
      this.style.color = ""
      this.style.textShadow = ""
      this.style.transform = ""
    })
  })
}

// Particle System for Electric Effects
function initParticleSystem() {
  const canvas = document.createElement("canvas")
  canvas.style.position = "fixed"
  canvas.style.top = "0"
  canvas.style.left = "0"
  canvas.style.width = "100%"
  canvas.style.height = "100%"
  canvas.style.pointerEvents = "none"
  canvas.style.zIndex = "-1"
  canvas.style.opacity = "0.3"
  document.body.appendChild(canvas)

  const ctx = canvas.getContext("2d")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles = []
  const particleCount = 50

  class ElectricParticle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 2
      this.vy = (Math.random() - 0.5) * 2
      this.life = Math.random() * 100 + 100
      this.maxLife = this.life
    }

    update() {
      this.x += this.vx
      this.y += this.vy
      this.life--

      // Wrap around screen
      if (this.x < 0) this.x = canvas.width
      if (this.x > canvas.width) this.x = 0
      if (this.y < 0) this.y = canvas.height
      if (this.y > canvas.height) this.y = 0

      // Reset particle when life ends
      if (this.life <= 0) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.life = this.maxLife
      }
    }

    draw() {
      const alpha = this.life / this.maxLife
      const size = Math.random() * 2 + 1

      ctx.save()
      ctx.globalAlpha = alpha * 0.5
      ctx.fillStyle = "#00d4ff"
      ctx.shadowBlur = 10
      ctx.shadowColor = "#00d4ff"
      ctx.beginPath()
      ctx.arc(this.x, this.y, size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new ElectricParticle())
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle) => {
      particle.update()
      particle.draw()
    })

    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.save()
          ctx.globalAlpha = ((100 - distance) / 100) * 0.2
          ctx.strokeStyle = "#00d4ff"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
          ctx.restore()
        }
      }
    }

    requestAnimationFrame(animate)
  }

  animate()

  // Resize canvas on window resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

// Create electric spark effect
function createElectricSpark() {
  const spark = document.createElement("div")
  spark.style.position = "fixed"
  spark.style.top = "50%"
  spark.style.left = "50%"
  spark.style.width = "10px"
  spark.style.height = "10px"
  spark.style.background = "var(--electric-yellow)"
  spark.style.borderRadius = "50%"
  spark.style.boxShadow = "0 0 20px var(--electric-yellow)"
  spark.style.transform = "translate(-50%, -50%)"
  spark.style.zIndex = "9999"
  spark.style.animation = "sparkExplosion 0.5s ease-out forwards"

  document.body.appendChild(spark)

  setTimeout(() => {
    document.body.removeChild(spark)
  }, 500)
}

// Add spark explosion animation
const sparkStyle = document.createElement("style")
sparkStyle.textContent = `
    @keyframes sparkExplosion {
        0% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% { 
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
        }
    }
`
document.head.appendChild(sparkStyle)

// Create electric wave effect
function createElectricWave(element) {
  const wave = document.createElement("div")
  const rect = element.getBoundingClientRect()

  wave.style.position = "fixed"
  wave.style.top = rect.top + "px"
  wave.style.left = rect.left + "px"
  wave.style.width = rect.width + "px"
  wave.style.height = rect.height + "px"
  wave.style.border = "2px solid var(--electric-blue)"
  wave.style.borderRadius = "5px"
  wave.style.pointerEvents = "none"
  wave.style.zIndex = "9999"
  wave.style.animation = "electricWave 1s ease-out forwards"

  document.body.appendChild(wave)

  setTimeout(() => {
    document.body.removeChild(wave)
  }, 1000)
}

// Add electric wave animation
const waveStyle = document.createElement("style")
waveStyle.textContent = `
    @keyframes electricWave {
        0% { 
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 10px var(--electric-blue);
        }
        100% { 
            transform: scale(1.5);
            opacity: 0;
            box-shadow: 0 0 50px var(--electric-blue);
        }
    }
`
document.head.appendChild(waveStyle)

// Add mouse trail effect
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.95) {
    // Only create trail occasionally
    const trail = document.createElement("div")
    trail.style.position = "fixed"
    trail.style.left = e.clientX + "px"
    trail.style.top = e.clientY + "px"
    trail.style.width = "4px"
    trail.style.height = "4px"
    trail.style.background = "var(--electric-blue)"
    trail.style.borderRadius = "50%"
    trail.style.pointerEvents = "none"
    trail.style.zIndex = "9999"
    trail.style.animation = "mouseTrail 1s ease-out forwards"

    document.body.appendChild(trail)

    setTimeout(() => {
      if (document.body.contains(trail)) {
        document.body.removeChild(trail)
      }
    }, 1000)
  }
})

// Add mouse trail animation
const mouseTrailStyle = document.createElement("style")
mouseTrailStyle.textContent = `
    @keyframes mouseTrail {
        0% { 
            transform: scale(1);
            opacity: 0.8;
            box-shadow: 0 0 5px var(--electric-blue);
        }
        100% { 
            transform: scale(0);
            opacity: 0;
            box-shadow: 0 0 15px var(--electric-blue);
        }
    }
`
document.head.appendChild(mouseTrailStyle)

// Initialize electric cursor effect
function initElectricCursor() {
  const cursor = document.createElement("div")
  cursor.style.position = "fixed"
  cursor.style.width = "20px"
  cursor.style.height = "20px"
  cursor.style.border = "2px solid var(--electric-blue)"
  cursor.style.borderRadius = "50%"
  cursor.style.pointerEvents = "none"
  cursor.style.zIndex = "9999"
  cursor.style.transition = "transform 0.1s ease"
  cursor.style.boxShadow = "0 0 10px var(--electric-blue)"
  cursor.style.opacity = "0.7"

  document.body.appendChild(cursor)

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 10 + "px"
    cursor.style.top = e.clientY - 10 + "px"
  })

  // Hide default cursor on electric elements
  const electricElements = document.querySelectorAll(".electric-btn, .electric-card, .electric-nav")
  electricElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)"
      cursor.style.borderColor = "var(--electric-yellow)"
      cursor.style.boxShadow = "0 0 20px var(--electric-yellow)"
    })

    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)"
      cursor.style.borderColor = "var(--electric-blue)"
      cursor.style.boxShadow = "0 0 10px var(--electric-blue)"
    })
  })
}

// Enhanced Sliding Animations System
document.addEventListener("DOMContentLoaded", () => {
  initSlidingAnimations()
  initScrollAnimations()
  initStaggeredAnimations()
  initElectricSlideEffects()
})

// Initialize sliding animations
function initSlidingAnimations() {
  // Add slide classes to different elements
  const heroElements = document.querySelectorAll(".hero-section-photo h1, .hero-section-photo h3")
  heroElements.forEach((element, index) => {
    element.classList.add("slide-in-top", `slide-stagger-${index + 1}`)
  })

  // Add slide effects to cards
  const cards = document.querySelectorAll(".electric-card")
  cards.forEach((card, index) => {
    const direction = index % 2 === 0 ? "slide-in-left" : "slide-in-right"
    card.classList.add("slide-on-scroll", direction)
  })

  // Add slide effects to service cards
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((card, index) => {
    card.classList.add("slide-scale-in", `slide-stagger-${index + 1}`)
  })

  // Add slide effects to why choose us cards
  const whyChooseCards = document.querySelectorAll(".why-choose-card")
  whyChooseCards.forEach((card, index) => {
    card.classList.add("slide-bounce", `slide-stagger-${index + 1}`)
  })

  // Add slide effects to gallery items
  const galleryItems = document.querySelectorAll(".gallery-preview-card")
  galleryItems.forEach((item, index) => {
    item.classList.add("slide-zoom", `slide-stagger-${index + 1}`)
  })

  // Add slide effects to contact info cards
  const contactCards = document.querySelectorAll(".contact-info-item")
  contactCards.forEach((card, index) => {
    card.classList.add("electric-slide-left", `slide-stagger-${index + 1}`)
  })

  // Add slide effects to stats
  const statContainers = document.querySelectorAll(".stat-container")
  statContainers.forEach((stat, index) => {
    stat.classList.add("slide-glow-trail", `slide-stagger-${index + 1}`)
  })
}

// Initialize scroll-based animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")

        // Add electric effect on scroll
        if (entry.target.classList.contains("electric-card")) {
          entry.target.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.3)"
          setTimeout(() => {
            entry.target.style.boxShadow = ""
          }, 1000)
        }
      }
    })
  }, observerOptions)

  // Observe elements for scroll animations
  const scrollElements = document.querySelectorAll(".slide-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll")
  scrollElements.forEach((element) => {
    slideObserver.observe(element)
  })

  // Add scroll animations to sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section, index) => {
    const direction = index % 2 === 0 ? "slide-left-on-scroll" : "slide-right-on-scroll"
    section.classList.add(direction)
    slideObserver.observe(section)
  })
}

// Initialize staggered animations
function initStaggeredAnimations() {
  const navItems = document.querySelectorAll(".navbar-nav .nav-item")
  navItems.forEach((item, index) => {
    item.classList.add("slide-in-top", `slide-stagger-${index + 1}`)
  })

  const footerLinks = document.querySelectorAll("footer a")
  footerLinks.forEach((link, index) => {
    link.classList.add("slide-in-bottom", `slide-stagger-${Math.floor(index / 3) + 1}`)
  })
}

// Initialize electric slide effects
function initElectricSlideEffects() {
  // Add electric reveal to titles
  const titles = document.querySelectorAll(".electric-title")
  titles.forEach((title) => {
    title.classList.add("electric-reveal")
  })

  // Add typewriter effect to subtitles
  const subtitles = document.querySelectorAll(".electric-subtitle")
  subtitles.forEach((subtitle) => {
    subtitle.classList.add("slide-typewriter")
  })

  // Add electric trail to buttons
  const electricBtns = document.querySelectorAll(".electric-btn")
  electricBtns.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.classList.add("slide-electric-trail")
      setTimeout(() => {
        btn.classList.remove("slide-electric-trail")
      }, 1000)
    })
  })
}

// Add slide out animation for page transitions
const slideOutStyle = document.createElement("style")
slideOutStyle.textContent = `
  .slide-out {
    animation: slideOutLeft 0.5s ease-in forwards;
  }
  
  @keyframes slideOutLeft {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
`
document.head.appendChild(slideOutStyle)

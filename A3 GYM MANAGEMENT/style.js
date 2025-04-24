// Function to apply styles dynamically using JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // General Styles
    const body = document.body;
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.boxSizing = "border-box";
    body.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    body.style.background = "#fff";
    body.style.color = "#000";
    body.style.lineHeight = "1.6";
  
    // Navbar Styling
    const navbar = document.querySelector(".navbar");
    navbar.style.display = "flex";
    navbar.style.justifyContent = "space-between";
    navbar.style.alignItems = "center";
    navbar.style.padding = "20px";
    navbar.style.background = "#e62e00";
    navbar.style.color = "white";
    navbar.style.flexWrap = "wrap";
  
    const navbarLogo = document.querySelector(".navbar .logo");
    navbarLogo.style.fontSize = "24px";
    navbarLogo.style.fontWeight = "bold";
  
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.listStyle = "none";
    navLinks.style.display = "flex";
    navLinks.style.gap = "20px";
    navLinks.style.flexWrap = "wrap";
  
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
      link.style.textDecoration = "none";
      link.style.color = "white";
      link.style.fontWeight = "500";
    });
  
    // Page Banner Styling
    const pageBanner = document.querySelector(".page-banner");
    pageBanner.style.background = "url('https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=1500&q=80') no-repeat center center/cover";
    pageBanner.style.color = "rgb(0, 0, 0)";
    pageBanner.style.height = "60vh";
    pageBanner.style.display = "flex";
    pageBanner.style.justifyContent = "center";
    pageBanner.style.alignItems = "center";
    pageBanner.style.textAlign = "center";
    pageBanner.style.padding = "0 20px";
  
    const pageBannerTitle = pageBanner.querySelector("h1");
    pageBannerTitle.style.fontSize = "42px";
    pageBannerTitle.style.marginBottom = "10px";
  
    // About Section Styling
    const aboutSection = document.querySelector(".about-section");
    aboutSection.style.padding = "60px 20px";
    aboutSection.style.background = "#fdfdfd";
  
    const aboutContainer = document.querySelector(".about-container");
    aboutContainer.style.display = "flex";
    aboutContainer.style.flexWrap = "wrap";
    aboutContainer.style.gap = "40px";
    aboutContainer.style.alignItems = "center";
    aboutContainer.style.justifyContent = "center";
  
    const aboutText = document.querySelector(".about-text");
    aboutText.style.flex = "1 1 400px";
  
    const aboutTextTitle = aboutText.querySelector("h2");
    aboutTextTitle.style.fontSize = "32px";
    aboutTextTitle.style.marginBottom = "20px";
  
    const aboutTextParagraphs = aboutText.querySelectorAll("p");
    aboutTextParagraphs.forEach(p => {
      p.style.marginBottom = "15px";
    });
  
    const aboutImage = document.querySelector(".about-image");
    aboutImage.style.flex = "1 1 400px";
    aboutImage.style.textAlign = "center";
  
    const aboutImageImg = aboutImage.querySelector("img");
    aboutImageImg.style.maxWidth = "100%";
    aboutImageImg.style.borderRadius = "10px";
    aboutImageImg.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  
    // Mission Section Styling
    const missionSection = document.querySelector(".mission");
    missionSection.style.padding = "50px 20px";
    missionSection.style.background = "#f2f2f2";
    missionSection.style.textAlign = "center";
  
    const missionTitle = missionSection.querySelector("h2");
    missionTitle.style.fontSize = "30px";
    missionTitle.style.marginBottom = "20px";
  
    const missionParagraph = missionSection.querySelector("p");
    missionParagraph.style.maxWidth = "700px";
    missionParagraph.style.margin = "auto";
    missionParagraph.style.fontSize = "18px";
  
    // Footer Styling
    const footer = document.querySelector("footer");
    footer.style.background = "#e62e00";
    footer.style.color = "white";
    footer.style.textAlign = "center";
    footer.style.padding = "20px";
  
    // Responsive tweaks for smaller screens
    const mediaQuery = window.matchMedia("(max-width: 768px)");
  
    // Apply responsive styles when the screen width is <= 768px
    mediaQuery.addListener(function(e) {
      if (e.matches) {
        pageBannerTitle.style.fontSize = "32px";
        aboutContainer.style.flexDirection = "column";
        aboutText.style.textAlign = "center";
        aboutImage.style.textAlign = "center";
      } else {
        pageBannerTitle.style.fontSize = "42px";
        aboutContainer.style.flexDirection = "row";
        aboutText.style.textAlign = "left";
        aboutImage.style.textAlign = "left";
      }
    });
  
    // Initialize media query listener
    if (mediaQuery.matches) {
      pageBannerTitle.style.fontSize = "32px";
      aboutContainer.style.flexDirection = "column";
      aboutText.style.textAlign = "center";
      aboutImage.style.textAlign = "center";
    }
  });

  

  document.addEventListener("DOMContentLoaded", function () {
    // General Styles
    const body = document.body;
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.boxSizing = "border-box";
    body.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    body.style.background = "#fff";
    body.style.color = "#000";
    body.style.lineHeight = "1.6";
  
    // Navbar Styling
    const navbar = document.querySelector(".navbar");
    navbar.style.display = "flex";
    navbar.style.justifyContent = "space-between";
    navbar.style.alignItems = "center";
    navbar.style.padding = "20px";
    navbar.style.background = "#e62e00";
    navbar.style.color = "white";
    navbar.style.flexWrap = "wrap";
  
    const navbarLogo = document.querySelector(".navbar .logo");
    navbarLogo.style.fontSize = "24px";
    navbarLogo.style.fontWeight = "bold";
  
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.listStyle = "none";
    navLinks.style.display = "flex";
    navLinks.style.gap = "20px";
    navLinks.style.flexWrap = "wrap";
  
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
      link.style.textDecoration = "none";
      link.style.color = "white";
      link.style.fontWeight = "500";
    });
  
    // Page Banner Styling
    const pageBanner = document.querySelector(".page-banner");
    pageBanner.style.background = "url('https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=1500&q=80') no-repeat center center/cover";
    pageBanner.style.color = "rgb(0, 0, 0)";
    pageBanner.style.height = "60vh";
    pageBanner.style.display = "flex";
    pageBanner.style.justifyContent = "center";
    pageBanner.style.alignItems = "center";
    pageBanner.style.textAlign = "center";
    pageBanner.style.padding = "0 10px";
  
    const pageBannerTitle = pageBanner.querySelector("h1");
    pageBannerTitle.style.fontSize = "42px";
    pageBannerTitle.style.marginBottom = "10px";
  
    // Contact Section Styling
    const contactSection = document.querySelector(".contact-section");
    contactSection.style.padding = "60px 20px";
    contactSection.style.background = "#fff";
  
    const contactContainer = document.querySelector(".contact-container");
    contactContainer.style.display = "flex";
    contactContainer.style.gap = "40px";
    contactContainer.style.flexWrap = "wrap";
    contactContainer.style.justifyContent = "center";
  
    const contactForm = document.querySelector(".contact-form");
    const contactInfo = document.querySelector(".contact-info");
  
    contactForm.style.flex = "1 1 400px";
    contactForm.style.maxWidth = "500px";
    contactInfo.style.flex = "1 1 400px";
    contactInfo.style.maxWidth = "500px";
  
    const contactFormTitle = contactForm.querySelector("h2");
    contactFormTitle.style.fontSize = "28px";
    contactFormTitle.style.marginBottom = "20px";
    contactFormTitle.style.color = "#e62e00";
  
    const contactInfoTitle = contactInfo.querySelector("h2");
    contactInfoTitle.style.fontSize = "28px";
    contactInfoTitle.style.marginBottom = "20px";
    contactInfoTitle.style.color = "#e62e00";
  
    const contactFormElements = contactForm.querySelectorAll("input, textarea");
    contactFormElements.forEach(input => {
      input.style.padding = "12px";
      input.style.border = "1px solid #ccc";
      input.style.borderRadius = "8px";
      input.style.fontSize = "16px";
    });
  
    const contactFormButton = contactForm.querySelector("button");
    contactFormButton.style.background = "#e62e00";
    contactFormButton.style.color = "white";
    contactFormButton.style.border = "none";
    contactFormButton.style.padding = "12px";
    contactFormButton.style.borderRadius = "8px";
    contactFormButton.style.fontSize = "16px";
    contactFormButton.style.cursor = "pointer";
    contactFormButton.style.transition = "background 0.3s ease";
  
    contactFormButton.addEventListener("mouseenter", function () {
      contactFormButton.style.background = "#c62800";
    });
  
    contactFormButton.addEventListener("mouseleave", function () {
      contactFormButton.style.background = "#e62e00";
    });
  
    const contactInfoParagraphs = contactInfo.querySelectorAll("p");
    contactInfoParagraphs.forEach(p => {
      p.style.marginBottom = "10px";
      p.style.fontSize = "16px";
      p.style.color = "#444";
    });
  
    const contactInfoIframe = contactInfo.querySelector("iframe");
    contactInfoIframe.style.border = "none";
    contactInfoIframe.style.borderRadius = "10px";
    contactInfoIframe.style.marginTop = "20px";
  
    // Footer Styling
    const footer = document.querySelector("footer");
    footer.style.background = "#e62e00";
    footer.style.color = "white";
    footer.style.textAlign = "center";
    footer.style.padding = "20px";
  
    // Responsive Styles
    const mediaQuery = window.matchMedia("(max-width: 768px)");
  
    mediaQuery.addListener(function (e) {
      if (e.matches) {
        contactContainer.style.flexDirection = "column";
      } else {
        contactContainer.style.flexDirection = "row";
      }
    });
  
    // Initialize media query listener
    if (mediaQuery.matches) {
      contactContainer.style.flexDirection = "column";
    }
  });

  

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("body").forEach(el => {
      el.style.margin = "0";
      el.style.padding = "0";
      el.style.boxSizing = "border-box";
      el.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
      el.style.background = "#fff";
      el.style.color = "#000";
      el.style.lineHeight = "1.6";
    });
  
    document.querySelectorAll(".navbar").forEach(el => {
      el.style.display = "flex";
      el.style.justifyContent = "space-between";
      el.style.alignItems = "center";
      el.style.padding = "20px";
      el.style.background = "#e62e00";
      el.style.color = "white";
      el.style.flexWrap = "wrap";
    });
  
    document.querySelectorAll(".navbar .logo").forEach(el => {
      el.style.fontSize = "24px";
      el.style.fontWeight = "bold";
    });
  
    document.querySelectorAll(".nav-links").forEach(el => {
      el.style.listStyle = "none";
      el.style.display = "flex";
      el.style.gap = "20px";
      el.style.flexWrap = "wrap";
    });
  
    document.querySelectorAll(".nav-links a").forEach(el => {
      el.style.textDecoration = "none";
      el.style.color = "white";
      el.style.fontWeight = "500";
    });
  
    document.querySelectorAll(".hero").forEach(el => {
      el.style.background = "url('https://images.unsplash.com/photo-1571019613570-0b102fa9bdb3?auto=format&fit=crop&w=1500&q=80') no-repeat center center/cover";
      el.style.height = "90vh";
      el.style.display = "flex";
      el.style.justifyContent = "center";
      el.style.alignItems = "center";
      el.style.color = "white";
      el.style.textAlign = "center";
      el.style.padding = "0 20px";
    });
  
    document.querySelectorAll(".hero-content h1").forEach(el => {
      el.style.fontSize = "48px";
      el.style.marginBottom = "20px";
      el.style.color = "#000";
    });
  
    document.querySelectorAll(".hero-content p").forEach(el => {
      el.style.fontSize = "18px";
      el.style.marginBottom = "20px";
      el.style.color = "#000";
    });
  
    document.querySelectorAll(".hero-content .btn").forEach(el => {
      el.style.padding = "12px 24px";
      el.style.background = "#e62e00";
      el.style.color = "white";
      el.style.textDecoration = "none";
      el.style.borderRadius = "6px";
      el.style.marginTop = "20px";
      el.style.display = "inline-block";
    });
  
    document.querySelectorAll(".features").forEach(el => {
      el.style.padding = "50px 20px";
      el.style.background = "#f9f9f9";
      el.style.textAlign = "center";
    });
  
    document.querySelectorAll(".features h2").forEach(el => {
      el.style.marginBottom = "30px";
      el.style.fontSize = "32px";
    });
  
    document.querySelectorAll(".feature-grid").forEach(el => {
      el.style.display = "flex";
      el.style.justifyContent = "space-around";
      el.style.flexWrap = "wrap";
      el.style.gap = "30px";
    });
  
    document.querySelectorAll(".feature-box").forEach(el => {
      el.style.background = "white";
      el.style.padding = "20px";
      el.style.maxWidth = "300px";
      el.style.borderRadius = "10px";
      el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    });
  
    document.querySelectorAll("footer").forEach(el => {
      el.style.background = "#e62e00";
      el.style.color = "white";
      el.style.textAlign = "center";
      el.style.padding = "20px";
    });
  });

  


  document.addEventListener("DOMContentLoaded", function () {
    // Basic Reset
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
    document.body.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
    document.body.style.lineHeight = "1.6";
  
    // Navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      Object.assign(navbar.style, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#e62e00",
        color: "white",
        flexWrap: "wrap"
      });
    }
  
    const logo = document.querySelector(".navbar .logo");
    if (logo) {
      logo.style.fontSize = "24px";
      logo.style.fontWeight = "bold";
    }
  
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) {
      Object.assign(navLinks.style, {
        listStyle: "none",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      });
    }
  
    document.querySelectorAll(".nav-links a").forEach(link => {
      Object.assign(link.style, {
        textDecoration: "none",
        color: "white",
        fontWeight: "500"
      });
    });
  
    // Page Banner
    const banner = document.querySelector(".page-banner");
    if (banner) {
      Object.assign(banner.style, {
        background: "url('https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=1500&q=80') no-repeat center center/cover",
        color: "rgb(0, 0, 0)",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 10px"
      });
    }
  
    const bannerHeading = document.querySelector(".page-banner h1");
    if (bannerHeading) {
      bannerHeading.style.fontSize = "42px";
      bannerHeading.style.marginBottom = "10px";
    }
  
    // Plans Section
    const plansSection = document.querySelector(".plans-section");
    if (plansSection) {
      Object.assign(plansSection.style, {
        padding: "60px 20px",
        background: "#f8f8f8",
        textAlign: "center"
      });
    }
  
    const plansGrid = document.querySelector(".plans-grid");
    if (plansGrid) {
      Object.assign(plansGrid.style, {
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "40px"
      });
    }
  
    document.querySelectorAll(".plan-card").forEach(card => {
      Object.assign(card.style, {
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        padding: "30px 20px",
        maxWidth: "280px",
        flex: "1 1 260px",
        transition: "transform 0.3s ease",
        borderTop: "4px solid transparent"
      });
    });
  
    document.querySelectorAll(".plan-card h3").forEach(h3 => {
      h3.style.fontSize = "22px";
      h3.style.marginBottom = "15px";
      h3.style.color = "#e62e00";
    });
  
    document.querySelectorAll(".plan-card .price").forEach(price => {
      price.style.fontSize = "32px";
      price.style.marginBottom = "15px";
      price.style.color = "#000";
    });
  
    document.querySelectorAll(".plan-card .price span").forEach(span => {
      span.style.fontSize = "16px";
      span.style.color = "#666";
    });
  
    document.querySelectorAll(".plan-card ul").forEach(ul => {
      ul.style.listStyle = "none";
      ul.style.padding = "0";
      ul.style.marginBottom = "20px";
      ul.style.textAlign = "left";
    });
  
    document.querySelectorAll(".plan-card ul li").forEach(li => {
      li.style.marginBottom = "10px";
      li.style.paddingLeft = "20px";
      li.style.position = "relative";
      li.style.color = "#444";
      li.textContent = `✔ ${li.textContent}`;
    });
  
    document.querySelectorAll(".plan-card .btn").forEach(btn => {
      Object.assign(btn.style, {
        padding: "10px 20px",
        background: "#e62e00",
        color: "white",
        textDecoration: "none",
        borderRadius: "6px",
        display: "inline-block",
        fontWeight: "500"
      });
    });
  
    document.querySelectorAll(".plan-card.featured").forEach(card => {
      card.style.borderTopColor = "#e62e00";
      card.style.boxShadow = "0 8px 20px rgba(230, 46, 0, 0.1)";
    });
  
    // Footer
    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.background = "#e62e00";
      footer.style.color = "white";
      footer.style.textAlign = "center";
      footer.style.padding = "20px";
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Global Reset
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
    document.body.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
    document.body.style.lineHeight = "1.6";
  
    // Navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      Object.assign(navbar.style, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#e62e00",
        color: "white",
        flexWrap: "wrap",
      });
    }
  
    const logo = document.querySelector(".navbar .logo");
    if (logo) {
      logo.style.fontSize = "24px";
      logo.style.fontWeight = "bold";
    }
  
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) {
      Object.assign(navLinks.style, {
        listStyle: "none",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      });
    }
  
    document.querySelectorAll(".nav-links a").forEach(link => {
      Object.assign(link.style, {
        textDecoration: "none",
        color: "white",
        fontWeight: "500",
      });
    });
  
    // Page Banner
    const banner = document.querySelector(".page-banner");
    if (banner) {
      Object.assign(banner.style, {
        background: "url('https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=1500&q=80') no-repeat center center/cover",
        color: "rgb(0,0,0)",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 10px",
      });
    }
  
    const bannerHeading = document.querySelector(".page-banner h1");
    if (bannerHeading) {
      bannerHeading.style.fontSize = "42px";
      bannerHeading.style.marginBottom = "10px";
    }
  
    // Services Section
    const services = document.querySelector(".services-section");
    if (services) {
      Object.assign(services.style, {
        padding: "60px 20px",
        background: "#fff",
        textAlign: "center",
      });
    }
  
    const sectionTitle = document.querySelector(".section-title");
    if (sectionTitle) {
      sectionTitle.style.fontSize = "32px";
      sectionTitle.style.marginBottom = "40px";
    }
  
    const servicesGrid = document.querySelector(".services-grid");
    if (servicesGrid) {
      Object.assign(servicesGrid.style, {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
      });
    }
  
    document.querySelectorAll(".service-card").forEach(card => {
      Object.assign(card.style, {
        background: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
        maxWidth: "280px",
        textAlign: "center",
        padding: "20px",
        transition: "transform 0.3s ease",
      });
  
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
      });
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
      });
    });
  
    document.querySelectorAll(".service-card img").forEach(img => {
      Object.assign(img.style, {
        width: "100%",
        borderRadius: "8px",
        height: "180px",
        objectFit: "cover",
        marginBottom: "15px",
      });
    });
  
    document.querySelectorAll(".service-card h3").forEach(h3 => {
      h3.style.fontSize = "20px";
      h3.style.marginBottom = "10px";
      h3.style.color = "#e62e00";
    });
  
    document.querySelectorAll(".service-card p").forEach(p => {
      p.style.fontSize = "15px";
      p.style.color = "#555";
    });
  
    // Footer
    const footer = document.querySelector("footer");
    if (footer) {
      Object.assign(footer.style, {
        background: "#e62e00",
        color: "white",
        textAlign: "center",
        padding: "20px",
      });
    }
  });
    
<template>
    <footer class="footer">
      <div class="footer-content">
        <!-- Linke Seite: Logo und Adresse -->
        <div class="footer-left">
          <img src="/public/assets/images/logo_schwarz.png" alt="SundSpace Logo" class="footer-logo" />
          <address class="footer-address">
            <strong>SUNDSPACE e.V.</strong><br />
            Zur Schwedenschanze 15<br />
            18435 Stralsund
          </address>
        </div>
        
        <!-- Rechte Seite: Navigation -->
        <div class="footer-right">
          <h3>Internes</h3>
          <ul class="footer-nav">
            <li>
              <router-link to="/impressum" exact-active-class="active">Impressum</router-link>
            </li>
            <li>
              <router-link to="/datenschutzerklärung" exact-active-class="active">Datenschutzerklärung</router-link>
            </li>
            <li>
              <router-link to="/sponsoring" exact-active-class="active">Sponsoren</router-link>
            </li>
            <li>
              <router-link to="/kontakt" exact-active-class="active">Kontakt</router-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #000; /* Schwarzer Hintergrund */
    color: #fff; /* Weißer Text */
    padding: 2rem;
    display: flex;
    justify-content: space-between;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer-logo {
    width: 20rem; /* Logo-Breite anpassen */
    margin-bottom: 1rem;
  }
  
  .footer-address {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .footer-right {
    display: flex;
    flex-direction: column;
  }
  
  .footer-right h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .footer-nav {
    list-style: none;
    padding: 0;
  }
  
  .footer-nav li {
    margin-bottom: 0.5rem;
    position: relative;
  }
  
  .footer-nav a {
    color: blueviolet;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
  }
  </style>
  
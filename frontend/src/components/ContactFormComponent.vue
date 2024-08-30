<template>
    <section class="contact">
      <h2 class="section-title">Kontaktieren Sie uns</h2>
      <p>Wenn Sie mehr über ein Sponsoring des Teams SUNSPACE erfahren möchten, kontaktieren Sie uns gerne per E-Mail:</p>
      <a href="mailto:Sundspace@hochschule-stralsund.de" class="contact-email">Sundspace@hochschule-stralsund.de</a>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactFormComponents",
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 40px 20px;
    background-color: #f4f4f4;
    text-align: center;
  }
  
  .section-title {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .contact-email {
    display: inline-block;
    margin-top: 10px;
    font-size: 1.2em;
    color: #007bff;
    text-decoration: none;
    border-bottom: 2px solid #007bff;
    transition: color 0.3s ease, border-color 0.3s ease;
  }
  
  .contact-email:hover {
    color: #0056b3;
    border-color: #0056b3;
  }
  </style>
  
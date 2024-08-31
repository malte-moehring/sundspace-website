<template>
    <div class="contact-info">
        <h2>Kontaktiere Uns</h2>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p><a :href="mapsLink" target="_blank" rel="noopener">{{ address }}</a></p>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p><a :href="'mailto:' + email">{{ email }}</a></p>
        </div>
        <div class="info-item">
          <i class="fab fa-instagram"></i>
          <p><a :href="instagramLink" target="_blank" rel="noopener">{{ instagramHandle }}</a></p>
        </div>
      </div>
</template>

<script lang="ts">
import '@fortawesome/fontawesome-free/css/all.css';

export default {
    name: 'ContactComponent',
    data() {
        return {
            address: 'Zur Schwedenschanze 15, 18435 Stralsund',
            email: 'sundspace@hochschule-stralsund.de',
            instagramHandle: '@sundspace',
            instagramLink: 'https://www.instagram.com/sund.space',
            mapsLink: 'https://www.google.de/maps/place/Zur+Schwedenschanze+15,+18435+Stralsund'
        }
    }
}
</script>

<style scoped lang="css">
.contact-info {
    position: relative; /* This will ensure it stacks above the splash screen */
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    background-color: rgba(39, 39, 39, 0.75); /* Slight transparency for visual effect */
    border-radius: 8px;
    text-align: left;
    z-index: 10; /* Ensure it is above the splash-screen */
    backdrop-filter: blur(10px); /* Optional: Blurs the background for a nice effect */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow to separate from background */
    margin-top: 20vh; /* Adjust the margin to suit the design */
}
  
h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: #fddb3a;
}
  
  .info-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .info-item i {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: black;
  }
  
  p {
    margin: 0;
    font-size: 1rem;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
</style>
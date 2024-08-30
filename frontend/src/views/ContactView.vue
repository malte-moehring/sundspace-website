<template>
  <div class="container">
    <div class="splash-screen">
      <img :src="banner" alt="Sundspace Team Banner">
    </div>
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
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import banner from '../../../src/assets/pics/sundspace-team-banner.png';

export default {
  data() {
    return {
      address: 'Zur Schwedenschanze 15, 18435 Stralsund',
      email: 'sundspace@hochschule-stralsund.de',
      instagramHandle: '@sundspace',
      instagramLink: 'https://www.instagram.com/sund.space',
      mapsLink: 'https://www.google.de/maps/place/Zur+Schwedenschanze+15,+18435+Stralsund',
      banner
    };
  }
};
</script>

<style scoped>
.container {
  position: relative; /* Set the container to relative so child elements can be positioned */
  min-height: 100vh; /* Ensure it takes full height to display the image properly */
}

.splash-screen {
  position: absolute; /* Position the image absolutely within the container */
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Crop overflow to keep image clean */
  z-index: 0; /* Behind the contact-info */
}

.splash-screen img {
  width: 90vw;
  height: auto;
  object-fit: cover; /* Cover the div with the image */
}

.splash-screen::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%; /* Control the height of the blur */
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent); /* Adjust colors to blend */
  filter: blur(10px); /* Adjust blur intensity */
  pointer-events: none; /* Ensure it doesn't interfere with interactions */
  z-index: 1; /* Make sure it sits above the image */
}

.contact-info {
  position: relative; /* This will ensure it stacks above the splash screen */
  max-width: 500px;
  margin: 0 auto;
  top: 45vh;
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

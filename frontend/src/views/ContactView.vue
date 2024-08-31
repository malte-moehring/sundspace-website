<template>
  <div class="container">
    <div class="splash-screen">
      <img :src="banner" alt="Sundspace Team Banner" />
    </div>
    <div class="content-wrapper">
      <ContactComponent />
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import banner from '../../../src/assets/pics/sundspace-team-banner.png';
import ContactComponent from '../components/ContactComponent.vue';

export default {
  data() {
    return {
      address: 'Zur Schwedenschanze 15, 18435 Stralsund',
      email: 'sundspace@hochschule-stralsund.de',
      instagramHandle: '@sundspace',
      instagramLink: 'https://www.instagram.com/sund.space',
      mapsLink:
        'https://www.google.de/maps/place/Zur+Schwedenschanze+15,+18435+Stralsund',
      banner,
    };
  },
  components: {
    ContactComponent
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
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    transparent
  ); /* Adjust colors to blend */
  filter: blur(10px); /* Adjust blur intensity */
  pointer-events: none; /* Ensure it doesn't interfere with interactions */
  z-index: 1; /* Make sure it sits above the image */
}

.content-wrapper {
  position: relative;
  top: 20rem;
}
</style>

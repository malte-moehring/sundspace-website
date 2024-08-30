<template>
  <div class="splash-screen">
    <img :src="banner" alt="Sundspace Team Banner">
  </div>
  <div class="contact-info">
    <h2>Kontaktiere Uns</h2>
    <div class="info-item">
      <i class="fas fa-map-marker-alt"></i>
      <p>{{ address }}</p>
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

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import banner from '../../../src/assets/pics/pic_one.png';

export default {
  data() {
    return {
      address: 'Zur Schwedenschanze 15, 18435 Stralsund',
      email: 'sundspace@hochschule-stralsund.de',
      instagramHandle: '@sundspace',
      instagramLink: 'https://www.instagram.com/sund.space',
      banner
    };
  }
};
</script>

<style scoped>
.splash-screen {
  height: 50vh;
}

.contact-info {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: left;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.info-item {
  display: flex;
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

<template>
  <div id="app">
    <SponsorHeadComponent />
    <SponsorshipPackages :packages="packages" />
    <ContactComponent />
  </div>
</template>

<script>
import SponsorHeadComponent from '../components/SponsorHeadComponent.vue';
import SponsorshipPackages from '../components/SponsorshipPackages.vue';
import ContactComponent from '../components/ContactComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      packages: [
        {
          name: 'SUPER HEAVY',
          price: 'größer 5.000 €',
          benefits: [
            'Logo Promo',
            'Website',
            'Social Media',
            'Hoody',
            'Logo Rakete',
          ],
        },
        {
          name: 'GOLD',
          price: '2.000 bis 5.000 €',
          benefits: ['Logo Promo', 'Website', 'Social Media', 'Hoody'],
        },
        {
          name: 'SILBER',
          price: '1.000 bis 2.000 €',
          benefits: ['Logo Promo', 'Website'],
        },
        {
          name: 'BRONZE',
          price: 'Know-How / 1.000 € / Produkte zum Test',
          benefits: [],
        },
      ],
      benefits: [
        'Logo Promo',
        'Website',
        'Social Media',
        'Hoody',
        'Logo Rakete',
      ],
    };
  },
  components: {
    SponsorHeadComponent,
    SponsorshipPackages,
    ContactComponent,
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  color: #333;
}

h2.section-title {
  margin-top: 0;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  color: #0056b3;
}
</style>

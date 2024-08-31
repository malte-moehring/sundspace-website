<template>
  <div id="app">
    <!-- Component displaying the header of the sponsor section -->
    <SponsorHeadComponent />
    <!-- Component for showing different sponsorship packages, passing the 'packages' data as a prop -->
    <SponsorshipPackages :packages="packages" />
    <!-- Component providing contact information -->
    <ContactComponent />
  </div>
</template>

<script>
// Importing the necessary components for the view
import SponsorHeadComponent from '../components/SponsorHeadComponent.vue';
import SponsorshipPackages from '../components/SponsorshipPackages.vue';
import ContactComponent from '../components/ContactComponent.vue';

export default {
  name: 'App', // Component name
  data() {
    return {
      // Array of sponsorship packages to be displayed
      packages: [
        {
          name: 'SUPER HEAVY',
          price: 'größer 5.000 €', // Price range for this package
          benefits: [ // List of benefits included in this package
            'Logo Promo',
            'Website',
            'Social Media',
            'Hoody',
            'Logo Rakete',
          ],
        },
        {
          name: 'GOLD',
          price: '2.000 bis 5.000 €', // Price range for this package
          benefits: [
            'Logo Promo',
            'Website',
            'Social Media',
            'Hoody',
          ],
        },
        {
          name: 'SILBER',
          price: '1.000 bis 2.000 €', // Price range for this package
          benefits: [
            'Logo Promo',
            'Website',
          ],
        },
        {
          name: 'BRONZE',
          price: 'Know-How / 1.000 € / Produkte zum Test', // Price or contribution details
          benefits: [], // No benefits listed for this package
        },
      ],
      // List of benefits available across different packages
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
    SponsorHeadComponent, // Registering the SponsorHeadComponent component
    SponsorshipPackages, // Registering the SponsorshipPackages component
    ContactComponent, // Registering the ContactComponent component
  },
};
</script>

<style>
/* General styles for the app container */
#app {
  font-family: 'Roboto', sans-serif; /* Font style for the app */
  color: #333; /* Text color */
}

/* Styling for section titles */
h2.section-title {
  margin-top: 0; /* Removing top margin */
}

/* Styling for anchor tags */
a {
  color: #007bff; /* Default link color */
  text-decoration: none; /* Removing underline from links */
}

/* Styling for anchor tags on hover */
a:hover {
  color: #0056b3; /* Link color when hovered */
}
</style>

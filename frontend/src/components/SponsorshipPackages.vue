<template>
    <section class="packages">
      <h2 class="section-title">Unsere Sponsoring-Pakete</h2>
      <div class="package-list">
        <div v-for="(packageItem, index) in packages" :key="index" class="package-card">
          <h3 class="package-title">{{ packageItem.name }}</h3>
          <p class="package-price">{{ packageItem.price }}</p>
          <ul class="package-benefits">
            <li v-for="(benefit, idx) in packageItem.benefits" :key="idx">{{ benefit }}</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "SponsorshipPackages",
    props: {
      packages: Array
    }
  };
  </script>
  
  <style scoped>
  .packages {
    padding: 40px 20px;
    background-color: #f8f8f8;
  }
  
  .section-title {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .package-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .package-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    width: 300px;
    transition: transform 0.3s ease;
  }
  
  .package-card:hover {
    transform: scale(1.05);
  }
  
  .package-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .package-price {
    color: #007bff;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .package-benefits {
    list-style-type: none;
    padding: 0;
  }
  
  .package-benefits li {
    padding: 5px 0;
    border-bottom: 1px solid #eee;
  }
  
  .package-benefits li:last-child {
    border-bottom: none;
  }
  </style>
  
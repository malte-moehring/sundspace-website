<template>
  <div class="team-container">
    <div 
      class="team-member" 
      v-for="(member, index) in team" 
      :key="index" 
      :class="{ 'odd-row': isOddRow(index) }"
    >
      <img :src="member.image" alt="team member" />
      <h3>{{ member.name }}</h3>
      <p>{{ member.role }}</p>
      <div class="tags">
        <span v-for="(tag, tagIndex) in member.tags" :key="tagIndex" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Alice Müller', role: 'Frontend Developer', image: 'path/to/image1.jpg', tags: ['Frontend', 'Vue.js'] },
        { name: 'Bob Schmidt', role: 'Backend Developer', image: 'path/to/image2.jpg', tags: ['Backend', 'Node.js'] },
        { name: 'Carla Weber', role: 'UX/UI Designer', image: 'path/to/image3.jpg', tags: ['Design', 'UX/UI'] },
        { name: 'David Becker', role: 'Project Manager', image: 'path/to/image4.jpg', tags: ['Management', 'Scrum'] },
        { name: 'Eva Lange', role: 'Data Scientist', image: 'path/to/image5.jpg', tags: ['Data', 'Machine Learning'] },
        { name: 'Frank Meyer', role: 'DevOps Engineer', image: 'path/to/image6.jpg', tags: ['DevOps', 'Cloud'] },
      ],
    };
  },
  methods: {
    isOddRow(index) {
      return Math.floor(index / 3) % 2 === 1;
    },
  },
};
</script>

<style scoped>
.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.team-member img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}

.tag {
  background-color: #555;
  color: #fff;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 12px;
}

.odd-row {
  margin-top: 20px; /* Adjust this value to achieve the desired offset */
}
</style>

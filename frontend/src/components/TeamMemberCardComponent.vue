<template>
  <div class="team-member-card">
    <img :src="imageSrc" :alt="member.name" class="member-image" />
    <div class="member-details">
      <div class="name-role">
        <h3 class="name">{{ member.name }}</h3>
        <p class="role">{{ member.role }}</p>
      </div>
      <div class="tags-container" :class="{ 'expanded': showAllTags }">
        <span
          v-for="(tag, index) in visibleTags"
          :key="index"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showAllTags: false,
      imageSrc: '' // Placeholder for the image source URL
    };
  },
  computed: {
    visibleTags() {
      const maxTags = this.showAllTags ? this.member.tags.length : 2;
      return this.member.tags.slice(0, maxTags);
    },
    hasMoreTags() {
      return this.member.tags.length > 2;
    }
  },
  methods: {
    getImagePath(imageName: string | undefined) {
      console.log(imageName);
      if (!imageName) {
        // Use placeholder if imageName is undefined or empty
        return new URL('../../../src/assets/pics/logo_schwarz.png', import.meta.url).href;
      } else {
        return new URL(`../../../src/assets/pics/team/${imageName}`, import.meta.url).href;
      }
    }
  },
  created() {
    this.imageSrc = this.getImagePath(this.member.image);
  }
};
</script>

<style scoped>
.team-member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s;
  max-width: 300px;
}

.member-image {
  width: 250px;
  height: auto;
  border-radius: 20px;
  margin-bottom: 10px;
}

.member-details {
  text-align: center;
}

.name-role {
  margin-bottom: 10px;
}

.name {
  font-weight: bold;
  margin: 0;
}

.role {
  margin: 0;
  color: #777;
}

.tags-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  overflow: hidden;
}

.tag {
  background-color: #555;
  color: #fff;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  display: inline-block;
}

.team-member-card:hover {
  transform: scale(1.03);
}
</style>

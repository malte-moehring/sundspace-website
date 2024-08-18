<template>
  <div class="overlay" @click.self="closeOverlay">
    <div class="overlay-content" @click.stop>
      <img :src="imageSrc" alt="Profile picture" class="profile-image" />
      <div class="profile-info">
        <div class="info-header">
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
        <div class="tags">
          <div class="tags-container">
            <span v-for="(tag, index) in visibleTags" :key="index" class="tag">{{ tag }}</span>
          </div>
        </div>
        <p class="description">{{ member.description }}</p>
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
      imageSrc: '' // Placeholder for image URL
    };
  },
  computed: {
    visibleTags() {
      const maxTags = 9; // 3 rows x 3 tags per row
      return this.showAllTags ? this.member.tags : this.member.tags.slice(0, maxTags);
    },
    hasMoreTags() {
      return this.member.tags.length > 9;
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
    },
    closeOverlay() {
      this.$emit('close');
    },
    toggleTags() {
      this.showAllTags = !this.showAllTags;
    }
  },
  created() {
    this.imageSrc = this.getImagePath(this.member.image);
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 1000px; /* Adjust as needed */
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: row;
}

.profile-image {
  width: 50%;
  height: auto;
  object-fit: cover;
}

.profile-info {
  width: 50%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-header {
  margin-bottom: 15px;
}

.profile-info h3 {
  margin: 0;
  font-size: 1.5em;
}

.profile-info p {
  margin: 5px 0 0;
  color: #777;
}

.tags {
  margin-top: 15px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tags-container.expanded {
  max-height: none;
}

.tag {
  background-color: #555;
  color: #fff;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 12px;
}

.toggle-tags-btn {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

.description {
  margin-top: 20px;
}
</style>

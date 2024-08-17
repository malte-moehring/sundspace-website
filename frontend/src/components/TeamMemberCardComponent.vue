<template>
  <div class="team-member-card" @click="showDetails">
    <img :src="member.image" alt="Team Member Photo" />
    <h3>{{ member.name }}</h3>
    <p>{{ member.role }}</p>
    <div class="tags">
      <span v-for="tag in member.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: Object,
  },
  methods: {
    showDetails() {
      this.$emit('view-profile', this.member);
    },
  },
};
</script>

<style scoped>
.team-member-card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
  padding: 16px;
  background-color: #fff;
  margin-right: -16px;
}
.team-member-card:hover {
  transform: translateY(-5px);
}
.tags {
  margin-top: 10px;
}
.tag {
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
  font-size: 12px;
}

img {
  width: 200px !important;
  height: 200px !important;
  border-radius: 20px;
}
</style>

<template>
  <div class="team-intro"></div>
  <div class="team-view">
    <div class="tag-filters">
      <div class="tag-container" :class="{ 'expanded': showAllTags }">
        <span
          v-for="(tag, index) in filteredTags"
          :key="index"
          class="tag"
          @click="selectTag(tag)"
        >
          {{ tag }}
        </span>
      </div>
      <button v-if="hasMoreTags" @click="toggleTags" class="toggle-tags-btn">
        {{ showAllTags ? 'Weniger' : 'Mehr' }}
      </button>
    </div>
    <div class="team-container">
      <TeamMemberCardComponent
        v-for="member in filteredMembers"
        :key="member.id"
        :member="member"
        @click="openOverlay(member)"
      />
      <ProfileOverlay
        v-if="selectedMember"
        :member="selectedMember"
        @close="closeOverlay"
      />
    </div>
  </div>
</template>

<script>
import TeamMemberCardComponent from '../components/TeamMemberCardComponent.vue';
import ProfileOverlay from '../components/TeamMemberOverlayComponent.vue';
import members from '../../../src/assets/json/members.json';

export default {
  components: {
    TeamMemberCardComponent,
    ProfileOverlay
  },
  data() {
    return {
      members,
      selectedMember: null,
      selectedTag: null,
      showAllTags: false
    };
  },
  computed: {
    tags() {
      const tagsSet = new Set();
      this.members.forEach(member => {
        member.tags.forEach(tag => tagsSet.add(tag));
      });
      return Array.from(tagsSet);
    },
    filteredTags() {
      return this.tags;
    },
    filteredMembers() {
      if (!this.selectedTag) return this.members;
      return this.members.filter(member =>
        member.tags.includes(this.selectedTag)
      );
    },
    hasMoreTags() {
      return this.tags.length > 9;
    }
  },
  methods: {
    selectTag(tag) {
      this.selectedTag = this.selectedTag === tag ? null : tag;
    },
    toggleTags() {
      this.showAllTags = !this.showAllTags;
    },
    openOverlay(member) {
      this.selectedMember = member;
    },
    closeOverlay() {
      this.selectedMember = null;
    }
  }
};
</script>

<style scoped>
.team-intro {
  height: 100vh;
  width: 100vw;
}

.team-view {
  padding: 20px;
}

.tag-filters {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  max-height: 65px; /* Approx 3 rows of tags */
  overflow: hidden;
  margin-left: 100px;
  margin-right: 100px; /* Space between tags container and button */
}

.tag-container.expanded {
  max-height: none; /* Remove height restriction */
}

.tag {
  background-color: #555;
  color: #fff;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
}

.toggle-tags-btn {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  margin-left: auto; /* Push button to the right */
  margin-right: 100px;
}

.team-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  margin-left: 200px;
  margin-right: 200px;
}

.team-member-card {
  transition: transform 0.3s;
}

.team-member-card:hover {
  transform: scale(1.03);
}
</style>

<template>
  <div class="team-intro">
    <img class="intro_img" :src="introImage" alt="team intro sundspace" />
    <p>
      Zentrale Bedeutung des Vereins ist eine effiziente Systementwicklung, an
      der sowohl die Studierenden als auch die Professoren und Professorinnen
      der Hochschule Stralsund beteiligt sind.
      <br />
      Dazu befolgt das Team eine Koordinationsstrategie, in der die
      Aufgabenbereiche in den jeweiligen Abteilungen Elektrotechnik und
      Informatik, Maschinenbau und Management unterteilt werden.
    </p>
  </div>
  <div class="team-view">
    <div class="tag-filters">
      <div class="tag-container">
        <span
          v-for="(tag, index) in filteredTags"
          :key="index"
          :class="['tag', { 'active-tag': tag === selectedTag }]"
          @click="selectTag(tag)"
        >
          {{ tag }}
        </span>
      </div>
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
import introImage from '../../../src/assets/pics/team/intro_image.png';

export default {
  components: {
    TeamMemberCardComponent,
    ProfileOverlay,
  },
  data() {
    return {
      members,
      selectedMember: null,
      selectedTag: null,
      introImage,
    };
  },
  computed: {
    tags() {
      const tagsSet = new Set();
      this.members.forEach((member) => {
        // Rollen hinzufügen
        tagsSet.add(member.role);
        // Bestehende Tags hinzufügen
        member.tags.forEach((tag) => tagsSet.add(tag));
      });
      return Array.from(tagsSet).sort((a, b) => a.localeCompare(b));
    },
    filteredTags() {
      return this.tags;
    },
    filteredMembers() {
      if (!this.selectedTag) return this.members;
      return this.members.filter(
        (member) =>
          member.tags.includes(this.selectedTag) ||
          member.role === this.selectedTag
      );
    },
  },
  methods: {
    selectTag(tag) {
      this.selectedTag = this.selectedTag === tag ? null : tag;
    },
    openOverlay(member) {
      this.selectedMember = member;
    },
    closeOverlay() {
      this.selectedMember = null;
    },
    sortAndAssignIds(members) {
      return members
        .sort((a, b) => a.name.localeCompare(b.name)) // Sortiere alphabetisch nach Name
        .map((member, index) => ({
          ...member,
          id: index + 1, // Neue ID zuweisen, beginnend bei 1
        }));
    },
  },
  created() {
    this.members = this.sortAndAssignIds(members);
  },
};
</script>

<style scoped>
.team-intro {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-intro p {
  color: #fff;
  padding: 20px;
  font-size: 24;
  font-style: italic;
  max-width: 30rem;
}

.intro_img {
  width: 45rem;
  height: auto;
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
  margin-left: 75px;
  margin-right: 75px;
}

.tag {
  background-color: #555;
  color: #fff;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
}

.active-tag {
  background-color: #fddb3a; /* Farbe für aktiven Tag */
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

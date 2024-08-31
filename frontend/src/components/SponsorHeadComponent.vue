<template>
  <header class="header">
    <h1 class="title">Sponsor:in werden</h1>
    <blockquote class="quote">
      "Mut steht am Anfang des Handelns, Glück am Ende." - Demokrit
    </blockquote>
    <p class="description">
      Mit der Gründung von SUNSPACE möchten wir vielen jungen Menschen die
      Möglichkeit zu einem ersten Schritt in die Raumfahrt ermöglichen. Mutig,
      wo es doch in Stralsund keinen Studiengang der Luft- und Raumfahrttechnik
      gibt. Und doch, oder gerade deshalb, arbeitet das gesamte Team ehrgeizig
      Hand in Hand an der Verwirklichung unseres gemeinsamen Traums, dem
      erfolgreichen Start unserer Rakete. Durch ihr Engagement als Sponsoren und
      Partner können sie diesen Traum in die Realität umsetzen und dem Team am
      Ziel seiner Reise großes Glück bescheren.
    </p>
  </header>
</template>

<script>
export default {
  name: 'SponsorHeadComponent',
};
</script>

<style scoped>
.header {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-weight: bold;
  font-size: 5em;
  margin-bottom: 10px;
  color: #fddb3a;
}

.quote {
  font-style: italic;
  margin-bottom: 20px;
  color: #999;
}

.description {
  font-size: 1.1em;
  line-height: 1.6;
  padding-left: 15rem;
  padding-right: 15rem;
}
</style>

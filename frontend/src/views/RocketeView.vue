<template>
  <main>
    <div class="rocket-info">
      <h2>Siren</h2>
      <p>
        Die Mission Fortuna ist SUNDSPACE’s erster großer Schritt in Richtung Sternenhimmel.  Mit „SIREN“, der ersten Rakete des Teams, möchte SUNDSPACE Fuß in der Raketen- und Raumfahrtforschung fassen. SIREN soll bereits im Jahr 2024 ihren ersten Testflug erfolgreich meistern, um im Jahr darauf dann am Wettbewerb teilnehemn zu können. Ihre Antriebseinheit wird durch ein eigens konzipiertes Hybridtriebwerk gebildet. Bei einem solchen Triebwerk wird in der Regel ein flüssiger Oxidator aus dem Tanksystem durch eine Struktur festen Brennstoffes geleitet. 
<br><br>
 Feststoffstruktur aus einem auf Kohlenstoff basierendem Brennstoff (Bei uns PE, HTPB oder Paraffin) geleitet. Die Festlegung auf Lachgas fiel bei der Entscheidung besonders leicht, da es keine toxischen Eigenschaften besitzt, bei Raumtemperatur in flüssigem Zustand lagerbar ist und es erst nach dem Zerfall in Sauerstoff und Stickstoff hochreaktiv ist. Somit kann eine sichere Handhabung des Triebwerkes und des Oxidators gewährleistet werden, da eine Selbstzündung oder unkontrollierte Verbrennung ausgeschlossen werden kann. Das sich nun in der Entwicklung befindende Triebwerk muss selbstverständlich in einem geeigneten Gestell befestigt werden. Als Gestell wird uns ein teilmodulares Gerüst dienen, welches in die aus Faserverbundwerkstoffen oder Metallblech gefertigte Außenhaut eingeschoben werden kann. Um die Rakete während des Fluges zu stabilisieren, werden wir die Rakete mit insgesamt 8 Finnen ausstatten: 4x passive Finnen, die am unteren Ende der Rakete das Kippen der Rakete verhindern sollen und 4x aktive Finnen, die die Rotation der Rakete aktiv steuern können. Zu guter Letzt muss die Rakete wieder sicher zurück auf dem Boden landen. Dazu werden wir zunächst ein klassisches Fallschirmsystem aus einem kleinem Bremsfallschirm und einem großen Landefallschirm verwenden.
Wie erhoffen uns mit unserer Rakete nicht nur Einblicke in die Luft- und Raumfahrttechnik zu erhalten sondern möglicherweise auch einen kleinen Beitrag zur Erforschung von Hybridtriebwerken oder anderen Raketensystem leisten zu können.
      </p>
    </div>
    <div class="parent">
      <div class="parachute">

      </div>
      <div class="electronics">

      </div>
      <div class="engine">

      </div>
    </div>
    <div class="rocket-element">
      <Rocket></Rocket>
    </div>
  </main>
</template>

<script setup lang="ts">
import Rocket from '../components/RocketComponent.vue';
</script>

<style scoped lang="css">
.rocket-info {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.rocket-info h2, .rocket-info p {
  color: #dadada;
  padding-left: 10rem;
  padding-right: 10rem;
  text-align: center;
}

.rocket-info h2 {
  padding-top: 10rem;
  font-weight: bold;
  font-size: 48px;
}

.rocket-info p {
  padding-bottom: 10rem;
  font-style: italic;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, auto);
  gap: 8px;
}

.rocket-element {
  width: 100%;
  height: 100vh;
  max-width: 25vw;
  z-index: 0;
  overflow: hidden;
}

Rocket {
  height: 100%;
}
</style>

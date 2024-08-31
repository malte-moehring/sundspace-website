<template>
  <main>
    <div class="rocket-info">
      <h2>Siren</h2>
      <p>
        Die Mission Fortuna ist SUNDSPACE’s erster großer Schritt in Richtung
        Sternenhimmel. Mit „SIREN“, der ersten Rakete des Teams, möchte
        SUNDSPACE Fuß in der Raketen- und Raumfahrtforschung fassen. SIREN soll
        bereits im Jahr 2024 ihren ersten Testflug erfolgreich meistern, um im
        Jahr darauf dann am Wettbewerb teilnehemn zu können. Ihre
        Antriebseinheit wird durch ein eigens konzipiertes Hybridtriebwerk
        gebildet. Bei einem solchen Triebwerk wird in der Regel ein flüssiger
        Oxidator aus dem Tanksystem durch eine Struktur festen Brennstoffes
        geleitet.
        <br /><br />
        Feststoffstruktur aus einem auf Kohlenstoff basierendem Brennstoff (Bei
        uns PE, HTPB oder Paraffin) geleitet. Die Festlegung auf Lachgas fiel
        bei der Entscheidung besonders leicht, da es keine toxischen
        Eigenschaften besitzt, bei Raumtemperatur in flüssigem Zustand lagerbar
        ist und es erst nach dem Zerfall in Sauerstoff und Stickstoff
        hochreaktiv ist. Somit kann eine sichere Handhabung des Triebwerkes und
        des Oxidators gewährleistet werden, da eine Selbstzündung oder
        unkontrollierte Verbrennung ausgeschlossen werden kann. Das sich nun in
        der Entwicklung befindende Triebwerk muss selbstverständlich in einem
        geeigneten Gestell befestigt werden. Als Gestell wird uns ein
        teilmodulares Gerüst dienen, welches in die aus Faserverbundwerkstoffen
        oder Metallblech gefertigte Außenhaut eingeschoben werden kann. Um die
        Rakete während des Fluges zu stabilisieren, werden wir die Rakete mit
        insgesamt 8 Finnen ausstatten: 4x passive Finnen, die am unteren Ende
        der Rakete das Kippen der Rakete verhindern sollen und 4x aktive Finnen,
        die die Rotation der Rakete aktiv steuern können. Zu guter Letzt muss
        die Rakete wieder sicher zurück auf dem Boden landen. Dazu werden wir
        zunächst ein klassisches Fallschirmsystem aus einem kleinem
        Bremsfallschirm und einem großen Landefallschirm verwenden. Wie erhoffen
        uns mit unserer Rakete nicht nur Einblicke in die Luft- und
        Raumfahrttechnik zu erhalten sondern möglicherweise auch einen kleinen
        Beitrag zur Erforschung von Hybridtriebwerken oder anderen Raketensystem
        leisten zu können.
      </p>
    </div>
    <div class="parent">
      <div class="parachute info-element">
        <h2>Fallschirm</h2>
        <div class="line"></div>
        <p>
          Das Fallschirmsystem unserer Rakete, die für den EUROC-Wettbewerb
          entwickelt wurde, spielt eine entscheidende Rolle bei der sicheren
          Rückführung der Nutzlast. Nach dem Erreichen der geplanten Flughöhe
          von 3000 Metern wird das zweistufige Fallschirmsystem ausgelöst.
          Zunächst sorgt ein kleinerer Drogue-Fallschirm für die Stabilisierung
          und Verlangsamung des Abstiegs. Auf einer Höhe von etwa 500 Metern
          öffnet sich dann der Hauptfallschirm, um eine sanfte Landung der
          Rakete zu gewährleisten. Das gesamte System wurde sorgfältig berechnet
          und getestet, um sowohl die Strukturintegrität der Rakete als auch die
          Sicherheit der Nutzlast zu gewährleisten.
        </p>
      </div>
      <div class="electronics info-element">
        <h2>Elektronik</h2>
        <div class="line"></div>
        <p>
          Die On-Board-Elektronik unserer Rakete, die beim EUROC-Wettbewerb
          eingesetzt wird, ist ein zentraler Bestandteil für die erfolgreiche
          Mission. Sie umfasst ein Flight-Computer-System, das für die Steuerung
          und Überwachung aller kritischen Prozesse verantwortlich ist. Dazu
          gehören die Erfassung und Aufzeichnung von Flugdaten, die Auslösung
          des Fallschirmsystems in den richtigen Phasen sowie die Aktivierung
          von Sicherheitssystemen im Notfall. Zudem sind verschiedene Sensoren
          wie Höhenmesser, Beschleunigungssensoren und GPS-Module integriert, um
          präzise Echtzeit-Daten zu liefern. Diese Informationen werden sowohl
          für die Steuerung während des Flugs als auch für die spätere Analyse
          genutzt. Die Elektronik wurde speziell entwickelt und programmiert, um
          unter den extremen Bedingungen eines Raketenflugs zuverlässig zu
          funktionieren.
        </p>
      </div>
      <div class="engine info-element">
        <h2>Triebwerk</h2>
        <div class="line"></div>
        <p>
          Das Triebwerk unserer Rakete, entwickelt für den EUROC-Wettbewerb, ist
          das Herzstück der Mission. Es handelt sich um ein Feststofftriebwerk,
          das sorgfältig ausgewählt und optimiert wurde, um die Rakete auf die
          geplante Höhe von 3000 Metern zu bringen. Das Triebwerk liefert den
          notwendigen Schub, um die Rakete sicher durch die verschiedenen Phasen
          des Flugs zu bringen, vom Start bis zum Erreichen der Maximalhöhe.
          Besonderes Augenmerk wurde auf die thermische Stabilität und die
          effiziente Verbrennung des Treibstoffs gelegt, um eine gleichmäßige
          Beschleunigung und optimale Flugbahn zu gewährleisten. Das Design des
          Triebwerks und die Auswahl der Materialien wurden intensiv getestet,
          um den extremen Bedingungen standzuhalten und gleichzeitig die
          Sicherheit des gesamten Systems zu gewährleisten. Zudem wurde das
          Triebwerk so konstruiert, dass es sich nahtlos in die gesamte
          Raketenstruktur integriert und maximale Leistung bei minimalem Gewicht
          bietet.
        </p>
      </div>
      <div class="rocket-element">
        <Rocket></Rocket>
      </div>
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

.info-element {
  padding-bottom: 10rem;
}

.rocket-info h2,
.rocket-info p {
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
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;
  height: auto;
}

.parent div h2 {
  font-weight: bold;
  text-transform: uppercase;
  color: #fddb3a;
  padding-left: 5rem;
  font-size: 24px;
}

.parent div p {
  color: #dadada;
  padding-left: 7.5rem;
  padding-top: 1.5rem;
  padding-right: 5rem;
}

.parachute {
  grid-column: span 2 / span 2;
}

.electronics {
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 2;
}

.engine {
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 3;
}

.rocket-element {
  grid-row: span 3 / span 3;
  grid-column-start: 3;
  grid-row-start: 1;
  width: 100%;
  max-width: 25vw;
  z-index: 1;
  overflow: hidden;
}

.line {
  position: relative;
  left: 10vw;
  height: 2px;
  background-color: #fddb3a;
  z-index: 2;
}

Rocket {
  height: 100%;
  overflow: hidden;
}
</style>

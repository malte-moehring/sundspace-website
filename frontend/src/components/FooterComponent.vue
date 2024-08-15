<template>
    <div class="footer-div">
        <div id="div1">
            <img alt="Sundspace Logo" src="../../../src/assets/pics/logo_schwarz.png">
        </div>
	    <div id="div2">
            <p>Sundspace e.V.</p>
            <p>Zur Schwedenschanze 15</p>
            <p>18435 Stralsund</p>
        </div>
	    <div id="div3">
            <h3>Internes</h3>
            <p><a>Impressum</a></p>
            <p><a>Datenschutzerklärung</a></p>
            <p><a>Sponsoren</a></p>
            <p><a>Kontakt</a></p>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style scoped lang="css">
.footer-div {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    height: 100%;
}

.footer-div div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #dadada;
}

#div1 {
    grid-area: 1/1/2/2;
}

#div2 {
    grid-area: 2/1/3/2;
}

#div3 {
    grid-area: 1/2/3/3;
}
</style>
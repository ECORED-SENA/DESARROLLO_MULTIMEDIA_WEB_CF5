<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones(data-aos="fade-right") 
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/intro/img1.svg')(data-aos="fade-right")
      .col
        p.mb-0 Hola a todos y bienvenidos al mágico mundo de la tecnología, a continuación se puede ver el video introductorio:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JNQyrELe64Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

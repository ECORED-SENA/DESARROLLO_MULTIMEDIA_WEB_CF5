<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones(data-aos="fade-right") 
      .titulo-principal__numero
        span 2
      h1 Técnicas de presentación del #[i pitch]
    .row.align-items-center.mb-5
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img1.svg')(data-aos="fade-right")
      .col-lg(data-aos="fade-left")
        p Primero que todo, es importante responder la siguiente pregunta:
        p #[b ¿Qué es el #[i pitch?]]
        .row.align-items-start
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img2.svg')
          .col
            p.mb-0 El #[i pitch] es una presentación resumida en la que se da a conocer la visión general de un negocio o proyecto a los posibles inversionistas, clientes potenciales, proveedores o socios, en estos espacios de interacción se hace referencia a un producto, modelo de negocio y las estrategias de como a través de este se puede monetizar, es una exposición de forma rápida, precisa y eficaz. A través del siguiente video se puede profundizar más al respecto:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)(data-aos="fade-right")
    Separador
    #t_2_1
    .titulo-segundo.color-acento-botones(data-aos="fade-right") 
      h2 2.1 Tipos de #[i pitch]
    .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema2/img1.png', style="width:300px").m-auto
        .col-lg-8(data-aos="fade-left")
          .bloque-texto-a__texto.p-4
            p.mb-0 En este punto se tomarán como referencia tres modelos de #[i pitch] que pueden utilizar los emprendedores, ponentes o cualquier persona con una idea de negocio a desarrollar al momento de crear una presentación de negocio con esta técnica. #[b Para esto, se puede revisar el siguiente recurso que los presenta]:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2")
      .row(titulo="Elevator <em>pitch</em>")(data-aos="fade-right")
        .col-12.p-4
          .row.mb-4
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img3.svg')
            .col-lg
              p Esta técnica se utiliza cuando se tiene que hacer una presentación de idea de negocio de forma rápida, y concisa ante un público objetivo, quorum o una serie de posibles inversores.
              .cajon.color-primario.p-4
                p.mb-0 Si la sustentación de la idea de negocio se hace en un recinto cerrado con público, jurados, inversores y patrocinadores, si se recomienda crear una presentación con la cual el producto se venda de manera efectiva y atractiva, dejando claro que los tiempos no pueden ser superiores a 10 minutos.
          .row
            .col-lg.mb-4.mb-lg-0
              p La característica principal de este #[i pitch] es que tiene una duración mínima de 3 a 5 minutos, por tal razón no es recomendable realizar una presentación visual, dependiendo del entorno en el cual se encuentre el emisor, es decir, si es en un espacio no formal se podrá hacer de forma explícita, breve y contundente por tal motivo es vital crear una pequeña guía, una estructura simple con palabras y acciones claves:
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Qué se quiere conseguir, qué se ofrece, y cómo se hace.
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Ser breve y conciso, y marcar diferencias (qué lo hace diferente a los competidores).
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Finalmente, indica qué es lo que hace el emprendedor.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema2/img4.svg')
      .row(titulo="<em>Pitch deck</em> o <em>pitch</em> para inversores")
        .col-12.p-4
          p.mb-4 A diferencia del elevator #[i pitch], esta presentación está enfocada para cautivar y atraer inversionistas de negocio, dicho escenario contara con una duración máxima de 15 minutos, para esta estrategia el soporte visual es fundamental pues es aquí donde se puede plasmar una idea clara, llamativa y la cual se podrá usar en diversos escenarios, logrando captar la atención de posibles clientes.
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img5.svg')
            .col-lg
              p #[b Para tal fin es importante tener en cuenta lo siguiente:]
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Desarrollar claramente el contenido que se utilizará en la presentación.
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Tener definido y de forma clara el por qué se hace, el cómo se hace, y el qué se hace.
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Tener claro que detrás del negocio existe un propósito claro.
      .row(titulo="<em>Pitch</em> comercial o <em>pitch</em> de ventas")
        .col-12.p-4
          p.mb-4 Si el objetivo principal de una persona es vender un producto o servicio a uno o varios clientes, esta estrategia comercial podría arrojar buenos resultados, para presentar esta oferta a un cliente es necesario contar con lo siguiente:
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              p #[b Para tal fin es importante tener en cuenta lo siguiente:]
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Tener en cuenta los objetivos empresariales del posible cliente.
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Conocer con claridad los problemas y necesidades, dando una respuesta oportuna y coherente a estos.
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Hacer referencia de los procesos y resultados exitosos en el escenario empresarial.
                li 
                  i.fas.fa-pen-square(style="color:#FB8C00")
                  |
                  p.mb-0 Manifestarles a los clientes que el proceso siempre contará con un estricto seguimiento, en referencia a ventas y todo lo que ello conlleva.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema2/img6.svg')
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img7.svg')(data-aos="fade-right")
          .col
            p(data-aos="fade-left").mb-0 De acuerdo a esta información, quedan plasmadas las tres posibilidades de cómo hacer una excelente sustentación al momento de salir al mercado y exponer la idea de negocio sea cual sea, en busca de posibles patrocinadores e inversionistas.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-botones(data-aos="fade-right") 
      h2 2.2 Técnicas de presentación verbal y no verbal
    .row.align-items-center.mb-4
      .col-lg.mb-4.mb-lg-0
        p(data-aos="fade-right") #[b Para elaborar una excelente propuesta de #[i pitch] es muy importe la comunicación que se desarrolle ante el público objetivo al cual se quiere llegar], es en este punto se abordaran las características principales del lenguaje verbal y no verbal y el cómo se planea y se plantea un #[i pitch] apropiado de acuerdo a lo que el emprendedor desea proyectar.
        .row.align-items-start
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img8.svg')(data-aos="fade-left")
          .col
            p.mb-0 #[b El saber expresarse con el exterior en el mundo actual es muy importante ya que la a partir de cómo se manifiesta un mensaje y el tipo de comunicación utilizada abre entornos a diferentes escenarios el cómo se transmite y se recibe información permite tener ideas claras de algún tipo de comunicación personal o en público.]
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img9.svg')(data-aos="fade-right")
    .row.align-items-center.mb-5
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img10.svg')
      .col-lg
        p.mb-4 La comunicación contempla signos, los cuales permiten transmitir información o un mensaje especifico, por lo general estos pueden ser de dos tipos:
        ul.lista-ul--color.lista-ul--separador.mb-4
          li 
            i.fas.fa-pen-square(style="color:#FB8C00")
            |
            p.mb-0 Cuando los signos son palabras, se habla de comunicación verbal.
          li 
            i.fas.fa-pen-square(style="color:#FB8C00")
            |
            p.mb-0 Cuando se trata de cualquier otro tipo de signo, hace referencia a la comunicación no verbal.
        .cajon.color-primario.p-4
          p.mb-0 Se deja claro que los dos tipos de comunicación (verbal y no verbal) son esenciales si lo que se quiere referenciar es un mensaje claro y de fácil interpretación por un receptor: en el siguiente aparte se plasmarán las principales técnicas de comunicación verbal y no verbal:
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .row.mb-4
          .col-auto.bg-color2.p-2.ms-2
            p.mb-0 #[b.text-white La comunicación verbal]
        p(data-aos="fade-right") Se determina que la comunicación verbal puede ser escrita y oral, con el fin de dejar un mensaje claro, es importante saber la manera en que se transmite a su receptor de forma correcta, educada, fluida e interesante.
        .row.align-items-start.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img11.svg')(data-aos="fade-right")
          .col
            p.mb-0 #[b Para el lenguaje verbal es importante tener claro que este dependerá del espacio en el que se desarrolló ya que no es lo mismo un aula de clase a un escenario deportivo, es decir qué tipo de comunicación es el adecuado de acuerdo del público al que esté dirigido el mensaje.]
        p.mb-0 Parte importante de la comunicación verbal está en vocalizar y hablar a un ritmo tranquilo, adecuado y pausado, evitar el uso de muletillas y darles un manejo adecuado a los adverbios, si al momento de comunicar una idea o punto determinado no se vocaliza de manera adecuada, o en caso alguno de omitir información del tema que se está desarrollo, fácilmente se podrá perder el interés del público objetivo sobre tema tratado.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img12.svg')(data-aos="fade-left")
    .cajon.color-primario.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Es muy importante que en el escenario de sustentación de un #[i pitch] el expositor pueda cambiar la entonación, y trasmita al público una emoción real de lo expuesto, con seguridad y experticia de tema, con un contexto profundo y asertivo para llevar a cabo una exposición de modelo de negocio.
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img13.svg')(data-aos="fade-right")
      .col-lg
        .row.mb-4
          .col-auto.bg-color2.p-2.ms-2
            p.mb-0 #[b.text-white La comunicación no verbal]
        p(data-aos="fade-right") Se puede argumentar que la comunicación no verbal es aquella que complementa a las palabras y que está determinada por la postura, la mirada, gesticulación, o la forma en que se mueven las manos, para tener una comunicación no verbal adecuada es fundamental saber dominar este tipo de acciones corporales y faciales con el fin de hacer amena y objetiva la sustentación del #[i pitch].
        .row.align-items-start
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img11.svg')
          .col
            p(data-aos="fade-right").mb-0 #[b Teniendo claro que los tiempos de presentación para un #[i pitch] son muy cortos, lo cual hace necesario causar buena impresión al iniciar la presentación del modelo de negocio, partiendo de la seguridad y conocimiento del tema a tratar o en este caso a (vender), la actitud juega un papel importante en este espacio, sonreír, ser empático, tranquilo y una buena imagen personal dejara en el ambiente aprobación a lo expuesto, en la comunicación no verbal prima mucho lo que ve el receptor por encima de lo que escucha.]
    p.mb-5 #[b Muy importante a la hora de estar frente a un público objetivo, un jurado o los posibles inversores:]
    .row
      .col-lg.p-4.bg-color6(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema2/img14.svg', style="width:70px")
        p.mb-0 Mirada amable y segura (integrar a todo el quorum en el entorno que esté tratando en ese momento) se recomienda que la mirada sea para el frente cambiando constantemente el punto de referencia.
      .col-lg.p-4.bg-color7(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema2/img15.svg', style="width:50px")
        p.mb-0 Una postura fluida, relajada, con movimientos suaves y no toscos tanto en lateral como hacia delante y atrás, se recomienda no quedarse estático durante la interacción con el público.
      .col-lg.p-4.bg-color8(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema2/img16.svg', style="width:60px")
        p.mb-0 El uso de las manos transmite y enfatiza que se tiene claridad acerca de un tema en específico, de igual forma hace que sea natural.
    Separador
    #t_2_3
    .titulo-segundo.color-acento-botones(data-aos="fade-right") 
      h2 2.3 ¿Cómo se proyecta un #[i pitch] empleando técnicas verbal y no verbal?
    p(data-aos="fade-right").mb-5 #[b Al momento de hacer una presentación de un proyecto se requiere tener la experticia en el tema a sustentar, no se trata solo de tener un buen proyecto, emprendimiento o idea de negocio, lo realmente importante es saber cómo comunicarlo de forma adecuada con el fin de obtener los recursos necesarios, atraer los inversores, gestionar patrocinadores, sostener clientes y potencializar el público objetivo y conseguir su confianza. Se puede ver el siguiente video para profundizar en el tema:]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)(data-aos="fade-right")
    Separador
    #t_2_4
    .titulo-segundo.color-acento-botones(data-aos="fade-right") 
      h2 2.4 Presentación, formatos y estructura de un #[i pitch]
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        p(data-aos="fade-right") De acuerdo con la información suministrada anteriormente, donde se plasma la introducción de qué es un #[i pitch], tipos de #[i pitch], técnicas de presentación verbal y no verbal y cómo proyectar un #[i pitch] empleando las técnicas adecuadas de lenguaje; es momento de hacer énfasis en el paso a paso de cómo estructurar un #[i pitch], qué se requiere y cuál es el escenario adecuado para dicha presentación.
        .row
          .col-12.bg-color4.p-4
            .row.align-items-start
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img9.svg')(data-aos="fade-right")
              .col
                p.mb-0 Cabe recordar que un #[i pitch] estándar podría durar entre 3 y 5 minutos para lo cual se recomienda seguir los siguientes pasos:
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img17.svg')(data-aos="fade-left")
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          div
            .row.align-items-center.justify-content-end
              .col-lg.mb-4
                h4 Hacer una introducción
                p La cual es una breve presentación de la idea de negocio, se recomienda que desde el primer instante sea llamativa e interesante para los inversores.
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/img18.svg')
          div
            .row.align-items-center
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema2/img19.svg')
              .col-lg
                h4 Dejar claro el problema a solucionar
                p Se debe argumentar cual es la necesidad que se ha encontrado en el mercado, es muy importante tener claro que dicho problema o necesidad valga la pena solucionar.
          div
            .row.align-items-center.justify-content-end
              .col-lg.mb-4
                h4 Plantear la solución
                p Dejar claro y bien argumentado, como el producto ofertado puede satisfacer el requerimiento expuesto, de igual forma como la idea de negocio puede darle solución al problema antes planteado, con un enfoque de mejoramiento continuo a las necesidades y dificultades del inversor, cliente o patrocinador.
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/img20.svg')
          div
            .row.align-items-center
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema2/img21.svg')
              .col-lg
                h4 Hablar del mercado objetivo
                p Durante la exposición es importante que los inversores sientan que por parte del ponente se tiene pleno conocimiento del mercado total, mercado al cual se puede servir y el mercado que se puede conseguir, y como estos anualmente están en constante crecimiento, se puede hablar de cifras económicas si se tiene pleno conocimiento de ellas,  se recomienda tener un contexto claro en todo sentido haciendo referencia a la segmentación de los mercados al cual está dirigido el plan de negocio.
          div
            .row.align-items-center.justify-content-end
              .col-lg.mb-4
                h4 Plantearles a los inversores el por qué ahora
                p Básicamente es hablar de tendencias y nuevos modelos de negocio e inversión rentabilidad y posicionamiento en el mercado.
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/img22.svg')
          div
            .row.align-items-center
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema2/img23.svg')
              .col-lg
                h4 Evidenciar porque son diferentes a los competidores
                p Exponer cuales son las cualidades de la idea de negocio, porque estas los encaminan a repuntar en el mercado a través de la alternativa expuesta, cuál es su potencial principal, que los hace diferente en un nicho de mercado especifico dando solución oportuna en el entorno.
          div
            .row.align-items-center.justify-content-end
              .col-lg.mb-4
                h4 Exponer el modelo de negocio
                p Explicar cómo se gana dinero, retorno de la inversión, reinversión y precios del mercado y como se pueden captar clientes.
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/img24.svg')
          div
            .row.align-items-center
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema2/img25.svg')
              .col-lg
                h4 Presentar el equipo de trabajo
                p Es muy importante dejar en evidencia el equipo de trabajo que estará a cargo del desarrollo de la idea de negocio, especificar como a través de su experiencia son los indicados para asumir el reto y sacarlo adelante.
          div
            .row.align-items-center.justify-content-end
              .col-lg.mb-4
                h4 Contextualizar el estado actual del proyecto
                p Dejar claro a los inversores en qué punto se encuentra el proyecto, prospectiva y que recursos económicos se requieren para lanzarse al mercado. (en este ítem es importante plasmar resumidamente datos financieros y proyecciones económicas que tipo de gastos se requiere y como se pueden solventar.)
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/img26.svg')
    .cajon.color-primario.p-4.mb-5
      p.mb-0 Se recomienda que durante la presentación del #[i pitch] se hable de la prospectiva de la idea de negocio del crecimiento de este y cuál va a ser el paso a paso para el cumplimiento de las metas propuestas.
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img7.svg')(data-aos="fade-right")
          .col
            p(data-aos="fade-left").mb-0 #[b Cabe resaltar que es muy importante que los inversionistas tengan claridad de la persona que está sustentando el #[i pitch], algo relativamente general y básico: nombre, apellido, oficio, qué hace la persona que sustenta, qué profesión tiene, qué conocimientos y experiencia tiene acerca de los temas planteados; esto sin duda generara credibilidad al momento de realizar el pitch y su presentación.]
    Separador
    #t_2_5
    .titulo-segundo.color-acento-botones(data-aos="fade-right") 
      h2 2.5 ¿Qué no se debe hacer al momento de exponer un #[i pitch]?
    p(data-aos="fade-right").mb-5 A continuación, se mencionarán algunos ítems que hacen que el #[i pitch] expuesto no cumpla su objetivo y el expositor pueda entrar en un estado de desconfianza y temor a la hora de exponerlo nuevamente ante un público objetivo y puede llegar a creer que la idea de negocio no es lo suficientemente novedosa para el mercado. Se pueden ver estos ítems a través de la siguiente infografía:
    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema2/img27.svg")
            .col
              .row.justify-content-between.align-items-center(data-aos="fade-right")
                .col.mb-3.mb-sm-0
                  h3.mb-1 ¿Qué no debes hacer alimento de exponer un #[i pitch]?
                  p Estimado aprendiz, para profundizar sobre el tema puede consultar ella siguiente infografia.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Anexo1.pdf')" target="_blank")
                    span(style="color:#000 !important") Descargar pdf
                    i.fas.fa-file-download(style="color:#000 !important")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

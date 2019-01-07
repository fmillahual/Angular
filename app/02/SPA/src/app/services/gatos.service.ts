import { Injectable } from '@angular/core';

@Injectable()
export class GatosService {

  private gatos:Gatos[] =[
    {
      nombre:"Gato oriental de pelo corto",
      bio: "Precursores, junto con los gatos siameses y los gatos persas, de muchas de las razas de gatos actuales, los gatos orientales de pelo corto, pese a no gozar de tanta fama como estos otros, constituyen una raza asentada, que en su lugar de origen, Tailandia, han llegado a ser históricamente representativos, siendo una raza antigua, muy asentada en Oriente. Extrovertidos y comunicativos.",
      img: "assets/img/Oriental-de-pelo-corto.jpg",
      origen:"Asia | Tailandia"
    },
    {
      nombre:"Gato burmés o birmano",
      bio: "Al mirar a un burmés puede que pensemos que se trata de una variante de los gatos siameses, pero de un color diferente. No obstante, no estamos ante una variante de siamés, sino ante una raza realmente antigua que existía ya en el medievo, pese a que no llegará a EEUU y Europa hasta el pasado siglo XX ",
      img: "assets/img/burmes-o-birmano.jpg",
      origen:"Asia | Myanmar"
    },
    {
      nombre:"Gato cartujo o chartreux",
      bio: "De origen incierto pero sin duda una de las razas más antiguas que se conocen, los gatos cartujos han compartido historia con personajes tan importantes como el general De Gaulle y monjes templarios de un monasterio homónimo ubicado en Francia. Sea cual sea su origen estos felinos, son indiscutiblemente adorables, con un carácter dócil y cariñoso se ganarán los corazones no solo de sus dueños, si no te de todo aquel que lo conozca. ",
      img: "assets/img/cartujo-o-chartreux.jpg",
      origen:"Europa | Francia"
    },
    {
      nombre:"Gato siberiano",
      bio: "De abundante manto y mirada penetrante, el gato siberiano se ha convertido en una de las razas felinas más populares y apreciadas en todo el mundo. Su temperamento equilibrado y sus características físicas, lo han convertido, además, en uno de los compañeros ideales para personas de todo tipo. Sin embargo, y a pesar de resultar un felino con mucha antigüedad, su reconocimiento oficial data de los años 90. ",
      img: "assets/img/siberiano.jpg",
      origen:"Europa | Rusia | Ucrania"
    },
    {
      nombre:"Gato montés",
      bio: "El gato montés, también conocido como gato salvaje o, más formalmente, como gato montés euroasiático, es una especie de mamífero carnívoro salvaje de la familia de los félidos y que habita en Eurasia y África. Tiene muchas subespecies, como el gato montés europeo, el gato salvaje asiático y el gato salvaje africano.",
      img: "assets/img/montes.jpg",
      origen:"África | América | Asia | Europa"
    },
    {
      nombre:"Gato manx",
      bio: "El gato manx es uno de los más peculiares por su cola y apariencia física general. De tierna mirada y esponjoso manto, esta raza felina se ha ganado el corazón de muchas personas por su carácter equilibrado y afectuoso. No obstante, para lograr que el animal sea feliz es preciso conocer todas las características del gato manx, sus cuidados básicos, su temperamento y posibles problemas de salud.",
      img: "assets/img/manx.jpg",
      origen:"Europa| Reino Unido"
    },
    {
      nombre:"Gato exótico de pelo corto",
      bio: "Sosegados y amigables, los exóticos de pelo corto, o exotic shorthair, se asemejan a los persas, exceptuando su largo pelaje, lo cual está genéticamente justificado, ya que son fruto de la mezcla entre persas y americanos de pelo corto y, también, de británicos de pelo corto. Esta particular raza aúna vitalidad y tranquilidad a partes iguales, siendo la mascota ideal de familias con niños, ya que adora la vida en el hogar y pasar horas y horas de mimos y juegos.",
      img: "assets/img/exotico-de-pelo-corto.jpg",
      origen:"América | Estados Unidos"
    },
    {
      nombre:"Gato birmano",
      bio: "A medio caballo entre los persa y los siameses, encontramos a este curioso felino que nos cautivará, además de por su exuberante apariencia, debido a su largo pelaje y su arrebatadora mirada, por su tranquilo y dócil carácter. Así, estamos antes una raza perfecta para familias, que incluso podrá deleitarnos con pequeñas acrobacias. Quizá sea por todos estos encantos que esta raza sea una de las más populares hoy en día.",
      img: "assets/img/birmano.jpg",
      origen:"Asia"
    },
    {
      nombre:"Gato bosque de Noruega",
      bio: "Proveniente de los frondosos bosques escandinavos nos encontramos a los gatos bosque de Noruega, cuyo aspecto recuerda al de un pequeño lince. Pero que este aspecto salvaje no nos engañe, estamos ante un gato increíblemente cariñoso y sociable, tanto es así que incluso hay tutores que los sacan de paseo. Su historia es increíble y fascinante, estando cargada de magia y misticismo vikingo. Es uno de los gatos que no temen al agua, siendo incluso un excelente pescador. Tampoco hay que dejarse engañar por su sólido físico, pues se trata de un animal sorprendentemente ágil que puede llegar a ser todo un acróbata digno de las piruetas más alucinantes.",
      img: "assets/img/gato-bosque-de-noruega.jpg",
      origen:"Europa | Noruega"
    },
    {
      nombre:"Gato korat",
      bio: "Irónicamente una de las razas más antiguas del mundo ha tardado siglos en llegar a países como EEUU o capitales de toda Europa, hablamos de los gatos korat, originarios de Tailandia, donde se les considera portadores de la fortuna y la buena suerte. En este artículo de ExpertoAnimal indagaremos acerca de estos misteriosos gatos de mirada penetrante que prometen ganarse los corazones de muchos con su carácter y su adorable aspecto, de manera que sigue leyendo para descubrirlo todo sobre el gato korat.",
      img: "assets/img/gato-korat.jpg",
      origen:"Asia | Tailandia"
    },
    {
      nombre:"Gato snowshoe",
      bio: "Fruto de cruces entre siameses y american shorthairs encontramos una raza cuya estampa es realmente preciosa y elegante. Hablamos de los gatos snowshoe, que como su nombre indica parecen tener las patas nevadas; esos calcetines junto con sus ojos azules y la marca en forma de “V” invertida son las características más destacadas de la raza",
      img: "assets/img/gato-snowshoe.jpg",
      origen:"América | Estados Unidos"
    },
    {
      nombre:"Gato Van turco ",
      bio: "De pelaje mullido y algodonoso, mirada cautivadora y carácter sociable, los gatos de la raza van turco presentan muchas características que les hacen únicos y especialmente deseados. Si has adoptado un gato van turco o estás pensando en hacerlo, en esta nueva ficha de ExpertoAnimal te mostraremos todo lo que necesitas saber sobre estos magníficos felinos, explicándote en detalle su origen, carácter, características físicas o salud.",
      img: "assets/img/van-turco.jpg",
      origen:"Asia | Turquía"
    },
    {
      nombre:"Gato somalí",
      bio: "Con muchos rasgos en común con su raza hermana, el gato abisinio, se considera muchas veces que esta es su versión de pelo largo. No obstante, el somalí es mucho más que eso, ya que constituye una raza en sí misma, con muchas virtudes, tales como su carácter o su inteligencia, sin desestimar su porte elegante y señorial, además de ese pelaje tan bonito que le sirve como distintivo frente a otras razas similares. ",
      img: "assets/img/gato-somali.jpg",
      origen:"América"
    },
    {
      nombre:"Gato scottish fold",
      bio: "Famoso en el mundo entero, el scottish fold o gato escocés es conocido por sus adorables orejas caídas y su tierna mirada. Personalidades tan conocidas como Ed Sheeran o Taylor Swift han decidido incorporar felinos de esta raza a sus familias. Esto es, sin duda, debido a que además de su magnífico aspecto, se trata de un animal tranquilo, sociable y realmente cariñoso.",
      img: "assets/img/gato-scottish.jpg",
      origen:"Europa | Reino Unido"
    },
    {
      nombre:"Gato oriental de pelo largo o javanés",
      bio: "También conocido como gato javanés o mandarín, el gato oriental de pelo largo está considerado como una de las razas de gatos más entrañables del mundo. Además, estamos ante un gato que muchos tutores dicen que es capaz de hablarnos.",
      img: "assets/img/gato-oriental-de-pelo-largo-o-javanes.jpg",
      origen:"Europa | Reino Unido"
    },
    {
      nombre:"Gato angora turco",
      bio: "Provenientes de la lejana Turquía, los gatos angora son una de las razas felinas más antiguas del mundo. Frecuentemente son confundidos con otras razas de pelo largo como los persas, ya que ambas razas gozan de una notoria popularidad.",
      img: "assets/img/gato-angora-turco.jpg",
      origen:"Asia | Europa | Turquía"
    },
    {
      nombre:"Gato de Bengala o bengalí",
      bio: "El gato de Bengala o bengalí es un híbrido que nace entre el cruce un gato doméstico y un gato leopardo (felino asiático que aún se encuentra en estado salvaje), por ese motivo muchas personas se preguntan hoy en día si el gato de Bengala es un felino salvaje. El nombre propio de gato de Bengala nace como consecuencia del nombre del pariente salvaje también denominado en ocasiones gato bengala. La cría de este gato se lleva realizando desde 1963 en Estados Unidos de América con la ayuda de la intervención humana.",
      img: "assets/img/gato-de-bengala-o-bengali.jpg",
      origen:"América | Estados Unidos"
    },
    {
      nombre:"Ashera",
      bio: "El gato ashera es sin duda un gato muy popular ya sea por su esbelta y hermosa figura, por el carácter tranquilo y silente o por el desorbitado precio de quienes le crearon. Efectivamente, el gato ashera es un felino desarrollado en un laboratorio estadounidense, un híbrido entre diversas especies.",
      img: "assets/img/ashera.jpg",
      origen:"América | Estados Unidos"
    },
    {
      nombre:"Gato munchkin",
      bio: "De tamaño pequeño-mediano, el gato munchkin se ha convertido en una de las razas más populares debido a su peculiar apariencia física. Por su rasgo más característico, este felino es conocido, también, como gato de patas cortas. No obstante, no es el único atributo que lo define, puesto que este adorable gatito también destaca por ser muy cariñoso, social y activo. ",
      img: "assets/img/gato-munchkin.jpg",
      origen:"América | Estados Unidos"
    },
    {
      nombre:"El gato abisinio",
      bio: "Todos los gatos comparten unas características conductuales capaces de fascinar a los amantes de los felinos, no obstante, el gato abisinio destila una gran elegancia y armonía y una de sus características más importantes es su carácteramable y juguetón, de hecho, se dice que este gato conserva siempre su carácter de cachorro y a pesar de que madure psíquica y fisiológicamente, exige constantemente atención y cariño y siempre muestra una insaciable curiosidad, rasgos que no podríamos encontrar en otros gatos, menos aún en su etapa adulta. El primer gato abisinio llegó a Inglaterra sobre el 1868 procedente de Etiopía, por entonces Abisinia, y participó en una exposición en la que se hizo famoso. Existen otras fuentes que aseguran que es descendiente de los British Bunny, gatos nativos del Reino Británico. No fué hasta el siglo XX que catalograron al gato abisinio como una raza propiamente dicha.",
      img: "assets/img/gato-abisinio.jpg",
      origen:"África | Europa | Etiopía | Reino Unido"
    },
    {
      nombre:"Gato balinés",
      bio: "El balinés es un gato que tiene sus orígenes en Estados Unidos y que desciende del siamés y otros gatos de pelo largo. Esta bella raza se caracteriza por un porte que aúna fuerza y elegancia paralelamente. Posee un temperamento muy especial que deberás conocer de forma previa antes de decidirte por su adopción. Si no vives solo, a pesar de ser muy amable con los miembros de la familia, el gato balinés se encaprichará con una sola persona del ámbito familiar. A esta única persona elegida, el gato balinés la idolatrará, mostrándose amablemente indiferente con el resto de los miembros.",
      img: "assets/img/gato-balines.jpg",
      origen:"América | Estados Unidos"
    },
    {
      nombre:"Gato Maine coon",
      bio: "El gato Maine coon destaca por ser un felino grande, robusto y de carácter dócil. No obstante, debido a sus peculiaridades en cuanto a características, personalidad o cuidados, será fundamental informarnos previamente si nuestro deseo es adoptar a uno. Conocido como el gigante gentil gatuno, este felino se encuentra entre las razas de gatos gigantes más populares.",
      img: "assets/img/maine-coon.jpg",
      origen:"América | Estados Unidos"
    },
    {
      nombre:"Gato británico de pelo corto",
      bio: "El british shorthair, también conocido como gato británico de pelo corto, es considerada una de las razas más antiguas y populares de Gran Bretaña. ¿Estás pensando en adoptar a uno? ¿Quieres saber más sobre esta raza? En esta ficha de raza de ExpertoAnimal te mostraremos todo lo que necesitas saber del british shorthair, incluyendo características, carácter o todos los colores que son permitidos según el estándar, como el clásico blue, blanco o el ahumado.",
      img: "assets/img/gato-britanico-de-pelo-corto.jpg",
      origen:"Europa | Reino Unido"
    },
    {
      nombre:"Lykoi o gato lobo",
      bio: "Si has oído hablar o has visto a un gato lykoi seguro que te ha sorprendido, pues su aspecto recuerda al de un lobo y, por ello, no deja indiferente a nadie. Es una de las razas más nuevas de felinos domésticos y, de hecho, todavía está en proceso de ser admitida totalmente como una raza, pues todavía hay pocos ejemplares en todo el mundo. Este felino está ganando popularidad rápidamente, sobre todo en América del norte que es el lugar en el que ha surgido y, por lo tanto, dónde es más conocido por el momento.",
      img: "assets/img/lykoi-o-gato-lobo.jpg",
      origen:"mérica | Estados Unidos"
    },
    {
      nombre:"Gato azul ruso",
      bio: "El gato azul ruso es sin duda uno de los felinos más populares y hermosos. Si estás pensando en adoptar a un gato de esta raza será conveniente que te informes antes acerca de su carácter, del cuidado del pelo o de las características que posee. En ExpertoAnimal te explicaremos todo lo que necesitas saber sobre el gato azul ruso, incluyendo los tipos, fotografías e información de interés acerca de sus cuidados. Sigue leyendo y descubre más sobre esta raza felina:",
      img: "assets/img/gato-azul-ruso.jpg",
      origen:"Asia | Rusia"
    },
    {
      nombre:"Gato bombay",
      bio: "El gato bombay es sin duda una de las razas de gatos más populares y hermosas que existen. Si estás pensando en adoptar un gato de esta raza no dudes en informarte apropiadamente acerca de todas sus características, el carácter que suele tener así como los cuidados básicos que requiere. También hablaremos de la alimentación y los problemas de salud frecuentes, algo que debes conocer antes de llevarlo a tu casa.",
      img: "assets/img/gato-bombay.jpg",
      origen:"América | Estados Unidos"
    },
    {
      nombre:"Gato Shpynx o esfinge",
      bio: "El gato Sphynx o gato esfinge es un gato realmente único en el mundo. Fue el primero en ser aceptado como raza sin pelo o sin pelaje aparente y lo que es seguro, es que crean agrado y desagrado a la vez por parte de la sociedad humana. Muchos profesionales sugieren que proviene de la raza devon rex, con la que comparten características muy similares. Aparecieron de forma natural a lo largo de la historia ya que su falta de pelaje es causa de una mutación, un proceso común en la evolución de cualquier especie. Fue en Canadá, cuando en los años 60 decidieron fijar y mantener las características de los gatos que no parecían tener pelo.",
      img: "assets/img/shpynx-o-esfinge.jpg",
      origen:"América | Canadá"
    },
    {
      nombre:"Gato Europeo",
      bio: "Gato común Europeo es conocido también como gato romano puesto que fue en esa época cuando se expandieron por toda Europa. Su nombre en latín es Felis Catus.Se cree que esta raza proviene del gato montés africano y del gato de la jungla aunque son orígenes son muy inciertos. Otras fuentes aseguran que proviene de Suecia. Eso sí, no fue hasta 1981 que la raza fue aceptada por la FIFE de forma oficial. Los gatos europeos suelen ser bicolores, con un manto atigrado de pelo corto aunque también pueden llevar genes de pelo largo, carey o jaspeado",
      img: "assets/img/",
      origen:"África | Asia | Europa"
    },
    {
      nombre:"Gato Mau egipcio",
      bio: "Encontramos en el mau egipcio uno de los gatos más elegantes que existen. Su historia está unida a la dinastía de los faraones, un gran imperio que apreciaba la figura del gato como la de un ser casi divino. La palabra MAU es egipcia, y significa gato, es decir, el gato egipcio. En la antigua civilización egipcia los gatos eran figuras veneradas y estaban protegidas como animales sagrados. Matar a uno de estos animales era castigado con la pena de muerte. Se dedicaron numerosos jeroglíficos a la raza creada que fué seleccionada por los mismos egipcios para dar forma a la belleza felina. Sus antepasados datan desde hace más de 4.000 años, podríamos estar hablando entonces de la raza de gatos más antigua. Fue la princesa Natalia Troubetzkoi quién, en los años 50, presentó a Roma el mau egipcio, un gato que tubo una maravillosa acogida por su belleza e historia. Actualmente podemos encontrar ejemplares asilvestrados viviendo en las cercanías del río Nilo.",
      img: "assets/img/mau-egipcio.jpg",
      origen:"África | Egipto"
    },
    {
      nombre:"Gato Australian Mist",
      bio: "El australian mist o gato de la niebla es una raza desarrollada en Australia en 1976. Desciende del cruze entre diversas razas de gato incluidos los birmanos, los abisinios y otros gatos de pelo corto nacionales de Australia. El Dr. Truda Straede, creador, quería lograr un gato con todas las características de sus predecesores, eso sí, con un carácter simpático, activo y de buen humor.",
      img: "assets/img/australian-mist.jpg",
      origen:"Oceania | Australia"
    },
    {
      nombre:"Gato Himalayo",
      bio: "El gato Himalayo es un cruce entre el persa, de quien ha desarrollado sus características físicas y del siamés, de quien ha heredado el patrón característico. La combinación de estos dos predecesores nos ofrece un gato único y elegante. El origen aparece en Suecia, en los años 30, aunque el estándar oficial de la raza que conocemos hoy en día no se fijó hasta los años 60. Su nombre se debe al gran parecido con el conejo Himalayo.",
      img: "assets/img/himalayo.jpg",
      origen:"Europa | Reino Unido | Suecia"
    },
    {
      nombre:"Gato Habana",
      bio: "El gato de la Habana procede de la Europa del siglo XIX, más concretamente de Inglaterra dónde empezó a criarse seleccionando a los siameses marrones. Más adelante, los siameses marrones se mezclaron con el Chocolate Point y es cuando la raza adquiere las características que siguen buscando los criadores hoy en día. Además hace falta añadir que su nombre, no proviene de Cuba como podríamos pensar sino que lleva ese nombre por su oscuro pelaje color tabaco.",
      img: "assets/img/habana.jpg",
      origen:"Europa | Reino Unido"
    },
    {
      nombre:"Gato Persa",
      bio: "Reconocemos facilmente al gato Persa por su cara ancha y aplanada junto al abundante pelaje. Fueron introducidos en Italia desde la antigua Persia (Irán) sobre el 1620 aunque se desconoce el auténtico origen. El estándar del persa actual, tal y como lo conocemos se fijó en 1800 en Inglaterra y proviene del Angora Turco.",
      img: "assets/img/persa.jpg",
      origen:"África | Asia |Europa"
    },
    {
      nombre:"Gato Siamés",
      bio: "El gato siamés proviene del antiguo reino de Siam, la actual Tailandia. Fue a partir del 1880 cuando se empezó a comercializar con él en los envíos a Reino unido y posteriormente a Estados Unidos. En los años 50 del pasado siglo XX fue cuando el gato siamés empezó a ganar protagonismo siendo elegido por muchos criadores y jueces como miembros de los concursos de belleza. Encontramos dos variedades de gato siamés: El gato siamés moderno o Siamés es una variedad del gato siamés que apareció en 2001 en la cual se busca un estilo más fino, alargado y oriental. Los rasgos son marcados y pronunciados. Es el tipo más utilizado en los concursos de belleza. El gato siamés tradicional o Thai Es probablemente el más conocido. Su constitución es la típica de un gato común que muestra los colores típicos y originales del gato siamés tradicional. Ambas variedades se caraceterizan por su esquema de color pointed típico, la coloración oscura donde la temperatura corporal es menor (extremidades, cola, cara y orejas) que contrasta con los tonos de la resta del cuerpo del felino.",
      img: "assets/img/siames.jpg",
      origen:"Asia | Tailandia"
    },
    {
      nombre:"Gato Ragdoll",
      bio: "El Ragdoll nace el 1960 en California, EEUU aunque no se reconoció hasta diez años después. El cruce se hizo mediante una gata tipo angora y un macho sagrado de Birmania. Hoy en día es una de las razas más apreciadas en Norteamérica.",
      img: "assets/img/ragdoll.jpg",
      origen:"América | Estados Unidos"
    }
  ];
  constructor() {
    console.log("Servicio listo para usarse");
   }

getGatos():Gatos[]{
  return this.gatos;
}

}


export interface Gatos{
  nombre:string;
  bio:string;
  img:string;
  origen:string;
}

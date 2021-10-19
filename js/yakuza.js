let origen = document.getElementById("1");
let actividades = document.getElementById("2");
let otro = document.getElementById("3");
let advertencia = document.getElementById("4");
let titulo = document.getElementById("titulo");
let kabukicho = document.getElementById("0");
let titulocard1 = document.getElementById("card1-title");
let textcard1 = document.getElementById("card1-text");
let imgcard1 = document.getElementById("card1-img")
let titulocard2 = document.getElementById("card2-title");
let textcard2 = document.getElementById("card2-text");
let imgcard2 = document.getElementById("card2-img");

kabukicho.addEventListener("click", function(){
    titulo.innerHTML=" Kabukicho ";
    
    titulocard1.innerHTML="CARACTERISTICAS";
    textcard1.innerHTML="Kabukichō (歌舞伎町?) es un vecindario de Shinjuku, Tokio, Japón. Se considera el barrio rojo más importante de Japón; en su entorno se encuentran miles de locales de entretenimiento enfocados al mercado de adultos. El área cuenta con muchos bares, hostales, moteles, locales comerciales, restaurantes y clubes nocturnos tanto para mujeres como para hombres. En la parte oeste del vecindario se hallan también muchos de los establecimientos dedicados a la población gay de Tokio, que se extiende hasta el barrio de Shinjuku San-Choume (新宿三丁目).";
    imgcard1.src="./images/kabukicho_card.jpg";

    titulocard2.innerHTML="LA ZONA";
    textcard2.innerHTML="Shinjuku es la estación de tren más bulliciosa de Japón ¡y puede que del mundo entero! Al oeste existe un distrito de oficinas en cuyo centro se encuentran las dependencias gubernamentales metropolitanas de Tokio. Al este, un barrio con centros comerciales de larga trayectoria, cines y teatros. El parque Shinjuku Gyoen, que fue en su origen jardín de la casa imperial, es muy célebre como lugar de contemplación de las flores del cerezo en marzo y abril. En Shinjuku, muchos restaurantes se mantienen abiertos toda la noche y, en distritos como Omoide Yokocho (o “callejón de los recuerdos”) o Shinjuku Golden Machi, las calles secundarias están llenas de diminutos restaurantes y bares que reflejan el estilo y la personalidad únicos de cada dueño.";
    imgcard2.src="./images/shinjuku.jpg";
})


origen.addEventListener("click", function(){
    titulo.innerHTML=" Origen ";

    titulocard1.innerHTML="YAKUZA";
    textcard1.innerHTML="El origen de la yakuza se remonta al siglo XVII durante el periodo Edo, estando relacionada inicialmente con la figura de los antiguos samuráis. En esta época, los samuráis eran sirvientes de los señores feudales (Shōgun) de cada territorio, y ejercían un papel de protección en periodos de guerra. Sin embargo, con la llegada de la época moderna y la unificación del país en un gobierno central, estos fueron despedidos, ya que dejaron de ser útiles. Posteriormente se convirtieron en mercenarios, a lo cuales se les dió el nombre de «rōnin». Con el tiempo comenzaron a organizarse, dando lugar a grupos paramilitares cuyo propósito y fin lucrativo, era el de servir como protección a cambio de comida y privilegios. Poco a poco, fueron extendiendo su influencia, extorsionando y manipulando a numerosos sectores de la sociedad, especialmente a la política y las empresas. Hoy en día tienen el monopolio de los negocios ilegales de Japón.";
    imgcard1.src="./images/kiryu.jpg";

    titulocard2.innerHTML="ORIGEN DEL BARRIO";
    textcard2.innerHTML="Como tal , el barrio de Kabuchiko se creó en la década de los años 40 del siglo pasado. Desde su origen siempre fue un lugar de encuentro de prostitutas , chulos y gente de mala reputación ligada a la Yakuza o mafia japonesa. A día de hoy , Kabuchiko sigue orientado a ese tipo de turismo y es fácil seguir encontrando bares de alternes y Love Hotels pero también hay muchos bares o restaurantes que buscan otro tipo de clientela y están más enfocados en atraer a otro tipo de turista extranjero. Una de las principales atracciones que tiene el barrio y por las que cada vez es más conocido sus sus bares temáticos . Estos bares temáticos ofrecen un lugar donde tomar unas copas , comer y en muchos casos disfrutar de un espectaculo .";
    imgcard2.src="./images/robot.jpg";
})

actividades.addEventListener("click", function(){
    titulo.innerHTML=" Actividades ";

    titulocard1.innerHTML="HOST/HOSTESS";
    textcard1.innerHTML="En Japón a los clubs de hostess se les llama kyabakura (キャバクラ  ), de kyabarē (キャバレ,lit.cabaret) y kurabu (クラブ, lit.club). A las chicas se les conoce como kyabajō (キャバ嬢 ), literalmente chica del club, y son generalmente contratadas por su belleza y personalidad. Su trabajo es encender los cigarrillos de los clientes, Serviles la bebida, ofrecerles una conversación coqueta, cantar en el karaoke, en resumen, entretener a los clientes. Las Hostess serían el equivalente moderno de las geisha. Los Kyabakura también suelen tener un camarero femenino o masculino que suelen ser bien entrenados en la coctelería y una administradora o mama-san. Los kyabakura se distinguen de los clubs de striptease en el que en ellos no hay bailes o desnudez. Las chicas beben con los clientes y se llevan un porcentaje de lo que halla gastado su cliente esa noche.";
    imgcard1.src="./images/hostess.jpg";

    titulocard2.innerHTML="CAPCOM BAR";
    textcard2.innerHTML="Shinjuku es la estación de tren más bulliciosa de Japón ¡y puede que del mundo entero! Al oeste existe un distrito de oficinas en cuyo centro se encuentran las dependencias gubernamentales metropolitanas de Tokio. Al este, un barrio con centros comerciales de larga trayectoria, cines y teatros. El parque Shinjuku Gyoen, que fue en su origen jardín de la casa imperial, es muy célebre como lugar de contemplación de las flores del cerezo en marzo y abril. En Shinjuku, muchos restaurantes se mantienen abiertos toda la noche y, en distritos como Omoide Yokocho (o “callejón de los recuerdos”) o Shinjuku Golden Machi, las calles secundarias están llenas de diminutos restaurantes y bares que reflejan el estilo y la personalidad únicos de cada dueño.";
    imgcard2.src="./images/capcom-bar.jpg";
})

otro.addEventListener("click", function(){
    titulo.innerHTML=" Otras ubicaciones ";

    titulocard1.innerHTML="DOTONBORI";
    textcard1.innerHTML="Dōtonbori está considerada el epicentro gastronómico de Osaka por los numerosos restaurantes, izakayas, cafeterías y puestos de comida callejera que acoge. La ciudad ha dado origen a la palabra Kuidaore (食い倒れ?), que en español podría traducirse por «comer hasta arruinarse», y que procede de un proverbio nipón: «viste kimono hasta caer en Kioto, come hasta caer arruinado en Osaka».3​4​ Existen platos de la cocina japonesa directamente asociados a Osaka, tales como el okonomiyaki y negiyaki (masa cocinada a la plancha), takoyaki (buñuelos rellenos de pulpo), kani (carne de cangrejo), kushiage (brochetas fritas), tsukune (brochetas de albóndiga de pollo), kitsune udon (fideos udon con tofu) y yakiniku (carne a la parrilla). Muchos restaurantes orientados al turismo internacional ofrecen platos típicos de la región de Kansai.";
    imgcard1.src="./images/dotonbori2.jpg";

    titulocard2.innerHTML="ISEZAKICHO";
    textcard2.innerHTML="Isezakicho se encuentra en Yokohama, una ciudad con un encanto retro, ideal para evocar la época dorada de Japón. Situado justo enfrente de la estación de Isezaki Chojamachi del metro municipal de Yokohama, a un paseo de 5 minutos de la estación de JR de Kannai. Con esta ubicación privilegiada, nuestro hotel resulta idóneo tanto para hacer negocios como para hacer turismo, ir de compras o disfrutar de la vida nocturna.  Está muy bien comunicado con la estación de Shin-Yokohama (línea de Shinkansen) y el aeropuerto de Haneda, por medio de tres líneas: la del metro municipal de Yokohama, la de JR y la de Keihin Kyuko. Las confortables habitaciones ofrecen todas las comodidades modernas a un precio razonable. El Hotel Yokohama Isezakicho Washington se encuentra en la calle del parque Odori, rodeado de su frondosa vegetación, en un entorno cómodo y apacible para descansar del bullicio de la ciudad.";
    imgcard2.src="./images/isezaki.jpg";

})

advertencia.addEventListener("click", function(){
    titulo.innerHTML=" Advertenvcia ";

    titulocard1.innerHTML="TATUAJES";
    textcard1.innerHTML="El cuerpo de los yakuza está marcado por sus tatuajes. " +
    "Son de una realización distinta a la conocida, ya que se hace con una aguja de bambú. <br>" +
    "Este proceso, además, dura muchos meses e incluso años. " +
    "El diseño puede comenzar con algo pequeño, que posteriormente se extiende. " +
    "En la cultura yakuza los tatuajes son sinónimos de orgullo. " +
    "Los llevan sin ningún tipo de pena, ya que a mayor cantidad de estos, más es la demostración de tolerancia al dolor. <br>" +
    "Por otra parte, los tatuajes tienen significados. " +
    "Señalan el tipo de clan al que se pertenece, su lema o símbolos, sus ancestros y la lealtad. " +
    "Existen casos en los que, a su muerte, las pieles de algunos yakuzas son vendidas por el diseño de sus tatuajes. ";
    imgcard1.src="./images/tatuaje-yakuza.jpg";

    titulocard2.innerHTML="CASTIGOS";
    textcard2.innerHTML="Debido a su amplio y estricto código moral, la mafia de los yakuza poseen una serie de castigos que se emplean cuando hay deslealtad o se desea abandonar el clan. <br>" +
    "Hasta ahora, el castigo más conocido que aplican los yakuza es la amputación del dedo meñique. " +
    "En la actualidad pueden encontrarse a exmiembros que poseen estas características. " +
    "Muchos de ellos han decidido dejar Japón y establecerse en naciones de occidente.";
    imgcard2.src="./images/yakuza-castigo.jpg";
})
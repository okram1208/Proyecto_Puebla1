

///[Cargar Hojas de Estilo]
// clases de Efectos

var Animacion               = new MultiWidgets.FadeAnimator();
$.app.addStyleFilename("style.css");
var capasBorderTop          = new MultiWidgets.Widget();
var capasBorderTop2          = new MultiWidgets.Widget();
var capasBorderTop3          = new MultiWidgets.Widget();
var capasBorderBottom       = new MultiWidgets.Widget();
var capasBorderBottom2       = new MultiWidgets.Widget();
var capasBorderBottom3       = new MultiWidgets.Widget();
/// [Valores de altura y anchura de la pantalla]
var anchoPrincipal           = ($.app.mainLayer().width())/3;
var alturaPrincipal          = $.app.mainLayer().height();
//{Widgets Principales}
var cajaPrincipalIzq       = new MultiWidgets.Widget();
var cajaPrincipalCentro    = new MultiWidgets.Widget();
var cajaPrincipalDer       = new MultiWidgets.Widget();

var ConsolaLog             = new MultiWidgets.TextWidget();
var EventoTextoDisponible  = true;

var iteraccionSliderUp    =0;
var iteraccionCNT         =['None','iz', 'ctr', 'der']
//[ En caso de agregar mas imagenes o mas informacion de la imagen, Se almacena en los  areglos de abajo]
// [*nota: la posicion debe de estar relacionado con su propia imagen 1 a 1 2 a 2]
var URLImagenes    = ['IMG/img1.jpg', 'IMG/img2.jpg','IMG/img3.jpg', 'IMG/img1.jpg', 'IMG/img2.jpg','IMG/img3.jpg','IMG/img3.jpg', 'IMG/img1.jpg', 'IMG/img2.jpg','IMG/img3.jpg','IMG/img3.jpg', 'IMG/img2.jpg','IMG/img3.jpg','IMG/img3.jpg'];
var URLImagenes2    = ['IMG/image1.jpg', 'IMG/image2.jpg','IMG/image3.jpg', 'IMG/img1.jpg', 'IMG/img2.jpg','IMG/img3.jpg','IMG/img3.jpg', 'IMG/img1.jpg', 'IMG/img2.jpg','IMG/img3.jpg','IMG/img3.jpg', 'IMG/img2.jpg','IMG/img3.jpg','IMG/img3.jpg'];
var URLImagenes3    = ['IMG/images1.jpg', 'IMG/images2.jpg','IMG/images3.jpg', 'IMG/img1.jpg', 'IMG/img2.jpg','IMG/img3.jpg','IMG/img3.jpg', 'IMG/img1.jpg', 'IMG/img2.jpg','IMG/img3.jpg','IMG/img3.jpg','IMG/img2.jpg','IMG/img3.jpg','IMG/img3.jpg'];


crearPantalla('PrincipalIzq',cajaPrincipalIzq, 0, 0, anchoPrincipal, alturaPrincipal);
crearPantalla('PrincipalCent',cajaPrincipalCentro, anchoPrincipal,0, anchoPrincipal, alturaPrincipal);
crearPantalla('PrincipalDer',cajaPrincipalDer, anchoPrincipal*2,0, anchoPrincipal, alturaPrincipal);

/*------------------Border Top------------------*/
capasBorderTop.setCSSClasses('capasBorderTop');
capasBorderTop.setDepth(100);
capasBorderTop.setSize(anchoPrincipal-27,43);
capasBorderTop.setFixed();

capasBorderTop2.setCSSClasses('capasBorderTop');

capasBorderTop2.setDepth(100);
capasBorderTop2.setSize(anchoPrincipal-27,43);
capasBorderTop2.setLocation(anchoPrincipal,0);
capasBorderTop2.setFixed();

capasBorderTop3.setCSSClasses('capasBorderTop');
capasBorderTop3.setDepth(100);
capasBorderTop3.setSize(anchoPrincipal-27,43);
capasBorderTop3.setLocation(anchoPrincipal*2,0);
capasBorderTop3.setFixed();
/*------------------Border Button------------------*/
capasBorderBottom.setCSSClasses('capasBorderButtom');
capasBorderBottom.setDepth(100);
capasBorderBottom.setSize(anchoPrincipal-27,alturaPrincipal-43);
capasBorderBottom.setLocation(0.5,alturaPrincipal-48);
capasBorderBottom.setFixed();

capasBorderBottom2.setCSSClasses('capasBorderButtom');
capasBorderBottom2.setDepth(100);
capasBorderBottom2.setSize(anchoPrincipal-27,alturaPrincipal-43);
capasBorderBottom2.setLocation(anchoPrincipal,alturaPrincipal-48);
capasBorderBottom2.setFixed();

capasBorderBottom3.setCSSClasses('capasBorderButtom');
capasBorderBottom3.setDepth(100);
capasBorderBottom3.setSize(anchoPrincipal-27,alturaPrincipal-43);
capasBorderBottom3.setLocation(anchoPrincipal*2,alturaPrincipal-48);
capasBorderBottom3.setFixed();
//{Las pantallas se agregan Automaticament}
$.app.mainLayer().addChild(cajaPrincipalIzq);
$.app.mainLayer().addChild(cajaPrincipalCentro);
$.app.mainLayer().addChild(cajaPrincipalDer);

$.app.mainLayer().addChild(capasBorderTop);
$.app.mainLayer().addChild(capasBorderTop2);
$.app.mainLayer().addChild(capasBorderTop3);

$.app.mainLayer().addChild(capasBorderBottom);
$.app.mainLayer().addChild(capasBorderBottom2);
$.app.mainLayer().addChild(capasBorderBottom3);
$.app.mainLayer().addChild(ConsolaLog);
ConsolaLog.setDepth(200);
ConsolaLog.setText('Sistema Interactivo');



//{se crea las pantallas}
function crearPantalla(id, WidgetPantalla, posicionX, posicionY, TamanhoAncho, Altura){
  var cajaSecundaria         = new MultiWidgets.Widget();
  var cajaTouch              = new MultiWidgets.Widget();
  var imgDedo                = new MultiWidgets.ImageWidget();
  var locXcSec=47;
  var locYcSec=43;
  WidgetPantalla.setCSSClasses('cajaPrincipal');
  WidgetPantalla.setCSSId(id);
  WidgetPantalla.setWidth(TamanhoAncho);
  WidgetPantalla.setHeight(Altura);
  WidgetPantalla.setLocation(posicionX, posicionY);

  cajaSecundaria.setCSSClasses('cajaSecundaria');
  cajaSecundaria.setCSSId('cajaTouch'+id);
  cajaSecundaria.setLocation(locXcSec,locYcSec);
  cajaSecundaria.setWidth(WidgetPantalla.width()-94-27);
  cajaSecundaria.setHeight(WidgetPantalla.height()-86);

  cajaTouch.setCSSClasses('cajaTouch');
  cajaTouch.setCSSId('cajaTouch'+id);
  cajaTouch.setLocation(0,0);
  cajaTouch.setWidth(cajaSecundaria.width());
  cajaTouch.setHeight(cajaSecundaria.height());


  imgDedo.setSource("IMG/layer1.png");
  imgDedo.setCSSId('imgDedo'+id);
  imgDedo.setLocation((cajaTouch.width()/2)-50,(cajaTouch.height()/2)-50);

  cajaTouch.addChild(imgDedo);
  cajaSecundaria.addChild(cajaTouch);
  WidgetPantalla.addChild(cajaSecundaria);
  cajaTouch.eventAddListener("single-tap", function () {
    MultiWidgets.FadeAnimator.fadeOutAndDelete(cajaTouch, 1.0, 0.0);
    crearSegundo('SegundaEscena', cajaSecundaria, false, null);
  });
  imgDedo.eventAddListener("single-tap", function () {
    MultiWidgets.FadeAnimator.fadeOutAndDelete(cajaTouch, 1.0, 0.0);
    crearSegundo('SegundaEscena', cajaSecundaria, false, null);
  });
}
//{Funcion: Se crea Segundo Escenario}
function crearSegundo(id, cajaSecundaria, FlagContinuar, idCnt){
  //ConsolaLog.setText('iteraccionSliderUp->' + iteraccionSliderUp);
  var cntTextoBarroco     = new MultiWidgets.Widget();
    var imgAmerica        = new MultiWidgets.Widget();
    var texto             = new MultiWidgets.ImageWidget();
    imgAmerica.setCSSClasses('imgAmerica');
    imgAmerica.setCSSId('imgAmerica'+id);
    imgAmerica.setLocation(0,0);
    imgAmerica.setWidth(cajaSecundaria.width());
    imgAmerica.setHeight(cajaSecundaria.height());

    cntTextoBarroco.setCSSClasses('cntTextoBarroco');
    cntTextoBarroco.setCSSId('cntTextoBarroco');
    cntTextoBarroco.setWidth(imgAmerica.width());
    cntTextoBarroco.setHeight(imgAmerica.height()/4);
    cntTextoBarroco.setLocation(0,0);

    texto.setCSSClasses('texto');
    texto.setCSSId('texto'+id);
    texto.setCenterLocation(new Nimble.Vector2f(cajaSecundaria.width()/2-150, cajaSecundaria.height()/2));
    texto.setWidth(cajaSecundaria.width()-40);
    texto.setHeight(150);
    texto.setSource('IMG/letraBarroco.png');

    imgAmerica.addChild(texto);
    cajaSecundaria.addChild(imgAmerica);
    imgAmerica.setVisible(false);
    MultiWidgets.FadeAnimator.fadeIn(imgAmerica, 2.0, 0.0);
    imgAmerica.eventAddListener("single-tap", function () {
      imgAmerica.removeChild(texto);
      cntTextoBarroco.addChild(texto);
      imgAmerica.addChild(cntTextoBarroco);
      texto.setLocation(cajaSecundaria.width()/2-200,0);
      CrearTercerEscenario(imgAmerica.width(),imgAmerica.height(), id, imgAmerica, cajaSecundaria);
      EventoTextoDisponible=false;
      iteraccionSliderUp++;
      //if (!FlagContinuar) {
        if(iteraccionSliderUp>=3){
          ConsolaLog.setText('Accedi al Evento ');
          //iteraccionSliderUp=1;
        }
      
      //MultiWidgets.console=iteraccionSliderUp+"";
    });
    if(FlagContinuar){
      imgAmerica.removeChild(texto);
      cntTextoBarroco.addChild(texto);
      imgAmerica.addChild(cntTextoBarroco);
      texto.setLocation(cajaSecundaria.width()/2-200,0);
      CrearTercerEscenario(imgAmerica.width(),imgAmerica.height(), idCnt, imgAmerica, cajaSecundaria);
    }
    texto.eventAddListener("single-tap", function () {
      if (true) {  
        texto.setLocation(cajaSecundaria.width()/2-200,0);
        CrearTercerEscenario(imgAmerica.width(),imgAmerica.height(), id, imgAmerica, cajaSecundaria); 
        EventoTextoDisponible=false;
      }
    });
}
//{Crea Todas, el Tercer Escenario y ademas agrega todas imagenes en su y su respectivo posicion}
function CrearTercerEscenario(ancho, altura, id, imgAmerica,cajaSecundaria){
  ConsolaLog.setText('iteraccionSliderUp->: '+iteraccionSliderUp+' id->:' +id);
  if(iteraccionSliderUp==0 || id=='CNTUNO'){
    var ctnImgen       = new MultiWidgets.Widget();
    var ctnImgenF1     = new MultiWidgets.Widget();
    var ctnImgenF2     = new MultiWidgets.Widget();
    var ctnImgenF3     = new MultiWidgets.Widget();

    ctnImgen.setCSSClasses('ctnImgen');
    ctnImgen.setCSSId('ctnImgen'+id);
    ctnImgen.setLocation(0,imgAmerica.height()/4);
    ctnImgen.setWidth(imgAmerica.width());
    ctnImgen.setHeight(3*imgAmerica.height()/4);
    //ctnImgen.setOverFlow)
    // [Fila 1]
    var posicionEnXImg  = (ctnImgen.height()/3)*URLImagenes.length-ctnImgen.height();
    ctnImgenF1.setCSSClasses('ctnImgenTop');
    ctnImgenF1.setCSSId('ctnImgen'+id);
    ctnImgenF1.setLocation(0,-posicionEnXImg);
    ctnImgenF1.setWidth(ctnImgen.width()/3-5);
    ctnImgenF1.setHeight(ctnImgen.height());
    ctnImgenF1.setCSSType("ScrollOperator");
    // [Fila 2]

    ctnImgenF2.setCSSClasses('ctnImgenCenter');
    ctnImgenF2.setCSSId('ctnImgen'+id);
    ctnImgenF2.setLocation(ctnImgen.width()/3,0);
    ctnImgenF2.setWidth(ctnImgen.width()/3-5);
    ctnImgenF2.setHeight(ctnImgen.height());
      // [Fila 2]

    ctnImgenF3.setCSSClasses('ctnImgenBottom');
    ctnImgenF3.setCSSId('ctnImgen'+id);
    ctnImgenF3.setLocation((ctnImgen.width()/3)*2,0);
    ctnImgenF3.setWidth(ctnImgen.width()/3);
    ctnImgenF3.setHeight(ctnImgen.height());

    //[Agregar Imagenes]
    for (var i = 0; i < URLImagenes.length ; i++) {
      AgregarImagenes(posicionEnXImg,'Imagen'+i, URLImagenes[i],  cajaSecundaria, imgAmerica, ctnImgenF1,i, 'CNTUNO');
      AgregarImagenes(posicionEnXImg,'Imagen'+i, URLImagenes2[i],  cajaSecundaria, imgAmerica, ctnImgenF2,i, 'CNTUNO');
      AgregarImagenes(posicionEnXImg,'Imagen'+i, URLImagenes3[i],  cajaSecundaria, imgAmerica, ctnImgenF3,i, 'CNTUNO');
    }

    ctnImgen.addChild(ctnImgenF1);
    ctnImgen.addChild(ctnImgenF2);
    ctnImgen.addChild(ctnImgenF3);
    imgAmerica.addChild(ctnImgen);
    ctnImgenF1.addOperator(create(0, -posicionEnXImg, 'down'));
    ctnImgenF2.addOperator(create(ctnImgen.width()/3, 0, 'up'));
    //ctnImgenF2.addOperator(create((ctnImgen.width()/3)*1,'izquierda'));
    ctnImgenF3.addOperator(create((ctnImgen.width()/3)*2, -posicionEnXImg,'down'));
    
  }
  if(iteraccionSliderUp==1 || id=='CNTDOS'){
    var ctnImgen       = new MultiWidgets.Widget();
    var ctnImgenF1Uno     = new MultiWidgets.Widget();
    var ctnImgenF2Uno     = new MultiWidgets.Widget();
    var ctnImgenF3Uno     = new MultiWidgets.Widget();

    ctnImgen.setCSSClasses('ctnImgen');
    ctnImgen.setCSSId('ctnImgen'+id);
    ctnImgen.setLocation(0,imgAmerica.height()/4);
    ctnImgen.setWidth(imgAmerica.width());
    ctnImgen.setHeight(3*imgAmerica.height()/4);
    //ctnImgen.setOverFlow)
    // [Fila 1]
    var posicionEnXImg  = (ctnImgen.height()/3)*URLImagenes.length-ctnImgen.height();
    ctnImgenF1Uno.setCSSClasses('ctnImgenTopHEhehe');
    ctnImgenF1Uno.setCSSId('ctnImgen'+id);
    ctnImgenF1Uno.setLocation(0,-posicionEnXImg);
    ctnImgenF1Uno.setWidth(ctnImgen.width()/3-5);
    ctnImgenF1Uno.setHeight(ctnImgen.height());
    // [Fila 2]

    ctnImgenF2Uno.setCSSClasses('ctnImgenCenter');
    ctnImgenF2Uno.setCSSId('ctnImgen'+id);
    ctnImgenF2Uno.setLocation(ctnImgen.width()/3,0);
    ctnImgenF2Uno.setWidth(ctnImgen.width()/3-5);
    ctnImgenF2Uno.setHeight(ctnImgen.height());
      // [Fila 2]

    ctnImgenF3Uno.setCSSClasses('ctnImgenBottom');
    ctnImgenF3Uno.setCSSId('ctnImgen'+id);
    ctnImgenF3Uno.setLocation((ctnImgen.width()/3)*2,0);
    ctnImgenF3Uno.setWidth(ctnImgen.width()/3);
    ctnImgenF3Uno.setHeight(ctnImgen.height());

    //[Agregar Imagenes]
    for (var i = 0; i < URLImagenes.length ; i++) {
      AgregarImagenes(posicionEnXImg,'Imagen'+i, URLImagenes[i],  cajaSecundaria, imgAmerica, ctnImgenF1Uno,i, 'CNTDOS');
      AgregarImagenes(posicionEnXImg,'Imagen'+i, URLImagenes2[i],  cajaSecundaria, imgAmerica, ctnImgenF2Uno,i, 'CNTDOS');
      AgregarImagenes(posicionEnXImg,'Imagen'+i, URLImagenes3[i],  cajaSecundaria, imgAmerica, ctnImgenF3Uno,i, 'CNTDOS');
    }

    ctnImgen.addChild(ctnImgenF1Uno);
    ctnImgen.addChild(ctnImgenF2Uno);
    ctnImgen.addChild(ctnImgenF3Uno);
    imgAmerica.addChild(ctnImgen);
    ctnImgenF1Uno.addOperator(Mover(0, -posicionEnXImg, 'down'));
    ctnImgenF2Uno.addOperator(Mover(ctnImgen.width()/3, 0, 'up'));
    //ctnImgenF2.addOperator(create((ctnImgen.width()/3)*1,'izquierda'));
    ctnImgenF3Uno.addOperator(Mover((ctnImgen.width()/3)*2, -posicionEnXImg,'down'));
  }
  //*Ultima Pantalla*/
  if(iteraccionSliderUp==2 || id=='CNTTRES'){
    var ctnImgen       = new MultiWidgets.Widget();
    var ctnImgenF1Dos     = new MultiWidgets.Widget();
    var ctnImgenF2Dos     = new MultiWidgets.Widget();
    var ctnImgenF3Dos     = new MultiWidgets.Widget();

    ctnImgen.setCSSClasses('ctnImgen');
    ctnImgen.setCSSId('ctnImgen'+id);
    ctnImgen.setLocation(0,0);
    ctnImgen.setLocation(0,imgAmerica.height()/4);
    ctnImgen.setWidth(imgAmerica.width());
    ctnImgen.setHeight(3*imgAmerica.height()/4);
    //ctnImgen.setOverFlow)
    // [Fila 1]
    var posicionEnXImg  = (ctnImgen.height()/3)*URLImagenes.length-ctnImgen.height();
    ctnImgenF1Dos.setCSSClasses('ctnImgenTopHEhehe');
    ctnImgenF1Dos.setCSSId('ctnImgen'+id);
    ctnImgenF1Dos.setLocation(0,-posicionEnXImg);
    ctnImgenF1Dos.setWidth(ctnImgen.width()/3-5);
    ctnImgenF1Dos.setHeight(ctnImgen.height());
    // [Fila 2]

    ctnImgenF2Dos.setCSSClasses('ctnImgenCenter');
    ctnImgenF2Dos.setCSSId('ctnImgen'+id);
    ctnImgenF2Dos.setLocation(ctnImgen.width()/3,0);
    ctnImgenF2Dos.setWidth(ctnImgen.width()/3-5);
    ctnImgenF2Dos.setHeight(ctnImgen.height());
      // [Fila 2]

    ctnImgenF3Dos.setCSSClasses('ctnImgenBottom');
    ctnImgenF3Dos.setCSSId('ctnImgen'+id);
    ctnImgenF3Dos.setLocation((ctnImgen.width()/3)*2,0);
    ctnImgenF3Dos.setWidth(ctnImgen.width()/3);
    ctnImgenF3Dos.setHeight(ctnImgen.height());

    //[Agregar Imagenes]
    for (var i = 0; i < URLImagenes.length ; i++) {
      AgregarImagenes(posicionEnXImg,'Imagen'+i, URLImagenes[i],  cajaSecundaria, imgAmerica, ctnImgenF1Dos,i, 'CNTTRES');
      AgregarImagenes(posicionEnXImg,'Imagen'+i, URLImagenes2[i],  cajaSecundaria, imgAmerica, ctnImgenF2Dos,i, 'CNTTRES');
      AgregarImagenes(posicionEnXImg,'Imagen'+i, URLImagenes3[i],  cajaSecundaria, imgAmerica, ctnImgenF3Dos,i, 'CNTTRES');
    }

    ctnImgen.addChild(ctnImgenF1Dos);
    ctnImgen.addChild(ctnImgenF2Dos);
    ctnImgen.addChild(ctnImgenF3Dos);
    imgAmerica.addChild(ctnImgen);
    ctnImgenF1Dos.addOperator(MoverUltimo(0, -posicionEnXImg, 'down'));
    ctnImgenF2Dos.addOperator(MoverUltimo(ctnImgen.width()/3, 0, 'up'));
    //ctnImgenF2.addOperator(create((ctnImgen.width()/3)*1,'izquierda'));
    ctnImgenF3Dos.addOperator(MoverUltimo((ctnImgen.width()/3)*2, -posicionEnXImg,'down'));
  }

  /*Fin de la ultima Pantalla*/
}
//{Funcion: agregar las imagenes en su respectivo contenedor}
function AgregarImagenes(posicionEnXImg,id, URlImg, cajaSecundaria, imgAmerica, ctnImgenF1, i, idCnt){
  //[Se agrega las Imagenes del Interactivo]
    var Imagenes      = new MultiWidgets.ImageWidget();
    Imagenes.setSource(URlImg);
    Imagenes.setLocation(0,i*ctnImgenF1.height()/3+5*i);
    Imagenes.setWidth(ctnImgenF1.width());
    Imagenes.setHeight(ctnImgenF1.height()/3);
    ctnImgenF1.addChild(Imagenes);


    Imagenes.eventAddListener('hand-up',function(){
       Imagenes.addOperator(create(ctnImgenF1,0, -posicionEnXImg, 'down'));
    });


    Imagenes.eventAddListener('single-tap', function(){
      cajaSecundaria.removeChild(imgAmerica);
      mostrarImgEInformacion(id, URlImg,  cajaSecundaria, imgAmerica,i, idCnt);
    });
}

//{Funcion: Se muestra la Imagen con su respectivo Informacion, asi como su proximo Imagen}
function mostrarImgEInformacion(id, URlImg,  cajaSecundaria, imgAmerica, i, idCnt){
  //ConsolaLog.setText('ID Recibido-> '+idCnt);
  var Imagen        = new MultiWidgets.ImageWidget();
  var cntInformar   = new MultiWidgets.Widget();
  var texto         = new MultiWidgets.TextWidget();
  var titulo        = new MultiWidgets.TextWidget();
  var subtitulo     = new MultiWidgets.TextWidget();

  var cntSiguiente  = new MultiWidgets.Widget();
  var imgSiguiente  = new MultiWidgets.ImageWidget();
  var textoSiguiente= new MultiWidgets.TextWidget();

  var cont_icon     = new MultiWidgets.Widget();
  var regresar      = new MultiWidgets.ImageWidget();
  var regresarText  = new MultiWidgets.TextWidget();
  var zoom          = new MultiWidgets.ImageWidget();
  var text_zoom     = new MultiWidgets.TextWidget();
  var exit          = new MultiWidgets.ImageWidget();

  var altura        = cajaSecundaria.height();
  var anchura       = cajaSecundaria.width();

  var Cont_Span     = new MultiWidgets.Widget();
  var españa        = new MultiWidgets.ImageWidget();
  var text_span     = new MultiWidgets.TextWidget();

  var fondo_Sig     = new MultiWidgets.Widget();
  var text_Sig      = new MultiWidgets.TextWidget()

  Imagen.setSource(URlImg);
  Imagen.setLocation(0,0);
  Imagen.setWidth(cajaSecundaria.width());
  Imagen.setHeight((altura/3)*2);

  cont_icon.setCSSId('cont_icon');
  cont_icon.setWidth(Imagen.width());
  cont_icon.setHeight(Imagen.height()-460);
  cont_icon.setLocation(0,Imagen.height()-82);
  Imagen.addChild(cont_icon);


  regresar.setCSSId('regresar');
  regresar.setSource("IMG/regresar.fw.png");
  regresar.setLocation(20,cont_icon.height()-60);
  regresar.setWidth(40);
  regresar.setHeight(40);
  cont_icon.addChild(regresar);

  /*text_zoom.setCSSId('text_zoom');
  text_zoom.setLocation(cont_icon.width()-190,cont_icon.height()-50);
  text_zoom.setText('Puedes acercar la imagen presionando');
  text_zoom.setWidth(cont_icon.width()-270);
  text_zoom.setHeight(cont_icon.height()-40);
  cont_icon.addChild(text_zoom);*/

  zoom.setCSSId('zoom');
  zoom.setSource("IMG/zoom.fw.png");
  zoom.setLocation(cont_icon.width()-60,cont_icon.height()-60);
  zoom.setWidth(40);
  zoom.setHeight(40);
  cont_icon.addChild(zoom);
 //{Diseño de Salir ventana}
  exit.setCSSId('exit');
  exit.setSource("IMG/regresar.fw.png");
  //exit.setLocation(Imagen.width()-70,Imagen.height()-530);
  exit.setWidth(40);
  exit.setHeight(40);
  exit.setVisible(false);
  Imagen.addChild(exit);

  cntInformar.setCSSClasses('cntInformar');
  cntInformar.setLocation(0, (altura/3)*2);
  cntInformar.setWidth(cajaSecundaria.width());
  cntInformar.setHeight(altura/3);

  text_span.setCSSId('text_span');
  text_span.setText("España");
  españa.setWidth(60);
  españa.setHeight(60);
  text_span.setLocation(12,57);
  cntSiguiente.setLocation(cntInformar.width()-100, cntInformar.height()-100);
  cntSiguiente.setWidth(100);
  fondo_Sig.setCSSId('fondo_Sig');
  fondo_Sig.setWidth(205);
  fondo_Sig.setHeight(100);
  fondo_Sig.setLocation(0,0);

  if (i+1<URLImagenes.length) {
    imgSiguiente.setSource('IMG/sig.png');
    imgSiguiente.setCSSId('imgSiguiente');
    imgSiguiente.setWidth(250);
    imgSiguiente.setHeight(100);
    imgSiguiente.setLocation(cntInformar.width()-250,cntInformar.height()-120);
  }
  cntInformar.addChild(imgSiguiente);
  
  cajaSecundaria.addChild(cntInformar);
  cajaSecundaria.addChild(Imagen);
  /*Eventos Importantes Para pasar al Siguiente Imagen*/
  imgSiguiente.eventAddListener('single-tap', function(){
    cajaSecundaria.removeChild(cntInformar);
    cajaSecundaria.removeChild(Imagen);
    if(i<URLImagenes.length){
          mostrarImgEInformacion(id, URLImagenes[i+1], cajaSecundaria, imgAmerica, i+1, idCnt);
    }else{
      crearSegundo('Segunda',  cajaSecundaria, idCnt);
    }
  });
  /*Regresar a un escenario Anterior */
  regresar.eventAddListener('single-tap',function(){
    Imagen.setVisible(false);
    cntInformar.setVisible(false);
    //ConsolaLog.setText("crearSegundo('Segunda Pantalla', cajaSecundaria,idCnt->)"+idCnt);
    crearSegundo('Segunda Pantalla', cajaSecundaria, true, idCnt);
    EventoTextoDisponible=true;
  });
  /*Agrandece la imagen*/ 
  zoom.eventAddListener('single-tap', function(){
     /*Ocultar icons*/
    regresarText.setVisible(false);
    text_zoom.setVisible(false);
    regresar.setVisible(false);
    zoom.setVisible(false);
    cntInformar.setVisible(false);
    Imagen.setWidth(cajaSecundaria.width());
    Imagen.setHeight(cajaSecundaria.height());
    Imagen.setLocation(0,0);
    exit.setVisible(true);
    exit.setLocation(20,cajaSecundaria.height()-60);
  });
  /*Regresa la imagen A su estado anterior*/
  exit.eventAddListener('single-tap', function(){
    Imagen.setLocation(0,0);
    Imagen.setWidth(cajaSecundaria.width());
    Imagen.setHeight((altura/3)*2);
    exit.setVisible(false);
    regresarText.setVisible(true);
    text_zoom.setVisible(true);
    regresar.setVisible(true);
    zoom.setVisible(true);
    cntInformar.setVisible(true);
  });
}


/*Funcion de Operator Esta funcion funciona en tiempo real, 
  si  quiere mover un widget al lado derecho solo llama a esta funcion con 
  con la propiedad del <nombreWidget>.addOperator(<nombreFuncion>())
*/

function create(ctnImgenF1,posicionX, posicionY, direccion) {
  var o = new MultiWidgets.JavaScriptOperator();
  auxPosY=posicionY;
  flag=true;
  k=0.0;
  o.onUpdate(function(w, frameInfo) {
    if(direccion=='up'){
      ctnImgenF1.setLocation(new Nimble.Vector2f(posicionX,-(k+posicionY)));
    }
    if (direccion=='down') {
      if (k+posicionY<= 0 && flag) {
        k=k+0.2;   
        ctnImgenF1.setLocation(new Nimble.Vector2f(posicionX,k+posicionY));
        if(k+posicionY>=0){
          flag=false;
        }
        
       }
       if(!flag){
       k=k-0.2;
        ctnImgenF1.setLocation(new Nimble.Vector2f(posicionX,k+posicionY));
          if(auxPosY>=k+posicionY){
          flag=true;
        }
      }
    }
  });

  o.onInput(function(w, gm, trackedObjects, dt){
    var fingers = trackedObjects.fingers();
    var altura = "";

    for (var i = 0; i < fingers.length; i += 1) {
      var finger = fingers[i];
       altura += sprintf("%.1f", finger.tipLocation().y);
    }  
       if (altura >= "100"){w.setLocation(altura,0);} 
  });

  //o.reset();

  return o;
}

function Mover( posX, posY, dir) {
  var M = new MultiWidgets.JavaScriptOperator();
  auxPoY=posY;
  ban=true;
  l=0;
  M.onUpdate(function(widget, frameInformacion) {

    if(dir=='up'){
      widget.setLocation(new Nimble.Vector2f(posX,-(l+posY)));
    }    
    if (dir=='down') {
      if (l+posY<= 0 && ban) {
        l=l+0.2;   
        widget.setLocation(new Nimble.Vector2f(posX,l+posY));
        if(l+posY>=0.0){
          ban=false;
        }
       }
       if(!ban){
       l=l-0.2;
        widget.setLocation(new Nimble.Vector2f(posX,l+posY));
          if(auxPoY>=l+posY){
            ban=true;
        }
      }
    }
  });

  //M.reset();

  return M;
}

function MoverUltimo( UltposX, UltposY, Ultdir) {

  var UltM = new MultiWidgets.JavaScriptOperator();
  UltauxPoY=UltposY;
  Ultban=true;
  Ultl=0;
  UltM.onUpdate(function(Ultwidget, UltframeInformacion) {
    
    if (Ultdir=='up') {
      Ultwidget.setLocation(new Nimble.Vector2f(UltposX,-(Ultl+UltposY)));
    }
    if (Ultdir=='down') {
      if (Ultl+UltposY<= 0 && Ultban) {
        Ultl=Ultl+0.2;   
        Ultwidget.setLocation(new Nimble.Vector2f(UltposX,Ultl+UltposY));
        //ConsolaLog.setText(0 + ',!='+(l+posY));
        if(Ultl+UltposY>=0){
          Ultban=false;
          //ConsolaLog.setText(ban + ',Up 0 l+posY->'+(Ultl+UltposY));
        }
       }
       if(!Ultban){
       Ultl=Ultl-0.2;
        Ultwidget.setLocation(new Nimble.Vector2f(UltposX,Ultl+UltposY));
        //ConsolaLog.setText(UltauxPoY + ',!='+(Ultl+UltposY));
          if(UltauxPoY>=Ultl+UltposY){
            ConsolaLog.setText(UltauxPoY + ',=='+(Ultl+UltposY));
            Ultban=true;
            ConsolaLog.setText(Ultban + ',down l + posY->'+(Ultl+UltposY));
        }
      }
    }
     
  });

  //UltM.reset();

  return UltM;
}
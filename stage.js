var scene,
    light,
    backLight,
    shadowLight,
    render,
    container;
var iframe;
var leftMenuWidth = 200 ;


/*定义相机便于动画*/
var fov = 45,
	nearPlane = 1,
	farPlane = 2000,
	WIDTH = window.innerWidth - leftMenuWidth,
	HEIGHT = window.innerHeight,
	aspectRadio = WIDTH/HEIGHT;
	camera = new THREE.PerspectiveCamera(
		fov,aspectRadio,nearPlane,farPlane
	);
	camera.position.set(0,0,0);
	camera.lookAt(new THREE.Vector3(0,0,0));


/*定义函数*/
function init(){
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
	renderer.setSize(1134,595);
	renderer.shadowMapEnabled = true;
	container = document.getElementById('stage');
	container.appendChild(renderer.domElement);
	window.addEventListener('resize', onWindowResize, false);
}
function onWindowResize(){
	    WIDTH=window.innerWidth - leftMenuWidth;
	    HEIGHT=window.innerHeight;
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
}

function createLights() {
  light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)
  
  shadowLight = new THREE.DirectionalLight(0xffffff, .8);
  shadowLight.position.set(200, 200, 200);
  shadowLight.castShadow = true;
  shadowLight.shadowDarkness = .4;
 	
  backLight = new THREE.DirectionalLight(0xffffff, .4);
  backLight.position.set(-100, 200, 50);
  backLight.shadowDarkness = .2;
  backLight.castShadow = true;
 	
  scene.add(backLight);
  scene.add(light);
  scene.add(shadowLight);
}

function createIframe(){
	  var afang1 = new three3DExtras.tubeLine([0,20,0],[0,90,0],1,'#000');
	  var afang2 = new three3DExtras.tubeLine([0,90,0],[120,90,0],1,'#000');
	  var afang3 = new three3DExtras.tubeLine([120,90,0],[120,20,0],1,'#000');
	  var afang4 = new three3DExtras.tubeLine([120,20,0],[0,20,0],1,'#000');
	  scene.add(afang1.getObject3D());
	  scene.add(afang2.getObject3D());
	  scene.add(afang3.getObject3D());
	  scene.add(afang4.getObject3D());
	  var bfang1 = new three3DExtras.tubeLine([-80,-50,30],[-80,55,30],1,'#000');
	  var bfang2 = new three3DExtras.tubeLine([-80,55,30],[-25,55,30],1,'#000');
	  var bfang3 = new three3DExtras.tubeLine([-25,55,30],[-25,-50,30],1,'#000');
	  var bfang4 = new three3DExtras.tubeLine([-25,-50,30],[-80,-50,30],1,'#000');
	  scene.add(bfang1.getObject3D());
	  scene.add(bfang2.getObject3D());
	  scene.add(bfang3.getObject3D());
	  scene.add(bfang4.getObject3D());
	 var cfang1 = new three3DExtras.tubeLine([-45,0,20],[-45,40,20],1,'#000');
	  var cfang2 = new three3DExtras.tubeLine([-45,40,20],[90,40,20],1,'#000');
	  var cfang3 = new three3DExtras.tubeLine([90,40,20],[90,0,20],1,'#000');
	  var cfang4 = new three3DExtras.tubeLine([90,0,20],[-45,0,20],1,'#000');
	  scene.add(cfang1.getObject3D());
	  scene.add(cfang2.getObject3D());
	  scene.add(cfang3.getObject3D());
	  scene.add(cfang4.getObject3D());
	  var dfang1 = new three3DExtras.tubeLine([40,-100,50],[40,5,50],1,'#000');
	  var dfang2 = new three3DExtras.tubeLine([40,5,50],[75,5,50],1,'#000');
	  var dfang3 = new three3DExtras.tubeLine([75,5,50],[75,-100,50],1,'#000');
	  var dfang4 = new three3DExtras.tubeLine([75,-100,50],[40,-100,50],1,'#000');
	  scene.add(dfang1.getObject3D());
	  scene.add(dfang2.getObject3D());
	  scene.add(dfang3.getObject3D());
	  scene.add(dfang4.getObject3D());
	  var efang1 = new three3DExtras.tubeLine([75,-100,0],[75,-50,0],1,'#000');
	  var efang2 = new three3DExtras.tubeLine([75,-50,0],[75,-50,-80],1,'#000');
	  var efang3 = new three3DExtras.tubeLine([75,-50,-80],[75,-100,-80],1,'#000');
	  var efang4 = new three3DExtras.tubeLine([75,-100,-80],[75,-100,0],1,'#000');
	  scene.add(efang1.getObject3D());
	  scene.add(efang2.getObject3D());
	  scene.add(efang3.getObject3D());
	  scene.add(efang4.getObject3D());
	  var ffang1 = new three3DExtras.tubeLine([20,-75,10],[-55,-75,10],1,'#000');
	  var ffang2 = new three3DExtras.tubeLine([-55,-75,10],[-55,-75,-30],1,'#000');
	  var ffang3 = new three3DExtras.tubeLine([-55,-75,-30],[20,-75,-30],1,'#000');
	  var ffang4 = new three3DExtras.tubeLine([20,-75,-30],[20,-75,10],1,'#000');
	  scene.add(ffang1.getObject3D());
	  scene.add(ffang2.getObject3D());
	  scene.add(ffang3.getObject3D());
	  scene.add(ffang4.getObject3D());
	  
}
function render(){
	renderer.render(scene,camera);
	TWEEN.update();
	requestAnimationFrame(render);
}
/*定义框架上的文字*/
/*定义所有文字的统一材料*/
var bulletMat = new THREE.MeshBasicMaterial({color:0x000000});
/*HOME内的文字与函数*/
/*推特*/
var twitterGeo = new THREE.TextGeometry("Twitter",{
	  size : 15,
	  height: 1,
      curveSegments: 3,
      font: 'helvetiker',
      weight: 'normal',
      bevelThickness: 3,
      bevelSize: 0,
      bevelEnabled: true
});
var twitterText = new THREE.Mesh(twitterGeo,bulletMat);
twitterText.position.set(0,92,0);
function twitter(){
	scene.add(twitterText);
}
function Dtwitter(){
	scene.remove(twitterText);
}
/*GITHUB1*/
var githubGeo = new THREE.TextGeometry("Github",{
	  size : 15,
	  height: 1,
      curveSegments: 3,
      font: 'helvetiker',
      weight: 'normal',
      bevelThickness: 3,
      bevelSize: 0,
      bevelEnabled: true
});
var githubText = new THREE.Mesh(githubGeo,bulletMat);
githubText.position.set(-25,2,20);
function github(){
	scene.add(githubText);
}
function Dgithub(){
	scene.remove(githubText);
}
/*博客*/
var blogGeo = new THREE.TextGeometry("Blog",{
	  size : 15,
	  height: 1,
      curveSegments: 3,
      font: 'helvetiker',
      weight: 'normal',
      bevelThickness: 3,
      bevelSize: 0,
      bevelEnabled: true
});
var blogText = new THREE.Mesh(blogGeo,bulletMat);
blogText.position.set(-80,59,30);
function blog(){
	scene.add(blogText);
}
function Dblog(){
	scene.remove(blogText);
}
/*freecode*/
var freeGeo = new THREE.TextGeometry("FreeCodeCamp",{
	  size : 10,
	  height: 1,
      curveSegments: 3,
      font: 'helvetiker',
      weight: 'normal',
      bevelThickness: 3,
      bevelSize: 0,
      bevelEnabled: true
});
var freeText = new THREE.Mesh(freeGeo,bulletMat);
freeText.position.set(-55,-72,-30);
function free(){
	scene.add(freeText);
}
function Dfree(){
	scene.remove(freeText);
}
/*About框内的内容*/
/*简历*/
var resumeGeo = new THREE.TextGeometry("Resume",{
	  size : 15,
	  height: 1,
      curveSegments: 3,
      font: 'helvetiker',
      weight: 'normal',
      bevelThickness: 3,
      bevelSize: 0,
      bevelEnabled: true
});
var resumeText = new THREE.Mesh(resumeGeo,bulletMat);
resumeText.position.set(120,90,0);
resumeText.rotation.y += Math.PI*0.75;
resumeText.rotation.x += Math.PI/7;
function resume(){
	scene.add(resumeText);
}
function Dresume(){
	scene.remove(resumeText);
}
/*关于我*/
var aboutmeGeo = new THREE.TextGeometry("AboutMe",{
	  size : 15,
	  height: 1,
      curveSegments: 3,
      font: 'helvetiker',
      weight: 'normal',
      bevelThickness: 3,
      bevelSize: 0,
      bevelEnabled: true
});
var aboutmeText = new THREE.Mesh(aboutmeGeo,bulletMat);
aboutmeText.position.set(105,50,20);
aboutmeText.rotation.y += Math.PI*0.75;
aboutmeText.rotation.x += Math.PI/7;
function aboutme(){
	scene.add(aboutmeText);
}
function Daboutme(){
	scene.remove(aboutmeText);
}
/*portfolio*/
/*github2*/
var githubGeo2 = new THREE.TextGeometry("Github",{
	  size : 15,
	  height: 1,
      curveSegments: 3,
      font: 'helvetiker',
      weight: 'normal',
      bevelThickness: 3,
      bevelSize: 0,
      bevelEnabled: true
});
var githubText2 = new THREE.Mesh(githubGeo2,bulletMat);
githubText2.position.set(75,-50,-80);
githubText2.rotation.y += -Math.PI*0.65;
function github2(){
	scene.add(githubText2);
}
function Dgithub2(){
	scene.remove(githubText2);
}
/*联系我吧！虽然我还是个前端渣渣*/
var contactmeGeo = new THREE.TextGeometry("Contact me ~!",{
	  size : 25,
	  height: 1,
      curveSegments: 3,
      font: 'helvetiker',
      weight: 'normal',
      bevelThickness: 3,
      bevelSize: 0,
      bevelEnabled: true
});
var contactmeText = new THREE.Mesh(contactmeGeo,bulletMat);
contactmeText.position.set(-160,160,50);
contactmeText.rotation.y += Math.PI*0.35;
function contactme(){
	scene.add(contactmeText);
}
function Dcontactme(){
	scene.remove(contactmeText);
}

init();
createIframe();
createLights();
render();



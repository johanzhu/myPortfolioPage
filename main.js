/*定义旋转函数*/
function moveAndLookAt(camera, dstpos, dstlookat, options) {
  options || (options = {duration: 300});

  var origpos = new THREE.Vector3().copy(camera.position); // 初始位置
  var origrot = new THREE.Euler().copy(camera.rotation); // 初始欧拉角

  camera.position.set(dstpos.x, dstpos.y, dstpos.z);
  camera.lookAt(dstlookat);
  var dstrot = new THREE.Euler().copy(camera.rotation)

  // 重设相机初始位置与初始四元数
  camera.position.set(origpos.x, origpos.y, origpos.z);
  camera.rotation.set(origrot.x, origrot.y, origrot.z);

  //
  // 定义tween
  //
  
  // 位置函数
  new TWEEN.Tween(camera.position).to({
    x: dstpos.x,
    y: dstpos.y,
    z: dstpos.z
  }, options.duration).start();;

  // 旋转 (运用球形插值法)
  (function () {
    var qa = camera.quaternion; // src四元数值
    var qb = new THREE.Quaternion().setFromEuler(dstrot); // 终点四元数值
    var qm = new THREE.Quaternion();
    camera.quaternion = qm;
    
    var o = {t: 0};
    new TWEEN.Tween(o).to({t: 1}, options.duration).onUpdate(function () {
      THREE.Quaternion.slerp(qa, qb, qm, o.t);
      camera.quaternion.set(qm.x, qm.y, qm.z, qm.w);
    }).start();
  }).call(this);
}
/*旋转函数结束*/

/*取到左侧文字DIV便于显示调用*/
var home = document.getElementById('home-text');
var about = document.getElementById('about-text');
var portfolio = document.getElementById('portfolio-text');
var contact = document.getElementById('contact-text');

/*定义点击旋转与文字显示*/
var Home = document.getElementById('home');
    Home.onclick = function(){
	  moveAndLookAt(camera,new THREE.Vector3(0,0,400),new THREE.Vector3(0,0,0),{duration:1000});
	  home.style.opacity = "1";
	  about.style.opacity = "0";
	  portfolio.style.opacity = "0";
	  contact.style.opacity = "0";
	  Dtwitter();Dgithub();Dgithub2();Dfree();Daboutme();Dresume();Dcontactme();Dblog();
	  twitter();
    github();
    blog();
    free();
}
var About = document.getElementById('about');
    About.onclick = function(){
	  moveAndLookAt(camera,new THREE.Vector3(290,200,-250),new THREE.Vector3(0,0,0),{duration:1000});
	  home.style.opacity = "0";
	  about.style.opacity = "1";
	  portfolio.style.opacity = "0";
	  contact.style.opacity = "0";
	  Dtwitter();Dgithub();Dgithub2();Dfree();Daboutme();Dresume();Dcontactme();Dblog();
	  resume();
    aboutme();
}
var Portfolio = document.getElementById('portfolio');
    Portfolio.onclick = function(){
	  moveAndLookAt(camera,new THREE.Vector3(-290,-100,-250),new THREE.Vector3(0,0,0),{duration:1000});
	  home.style.opacity = "0";
	  about.style.opacity = "0";
	  portfolio.style.opacity = "1";
	  contact.style.opacity = "0";
	  Dtwitter();Dgithub();Dgithub2();Dfree();Daboutme();Dresume();Dcontactme();Dblog();
	  github2();
}
var Contact = document.getElementById('contact');
    Contact.onclick = function(){
	  moveAndLookAt(camera,new THREE.Vector3(500,200,300),new THREE.Vector3(0,0,0),{duration:1000});
	  home.style.opacity = "0";
	  about.style.opacity = "0";
	  portfolio.style.opacity = "0";
	  contact.style.opacity = "1";
	  Dtwitter();Dgithub();Dgithub2();Dfree();Daboutme();Dresume();Dcontactme();Dblog();
	  contactme();
}

/*加载完毕后给HOME加上show的类名以显示初始的字段，并且旋转到初始位置*/
window.onload = function(){
	  home.style.opacity = "1";
	  moveAndLookAt(camera,new THREE.Vector3(0,0,400),new THREE.Vector3(0,0,0),{duration:1000});
	  twitter();
    github();
    blog();
    free();
}



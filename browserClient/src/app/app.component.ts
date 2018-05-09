import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { InterfaceService } from './interface.service';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  @ViewChild('container') elementRef: ElementRef;
  private container : HTMLElement;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private cube : THREE.Mesh;


  constructor(private interfaceService: InterfaceService){
  }

  ngOnInit() {

    this.container = this.elementRef.nativeElement;

    console.log(this.container);

    this.init();

    this.interfaceService.messages.subscribe(msg => {
      // console.log('my msg',msg);
      if (msg.text.type === 'motion') {
        document.getElementById("x").innerHTML=Math.round(msg.text.x).toString();
        document.getElementById("y").innerHTML=Math.round(msg.text.y).toString();
        document.getElementById("z").innerHTML=Math.round(msg.text.z).toString();
        this.animate(Math.round(msg.text.x), Math.round(msg.text.y), Math.round(msg.text.z));
      }

      if (msg.text.type === 'orientation') {
        document.getElementById("alpha").innerHTML=Math.round(msg.text.alpha).toString();
        document.getElementById("beta").innerHTML=Math.round(msg.text.beta).toString();
        document.getElementById("gamma").innerHTML=Math.round(msg.text.gamma).toString();
        this.move(Math.round(msg.text.beta), Math.round(msg.text.gamma), Math.round(msg.text.alpha));
      }

      if (msg.text.type === 'light') {
        document.getElementById("light").innerHTML=Math.round(msg.text.light).toString();
      }

      if (msg.text.type === 'proximity') {
        document.getElementById("prox_max").innerHTML=Math.round(msg.text.prox_max).toString();
        document.getElementById("prox_min").innerHTML=Math.round(msg.text.prox_min).toString();
        document.getElementById("prox").innerHTML=Math.round(msg.text.prox_value).toString();
      }

    })
  }

  init(){
    let screen = {
        width  : 500,
        height : 500
      },
      view = {
        angle  : 45,
        aspect : screen.width / screen.height,
        near   : 0.1,
        far    : 1000
      };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view. near, view.far);
    this.renderer = new THREE.WebGLRenderer();

    this.scene.add(this.camera);
    this.scene.add(new THREE.AxisHelper(20));

    this.camera.position.set(10,10,10);
    this.camera.lookAt(new THREE.Vector3(0,0,0));

    this.renderer.setSize(screen.width, screen.height);
    this.container.appendChild(this.renderer.domElement);


    let geometry = new THREE.BoxGeometry(5, 5, 5),
      material = new THREE.MeshBasicMaterial({ color : 0xFFFFFF, wireframe: true });

    this.cube = new THREE.Mesh( geometry, material );
    this.cube.position.set(-50,-50,-50);

    this.scene.add(this.cube);

    this.render();
  }

  render(){

    let self: AppComponent = this;

    (function render(){
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
      }());

  }

  animate(x, y, z){
    this.cube.rotateX(x/10);
    this.cube.rotateY(y/10);
    this.cube.position.addScalar(z/10);
  }

  move(b,g,a) {
    console.log('point');
    let myrect = document.getElementById('cat');
    // myrect.setAttribute("y", ((g+90)*2).toString());
    myrect.setAttribute("x", (1080-a*3).toString());

  }

}

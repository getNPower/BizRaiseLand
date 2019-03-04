import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { routerTransition } from './router.animation';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    animations: [ routerTransition ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // declaration: []
})


export class AppComponent {
    // title = 'app';
    constructor(private elem: ElementRef, public router: Router) {}
    getState(outlet) {
      return outlet.activatedRouteData.state;
    }
    navToggle() {
        const navTrigger = document.getElementById('nav-trigger');
        const nav = document.getElementById('nav');
        const closed = (navTrigger.className.indexOf('navclose') > 0);
        if (closed) {
            navTrigger.className = 'nav-trigger open';
            nav.className = 'out';
        } else {
            navTrigger.className = 'nav-trigger navclose';
            nav.className = 'in';
        }
    }
    resize() {
        let labels = this.elem.nativeElement.querySelectorAll('.nav-label');
        const windowHeight = window.innerHeight;
        const fontSize = windowHeight * 0.1;
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.fontSize = fontSize + 'px';
            labels[i].style.height = fontSize + 'px';
        }
    }
    open() {
        this.navToggle();
        this.resize();
    }
}

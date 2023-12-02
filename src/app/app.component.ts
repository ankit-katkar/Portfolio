import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let menuIcon:any = document.querySelector('#menu-icon');
    let navbar:any = document.querySelector('.navbar');
    
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x')
        navbar.classList.toggle('active')
    }
    
    
    /* ********************* scroll sections active link **********************/
    
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector<any>('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    
        /* ********************* sticky navbar **********************/
    
        
        let header:any = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    
    
        /* ************ remove toggle icon and navar when click navbar link (scroll) ***************/
        menuIcon.classList.remove('bx-x')
        navbar.classList.remove('active')
    
    };
    
    /* ********************* scroll reveal **********************/
    
    
    let typed = new Typed(".multiple-text", {
        strings: ['Front-End Developer', "Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })
  }

isExpanded = false;

toggleText() {
  this.isExpanded = !this.isExpanded;
}
}

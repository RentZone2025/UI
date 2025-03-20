import { Component, OnInit, HostListener, ElementRef, SimpleChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  dropdown = false;
  loggedIn = false;
  role: any;
  
  constructor(
    private elRef: ElementRef,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn()
    this.authService.token$.subscribe({
      next: (token) => {
        console.log("token változás: ",token)
        this.loggedIn = token !== null
      }
    })
    this.authService.role$.subscribe({
      next: (role) => {
        this.role = role
      }
    })
  }

  getProfileRoute(){
    if(this.role === "admin") return "/admin/dashboard"
    if(this.role === "user") return "/user/account"
    return "/login"
  }

  toggleDropdown(): void {
    this.dropdown = !this.dropdown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.dropdown = false;
    }
  }

}

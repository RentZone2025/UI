import { Component,ViewChild,ElementRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CarouselItem { 
  imageUrl: string;
  title: string;
  tags: string[];
}

@NgModule ({
  imports: [
    FormsModule
   ],

})

export class AppModule {}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  items: CarouselItem[] = [ 
    { imageUrl: './citysky.png', title: 'Túlélő játék', tags: ['survival', 'coop'] }, 
    { imageUrl: './daysgone.png', title: 'Csapatjáték', tags: ['coop', 'multi'] }, 
    { imageUrl: './dying.png', title: 'Verseny mód', tags: ['versus', 'multi'] }, 
    { imageUrl: './f124.png', title: 'Egyjátékos kaland', tags: ['survival'] }, 
    { imageUrl: './grant7.png', title: 'Többjátékos akció', tags: ['multi', 'versus'] }, 
    { imageUrl: './hogvarts.png', title: 'Túlélő játék', tags: ['survival', 'coop'] }, 
    { imageUrl: './mortal11.png', title: 'Csapatjáték', tags: ['coop', 'multi'] }, 
    { imageUrl: './reddd2.png', title: 'Verseny mód', tags: ['versus', 'multi'] }, 
    { imageUrl: './spiderman2.png', title: 'Egyjátékos kaland', tags: ['survival'] }, 
    { imageUrl: './tekken8.png', title: 'Többjátékos akció', tags: ['multi', 'versus'] }, 
  ]; 
  
  filteredItems: CarouselItem[] = this.items; currentIndex = 0; searchTerm = ''; 
  
  search() { this.currentIndex = 0; this.filteredItems = this.items.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase())) ); this.updateCarouselPosition(); }

  slideNext() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      this.updateCarouselPosition();
    }
  }

  slidePrevious() { if (this.currentIndex > 0) { this.currentIndex--; this.updateCarouselPosition(); } 
}

  private updateCarouselPosition() {
    const container = this.carouselContainer.nativeElement;
    container.style.transform = `translateX(-${this.currentIndex * 272}px)`;
  }
  

}


import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 52;

  public heroName: string = '';
  public heroAge: number = 0;
  public banName: boolean = true;
  public banAge: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = this.heroName;
    this.banName = false;
  }
  
  changeAge(age:number): void{
    this.age = age;
    this.banAge = false;
  }

  reset(): void{
    this.name = 'iron man';
    this.age = 52;
    this.banName = true;
    this.banAge = true;
  }

}

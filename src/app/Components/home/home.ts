import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';  // ✅ Angular Router

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
filters: string[] = ['Fruits',' Vegetables',  ' Flowers'];
activeFilter: string = 'Fruits';
projects = [
//  Vegetables
{
  title: 'Bird Eye Chili - Green',
  category: ' Vegetables',
  image: 'vegitables/Chillie green.webp',
  availability: 'Year-round',
  storage: 'Store at 4°C in paper/perforated bag',
  healthBenefits: 'Aids digestion & has antimicrobial properties.'
},
{
  title: 'Bird Eye Chili - Red',
  category: ' Vegetables',
  image: 'vegitables/Bird Eye Chili – Red.jpg',
  availability: 'Year-round',
  storage: 'Store at 4°C in paper/perforated bag',
  healthBenefits: 'Rich in capsaicin, can boost metabolism and have health benefits.'
},

{
  title: 'Green Asparagus',
  category: ' Vegetables',
  image: 'vegitables/Asparagus.jpg',
  availability: 'Year-round',
  storage: 'Keep upright in water or damp towel at at 2–4°C .',
  healthBenefits: 'Rich in folate & antioxidants, supports digestion.'
},
{
  title: 'White Asparagus',
  category: ' Vegetables',
  image: 'vegitables/white Asparagus.jpg',
  availability: 'Year-round',
  storage: 'Keep upright in water or damp towel at 2–4°C',
  healthBenefits: 'Rich in folate & antioxidants, supports digestion.'
},

{
  title: 'White Shimeji Mushrooms',
  category: ' Vegetables',
  image: 'vegitables/White Shimeji.jpg',
  availability: 'Year-round',
  storage: 'Paper bag at 0–4°C',
  healthBenefits: 'High in B-vitamins and immune-boosting polysaccharides.'
},
{
  title: 'Brown Shimeji Mushrooms',
  category: ' Vegetables',
  image: 'vegitables/Brown Shimeji Mushrooms.jpg',
  availability: 'Year-round',
  storage: 'Store in the fridge at 0–4°C',
  healthBenefits: 'Acts as antioxidants and support cardiovascular health..'
},
{
  title: 'Enoki Mushroom',
  category: ' Vegetables',
  image: 'vegitables/Enoki Mushroom.jpg',
  availability: 'Year-round',
  storage: 'Keep them refrigerated.',
  healthBenefits: 'Anticancer, anti- allergy, antibacterial, antiviral and anti- inflammatory properties.'
},
{
  title: 'Exotic Mushrooms',
  category: ' Vegetables',
  image: 'vegitables/Exotic Mushrooms.jpg',
  availability: 'Year-round',
  storage: 'stored refrigerated to ensure quality',
  healthBenefits: 'Rich in folate & antioxidants, supports digestion.'
},
{
  title: 'Bitter Gourd',
  category: ' Vegetables',
  image: 'vegitables/Bitter gourd.jpg',
  availability: 'May – September',
  storage: 'Refrigerate at 5–7°C',
  healthBenefits: 'Regulates blood sugar, rich in folate & vitamin C.'
},
{
  title: 'Kaffir Lime Leaf',
  category: ' Vegetables',
  image: 'vegitables/Kaffir Lime Leaf.jpg',
  availability: 'Year-round',
  storage: 'Store at 2–4°C.',
  healthBenefits: 'support digestion and have antiseptic properties, contributing to overall health benefits.'
},
{
  title: 'Galangal',
  category: ' Vegetables',
  image: 'vegitables/Galangal.webp',
  availability: 'Year-round',
  storage: 'Store at 4°C or freeze slices',
  healthBenefits: 'Provides anti-inflammatory properties, aids digestion, and boosts circulation, offering significant health benefits.'
},
{
  title: 'Jackfruit',
  category: ' Vegetables',
  image: ' Fruits/Jackfruit.jpg',
  availability: 'Year-round',
  storage: 'Store at 5–8°C',
  healthBenefits: 'Rich in fiber & vitamin C, aids digestion.'
},
  // Fruits
{
  title: 'Durian',
  category: 'Fruits',
  image: 'Fruits/Durian.png',
  availability: 'May – July',
  storage: 'Refrigerate after opening',
  healthBenefits: 'Rich in energy, healthy fats & vitamin C.'
},
{
  title: 'Guava',
  category: 'Fruits',
  image: 'Fruits/Guava.png',
  availability: 'Year-round',
  storage: 'Refrigerate at 5°C',
  healthBenefits: 'High in vitamin C, boosts immunity & skin health.'
},
{
  title: 'Dragon Fruit',
  category: 'Fruits',
  image: 'Fruits/Dragon fruits.jpg',
  availability: 'Year-round',
  storage: 'Store at 5–8°C',
  healthBenefits: 'Rich in fiber & vitamin C, aids digestion.'
},
{
  title: 'Jackfruit',
  category: 'Fruits',
  image: 'Fruits/Jackfruit.jpg',
  availability: 'Year-round',
  storage: 'Store at 5–8°C',
  healthBenefits: 'Rich in fiber & vitamin C, aids digestion.'
},
{
  title: 'Mango',
  category: 'Fruits',
  image: 'Fruits/Mango.jpg',
  availability: 'Year-round',
  storage: 'Store at 5–8°C',
  healthBenefits: 'Rich in fiber & vitamin C, aids digestion.'
},
{
  title: 'Rainbow Mango',
  category: 'Fruits',
  image: 'Fruits/RainbowMango.png',
  availability: 'Summer',
  storage: 'Room temp to ripen,then refrigerate',
  healthBenefits: 'Rich in  vitamin A & C,immune-boosting.'
},
{
  title: 'Green Sweet Thai Mango',
  category: 'Fruits',
  image: 'Fruits/GreenMangoe.png',
  availability: 'Spring',
  storage: 'Store at 10–12°C',
  healthBenefits: 'High in vitamin C, aids digestion, low in calories.'
},

{
  title:'Yellow Sweet Thai Mango',
  category: 'Fruits',
  image: 'Fruits/YellowSeet thai mago.jpg',
  availability: 'Spring',
  storage: 'Store at 8–10°C ',
  healthBenefits: 'High in beta carotene,vitamin A, good for skin.'
},
{
  title: 'Mangosteen',
  category: 'Fruits',
  image: ' Fruits/Mangosteen.jpg',
  availability: 'Year-round',
  storage: 'Store at 5–8°C',
  healthBenefits: 'Rich in fiber & vitamin C, aids digestion.'
},
{
  title: 'SAPOTA',
  category: 'Fruits',
  image: ' Fruits/Sapota.jpg',
  availability: 'October to March',
  storage: 'Ripen at room temp, refrigerate after',
  healthBenefits: 'Rich in fiber & vitamin C, aids digestion.'
},
{
  title: 'Longan',
  category: 'Fruits',
  image: ' Fruits/Longan.jpg',
  availability: ' July to September',
  storage: 'Store at 5°C',
  healthBenefits: 'Rich in fiber & vitamin C, aids digestion.'
},
{
  title: 'Rambutan',
  category: 'Fruits',
  image: ' Fruits/Rambutan.jpg',
  availability: ': June to August',
  storage: 'Store at  4–7°C',
  healthBenefits: 'Rich in fiber & vitamin C, aids digestion.'
},
  //  Flowers
{
  title: 'Orchid Flower',
  category: ' Flowers',
  image: 'Flower/Orchid.jpg',
  availability: 'Year-round',
  storage: 'Store at 5–8°C, keep hydrated',
  healthBenefits: 'Used for decoration, with a mild fragrance.'
},
{
  title: 'Tulip',
  category: ' Flowers',
  image: 'Flower/Tulip.jpg',
  availability: 'Year-round',
  storage: 'Store at 5–8°C, keep hydrated',
  healthBenefits: 'Popular ornamental flower with elegant beauty.'
},
{
  title: 'Versatile Rose',
  category: ' Flowers',
  image: 'Flower/Versatile Rose.jpg',
  availability: 'February – June',
  storage: 'Shelf life 5–7 days at 4–6°C in water or moist paper',
  healthBenefits: 'Widely used in decoration, valued for beauty & fragrance.'
},
{
  title: 'Versatile Rose',
  category: ' Flowers',
  image: 'GPT/Flower.png',
  availability: 'February – June',
  storage: 'Shelf life 5–7 days at 4–6°C in water or moist paper',
  healthBenefits: 'Widely used in decoration, valued for beauty & fragrance.'
}
];

filteredProjects = [...this.projects];

constructor(private router: Router){}

ngOnInit(): void {
  this.filterProjects(this.activeFilter);
}

filterProjects(filter: string): void {
  this.activeFilter = filter;
  if (filter === 'All') {
    this.filteredProjects = [...this.projects];
  } else {
    this.filteredProjects = this.projects.filter(p => p.category === filter);
  }
}

}
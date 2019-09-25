import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  product = new BehaviorSubject([
    {
      id: 1,
      name: "South Africa Navel Orange (L)",
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7b%2FOrange-Whole-%2526-Split.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FOrange_(fruit)&docid=INFbWg-h77makM&tbnid=Dxm6Ndwa8L-YiM%3A&vet=10ahUKEwi_qdPy4OnkAhUPOisKHQD5D3AQMwhVKAwwDA..i&w=3680&h=1920&bih=706&biw=1522&q=South%20Africa%20Navel%20Orange%20(L)&ved=0ahUKEwi_qdPy4OnkAhUPOisKHQD5D3AQMwhVKAwwDA&iact=mrc&uact=8",
      description: "5 pcs per set",
      price: "12.50",
    },
    {
      id: 2,
      title: "New Zealand Queen Red Apple (L)",
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sparindia.com%2Fmedias%2F121922466.jpg%3Fcontext%3DbWFzdGVyfGltYWdlc3wzMzM4NTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDc1L2hlNi84ODcwMDIzODIzMzkwLmpwZ3xkMThhZDQ0ZjRlMmE1OTZmNTVjYzNjZTE3NTgxMjkxZTY4MGJjYzNmMzQ4ODAzYmNjZDUyNjkxZDMyMDJlMWE1&imgrefurl=https%3A%2F%2Fwww.sparindia.com%2Fen%2FFruits-%2526-Vegetables%2FFresh-Fruits%2FApples%2FSpar---New-Zealand-Queen-Apple-1-KG%2Fp%2F121922466&docid=wB9k9_bABOVXzM&tbnid=W0Niu8FbNTvMmM%3A&vet=10ahUKEwiyyaG44unkAhUYWX0KHchRDuIQMwhzKBYwFg..i&w=1000&h=1000&bih=722&biw=1536&q=New%20Zealand%20Queen%20Red%20Apple%20&ved=0ahUKEwiyyaG44unkAhUYWX0KHchRDuIQMwhzKBYwFg&iact=mrc&uact=8",
      description: "4 pcs per set",
      price: "50"
    },
    {
      id: 3,
      title: "Egypt Melody Black Grape",
      url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fsnfl-group.eu%2Fwp-content%2Fuploads%2F2016%2F09%2FMelody.jpg&imgrefurl=http%3A%2F%2Fsnfl-group.eu%2Fen%2Fproduct%2Fmelody%2F&docid=Tlfy2LJ9xePKEM&tbnid=i8Ib5HMZrpBMrM%3A&vet=10ahUKEwjP97eo4-nkAhUKeysKHVUgCXIQMwhBKAQwBA..i&w=600&h=600&bih=722&biw=1536&q=Egypt%20Melody%20Black%20Grape&ved=0ahUKEwjP97eo4-nkAhUKeysKHVUgCXIQMwhBKAQwBA&iact=mrc&uact=8",
      description: "500g per pack",
      price: "15"
    },
    {
      id: 4,
      title: "Malaysia Red Dragon Fruit (L)",
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-prod.healthline.com%2Fhlcmsresource%2Fimages%2FAN_images%2Fdragon-fruit-1296x728-feature.jpg&imgrefurl=https%3A%2F%2Fwww.healthline.com%2Fnutrition%2Fdragon-fruit&docid=OmRf-zpPUSoP-M&tbnid=N-O-ErlIcdFAaM%3A&vet=10ahUKEwjGkO3f4-nkAhXLX30KHY0YBIcQMwhQKAkwCQ..i&w=1296&h=728&bih=722&biw=1536&q=Malaysia%20Red%20Dragon%20Fruit%20(L)&ved=0ahUKEwjGkO3f4-nkAhXLX30KHY0YBIcQMwhQKAkwCQ&iact=mrc&uact=8",
      description: "1pc per set",
      price: "10.50"
    },
    {
      id: 5,
      title: "China Packham Pear (M)",
      url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fgofruits.com.my%2Fwp-content%2Fuploads%2F2017%2F04%2FPear.jpg&imgrefurl=https%3A%2F%2Fgofruits.com.my%2Findex.php%2Fproduct%2Fpeckham-pear%2F&docid=ud2KU4vFW4LiyM&tbnid=YGLtSHj0Ds_6EM%3A&vet=10ahUKEwir06mX5OnkAhXIdCsKHdeaBG8QMwhRKAowCg..i&w=600&h=600&bih=722&biw=1536&q=China%20Packham%20Pear%20(M)&ved=0ahUKEwir06mX5OnkAhXIdCsKHdeaBG8QMwhRKAowCg&iact=mrc&uact=8",
      description: "5pcs per set",
      price: "10"
    }
  ])

  constructor(private productService: ProductService) { }
}

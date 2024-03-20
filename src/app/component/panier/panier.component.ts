import { Component, Input, input } from '@angular/core';
import { Box } from '../../modele/Box';
import { PanierService } from '../../service/panier.service';
import { Ligne } from '../../modele/Ligne';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})

export class PanierComponent {
  
  @Input({required:true}) panier:Array<Ligne> = []

  constructor(private boxes : PanierService){

  }


}

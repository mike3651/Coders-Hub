/**
 * @author Michael Wilson
 * @version 1.0.0
 * 
 * @description Simple code for a simple page.
 */

import { Injectable, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

@Injectable()
export class HomePageComponent implements OnInit {
  /** @field, @description Keeps track of the list of items on the home page. */
  public homePageOptions: any[];

  /**
   * @constructor
   * @description Creates an instance of the home page.
   * 
   * @param httpService The service to be used.
   */
  constructor(private httpService: Http) {
    this.httpService.get("./assets/mappings/home-page.json")
      .map(res=> res.json())
      .subscribe(data => {
        for(let i = 0; i < data.choices.length; i++) {
          this.homePageOptions.push(data.choices[i]);
        }
        console.log(this.homePageOptions);
      });
  }

  /**
   * @method
   * @description Function that calls upon the appropriate action.
   * 
   * @param choice The players game action choice.
   */
  private actOnChoice(choice: string): void {
    if(choice === "options") {
      console.log("Options page open... the command didn't work...");
    } else if( choice === "loadGame") {
      console.log("Loading game... just kidding! :P");
    } else if(choice === "startNewGame") {
      console.log("Lol, you thought you were going to start the game?");
    }
  } 

  ngOnInit() {
    this.homePageOptions = [];
  }

}

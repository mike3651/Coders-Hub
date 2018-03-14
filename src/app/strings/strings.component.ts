/**
 * @author Michael Wilson
 * @version 1.0.0
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.css']
})
export class StringsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * @method sortCharsAndSumNums
   * @description Given a string of characters and numbers, sort the characters to the front 
   * of the string and then append the summation of the numbers in the string to the end.
   * 
   * Can be improved with a dictionary or map
   * 
   * @param str The string to handle.
   * @return The newly sorted string
   */
  private sortCharsAndSumNums(str): string {
    let newStr:string = ""; 
    let sum: number = 0;
    let ASCII = new Array(256).fill(0);
    for(let i = 0; i < str.length; i++) {
      // is a number
      if(!isNaN(str.charAt(i))) {
        sum += parseInt(str.charAt(i));
      } else {
        // build up the ASCII count
        ASCII[str.charCodeAt(i)]++;
      }
    }

    // Build up the new string
    for(let i = 0; i < ASCII.length; i++) {
      if(ASCII[i] > 0) {
        for(let j = 0; j < ASCII[i]; j++) {
          newStr += String.fromCharCode(i);
        }
      }
    }

    // append the sum to the end of the string
    newStr += sum;
    return newStr;
  }

  /**
   * @method reverseString
   * @description Given a string, reverse the contents of it.
   * 
   * @param str The string to reverse.
   * @return The reverse string.
   */
  private reverseString(str: string): string {
    let retStr: string = "";
    for(let i = str.length - 1; i >= 0; i--) {
      retStr += str.charAt(i);
    }
    return retStr;
  }

  /**
   * @method returnMaxOccuring
   * @description Given a string S, find the most common character in S.
   * 
   * Can be improved with a hashtable
   * 
   * @param str The string to search through.
   * @return The most common character.
   */
  private returnMaxOccuring(str: string): string {
    let retChar = '';
    let ASCII = new Array(256).fill(0);
    for(let i = 0; i < str.length; i++) {
      ASCII[str.charCodeAt(i)]++;
    }

    let maxIndex: number = 0;
    let maxSoFar = ASCII[0];
    for(let i = 1; i < ASCII.length; i++) {
      if(ASCII[i] > maxSoFar) {
        maxSoFar = ASCII[i];
        maxIndex = i;
      }
    }
    retChar = ASCII[maxIndex];
    return retChar;
  }

  /**
   * @method maxConsecRepeat
   * @description Given a string S, find the longest consecutive repeating characters 
   * in S. 
   * 
   * @param str The string to traverse through.
   * @return Object represnting the character and it's count.
   */
  private maxConsecRepeat(str: string): any {
    let max = 0; let maxSoFar = 0; 
    let maxChar: string = "";
    for(let i = 0; i < str.length - 1; i++) {
      maxSoFar++;
      // Have reached the end of the repeats
      if(str.charAt(i) != str.charAt(i + 1)) {
        // check to see if we need to update the max
        if(max < maxSoFar) {
          max = maxSoFar;
          maxChar = str.charAt(i);
        }
        maxSoFar = 0;
      } 
    }
    return { "Character": maxChar, "Repetition": max };
  }

  /**
   * @method logDistinct
   * @description Given a string S, log all of the characters in S which are unique
   * 
   * Using a hashtable would improve space
   * 
   * @param str The string to look through.
   * @return The collection of unique characters
   */
  private logDistinct(str: string): string[] {
    let unique: string[] = [];
    let ASCII = new Array(256).fill(0);
    for(let i = 0; i < str.length; i++) {
      ASCII[str.charCodeAt(i)]++;
    }
    for(let i = 0; i < ASCII.length; i++) {
      // reached a unique character
      if(ASCII[i] == 1) {
        unique.push(String.fromCharCode(i));
      }
    }
    return unique;
  }
}

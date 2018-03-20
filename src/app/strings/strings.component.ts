/**
 * @author Michael Wilson
 * @version 1.0.1
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

  /**
   * @method isPalindrome
   * @description Function that checks to see if a string is a palindrome. 
   * 
   * @param str The string to check.
   * @return True if the string is a palindrome, false otherwise. 
   */
  private isPalindrome(str: string): boolean {
    for(var i = 0; i < str.length/2; i++) {
      if(str.charAt(i) != str.charAt(str.length - 1 - i)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @method canBePalindrome
   * @description Given a string S, check if it's possible to transform into a palindrome.
   * 
   * @param str The string to check.
   * @return true if str can be a palindrome, false otherwise.
   */  
  private canBePalindrome(str: string): boolean {
    let ASCII: number[] = new Array(256).fill(0);
    let oddCount: number = 0;

    // store the frequencies of the characters
    for(let i = 0; i < str.length; i++) {
      ASCII[str.charCodeAt(i)]++;
    }

    // Check the ASCII values to see if the string is a palindrome
    for(let i = 0; i < ASCII.length; i++) {
      if(ASCII[i] % 2 != 0) {
        oddCount++;
        if(oddCount > 1) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * @method areAnagrams
   * @description Given strings A & B, check to see if they are anagrams of one another.
   * 
   * @param A The first string.
   * @param B The second string.
   * @return True if they are anagrams of one another, false otherwise.
   */
  private areAnagrams(A: string, B: string): boolean {
    if(A.length != B.length) {
      return false;
    }
    
    let ASCII_1: number[] = new Array(256).fill(0);
    let ASCII_2: number[] = new Array(256).fill(0);
    
    for(let i = 0; i < A.length; i++) {
      ASCII_1[A.charCodeAt(i)]++;
      ASCII_2[B.charCodeAt(i)]++;
    }

    for(let i = 0; i < ASCII_1.length; i++) {
      if(ASCII_1[i] != ASCII_2[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * @method kthNonRepeating
   * @description Given a string S & a number k, find the kth number in S that doesn't repeat
   * 
   * @param str The string to iterate through.
   * @param k The non repeating character we are looking for.
   */
  private kthNonRepeating(str: string): string {
    let charSequence: any[] = []; 

    // build up a map of characters and their frequencies
    for(let i = 0; i < str.length; i++) {
      if(charSequence.find(x => x.character == str.charAt(i) != undefined)) {
        charSequence.find(x => x.character == str.charAt(i)).frequency++;
      } else {
        charSequence.push({
          'character':str.charAt(i),
          'frequency':1
        });
      }
    }

    let nonRepeatCount: number = 0;
    // traverse through the map and find the kth character with a frequency of 1
    for(let i = 0; i < charSequence.length; i++) {
      if(charSequence[i].frequency == 1) {
        ++nonRepeatCount;
        return charSequence[i].character;
      }
    }
    return "Could not find the character ):>";
  }

  /**
   * @method makeAnagrams
   * @description Given strings A & B, find the minimum number of characters to remove from each
   * string in order to make them anagrams.
   * 
   * @param a The first string.
   * @param b The second string.
   * @return The number of characters needed to be removed from A & B.
   */
  private makeAnagrams(a:string, b:string): any {
    let returnObject: any = [];
    let aFrequency = new Array(256).fill(0);
    let bFrequency = new Array(256).fill(0);
    for(let i = 0; i < a.length; i++) {
      aFrequency[a.charCodeAt(i)]++;
    }

    for(let i = 0; i < b.length; i++) {
      bFrequency[b.charCodeAt(i)]++;
    }

    let totalToRemove: number = 0;

    for(let i = 0; i < 256; i++) {
      if(aFrequency[i] < bFrequency[i]) {
        totalToRemove++;
        returnObject.push({
          'character': String.fromCharCode(i),
          'From A': 0,
          'From B': bFrequency[i] - aFrequency[i]
        });
      } else if(aFrequency > bFrequency[i]) {
        totalToRemove++;
        returnObject.push({
          'character': String.fromCharCode(i),
          'From A': aFrequency[i] - bFrequency[i],
          'From B': 0
        });
      }
    }

    return returnObject.push({ 
      'Minimum characters to remove' : totalToRemove
    });
  }

  /**
   * @method maxInnerPalindrome
   * @description Given a string S, find the largest palindrome in it.
   * 
   * @param str The string to iterate through.
   * @return The largest palindrome in the string
   */
  private maxInnerPalindrome(str: string): string {
    let returnString: string = ""; let maxLength: number = 0;
    let low: number = 0; let high: number = 0;
    for(let i = 0; i < str.length; i++) {
      low = i - 1;
      high = i;
      while(low >= 0 && high < str.length && str[low] == str[high]) {
        if(high - low  + 1> maxLength) {
          maxLength = high - low + 1;
          returnString = str.substring(low, high);
        }
        low--;
        high++;
      }

      low = i - 1;
      high = i + 1;
      while(low >= 0 && high < str.length && str[low] == str[high]) {
        if(high - low  + 1> maxLength) {
          maxLength = high - low + 1;
          returnString = str.substring(low, high);
        }
        low--;
        high++;
      }
    }
    return returnString;
  }
}

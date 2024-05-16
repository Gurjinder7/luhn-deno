import { assertEquals } from "@std/assert";
import { checkLuhn } from './src/index.ts';


Deno.test('should be valid', () => {
    assertEquals({
        "input": "4054425307472577",
        "valid": true, 
        "message": "Number is valid", 
        "remainder": 0 },checkLuhn('4054425307472577'))
 })


 Deno.test('should be invalid', () => {
    assertEquals({
        "input": "4054425307472572",
        "valid": false,
        "message": "Number is invalid",
        "remainder": 5
      } ,checkLuhn('4054425307472572'))
 })

 Deno.test('should be valid', () => {
    assertEquals({
        "input": "40544G530J7472577",
        "valid": false,
        "message": "Input should only contains numeric values",
        "remainder": null
      },checkLuhn('40544G530J7472577'))
 })
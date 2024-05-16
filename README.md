# Luhn Algorithm 
***Validate an input for Luhn check***

This repository implements the Luhn algorithm to check for whether an input value is valid or invalid. 

## Function

`checkLuhn(input: string)` 
- Use the function to check the value
- It will return the following object:
  - ```{input: string, valid: boolean, remainder: number | null, messageL string}``` 

## Example
- `checkLuhn("4054425307472577")`
- This will give ```{
  "input": "4054425307472577",
  "valid": true,
  "message": "Number is valid",
  "remainder": 0
} ```

#### Note:
 There is no length check to keep it open to general use, it will give invalid result if the string contains alphabetic characters


Author: Gurjinder Singh (@Github/Gurjinder7)
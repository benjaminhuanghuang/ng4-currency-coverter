## Class binding
    <input type="number" [class.error]="isInvalid(baseAmount)"> 

## Style binding
    <input type="number" [style.backgroundColor]="isInvalid(baseAmount)?'#ff6666':'#ffffff'"> 

## [ngClass]
    <input type="number" [ngClass]="{error:isInvalid(baseAmount), warning: baseAmount<0}'"> 
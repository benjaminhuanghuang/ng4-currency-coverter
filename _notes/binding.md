## One-way binding: Property binding(component -> view) and Event binding(component <- view)
    Convert: <input type="number" [value]="baseAmount" 
      (input)="update($event.target.value)"> 

## Two-way binding (component <-> view)
    "ngModel" is a special property added by angular that takes care of updating the element value.
    "ngModel" only works for form controls so input fields, textareas, select, checkbox fiels, and so on. 
    Using ngModel requires adding FormsModel to the imports in AppModule
    
    Convert: <input type="number" [ngModel]="baseAmount" (ngModelChange)="update($event)"> 
    or "banana in a box" syntax:
        Convert: <input type="number" [(ngModel)]="baseAmount"> 
    or "canonical" syntax:
        Convert: <input type="number" bindon-ngModel="baseAmount"> 
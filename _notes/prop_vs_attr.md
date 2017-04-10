##
    <input id="baseAmountField" type="number" [value]="baseAmount"> 
    angular sets the "value" property of the dom element, not the attribute of the html element
    
    <strong [innerText] = "targetAmount"></strong> 
    <strong> doesn't have an 'innerText' attribute, it's a property of an element of the DOM

## Test code:
    var element = document.getElementById('baseAmountField');
    element.attributes['value'].value      // attribute
    element.value                          // property

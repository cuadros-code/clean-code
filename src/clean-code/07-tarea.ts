(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';
 
  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  class InputAttributes {
      constructor(
          public value: string,
          public placeholder: string,
      ) {}
  }

  class InputEvents {

      constructor() {}

      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }

  class InputElement {

    htmlElement     : HtmlElement;
    inputAttributes : InputAttributes;
    inputEvents     : InputEvents;

    constructor(
      id          : string,   
      inputType   : HtmlType,
      value       : string,
      placeholder : string
    ){
      this.htmlElement     = new HtmlElement(id, inputType);
      this.inputAttributes = new InputAttributes( value , placeholder);
      this.inputEvents     = new InputEvents()
    }

  }

  // Idea para la nueva clase InputElement
  const nameField = new InputElement('id', 'input', 'Fernando', 'Enter first name');

  console.log({ nameField });

})()
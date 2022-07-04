

type Size = '' | 'XS' | 'M' | 'L' | 'Xl'

class Product {

  constructor(
    public name : string = '',
    public price: number = 0,
    public size : Size = '',
  ){}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ( (this[key] as unknown as string).length <= 0 ) throw Error(`${key} is empty`)
          break;
        case 'number':
          if ( !this[key] as unknown as number ) throw Error(`${key} is empty`)
          break;
        default:
          throw Error('data is not valid')
      }
    }

    return true;
  }

  toString(){
    // No Dry
    if( !this.isProductReady() ) return;
    return `name: ${this.name}, price: ${this.price}, size: ${this.size}`
  }

}

(() => {
  
  const bluePants = new Product('Blue large pants', 1, 'M');
  console.log(bluePants.toString());

})();
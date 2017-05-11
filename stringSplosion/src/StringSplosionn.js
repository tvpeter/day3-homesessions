class StringSplosion {

    constructor (word) {
        this.word = word;
          }

    manipulate () {
      let newWord ="";
      for (let i=1; i<=this.word.length; i++){
    let nen = this.word.slice(0, i);
      newWord += nen;
  }
     return newWord; 
      
    }

}
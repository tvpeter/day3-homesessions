function reverseString(word) {
  var newWord="";
  if (typeof word  !== "string"){
        return "insert string characters";
    }else if (word.length < 1) {
    return null;
  } else if (word[0] == word[word.length-1]){
      return true;
    }else{
      for (var counter = word.length - 1; counter >= 0; counter--) {
       newWord += word[counter];
    } 
    return newWord;
    }
}

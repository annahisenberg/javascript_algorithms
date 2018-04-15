function translatePigLatin(str) {
    var firstVowel = str.match([/aeiou/]);
    var firstPosition = str.indexOf(firstVowel);

    if (firstPosition > 0 ) {
        return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
    } else {
        return str + 'way';
    }
  }
  
  translatePigLatin("consonant");
  
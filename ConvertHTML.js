function convertHTML(str) {
    var newStr = str.split('');

    for(var i = 0; i < newStr.length; i++) {
        switch(newStr[i]) {
            case '&':
                newStr[i] = '&amp;';
                break;
            case '<':
                newStr[i] = '&lt;';
                break;
            case '>':
                newStr[i] = '&gt;';
                break;
            case '"':
                newStr[i] = '&quot;';
                break;
            case "'":
                newStr[i] = '&apos;';
                break;
        }
           
    }
    str = newStr.join('');
    return str;
  }
  
  convertHTML("Dolce & Gabbana");
  
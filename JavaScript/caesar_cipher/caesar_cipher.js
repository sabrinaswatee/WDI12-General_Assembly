
var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.";
var messageArray = message.split('');
var decodedMessageArray = [];

for (var counter = 0; counter < message.length; counter++) {
  if (messageArray[counter].match(/[d-z]/) || messageArray[counter].match(/[D-Z]/)) {
    var ascii = messageArray[counter].charCodeAt();
    var asciiShifted = (ascii - 3);
    var asciiShiftedChar =  String.fromCharCode(asciiShifted);
    decodedMessageArray.push(asciiShiftedChar);
  }
  else if (messageArray[counter].match(/[a-c]/) || messageArray[counter].match(/[A-C]/)) {
    var ascii = messageArray[counter].charCodeAt();
    var asciiShifted = (ascii + 23);
    var asciiShiftedChar = String.fromCharCode(asciiShifted);
    decodedMessageArray.push(asciiShiftedChar);
  }
  else {
    decodedMessageArray.push(messageArray[counter]);
  }
}

console.log(decodedMessageArray.join(""));

/* Extension */

var extensionMessage = "TWO SYMBOLS KISSING EACH OTHER";
var extensionMessageArray = message.split('');
var codedMessageArray = [];

for (var count = 0; count < extensionMessage.length; count++) {
  if (extensionMessageArray[count].match(/[a-y]/) || extensionMessageArray[count].match(/[A-Y]/)) {
    var extensionAscii = extensionMessageArray[count].charCodeAt();
    var extensionAsciiShifted = (extensionAscii + 3);
    var extensionAsciiShiftedChar =  String.fromCharCode(extensionAsciiShifted);
    codedMessageArray.push(extensionAsciiShiftedChar);
  }
  else if (extensionMessageArray[count].match(/[a-c]/) || extensionMessageArray[count].match(/[A-C]/)) {
    var extensionAscii = extensionMessageArray[count].charCodeAt();
    var extensionAsciiShifted = (extensionAscii + 23);
    var extensionAsciiShiftedChar = String.fromCharCode(extensionAsciiShifted);
    codedMessageArray.push(extensionAsciiShiftedChar);
  }
  else {
    codedMessageArray.push(extensionMessageArray[count]);
  }
}

console.log(codedMessageArray.join(""));

/* Extension 2 */

var myMessage = prompt ('Your message?');
var shiftParameter = prompt ('Parameter?');
var myMessageArray = myMessage.split('');
var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var shiftedAlphabets = [];
var encodedMessage =[];

var encodeMyMessage = function (myMessage, shiftParameter) {
  for (var count = 0; count < alphabets.length; count++) {
    if (count < shiftParameter || (count > 25 && count < 26 + shiftParameter)) {
      shiftedAlphabets.push (String.fromCharCode(alphabets[count].charCodeAt() + (26 - shiftParameter)));
    }
    else {
      shiftedAlphabets.push (String.fromCharCode(alphabets[count].charCodeAt() - shiftParameter));
    }
  }

  for (var index = 0; index < myMessage.length; index++) {
    if (myMessageArray[index].match(/[a-z]/) || myMessageArray[index].match(/[A-Z]/)) {
      for (var num = 0; num < alphabets.length; num++) {
        if (myMessageArray[index] == alphabets [num]) {
          encodedMessage.push (shiftedAlphabets[num]);
          break;
        }
        else {
          continue;
        }
      }
    }
    else {
      encodedMessage.push (myMessageArray[index]);
      continue;
    }
  }
  return encodedMessage;
}

var secretMessage = encodeMyMessage (myMessage, shiftParameter);
console.log (secretMessage.join(''));


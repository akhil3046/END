// const crypto = require("crypto");

// function encrypt() {
//   let plaintext = document.getElementById("textarea").value;
//   let keyMatrix = [
//     [3, 4],
//     [2, 5],
//   ];

//   // Convert plaintext to uppercase and remove spaces
//   plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");

//   // Pad plaintext with X's if necessary
//   if (plaintext.length % keyMatrix.length != 0) {
//     plaintext += "X".repeat(
//       keyMatrix.length - (plaintext.length % keyMatrix.length)
//     );
//   }

//   // Split plaintext into blocks of length keyMatrix.length
//   let plaintextBlocks = plaintext.match(
//     new RegExp(".{1," + keyMatrix.length + "}", "g")
//   );

//   // Encrypt each block using the key matrix
//   let ciphertext = "";
//   plaintextBlocks.forEach((block) => {
//     let blockVec = block.split("").map((ch) => ch.charCodeAt(0) - 65);
//     let encVec = matrixMultiply(keyMatrix, blockVec);
//     ciphertext += encVec
//       .map((num) => String.fromCharCode((num % 26) + 65))
//       .join("");
//   });

//   document.getElementById("textarea").value = ciphertext;
// }

// // Function to decrypt a string using a Caesar cipher with the given key
// function decrypt() {
//   ciphertext = document.getElementById("decryptText").value;
//   let keyMatrix = [
//     [3, 4],
//     [2, 5],
//   ];
//   // Decryption function

//   // Calculate the inverse of the key matrix
//   let keyMatrixInv = matrixInverse(keyMatrix);

//   // Split ciphertext into blocks of length keyMatrix.length
//   let ciphertextBlocks = ciphertext.match(
//     new RegExp(".{1," + keyMatrix.length + "}", "g")
//   );

//   // Decrypt each block using the inverse key matrix
//   let plaintext = "";
//   ciphertextBlocks.forEach((block) => {
//     let blockVec = block.split("").map((ch) => ch.charCodeAt(0) - 65);
//     let decVec = matrixMultiply(keyMatrixInv, blockVec);
//     plaintext += decVec
//       .map((num) => String.fromCharCode((num % 26) + 65))
//       .join("");
//   });

//   document.getElementById("decryptText").value = plaintext;
// }

function copytext() {
  // Get the text field
  var copyBtn = document.getElementById("copyButton");
  copyBtn.onclick = function () {
    var myCode = document.getElementById("textarea").value;
    console.log(myCode);
    var fullLink = document.createElement("input");
    document.body.appendChild(fullLink);
    fullLink.value = myCode;
    fullLink.select();
    document.execCommand("copy", false);
    fullLink.remove();
    alert("Copied the text: " + fullLink.value);
  };
}

// Matrix multiplication function
// function matrixMultiply(matrix, vec) {
//   let result = [];
//   for (let i = 0; i < matrix.length; i++) {
//     let rowSum = 0;
//     for (let j = 0; j < vec.length; j++) {
//       rowSum += matrix[i][j] * vec[j];
//     }
//     result.push(rowSum);
//   }
//   return result;
// }

// // Matrix inverse function
// function matrixInverse(matrix) {
//   // Calculate the determinant of the matrix
//   let det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

//   // Calculate the adjugate of the matrix
//   let adjugate = [
//     [matrix[1][1], -matrix[0][1]],
//     [-matrix[1][0], matrix[0][0]],
//   ];

//   // Calculate the inverse of the matrix
//   let inverse = adjugate.map((row) => row.map((num) => num / det));

//   return inverse;
// }

// function encrypt1(){
//   function encryptBlowfish(plaintext) {
//     const key='MySecretKey';
//     const iv = crypto.randomBytes(8); // Generate a random IV
//     const cipher = crypto.createCipheriv('bf-cbc', key, iv);
//     let ciphertext = cipher.update(plaintext, 'utf8', 'base64');
//     ciphertext += cipher.final('base64');
//     return {
//       iv: iv.toString('hex'),
//       ciphertext: ciphertext,
//     };
//   }
// }
// function decrypt(){7
//   function decryptBlowfish(ciphertext, key, iv) {
//     iv = Buffer.from(iv, 'hex');
//     const decipher = crypto.createDecipheriv('bf-cbc', key, iv);
//     let plaintext = decipher.update(ciphertext, 'base64', 'utf8');
//     plaintext += decipher.final('utf8');
//     return plaintext;
//   }

// }

function encrypt1() {
  var key = "my secret key";
  var message = document.getElementById("textarea").value;

  // Encrypt the message using Blowfish
  var encrypted = CryptoJS.AES.encrypt(message, key).toString();

  document.getElementById("textarea").value = encrypted;
  document.getElementById("encryptButton").disabled = true;
}

function decrypt1() {
  var key = "my secret key";
  // Decrypt the message using Blowfish
  var message = document.getElementById("decryptText").value;
  var decrypted = CryptoJS.AES.decrypt(message, key).toString(
    CryptoJS.enc.Utf8
  );

  document.getElementById("decryptText").value = decrypted;
  document.getElementById("decryptButton").disabled = true;
}

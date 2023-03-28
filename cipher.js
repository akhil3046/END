
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

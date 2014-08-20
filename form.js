function validEmail(emailAddress) {
  var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
  var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
  var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
  var sQuotedPair = '\\x5c[\\x00-\\x7f]';
  var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
  var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
  var sDomain_ref = sAtom;
  var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
  var sWord = '(' + sAtom + '|' + sQuotedString + ')';
  var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
  var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
  var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
  var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

  var reValidEmail = new RegExp(sValidEmail);

  if (reValidEmail.test(emailAddress)) {
    return true;
  }
  return false;
}

var docCookies = {
  getItem: function (sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};

function supports_html5_storage() {
    try {
        localStorage.setItem("test", "foo");
        return "localStorage" in window && window.localStorage !== null
    } catch (e) {
        return false
    }
}

function store(){
    var inputName= document.getElementById("name");
    console.log(localStorage.getItem('name'));

    var inputEmail= document.getElementById("email");
    console.log(localStorage.getItem('email'));
    
    if (supports_html5_storage()) {
        localStorage.setItem("name", inputName.value);
        localStorage.setItem("email", inputEmail.value);
    } else {
        var storeValue = inputName.value + '||~||' + inputEmail.value; 
        docCookies.setItem('box_arcade', storeValue);
    }
    
    var validationAlert = '<div id="alert"><a class="alert" href="./">Are you sure you filled out that form right? Might want to double check that!</a></div>';
    
    if(!validEmail(inputEmail.value)) {
        $( validationAlert ).insertBefore( "#logo" );
        $("#email").effect("shake");
        return;
    }

    if(!inputEmail.value && !inputName.value) {
        $( validationAlert ).insertBefore( "#logo" );
        $("#email").effect("shake");
        $("#name").effect("shake");
    } else if(!inputEmail.value || !validEmail(inputEmail.value)) {
        $( validationAlert ).insertBefore( "#logo" );
        $("#email").effect("shake");
    } else if(!inputName.value) {
        $( validationAlert ).insertBefore( "#logo" );
        $("#name").effect("shake");
    } else {
//        var href = window.location.href.split('/');
//        var baseUrl = href[0]+'//'+href[2]+'/';
        window.location = "./games/";
    }
}
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

function store(){
    var inputName= document.getElementById("name");
    localStorage.setItem("name", inputName.value);
    console.log(localStorage.getItem('name'));

    var inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
    console.log(localStorage.getItem('email'));
    
    var validationAlert = '<div id="alert"><a class="alert" href="/">Are you sure you filled out that form right? Might want to double check that!</a></div>';
    
    if(!validEmail(inputEmail.value)) {
        $( validationAlert ).insertBefore( "#logo" );
        $("#email").effect("shake");
        return;
    }

    if(!inputEmail.value && !inputName.value) {
        $( validationAlert ).insertBefore( "#logo" );
        $("#email").effect("shake");
        $("#name").effect("shake");
    } else if(!inputEmail.value) {
        $( validationAlert ).insertBefore( "#logo" );
        $("#email").effect("shake");
    } else if(!inputName.value) {
        $( validationAlert ).insertBefore( "#logo" );
        $("#name").effect("shake");
    } else {
        var href = window.location.href.split('/');
        var baseUrl = href[0]+'//'+href[2]+'/';
        window.location = baseUrl + "games/";
    }
}
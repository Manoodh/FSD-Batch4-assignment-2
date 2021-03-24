function login_validate(){
    let uname=document.getElementById('uname');
    let pswd=document.getElementById('pswd');
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let regexp_email=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(!regexp_email.test(uname.value)){
        document.getElementById('error1').innerHTML="<pre style='color:red;'>Email Invalid</pre>"
        return false;
    }
    if(!passw.test(pswd.value)){
        document.getElementById('error2').innerHTML='<pre style="color:red;">Invalid password</pre>';
        return false;
    }
    else{
        return true;
    }
}

function stren_pass(){
    let pslen=pswd.value.trim().length;
    if(pslen>14){
        document.getElementById('strength').innerHTML="<pre style='color:green;'>Strong</pre>"
    }
    else if(pslen>10){
        document.getElementById('strength').innerHTML="<pre style='color:orange;'>Medium</pre>"
    }
    else{
        document.getElementById('strength').innerHTML="<pre style='color:red;'>Poor</pre>"

    }
}


function signup_validate()
{
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let regexp_email=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/;
  let email=document.getElementById('email');
  let num=document.getElementById('phone');
  let pswd=document.getElementById('pswd');
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
 
  if(!regexp_email.test(email.value)){
    document.getElementById('error1').innerHTML="<pre style='color:red;'>Email Invalid invalid</pre>";
    return false;
  }
  else{
    document.getElementById('error1').innerHTML='<pre style="color:green;">Valid Email</pre>'
  }
  if(!phoneno.test(num.value)){
    document.getElementById('error2').innerHTML="<pre style='color:red;'>Phone Number Invalid</pre>";
    return false;
  }
  else{
    document.getElementById('error2').innerHTML='<pre style="color:green;">Valid Phone Number</pre>'
  }
  if(!passw.test(pswd.value.trim())){
    document.getElementById('error3').innerHTML="<pre style='color:red;'>Password must be atleast 8 characters, atleast one uppercase, and one lower case and must contain at least one number</pre>";
  return false;
  }
  else{
    return true;
  }
}
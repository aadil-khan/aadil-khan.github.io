function check(form)
{

if(form.userid.value == "Adil khan" && form.pwd.value == "Adil@1004")
{
    window.location.replace('https://drive.google.com/file/d/16GbQ4UAVfW_6k1JyznGq9dEXWdcId-Wt/preview');
  }
 else
 {
   alert("Incorrect Username or Password")
  }
}
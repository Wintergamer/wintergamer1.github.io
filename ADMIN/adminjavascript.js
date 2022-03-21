function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="shah-ad"&& password=="user1")
{
    window.open("./admin-page.html");;
    return false;

}
else
{
    alert("login failed");
}


}
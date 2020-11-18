function CheckNameUsingRegex(name)
{
    let nameRegex=new RegExp(/^[A-Z][a-z]{2,}$/);
    //if(/^[a-zA-Z]+$/.test('Priya'))
    //var reg='^[[:upper:]][a-z]{3,}$';
    if(nameRegex.test(name))
    console.log("Valid Name");
    else
    console.log("in-valid Name")
}
CheckNameUsingRegex("Priya");
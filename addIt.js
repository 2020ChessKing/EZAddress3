class addIt
{
    constructor()
    {

    }

    display()
    {
     
    }

    addEZAddress()
    {
    database.ref("EZAddresses/" + form.mobileNumber.value()).update
    ({
      EZAddress : Math.round(random(10000, 99999)),
    })
    }
}
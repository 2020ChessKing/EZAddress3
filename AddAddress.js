class AddForm
{
    constructor()
    {
        this.name = createInput("Name");
        this.addressline1 = createInput("Address Line 1");
        this.addressline2 = createInput("Address Line 2");
        this.city = createInput("City");
        this.state = createInput("State");
        this.zipcode = createInput("Zip Code");
        this.landmark = createInput("LandMark");
        this.country = createInput("Country");
        this.email = createInput("Email");
        this.mobile = createInput("Phone Number");

        this.star1 = createElement('h1', '*');
        //this.star1 = createElement('Arial');
        this.star2 = createElement('h1', '*');
        //this.star2 = createElement('Arial');
        //this.star3 = createElement('h1', '*');
        this.star4 = createElement('h1', '*');
        //this.star4 = createElement('Arial');
        this.star5 = createElement('h1', '*');
        //this.star5 = createElement('Arial');
        this.star6 = createElement('h1', '*');
        //this.star6 = createElement('Arial');
        this.star7 = createElement('h1', '*');
        //this.star7 = createElement('Arial');
        //this.star8 = createElement('h1', '*');
        //this.star9 = createElement('h1', '*');
        this.star10 = createElement('h1', '*');
        //this.star10 = createElement('Arial');

        this.EZAddress = " ";

        this.AddressFull = this.addressline1.value() + " " + this.addressline2.value() + " " + this.city.value() + " " + this.state.value() + " " + this.country.value() + " " + this.landmark.value();

        this.x = null;
        this.xi = null;
        this.xii = null;
        
    }

    display()
    {
        AddAddress.x = 10000000;
        SearchAddress.x = 10000000;

        this.getInfo();
        //this.xii = Math.round(this.x);
        this.xi = this.x;

        this.name.position(115, 170);
        this.addressline1.position(115, 200);
        this.addressline2.position(115, 230);
        this.city.position(115, 260);
        this.state.position(115, 290);
        this.zipcode.position(115, 320);
        this.country.position(115, 350);
        this.landmark.position(115, 380);
        this.email.position(115, 410);
        this.mobile.position(115, 440);

        this.star1.position(300, 140);
        this.star2.position(300, 170);
       // this.star3.position(300, 200);
        this.star4.position(300, 230);
        this.star5.position(300, 260);
        this.star6.position(300, 290);
        this.star7.position(300, 320);
        //this.star8.position(300, 350);
        //this.star9.position(300, 380);
        this.star10.position(300, 410);

    //     if(mousePressedOver(homeS))
    //  {
    //     this.name.hide();
    //     this.addressline1.hide();
    //     this.addressline2.hide();
    //     this.city.hide();
    //     this.state.hide();
    //     this.zipcode.hide();
    //     this.country.hide();
    //     this.landmark.hide();
    //     this.email.hide();
    //     this.mobile.hide();

    //     this.star1.hide();
    //     this.star2.hide();
    //    // this.star3.hide();
    //     this.star4.hide();
    //     this.star5.hide();
    //     this.star6.hide();
    //     this.star7.hide();
    //     this.star10.hide();

    //     next3.x = 1000000;
   
    //  }


        // this.AddressFull = this.addressline1.value() + " " + this.addressline2.value() + " " + this.city.value() + " " + this.state.value() + " " + this.country.value() + " " + this.landmark.value();


        next3.x = 200;

        // if(mousePressedOver(next3))
        // {
        //     this.update();
        // }
        

    }

    update()
    {
     if(this.landmark.value('LandMark'))
     {
      this.landmark.value('');
     }
     this.AddressFull = this.addressline1.value() + " " + this.addressline2.value() + " " + this.city.value() + " " + this.state.value() + " " + this.country.value() + " " + this.landmark.value();
     var EZAddressOfficialCode = "users/" + this.xi;
     database.ref(EZAddressOfficialCode).update(
         {
            Name : this.name.value(),
            Email : this.email.value(),
            Phone : this.mobile.value(),
            Address : this.AddressFull,
         }

     )
    }

    hide()
    {
            this.name.hide();
            this.addressline1.hide();
            this.addressline2.hide();
            this.city.hide();
            this.state.hide();
            this.zipcode.hide();
            this.country.hide();
            this.landmark.hide();
            this.email.hide();
            this.mobile.hide();

            this.star1.hide();
            this.star2.hide();
           // this.star3.hide();
            this.star4.hide();
            this.star5.hide();
            this.star6.hide();
            this.star7.hide();
            this.star10.hide();
    }

    getInfo()
    {
     var pc = database.ref("EZAddresses/" + form.mobileNumber.value() + "/EZAddress");
     pc.on("value", (data)=>{
         this.x = data.val();
     });
     //console.log(this.x);
    }
}
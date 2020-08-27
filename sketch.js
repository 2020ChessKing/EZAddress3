var headImage, Signup, Login, next, logo, AddAddresso, SearchAddresso, next31;
var next1, sendOTP, AddAddress, SearchAddress, EZAddress, EZAddressHome;
var mobile, isit, homeS, EPN, EnterPhoneNumber, EPNR, OTPN, OTPNR, NameText, AddressLine1;
var AddressLine2, CityText, StateText, CountryText, EmailText;
var NameT, AddressLine1T, AddressLine1T, CityT, StateT, CountryT, EmailT;
var ZipcodeText, LandmarkText, PhoneText;
var ZipcodeT, LandmarkT, PhoneT, AsteriskText;
var next2, closeT, closeButton, decider;

function preload()
{
  headImage = loadImage("Img/EZAddressHead.PNG");
  AddAddresso = loadImage("Img/Add Adress.PNG");
  SearchAddresso = loadImage("Img/Search Address.PNG");
  Login = loadImage("Img/login.PNG");
  next = loadImage("Img/NextIcon.PNG");
  closeButton = loadImage("Img/NextIcon2.PNG.PNG")
  next21 = loadImage("Img/next32.PNG");
  next31 = loadImage("Img/NextIcon - Copy.PNG");
  logo = loadImage("Img/EZAddresslogo.PNG");
  home = loadImage("Img/EZAddressHome.PNG");
  EnterPhoneNumber = loadImage("Img/EnterPhoneNumber.PNG");
  EnterPhoneNumber2 = loadImage("Img/EnterPhoneNumberRed.PNG");
  EnterOTP = loadImage("Img/EnterOTP.PNG");
  EnterOTP2 = loadImage("Img/EnterOTPRed.PNG");
  NameText = loadImage("Img/NameText.PNG");
  AddressLine1 = loadImage("Img/AddressLine1.PNG");
  AddressLine2 = loadImage("Img/AddresLine2.PNG")
  CityText = loadImage("Img/CityText.PNG");
  StateText = loadImage("Img/StateText.PNG");
  CountryText = loadImage("Img/CountryText..png");
  EmailText = loadImage("Img/EmailText.PNG")
  ZipcodeText = loadImage("Img/ZipCodeText.PNG")
  LandmarkText = loadImage("Img/LandmarkText.PNG");
  PhoneText = loadImage("Img/PhoneText.PNG")
  AsteriskText = loadImage("Img/AsteriskRed.PNG");

  decider = '2';

}

function setup() 
{
  createCanvas(400, 700); 

  database = firebase.database();

  elf = new addIt();


  next2 = createSprite(1000000, 250, 100, 100);
  next2.addImage(next21);
  next2.scale = 0.6;

  // homeS = createSprite(350, 650, 100, 100);
  // homeS.addImage(home);
  // homeS.scale = 0.3;

  next3 = createSprite(1000000,  600, 100, 100);
  next3.addImage(next31);
  next3.scale = 0.6;

  AddAddress = createSprite(1000000, 200, 100, 100);
  AddAddress.addImage(AddAddresso);
  AddAddress.scale = 0.5;

  SearchAddress = createSprite(1000000, 300, 100, 100);
  SearchAddress.addImage(SearchAddresso);
  SearchAddress.scale = 0.5;

  sendOTP = createSprite(200, 280, 100, 100);
  sendOTP.addImage(Login);
  sendOTP.scale = 0.3;

  next1 = createSprite(200, 500, 100, 100);
  next1.addImage(next);
  next1.scale = 0.6;

  pointer = createSprite(0, 0, 1, 1);
  pointer.visible = false;

  EPN = createSprite(80, 177, 100, 100);
  EPN.addImage(EnterPhoneNumber);
  EPN.scale = 0.26;

  EPNR = createSprite(80, 177, 100, 100);
  EPNR.addImage(EnterPhoneNumber2);
  EPNR.scale = 0.26;
  EPNR.visible = false;

  OTPN = createSprite(60, 390, 100, 100);
  OTPN.addImage(EnterOTP);
  OTPN.scale = 0.26;

  OTPNR = createSprite(60, 390, 100, 100);
  OTPNR.addImage(EnterOTP2);
  OTPNR.scale = 0.26;
  OTPNR.visible = false;
  
  NameT = createSprite(85, 180, 100, 100);
  NameT.addImage(NameText);
  NameT.scale = 0.26;
  NameT.visible = false;

  AddressLine1T = createSprite(60, 220, 100, 100);
  AddressLine1T.addImage(AddressLine1);
  AddressLine1T.scale = 0.26;
  AddressLine1T.visible = false;

  AddressLine2T = createSprite(60, 260, 100, 100);
  AddressLine2T.addImage(AddressLine2);
  AddressLine2T.scale = 0.26;
  AddressLine2T.visible = false;

  CityT = createSprite(85, 300, 270, 100);
  CityT.addImage(CityText);
  CityT.scale = 0.26;
  CityT.visible = false;

  StateT = createSprite(85, 340, 100, 100);
  StateT.addImage(StateText);
  StateT.scale = 0.26;
  StateT.visible = false;

  CountryT = createSprite(75, 424, 100, 100);
  CountryT.addImage(CountryText);
  CountryT.scale = 0.26;
  CountryT.visible = false;

  EmailT = createSprite(85, 498, 100, 100);
  EmailT.addImage(EmailText);
  EmailT.scale = 0.26;
  EmailT.visible = false;

  ZipcodeT = createSprite(75, 380, 100, 100);
  ZipcodeT.addImage(ZipcodeText);
  ZipcodeT.scale = 0.26;
  ZipcodeT.visible = false;

  LandmarkT = createSprite(65, 460, 100, 100);
  LandmarkT.addImage(LandmarkText);
  LandmarkT.scale = 0.26;
  LandmarkT.visible = false;

  PhoneT = createSprite(85, 540, 100, 100);
  PhoneT.addImage(PhoneText);
  PhoneT.scale = 0.26;
  PhoneT.visible = false;

  closeT = createSprite(10000000, 630, 100, 100);
  closeT.addImage(closeButton);
  closeT.scale = 0.6;

  createSprite(0, 350, 6, 700);
  createSprite(400, 350, 6, 700);
  createSprite(200, 0, 400, 6);
  createSprite(200, 700, 400, 6);



  form = new Form();

  x = 0;

}

function draw() 
{
  background(245);


  //headImage = loadImage("EZAddressHead.PNG")


  form.display();
  image(headImage, 0, 0, 400, 133);
  pointer.x = mouseX;
  pointer.y = mouseY;

  if(pointer.isTouching(sendOTP))
  {
    sendOTP.scale = 0.34;
  }
  else{sendOTP.scale = 0.3}

  if(pointer.isTouching(next1))
  {
    next1.scale = 0.64;
  }
  else{next1.scale = 0.6}

  if(pointer.isTouching(next3))
  {
    next3.scale = 0.64;
  }
  else{next3.scale = 0.6}

  // if(pointer.isTouching(homeS))
  // {
  //   homeS.scale = 0.34;
  // }
  // else{homeS.scale = 0.3}



  if(pointer.isTouching(next2))
  {
    next2.scale = 0.64;
  }
  else{next2.scale = 0.6}

  if(pointer.isTouching(closeT))
  {
    closeT.scale = 0.64;
  }
  else{closeT.scale = 0.6}

  if(pointer.isTouching(AddAddress))
  {
    AddAddress.scale = 0.54;
  }
  else{AddAddress.scale = 0.5}

  if(pointer.isTouching(SearchAddress))
  {
    SearchAddress.scale = 0.54;
  }
  else{SearchAddress.scale = 0.5}

  if(mousePressedOver(SearchAddress))
  {
    form2 = new searchForm();
    next2.x = 200;
     SearchAddress.x =100000;
     AddAddress.x = 1000000;
    x = 2;
  }

  if(mousePressedOver(AddAddress))
  {
    form3 = new AddForm();
    x = 3;
    //closeT.x = 200;
    decider = 'form3';

    setTimeout(function()
    {
       if(form3.x === null)
       {  
         elf.addEZAddress();
       }
   }, 1500)    

  }

  if(mousePressedOver(next2))
  {
    form2.step2();
    // next2.x = 100000000;
    decider = 'form2';
    closeT.x = 200;
    x = 2;
  }

  if(mousePressedOver(closeT))
  {
   soon = 'form' + decider;
   form2.hide();
   closeT.x = 100000000;
   AddAddress.x = 200;
   SearchAddress.x = 200;
   next2.x = 1000000;
  }

  if(mousePressedOver(next3))
  {
    if(form3.email.value(''))
    {
      if(form3.mobile.value().length === 10)
      {
        if(form3.addressline1.value().length >= 5)
        {
         if(form3.name.value().length >= 2)
         {
           if(form3.city.value().length >= 1)
           {          
            if(form3.state.value().length >= 1)
            {          
              if(form3.zipcode.value().length === 6)
              {          
                if(form3.country.value().length >= 1)
                {          
                 SearchAddress.x = 200;
                 AddAddress.x = 200;
                 next3.x = 10000000;
                 form3.hide();
                 form3.update();
                 x = 5;
                   setTimeout(function()
                 {
                   var it = createElement('h3', 'Your EZAddress Code is ' + form3.xi);
                   it.position(70, 650);
                 }, 2000);
             }
              else{alert('Please Enter Correct Country')}
            }
            else{alert('Please Enter Correct Zipcode')}
          }
          else{alert('Please Enter Correct State')}
         }
         else{alert('Please Enter Correct City')}
        }
        else{alert('Please Enter Correct Name')}
       }
       else{alert('Please Enter Correct Address')}
      }
      else{alert('Please Enter Correct Phone')}
    }
    else
    {
      if(form3.mobile.value().length === 10)
      {
        if(form3.addressline1.value().length >= 5)
        {
         if(form3.name.value().length >= 2)
         {
           if(form3.city.value().length >= 1)
           {          
            if(form3.state.value().length >= 1)
            {          
              if(form3.zipcode.value().length === 6)
              {          
                if(form3.country.value().length >= 1)
                {          
                 SearchAddress.x = 200;
                 AddAddress.x = 200;
                 next3.x = 10000000;
                 form3.hide();
                 form3.update();
                 x = 5;
                   setTimeout(function()
                 {
                   var it = createElement('h3', 'Your EZAddress Code is ' + form3.xi);
                   it.position(70, 650);
                 }, 2000);
             }
              else{alert('Please Enter Correct Country')}
            }
            else{alert('Please Enter Correct Zipcode')}
          }
          else{alert('Please Enter Correct State')}
         }
         else{alert('Please Enter Correct City')}
        }
        else{alert('Please Enter Correct Name')}
       }
       else{alert('Please Enter Correct Address')}
      }
      else{alert('Please Enter Correct Phone')}
  }
    
  }

  if(x === 2)
  {
    form2.display();
    //closeT.x = 200;
  }
  if(x === 3)
  {
    form3.display();
  }

  drawSprites();
}



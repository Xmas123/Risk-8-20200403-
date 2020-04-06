class Kontaktaoss extends Base {

  async collectFormData(e) {
    // Prevent the browser from reloading
    // the page when we submit the form
    e.preventDefault();
    // The form is the event target
    let form = e.target;
    // Create an object to collect form data in
    let formData = {};
    // Loop through the elements of the form
    for (let element of form.elements) {
      if (!element.name) { continue; }
      formData[element.name] = element.value;
    }
    console.log(formData);
    // Send the form data to the db
    await sql(/*sql*/`
      INSERT INTO Customer (firstName, lastName, phoneNr, email, message) VALUES($firstName, $lastName, $phoneNr, $email, $message)
    `, formData);
    // Update the "flag" formSent
    this.formSent = true;
    // Now render again so that the screen updates
    this.render();
  }





  render() {
    return /*html*/`
      <div class="row" route="/kontaktaOss" page-title="kontakt">

        <div class="col-sm-6">
        <br>
          
          <h1 class="display-4">Contact us</h1>
          <br>
          <br>
          
        
          <p></p>
        Need help to deal with risks? With us you get help from Hack the Risk!!!
        <br>
        <br>
        Feel free to visit us at our office or email us your questions or concerns!!
        <br>
        <br><br>
<br>
<br>

        Office:
          <br>
Hack the Risk
<br>
Box 4678
<br>
114 28 Stockholm 
<br>
Sverige
<br>
Org.nr: xxxxxx-yyyy
          <br>
          <br>
        <br>
        </h6>
          <iframe class="col-sm-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5018.099597491717!2d18.085618635540456!3d59.33227023793569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5108d06f43%3A0x1919bf925b4f7e2f!2sStrandv%C3%A4gen%2C%20Stockholm!5e0!3m2!1ssv!2sse!4v1585068750631!5m2!1ssv!2sse" width="300" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

</div>



<div class="col-sm-6; p-3 ml-4 bg-light">


${this.formSent ? /*html*/`

            <div class="float-right">
              <br>
               <br>
              <h3>Thank you for your feedback!</h3>
              <br>
              <br>
              <h5>We have received your feedback.</h5>
            </div><br>
           ` :/*html*/`

            <form submit="collectFormData" >
            
              <br>
              <h2 class="display-5">Your opinions are important!</h2>
              
              <br>
              <a href ="support@hack.com" style="color:black">support@hack.com</span></a> 
              <br>
              <br>
              Please kindly give feedback on how we can get better!
              <br>
              <br>
              <div class="form-group">
                <label class="w-100">Firstname
                  <input name="firstName" type="text" class="form-control" placeholder="Carl" required pattern=".{2,}">
                </label>
              </div>
               <div class="form-group">
                <label class="w-100">Lastname
                  <input name="lastName" type="text" class="form-control" placeholder="Carlson" required>
                </label>
              </div>
              <div class="form-group">
                <label class="w-100">Telephone
                  <input name="phoneNr" type="text" class="form-control" placeholder="+46(0)76010101" required>
                </label>
              </div>
                <div class="form-group">
                <label class="w-100">E-mail
                  <input name="email" type="email" class="form-control" placeholder="name@example.com" required>
                  </label>
                  </div>
            <div class="form-group">
                <label class="w-100">Message
                  <textarea name="message" class="form-control" placeholder="Leave your comments" required></textarea>
                </label>
              </div>

              <input class="btn btn-secondary float-left" type="submit" value="Skicka">

            </form>

            </div>
            
      
`}


     
      </div> 
    
      
    `;
  }

}
class Result extends Base {



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
        <div class="row" route="/result" page-title="Result">
        <div class="box">
          <div class="col-12"><center>
          <h1 class="display-5">Results</h1>
            <p>Your results are important for your health and lives!</p>
          </div>

          ${this.formSent ? /*html*/`
            <div class="col-12">
              <h1 class="display-3">Thank you for your answer!</h1>
            </div>
           ` :/*html*/`

           
            <form submit="collectFormData">
            <div class="col-12">
            <div class="form-row">
            
              <div class="form-group col-md-6">
                <label class="w-100">Firstname
                  <input name="firstName" type="text" class="form-control" placeholder="firstname" required pattern=".{2,}">
                </label>
              </div>
               <div class="form-group col-md-6">
                <label class="w-100">Lastname
                  <input name="lastName" type="text" class="form-control" placeholder="lastnamn" required>
                </label>
              </div>
            </div>

            <form submit="collectFormData">
            <div class="col-12">
            <div class="form-row">
            
              <div class="form-group col-md-6">
                <label class="w-100">Personalnumber
                  <input name="personalnumber" type="text" class="form-control" placeholder="Personalnumber" required pattern=".{2,}">
                </label>
              </div>
               <div class="form-group col-md-6">
                <label class="w-100">Gender
                  <input name="gender" type="text" class="form-control" placeholder="gender" required>
                </label>
              </div>
            </div>

              <div class="form-group">
              <label for="exampleFormControlInput1">Telephone</label>
              <input name="phoneNr" class="form-control" placeholder="+46073000000">
              </div>
              
              <label for="exampleFormControlInput1">Email</label>
              <input name="email" class="form-control" placeholder="name@example.com">
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
                  <textarea name="message" class="form-control" placeholder="Leave your messages" required></textarea>
                </label>
              </div>

              <input class="btn btn-secondary float-left" type="submit" value="Send">
            </form>
          </div>
           </div>
           </div>
          
`}


      `;
  }
}
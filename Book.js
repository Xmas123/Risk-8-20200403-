
class Book extends Base {

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
      INSERT INTO saljFormular (firstName, lastName, email, phoneNr, message, livingArea) VALUES($firstName, $lastName, $email, $phoneNr, $message, $livingArea)
    `, formData);
    // Update the "flag" formSent
    this.formSent = true;
    // Now render again so that the screen updates
    this.render();
  }

  render() {
    return /*html*/`
       <div class="row" route="/salj" page-title="Sälj">
        <div class="col-sm-6">
        <br>
          <h1 class = "display-4">Book with Hack the Risk</h1><br>

          <br>
          
          <p>At Hack the Risk we know what it takes to make a really good risk deal. We help to assess, identify and reduce risks lever professionally. 
          <br>
          <br>
          In addition to having professional experts, very good local knowledge and our old registered customers, we always prioritize the customer's wishes. 
          <br>
          <br>
          Whether you are ready to assess now or in the future, we will be happy to help you to make an advices or assessment of your current situation.
           

           

          
            
  </div>



<div class="col-sm-6; p-3 ml-2 mb-2 bg-light">

${this.formSent ? /*html*/`
            
      <div class="float-right">
              <h3>Thank you for your report!</h3>
              <br>
              <br>
              <h5>Our expertss will be back as soon as possible.</h5>
            </div>


           ` :/*html*/`
          <br>
           <h2 class="display-5">Book of assessment and identification?</h2>
            <br>
          
            
            <p>Form of assessment and identification</p>
           
            <form submit="collectFormData">

              <div class="form-group">

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
              <label for="exampleFormControlSelect1">Address</label>
              <input name="address" class="form-control" placeholder="Address">
              </select>
            </div>

               <div class="form-group">
              <label for="exampleFormControlTextarea1">Descript yourself</label>
              <textarea name="message" class="form-control" rows="3"></textarea>
          
              <br>
            


              <input class="btn btn-secondary float-left" type="submit" value="Send">
            </form>
          </div>
            
`}

</div>

</div>

      `;
  }
}

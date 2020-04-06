class App extends Base {

  async mount() {

    this.navBarLinks = [
      { label: 'WELCOME', route: '/' },
      { label: 'BOOK', route: '/salj' },
       { label: 'RESULT', route: '/result' },
      { label: 'OUR EXPERTS', route: '/varamaklare' },
      { label: 'CONTACT US', route: '/kontaktaoss' },
     
    ];

    this.navBar = new NavBar({ links: this.navBarLinks });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.missingPage = new MissingPage();
    this.book = new Book();
    this.realtors = new Realtors();
    this.kontaktaoss = new Kontaktaoss();
    this.result = new Result();

    await sql(/*sql*/`
          USE databas
        `);




    //  await sql(/*sql*/`
    //        USE databas
    //      `);
    //  this.tillSalu = await sql(Tillsalu,/*sql*/`
    //    SELECT * FROM Address 
    //    `);


  }

  render() {
    return /*html*/`
      <div base-title="Minimal: ">
        <header>
        
          ${this.navBar}

        </header>
        <main class="container my-4">
          ${this.startPage}
          ${this.missingPage}
          ${this.book}
          ${this.realtors}
          ${this.valavbostad}
          ${this.kontaktaoss}
          ${this.result}

        </main>
        ${this.footer}

      </div>
      
    `;
  }

}
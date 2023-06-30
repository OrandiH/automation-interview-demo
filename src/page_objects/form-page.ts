
// All imports go here

// Importing Base Page Object
import Page from './page';

/**
 * Page containing specific selectors and methods for a specific page
 */
class form extends Page {
  /**
     * Selectors
     * Define selectors in this section using getter methods
     */
    public get firstname() {
      return $('#firstname')
    }

    public get lastname() {
      return $('#lasttname')
    }

    public get email() {
      return $('#email')
    }

    /** Get all form drop down fields */
    public get formDropdowns() {
      return $$('div.select >select')
    }

    public get phoneNumber() {
      return $('#Phno')
    }

    public get address1() {
      return $('#Addl1')
    }

    public get address2() {
      return $('#Addl2')
    }

    public get state() {
      return $('#state')
    }

    public get postalcode() {
      return $('#postalcode')
    }

    public get date() {
      return $('#Date')
    }

    public get genderCheckbox() {
      return $$('input[type="radio"]')
    }

    public get agreeToTerms() {
      return $('input[type="checkbox"')
    }

    public get submitBtn() {
      return $('input[type="submit"]')
    }

    /**
     * Functions
     * Define functions for different methods that can be carried out on the page
     */

    /** Fill out form with no input **/
    public async fillFormWithNoInput() {
      await this.submitBtn.click();
      await browser.pause(3000);
    }

    /** Fill out form with invalid input */
    public async fillOutFormWithInvalidInput(firstname:string, lastname:string, email:string, phoneNumber:string, address1: string, address2: string, countryCode: string, state: string, country: string, postalCode: string, date:string, gender: number) {
     (await this.firstname).setValue(firstname);
     await this.lastname.setValue(lastname)
     await this.email.setValue(email);
    
     await this.agreeToTerms.click();
     await this.submitBtn.click();
    }

    /** Fill out form with Valid input */
    public async fillOutFormWithValidInput(firstname:string, lastname:string, email:string, phoneNumber:string, address1: string, address2: string, countryCode: string, country: string, state: string, postalCode: string, date:string, gender: number ) {
      (await this.firstname).setValue(firstname);
      await this.lastname.setValue(lastname)
      await this.email.setValue(email);
      (await this.formDropdowns[0]).selectByAttribute('value', countryCode);
      await this.phoneNumber.setValue(phoneNumber);
      await this.address1.setValue(address1);
      await this.address2.setValue(address2);
      await this.state.setValue(state);
      (await this.formDropdowns[1]).selectByAttribute('value', country);
      await this.postalcode.setValue(postalCode);
      await this.date.setValue(date);
      await this.genderCheckbox[gender].click();
      await this.agreeToTerms.click();
      await this.submitBtn.click();
     }

     /** Fill out form with missing information */
     public async fillOutFormWithMissingInput(firstname:string, lastname:string, email:string ) {
      (await this.firstname).setValue(firstname);
      await this.lastname.setValue(lastname)
      await this.email.setValue(email);
      await this.agreeToTerms.click();
      await browser.pause(3000);
      await this.submitBtn.click();
     }
}

// Module Exports

const formIdentifier = new form();

export { formIdentifier as default,  form as form }


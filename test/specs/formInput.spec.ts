// All imports go here
import form from '@/page_objects/form-page';
import userData from 'userData'
import { expect} from 'chai'

const { firstname, lastname, email, country,countryCode, phoneNumber, address1, address2, state, postalCode, dob, gender   } = userData;

describe('Form validation', () => {
  beforeEach(async() => {
    await form.open('forms');
    await browser.refresh();
  })
  it('should try to submit the form with no input ', async () => {
   await form.fillFormWithNoInput();
   expect(await form.firstname.isDisplayed()).to.equal(true, 'User is not on the form still')
  });

  it('should try to submit the form with invalid input ', async () => {
    await form.firstname.setValue('User');
    await form.email.setValue('email');
    expect(await form.firstname.isDisplayed()).to.equal(true, 'User is not on the form still')
   });

   it('should try to submit the form with valid input ', async () => {
    await form.fillOutFormWithValidInput(firstname, lastname, email, phoneNumber, address1, address2, countryCode, country, state, postalCode, dob, gender);

   });
});


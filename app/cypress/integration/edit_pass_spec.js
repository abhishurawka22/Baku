describe('Edit Password', function () {

   it("Login", function () {
      cy.exec('npm run web', { failOnNonZeroExit: false }).then((result) => { })
      cy.visit('http://localhost:19006/')
      cy.get('[data-testid="login-input-email"]').type('eric@cypress.com')
      cy.get('[data-testid="login-input-password"]').type('password')
      cy.contains(/login/i).click();
      cy.contains('Feed');
   });

   it("Nav to Profile Tab", function () {
      cy.contains('Profile').click();
      cy.contains('PostCards');
      cy.contains('Followers');
      cy.contains('Edit Profile');
      cy.contains('Post Cards');
      cy.contains('Favs');
   });

   it("Edit Profile Button", function () {
      cy.contains('Edit Profile').click();
      cy.contains('Full Name');
      cy.contains('Username');
      cy.contains('Phone');
      cy.contains('Birthday');
      cy.contains('BIO');
      cy.contains('Places');
   });

   it("Nav to Change Password", function () {
      cy.contains('Change Password').click()
      cy.contains('Old Password');
      cy.contains('New Password');
   });

   it("Change Password", function () {
      cy.get('[data-testid="old-password"]').clear().type('yuhyuh')
      cy.get('[data-testid="new-password"]').clear().type('password')
      cy.contains('Magic').click()
   });


   it("Logout", function () {
      cy.get('[data-testid="profile-hamburger"]').click();
      cy.contains('Profile')
      cy.contains('Settings')
      cy.contains('Settings').click();
      cy.contains('Back')
      cy.contains('Log Out')
      cy.contains('Log Out').click()
   });


   it("Re-Login to check new Password", function () {
      cy.visit('http://localhost:19006/')
      cy.get('[data-testid="login-input-email"]').type('abhi@test.com')
      cy.get('[data-testid="login-input-password"]').type('password')
      cy.contains(/login/i).click();
      cy.contains('Feed');
   });

});
describe('App', () => {
  it('Loads Vehicles', function() {
    cy.visit('http://localhost:3000');
  });

  it('Select Vehicle', function() {
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
  });

  it('Select Film', function() {
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    cy.get('.css-1p5q5e5-MuiStack-root > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click();
  });
})


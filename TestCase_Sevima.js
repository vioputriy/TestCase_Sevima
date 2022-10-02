describe('kumpulan test case (testSuite)', function(){
})
before(()=>{
    cy.halaman();
})
it ('TC - 01 menginputkan satu angka', function(){
    cy.get('#input').type('8').should('have.value', '8');
    cy.get('#hitung').click();
    cy.wait(300)
    cy.reload();
})
it ('TC - 02 menginputkan dua angka', function(){
    cy.get('#input').type('90').should('have.value', '90');
    cy.get('#hitung').click();
    cy.wait(400);
    cy.reload();
})
it ('TC - 03 menginputka angka desimal dengan menggunkanan koma', function(){
    cy.get('#input').type('2,4').should('have.value', '2,4');
    cy.get('#hitung').click();
    cy.wait(400);
    cy.reload();
})
it ('TC - 04 menginputka angka desimal dengan menggunkanan titik', function(){
    cy.get('#input').type('6.1').should('have.value', '6.1');
    cy.get('#hitung').click();
    cy.wait(400);
    cy.reload();
})
it ('TC - 05 menginputkan bilangan negatif', function(){
    cy.get('#input').type('-45').should('have.value', '-45');
    cy.get('#hitung').click();
    cy.wait(400);
    cy.reload();
})
it ('TC - 06 menginputkan huruf', function(){
    cy.get('#input').type('Vio').should('have.value', 'Vio');
    cy.get('#hitung').click();
    cy.wait(400);
    cy.reload(); 
})
it ('TC - 07 menginputkan lebih dari 2 angka', function(){
    cy.get('#input').type('567').should('have.value', '567');
    cy.get('#hitung').click();
    cy.wait(400);
    cy.reload();
})
it ('TC - 08 menginputkan angka dan huruf', function(){
    cy.get('#input').type('V1O').should('have.value', 'V1O');
    cy.get('#hitung').click();
    cy.wait(500);
    cy.reload(); 
})
it ('TC - 09 menginputkan angka dengan per (/)', function(){
    cy.get('#input').type('80/2').should('have.value', '80/2');
    cy.get('#hitung').click();
    cy.wait(500);
    cy.reload();  
})
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
})

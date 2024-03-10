
/// <reference types="Cypress"/>

//cypress test// in every test file called in spec in javascript
describe("My First Test suite",function()
{
    


    it("My First Test Case",function(){ 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //
        cy.get('.product:visible').should('have.length',4)
        //parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
        
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get(".products").find('.product').each(($el,index,$list) => {
        const textVeg =$el.find('.product-name').text()
          if(textVeg.includes('Cashews'))
          { 
            cy.wrap($el).find('button').click()
          }

        })

        cy.get('.brand').then(function(logoelement)
{
         cy.log(logoelement.text())
 
})
    

    })



    
    
})
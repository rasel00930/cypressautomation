/// <reference types="Cypress"/>

describe("My Second Test suite",function()
{
    


    it("My First Test Case",function(){ 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //
        
        
      
        
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get(".products").find('.product').each(($el,index,$list) => {
        const textVeg =$el.find('.product-name').text()
          if(textVeg.includes('Cashews'))
          { 
            cy.wrap($el).find('button').click()
          }

        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains("Place Order").click()

        cy.get('select').select('Bangladesh').should('have.value','Bangladesh')

        cy.get('.chkAgree').check().should('be.checked')
        cy.get('button').click()
    

    })


    
    it('Verify date selection',()=>{
 
      const monthNumber = "6";
      const date = "15";
      const year = "2027";
      const expectedList = [monthNumber,date,year];

      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
      cy.wait(5000)
      cy.get(".react-date-picker__inputGroup").click();

      cy.get(".react-calendar__navigation__label").click();
      cy.get(".react-calendar__navigation__label").click();
      cy.contains("button",year).click();
      cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
      cy.contains("abbr",date).click();

      //Assertion
      cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
      {
          cy.wrap($el).invoke('val').should('eq',expectedList[index]);
      }
      
      
      
      
      )     
  })
    



    
    
})
 Feature: Ticket booking
    Scenario: Should succesfully book a ticket
        Given user is on '/index' page
        When user click on 'a[data-seance-id="129"]'
        And user click on 'span:nth-child(3)'
        And user click on 'button[class="acceptin-button"]'
        And user click on 'button'
        Then user sees 'Электронный билет' 

    Scenario: Should succesfully book another ticket 
        Given user is on '/index' page
        When user click on 'a:nth-child(4)'
        And user click on 'a[data-seance-id="129"]'
        And user click on 'div:nth-child(1) span:nth-child(4)'
        And user click on 'button[class="acceptin-button"]'
        And user click on 'button'
        Then user sees 'Электронный билет' 
      
    Scenario: Should not book a ticket
        Given user is on '/index' page
        When user click on 'a:nth-child(4)'
        And user click on 'a[data-seance-id="129"]'
        And user click on 'div:nth-child(1) > span:nth-child(4)'
        Then user stay at the same page and button disabled is true
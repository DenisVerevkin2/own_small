Feature: Web Interactions


    Advanced Web Interaction *.feature (example)

    @demo
    @all_run
    Scenario Outline: Demo Web Interactions

        Given A webpage with login "<login>" and password "<password>" is opened
        Then I expect that number of elements "productsPage"."inventoryItemPrice" on the page is 6
        And I expect that each element value "productsPage"."inventoryItemPrice" is above than 0.0

        And I wait 4 seconds

        Examples:
            | TestID     | login         | password     |
            | INTV_TC008 | standard_user | secret_sauce |

    @demo
    Scenario Outline: Add to cart items
        Given A webpage with login "<login>" and password "<password>" is opened
        When I click on element "productsPage"."addToCartSauceLabsBackpack" with text "Add to cart"
        Then I expect that text of element "productsPage"."removeSauceLabsBackpack" is equal to "REMOVE"
        And I wait 5 seconds
        Examples:
           | login         | password     |
           | standard_user | secret_sauce |
Feature: Web Interactions


    Just first *.feature (example)

    #@demo
    @all_run
    Scenario Outline: Demo Web Interactions

        Given A default webpage is opened at "javascript_alerts"

        When I click on element with locator "[onclick]=Click for JS Alert"
            And Perform web interactions alerts "ACCEPT"
        Then I expect that text of element with locator "#result" is equal to "You successfully clicked an alert"
            And I wait 2 seconds

        When I click on element with locator "[onclick]" and text "Click for JS Confirm"
            And Perform web interactions alerts "DISMISS"
        Then I expect that text of element with locator "#result" is equal to "You clicked: Cancel"
            And I wait 2 seconds

        Examples:
            | TestID    |
            | WEB_TC005 |


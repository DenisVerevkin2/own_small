Feature: Web Interactions


    Advanced Web Interaction *.feature (example)

    @demo
    @all_run
    Scenario Outline: Demo Web Interactions

        Given A webpage with URL "<url>" with login and password "<login>" and "<password>" is opened

        Then I expect that number of elements with locator "<locator>" on the page is <nunberOfItems>
        And I expect that each element value with locator "<locator>" is above than 0.0

        And I wait 10 seconds

        Examples:
            | TestID     | url                        | login         | password     | locator               | nunberOfItems |
            | INTV_TC008 | https://www.saucedemo.com/ | standard_user | secret_sauce | .inventory_item_price | 6             |


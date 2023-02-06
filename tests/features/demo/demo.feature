Feature: Demo feature

    Just first *.feature (example)

    #@demo
    Scenario Outline: Demo Outline

        Given Google page is opened

        When Search with <SearchItem>
        Then Click on first search result
        Then URL should match <ExpectedURL>


        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | DEMO_TC001 | wdio       | https://webdriver.io/ |


Feature: Web Interactions


    Just first *.feature (example)

    #@demo
    @all_run
    Scenario Outline: Demo Web Interactions

        Given A default webpage is opened at "windows"
        When Perform web interactions open new window

        Examples:
            | TestID    |
            | WEB_TC005 |


Feature: Web Interactions


    Just first *.feature (example)

    #@demo
    @all_run
    Scenario Outline: Demo Web Interactions

        Given A default webpage is opened at "checkboxes"
        When Perform web interactions checkboxes

        Examples:
            | TestID    |
            | WEB_TC004 |


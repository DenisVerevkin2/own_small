Feature: Web Interactions


    Just first *.feature (example)

    #@demo
    @all_run
    Scenario Outline: Demo Web Interactions

        Given A default webpage is opened at "dropdown"
        When Perform web interactions dropdown

        Examples:
            | TestID    |
            | WEB_TC003 |


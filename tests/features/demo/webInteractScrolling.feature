Feature: Web Interactions


    Just first *.feature (example)

    #@demo
    @all_run
    Scenario Outline: Demo Web Interactions

        Given A default webpage is opened

        When I scroll to element with locator "a" and text "WYSIWYG Editor"
        Then I expect that text of element with locator "[href='/tinymce']" is equal to "WYSIWYG Editor"
        
            And I wait 2 seconds

        Examples:
            | TestID    |
            | WEB_TC008 |


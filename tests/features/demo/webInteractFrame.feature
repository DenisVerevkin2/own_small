Feature: Web Interactions


    Just first *.feature (example)

    #@demo
    @all_run
    Scenario Outline: Demo Web Interactions

        Given A default webpage is opened at "frames"

        When I click on element with locator "a" and text "iFrame"
            And I switch to frame "#mce_0_ifr"
            And I enter text "Test_001" to element "#tinymce"
        Then I expect that text of element with locator "#tinymce" is equal to "Your content goes here.Test_001"
            
        When I click on element with locator "#tinymce"
            And I wait 2 seconds
            And I press keys "Control" + "A"
            And I wait 2 seconds
            And I press key "Delete"
            And I wait 2 seconds
        Then I expect that text of element with locator "#tinymce" is equal to ""
            And I switch to parent frame
            And I wait 2 seconds

        Examples:
            | TestID    |
            | WEB_TC007 |


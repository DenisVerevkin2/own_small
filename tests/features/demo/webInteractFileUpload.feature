Feature: Web Interactions


    Just first *.feature (example)

    #@demo
    @all_run
    Scenario Outline: Demo Web Interactions

        Given A default webpage is opened at "upload"

        When I upload file "data\Upload\data.txt" with element "fileUploadPage"."fileUpload"
            And I click on element "fileUploadPage"."fileSubmit"
        Then I expect that text of element with locator "#uploaded-files" is equal to "data.txt"
            And I wait 10 seconds

        Examples:
            | TestID    |
            | WEB_TC006 |


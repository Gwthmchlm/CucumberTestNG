Feature: To validate the login functionality

  Scenario Outline: To valoidate the valid credentials
    Given User is in the adactin homepage "<url>"
    When User enters the loginId "<loginId>" and password "<password>"
    Then User clicks on the login button & navigate to the homepage

    Examples: 
      | url                        | loginId  | password |
      | http://adactinhotelapp.com | GOWTHAMK | Myvizhi  |


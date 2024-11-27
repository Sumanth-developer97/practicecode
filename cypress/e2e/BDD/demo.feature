Feature: Sign-Up Functionality
  As a new user
  I want to create an account on the application
  So that I can access the website's features

  Scenario: Creating a new account
    Given I am on the Magento home page
    When I click on "Create an Account"
    And I enter "Sumanth" as the first name
    And I enter "Ganji" as the last name
    And I enter "sumanthganji1100@gmail.com" as the email address
    And I enter "Step@1234" as the password
    And I confirm the password with "Step@1234"
    And I click on "I submit the account creation form"
    Then I should see the message "Thank you for registering with Main Website Store"

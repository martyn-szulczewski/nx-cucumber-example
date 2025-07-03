Feature: Verifying the welcome screen
  We should verify the welcome screen

  Scenario: Welcome page should have title
    Given user is on the main page
    Then title should be "Welcome"

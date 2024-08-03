#language: en
Feature: Login functionality

  Background:
    Given the login page is open

  Scenario Outline: Successful login with valid credentials
    When the user enters "<username>" and "<password>" and clicks the login button
    Then the user should see the success message "<success_message>"

    Examples:
      | username                    | password   | success_message |
      | juuan214rebatta@gmail.com   | Test.2024  | Logged in as  |

  Scenario Outline: Unsuccessful login with invalid credentials
    When the user enters "<username>" and "<password>" and clicks the login button
    Then the user should see the error message "<error_message>"

    Examples:
      | username       | password   | error_message                        |
      | test@test.com  | Test.123   | Your email or password is incorrect! |

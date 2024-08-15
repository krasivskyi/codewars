/* https://www.codewars.com/kata/562d8d4c434582007300004e

Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the @ and . characters for their literal equivalents in brackets.

Example 1:

user_name@example.com
=> user_name [at] example [dot] com
Example 2:

af5134@borchmore.edu
=> af5134 [at] borchmore [dot] edu
Example 3:

jim.kuback@ennerman-hatano.com
=> jim [dot] kuback [at] ennerman-hatano [dot] com */
obfuscate = function(email) {
    return email.replace(/@/g, ' [at] ').replace(/\./g, ' [dot] ');
  }
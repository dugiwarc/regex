let Regex_Pattern;

// Exercise 1: Matching Characters
Regex_Pattern = /abc/;

// Exercise 1½: Matching Digits
Regex_Pattern = /123/;

// Exercise 2: Matching With Wildcards
Regex_Pattern = /...\./;

// Exercise 3: Matching Characters
Regex_Pattern = /[cmf]an/;

// Exercise 4: Excluding Characters
Regex_Pattern = /[^c]og/;

// Exercise 5: Matching Character Ranges
Regex_Pattern = /[A-Z][a-z]{2}/;

// Exercise 6: Matching Repeated Characters
Regex_Pattern = /waz{3,5}up/; // between 3 and 5 repetitions of "z"

// Exercise 7: Matching Repeated Characters
Regex_Pattern = /a\w+/;

// Exercise 8: Matching Optional Characters
Regex_Pattern = /[0-9]+ \w+ \w+\?/;

// Exercise 9: Matching Whitespaces
Regex_Pattern = /\s+\w+/;

// Exercise 10: Matching Lines
Regex_Pattern = /^Mission: successful$/;

// Exercise 11: Matching Groups
Regex_Pattern = /^(file.+)\.pdf$/;

// Exercise 12: Matching Nested Groups
Regex_Pattern = /(\w+ (\d+))/;

// Exercise 13: Matching Nested Groups
Regex_Pattern = /(\d+)x(\d+)/;

// Exercise 14: Matching Conditional Text
Regex_Pattern = /I love (cats|dogs)/;

// Test 1: Matching Digits
let Test_String = "1234567890";

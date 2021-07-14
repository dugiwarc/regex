let Regex_Pattern;

// Matching Digits & Non-Digit Characters
// \d => digit
// \D => non-digit
Regex_Pattern = /\d\d\D\d\d\D\d\d\d\d/;

// Matching Whitespace & Non-Whitespace Character
// \s => whitespace
// \S => non-whitespace
Regex_Pattern = /\S\S\s\S\S\s\S\S/;
Regex_Pattern = /\S{2}\s\S{2}\s\S{2}/;

// Matching Word & Non-Word Character

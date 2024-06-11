//Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the
// beginning and end of the name. Make sure you use each character combination,
// "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.

//storing a name with whitespace characters:
let whitespaceName = "\n\t Hasnain Memon\t\n";
console.log(whitespaceName)

//storing a name without Whitespace characters:
let withoutWhitespaceName = whitespaceName.trim();
console.log(withoutWhitespaceName);
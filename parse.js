function classDef(code){
    code = code.split(' ');

    return "const " + code[1] + " = new " + code[0];
}

// Function to detect class variable declarations in Java code
function findClassDef(javaCode) {
    // Regular expression pattern to match class variable declarations
    const classVarRegex = /\b(\w+)\s+(\w+)\s*;/g;

    // Execute the regular expression on the Java code
    const matches = javaCode.matchAll(classVarRegex);

    // Array to store detected variable declarations
    const declarations = [];

    // Loop through matches and store variable declarations
    for (const match of matches) {
        const className = match[1];
        const varName = match[2];
        declarations.push({ className, varName });
    }

    // Return the array of detected variable declarations
    return declarations;
}

// There are three types of variable present in JS 
// let  ,   const   ,   var


/**
 * Example that shows how var is scoped to a function
 * and can be redeclared & updated.
 */
const checkVarCases = async () => {
    // can be run outside the braces as it is functional scope

    console.log("---------    var    --------------------")
    console.log("var → Function-scoped, can be redeclared & updated.");
    
    {
        var v = 10;
    }
    console.log(v); 

    var v = 30;
    var v = 40; // can be redeclare
    console.log(v); 

    console.log("__________________________________________")
    
}

const checkLetCases = async () => {
   console.log("---------    let    --------------------")
   console.log("let → Block-scoped, can be updated but not redeclared.");
 
    {
        let l=10;
    }
    //console.log(l) // ReferenceError: l is not defined

    let l = 30;
    //let l = 40 //cannot be redeclared
    l = 50 //can be updated
    console.log(l);
    console.log("__________________________________________")

}

const checkConstCases = async () => {
    
    console.log("---------    let    --------------------")
    console.log("const → Block-scoped, cannot be updated or redeclared. 🚀");
    {
        const c = 10;
    }
    //console.log(c) // ReferenceError: l is not defined

    const c = 30;
    //const c = 40 //cannot be redeclared
    //c = 50 //cannot be updated
    console.log(c);
    console.log("__________________________________________")
    
}


checkVarCases()
checkLetCases()
checkConstCases()
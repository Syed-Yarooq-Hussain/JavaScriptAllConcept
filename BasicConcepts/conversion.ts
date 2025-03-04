console.log('1️⃣ Implicit Type Conversion (Automatic)');

console.log('\n\n\n✅ String Conversion');

console.log('"10" + 5 ==>', "10" + 5);
console.log('"Hello" + true ==>', "Hello" + true);
console.log('"5" + null ==>', "5" + null);  

console.log('\n\n\n✅ Number Conversion (Except + all other operators convert strings to numbers)');

console.log('"10" - 5 ==>', "10" - 5); // (String → Number)
console.log('"6" * "2 ==>',"6" * "2"); // (Both Strings → Numbers)
console.log('"10" / 2 ==>',"10" / 2); // (String → Number)
console.log('"abc" -  ==>',"abc" - 3); // (Invalid conversion)
console.log('true + 1 ==>',true + 1); // (true = 1, false = 0)
console.log('null + 5 ==>',null + 5); // (null = 0)
console.log('undefine + 10 ==>',undefined + 10); // (undefined is not a number)


console.log('\n\n\n✅ Boolean Conversion');

console.log('Boolean(0)', Boolean(0));
console.log('Boolean("")',Boolean(""));
console.log('Boolean(null)',Boolean(null));
console.log('Boolean(undefined)',Boolean(undefined));
console.log('Boolean(NaN)',Boolean(NaN));
console.log('Boolean("Hello")',Boolean("Hello"));
console.log('Boolean(123)',Boolean(123));
console.log('Boolean([])',Boolean([]));
console.log('Boolean({})',Boolean({}));

console.log('\n\n\n✅ Explicit Type Conversion (Explicit)');
console.log('\n✅ Boolean Conversion');

console.log('Boolean(0)', Boolean(0));
console.log('Boolean("")',Boolean(""));
console.log('Boolean(null)',Boolean(null));
console.log('Boolean(undefined)',Boolean(undefined));
console.log('Boolean(NaN)',Boolean(NaN));
console.log('Boolean("Hello")',Boolean("Hello"));
console.log('Boolean(123)',Boolean(123));
console.log('Boolean([])',Boolean([]));
console.log('Boolean({})',Boolean({}));


console.log('\n\n\n\n✅ Number Conversion');

console.log('Number(0)', Number(0));
console.log('Number("abc")', Number("abc"));
console.log('Number("12b")', Number("12b"));
console.log('Number("undefined")', Number(undefined));
console.log('Number("null")', Number(null));
console.log('Number({})', Number({}));
console.log('Number([])', Number([]));

console.log('\n\n\n✅ String Conversion');

console.log('String(123)        ', String(0));
console.log('String(null)       ', String(null));
console.log('String(true)       ', String(true));
console.log('String(undefined)  ',String(undefined));
console.log('(123).toString()   ',(123).toString()); 



console.log('✅ Integer & Float Conversion');

console.log('parseInt("123px")', parseInt("123px"));  
console.log('parseFloat("134em)', parseFloat("12.34em"));
console.log('parseInt("112abc123")', parseInt("abc123")); 
console.log('parseFloat("3.14")', parseFloat("3.14"));
/*
4/22/2022
Joey Sonius

A function to validate a scheme against an object. The object is allowed to have additional properties and the validator does not care about the order of the properties. Does not support child datatype definitions.
*/

function isValid(scheme, object){
   let propertyNames = Object.getOwnPropertyNames(scheme);
   let isvalid = true;
   for (let i = 0; i < propertyNames.length && isvalid; i++) { //stop the loop as soon we know the result is invalid
      if(scheme[propertyNames[i]] != typeof object[propertyNames[i]]){ //
         if(scheme[propertyNames[i]] == 'array'){ //typeof does not support the Array datatype. So this additional statement is added for Array's.
            isvalid = Array.isArray(object[propertyNames[i]]);
         } else {
         isvalid = false;
         }
      }
   }
   return isvalid;
}



const personSchema = {
    name: 'string',
    age: 'number',
    siblings: 'array',
    metaData: 'object',
    active: 'boolean',
 };

 const personObj = {
   name: 'James',
   age: 25,
   siblings: ['Johnnathan'],
   metaData: {},
   active: true,
};

 console.log(isValid(personSchema, personObj));


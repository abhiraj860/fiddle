import protobuf from 'protobufjs';

protobuf.load('a.proto').then(root=>{
    const Person = root.lookupType('Person');
    const person = {name: "Abhiraj", age: 30};
    const buffer = Person.encode(person).finish();
    require('fs').writeFileSync('person.bin', buffer);

    console.log('Person is serialized and save to bin ');
    
    const data = require('fs').readFileSync('person.bin');
    const deserialisation = Person.decode(data);
    console.log("Person deserialised from bin ", deserialisation);
}).catch(console.error);
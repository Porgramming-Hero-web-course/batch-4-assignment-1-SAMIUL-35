      The significance of union and intersection types in Typescript

Union and intersection types play a very significant role in TypeScript. Union types allow a variable to hold one of multiple types, making it flexible for handling varied inputs like strings or numbers. Intersection types require a variable to satisfy multiple type requirements, ensuring it includes all properties from each combined type. This is useful for creating objects with multiple roles or attributes. Together, union and intersection types help TypeScript’s flexibility and reliability, helping developers write clear, safe code.

Let’s say we’re making a function that takes either a string or a number as input. With union types, we can use both types:

    function printValue(value: string | number) {
     if (typeof value === "string") {
     console.log("String:", value.toUpperCase());
    } else {
    console.log("Number:", value * 2);

}
}

    printValue("Hello");
    printValue(10);




Intersection types: on the other hand, combine multiple types together, so a variable must have all properties from each type. For instance, if you want an object to have both name and employeeId properties, you can create a type Person & Employee. This type makes sure that any object with this type has both name and employeeId. Intersection types are perfect when you need objects that fulfill several requirements, making your code safer.

   

Now, let’s say we want to combine properties from two types to create a new type.

    type Person = { name: string };
    type Employee = { employeeId: number };
    type Staff = Person & Employee;

     const staffMember: Staff = { name: "Alice", employeeId: 101 };

In short, we use union types when a variable can have different types, and we use intersection types when it needs to meet several conditions. These types make TypeScript code clearer and helping developers to create flexible and reliable code.

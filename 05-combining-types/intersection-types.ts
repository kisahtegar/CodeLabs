/*! ********************************************************************************
Reference:
- https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Intersection Types *
//
// An intersection type creates a new type by combining multiple existing types. The new type has
// all features of the existing types.
//
// To combine types, you use the & operator as follows:
//
//    type typeAB = typeA & typeB;
//
// The typeAB will have all properties from both typeA and typeB.
//
// Note that the union type uses the | operator that defines a variable which can hold a value of
// either typeA or typeB
//
// Suppose that you have three interfaces: BusinessPartner, Identity, and Contact.

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

// The following defines two intersection types:
//
//    type Employee = Identity & Contact;
//    type Customer = BusinessPartner & Contact;
//
// The Employee type contains all properties of the Identity and Contact type:

type Employee1 = Identity & Contact;

let e1: Employee1 = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
};

// And the Customer type contains all properties of the BusinessPartner and Contact type:

type Customer1 = BusinessPartner & Contact;

let c: Customer1 = {
  name: "ABC Inc.",
  credit: 1000000,
  email: "sales@abcinc.com",
  phone: "(408)-897-5735",
};

// Later, if you want to implement employee sales, you can create a new intersection type that
// contains all properties of Identity, Contact, and BusinessPartner types:

type Employee2 = Identity & BusinessPartner & Contact;

let e: Employee2 = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
  credit: 1000,
};

// Notice both BusinessPartner and Identity have the property name with the same type. If they do not, then you will have an error.

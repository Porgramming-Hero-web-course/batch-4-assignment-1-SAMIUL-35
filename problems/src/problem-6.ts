interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = <T>(pro: T, update: Partial<T>): T => {
  return { ...pro, ...update };
}

// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));
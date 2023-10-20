import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  }); //at build time will render page with changing data not static.

  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {next: { revalidate: 10 },});  // If you want to keep data fresh for a certain period of time. 10 is nextjs will run a background job every 10 seconds. It is only used in the fetch function. Won't work with axios

  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {cache: 'no-store'}); pass options {} set cache to no store to disable caching if you have data that changes frequently. Show fresh data to users.

  const users: User[] = await res.json();

  return (
    <div className="text-black">
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {/* This is rendered statically at build time unless you disable caching  */}

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul></ul>
    </div>
  );
};

export default UsersPage;

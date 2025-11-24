"use client";
import { useEffect, useState } from "react";
import PeopleTable from "./Table";
import * as client from "../../../Account/client";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function People() {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const data = await client.findAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>People</h1>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}

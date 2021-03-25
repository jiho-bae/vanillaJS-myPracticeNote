export let users = ["Tom", "Kan", "Jul"];

export const addUser = (user) => (users = [...users, user]);

export const getUsers = () => users;

export const deleteUsers = (user) => (users = users.filter((aUser) => aUser !== user));

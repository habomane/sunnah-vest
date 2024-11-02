
export const createUserQuery = "INSERT INTO [Users] (UserKey, FirstName, LastName, Username, EmailAddress, PwdHash) VALUES('?', '?', '?', '?', '?', '?')";

export const getUserByKeyQuery = "SELECT * FROM [Users] WHERE UserKey = '?'";

export const getUserByLoginQuery = "SELECT * FROM [Users] WHERE EmailAddress = '?' AND PwdHash = '?'";

export const deleteUserQuery = "DELETE FROM [Users] WHERE UserKey = '?'";
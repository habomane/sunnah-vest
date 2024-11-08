
export const createUserQuery = "INSERT INTO [Users] (UserKey, FirstName, LastName, Username, EmailAddressHash, PwdHash) VALUES(?, ?, ?, ?, ?, ?)";

export const getUserByKeyQuery = "SELECT * FROM [Users] WHERE UserKey = ?";

export const getUserByLoginQuery = "SELECT * FROM [Users] WHERE EmailAddressHash = ? AND PwdHash = ?";

export const deleteUserQuery = "DELETE FROM [Users] WHERE UserKey = ?";

export const getUsersQuery = "SELECT * FROM [Users] WHERE FirstName = ?"


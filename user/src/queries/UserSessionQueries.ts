export const getUserBySessionKey =  "SELECT * FROM [Users] u INNER JOIN [UserSession] us on us.UserKey = u.UserKeey WHERE us.SessionKey = '?'";

export const deleteUserSessionsQuery = "DELETE FROM [UserSession] WHERE UserKey = ?"
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
	const { username, email, password } = req.body;

	//HASH PASSWORD

	const hashedPassword = await bcrypt.hash(password, 10);
	console.log(hashedPassword);

	//CREATE A NEW USER AND SAVE TO DB

	//db operations
};

export const login = (req, res) => {
	//db operations
};

export const logout = (req, res) => {
	//db operations
};

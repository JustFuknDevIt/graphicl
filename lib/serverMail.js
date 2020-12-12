import nodemailer from "nodemailer";

const sendMail = async (method, username, email, token) => {
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_SERVER_HOST,
		port: process.env.EMAIL_SERVER_PORT,
		auth: {
			user: process.env.EMAIL_SERVER_USER,
			pass: process.env.EMAIL_SERVER_PASSWORD,
		},
	});

	const mailer = () => {
		const message = {
			from: process.env.EMAIL_SERVER_USER,
			to: email,
			subject: `Welcome to Satosh.me ! Happy ${method} ${username}`,
			text: `Please click here for finish your ${method} ===>> ${process.env.BASE_URL}/authentication/finish?token=${token}`,
		};

		return new Promise((resolve, reject) => {
			transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
		});
	};

	const mailerRes = await mailer();

	return mailerRes;
};

export default sendMail;

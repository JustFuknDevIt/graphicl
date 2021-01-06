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
			subject: `Hey ${username} ! Welcome to GraphiCL. We need you ${method} ;)`,
			text: `Please click here for finish your ${method} ===>> https://graphicl.vercel.app/authentication/finish?token=${token}`,
		};

		return new Promise((resolve, reject) => {
			transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
		});
	};

	const mailerRes = await mailer();

	return mailerRes;
};

export default sendMail;

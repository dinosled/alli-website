// import nodemailer from "nodemailer"
// export const submitContactFormAsEmail = async ({ from, name, subject, message }) => {
// 	const { EMAIL, PASSWORD, EMAILHOST } = process.env

// 	if (!EMAIL || !PASSWORD || !EMAILHOST) throw new Error("missing credentials for either / or sender email, password, or e-mail host in .env")
// 	const transporter = nodemailer.createTransport({
//   host: EMAILHOST,
// 	port: 465,
// 	secure: true,
//   auth: {
//     user: EMAIL,
//     pass: PASSWORD
//   }
// 	})

// 	try {
// 		const response = await transporter.sendMail({
// 			from: `"${name || "You"}" <${EMAIL}>`, // sender address
// 			to: `"${name || "You"}" <${from}>, "Alli-Team" <${EMAIL}>`, // list of receivers
// 			subject: `Your message to Alli${!!subject ? ` ${subject}`: ""}`, // Subject line
// 			text: message // plain text body
// 		})

//   	console.log("Message sent: %s", response.messageId);
// 	} catch (error) {
// 		console.error(error.message)
// 		return
// 	}
// }

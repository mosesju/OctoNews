const nodemailer = require("nodemailer")

function getDate(){
    let todays_date = new Date()
    var yyyy = todays_date.getFullYear()
    var mm = (todays_date.getMonth()+1)
    var dd = todays_date.getDate()
    if(mm.length<2)
        mm='0'+mm
    if(dd.length<2)
        dd='0'+dd
    return `${dd}-${mm}-${yyyy}`
}

async function sendEmail(email_html, recipient){
    // should take in the recipient & the html
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    let todays_date = getDate();
    const mailOptions = {
        from:process.env.EMAIL_ADDRESS,
        to:`${recipient}`,
        subject:`Todays OctoNews &#xF419; ${todays_date}`,
        html: email_html
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
        } else{
            console.log(info)
        }
    })
}
// main().catch(console.error)

module.exports = {
    sendEmail
}
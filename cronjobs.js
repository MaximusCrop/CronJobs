const axios = require('axios');

async function sendChristmasEmail() {
    try {
        const response = await axios.get('https://litro-ong-bu.onrender.com/mailer/send-christmas-email');
        console.log('Christmas email sent:', response.data);
    } catch (error) {
        console.error('Error sending Christmas email:', error);
    }
}

async function sendNewYearEmail() {
    try {
        const response = await axios.get('https://litro-ong-bu.onrender.com/mailer/send-newyear-email');
        console.log('New Year email sent:', response.data);
    } catch (error) {
        console.error('Error sending New Year email:', error);
    }
}

async function sendBirthdayEmail() {
    try {
        const response = await axios.get('https://litro-ong-bu.onrender.com/mailer/send-birthday-email');
        console.log('Birthday email sent:', response.data);
    } catch (error) {
        console.error('Error sending Birthday email:', error);
    }
}

async function runJobs() {
    const today = new Date();
    const day = today.getUTCDate();
    const month = today.getUTCMonth() + 1; // Enero es 0

    console.log(`Running cron jobs for date: ${today.toUTCString()}`);

    // Verificar si es Navidad (25 de diciembre)
    if (day === 25 && month === 12) {
        await sendChristmasEmail();
    }

    // Verificar si es Año Nuevo (1 de enero)
    if (day === 1 && month === 1) {
        await sendNewYearEmail();
    }

    // Enviar correo de cumpleaños todos los días
    await sendBirthdayEmail();

    console.log('All applicable emails sent');
}

runJobs();
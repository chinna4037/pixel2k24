function EventHtml(name,event,date,time,contact,note,webname){
    var tem=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pixel2K24 Registration Confirmation</title>
        </head>
        <body>
            <img src="cid:eventImage" alt="Pixel2K24 Event" style="width:100%; height: auto;"/>
            <p>Hello ${name},</p>
            <p>We are delighted to inform you that your registration for <h3>${event}, Pixel2K24</h3> has been confirmed! 🥳🙌🏼</p>
            <h3>Event Date and time:</h3>
            <ul>
                <li><strong>Time:</strong>${time}</li> 
                <li><strong>Date:</strong> ${date}, 2024</li>
                <li><strong>Venue:</strong> CSE dept, JNTUACEA, Anantapur-515002</li>
            </ul>
            <h3>Note:</h3>
            <ol>
                ${note.map(n => `<li>${n}</li>`).join('')}
            </ol>
            <b><strong>Contact at: </strong></b> <a href=${contact}>${webname} Pixel 2k24 website</a>.
            <p>Please stay tuned for further updates on the schedule and other important details. If you have any queries or require additional information, feel free to reach out to us at <a href="https://www.pixel2k24.in">Pixel 2k24 Website</a>.</p>
            <p>Once again, we appreciate your participation and are anticipating your participation eagerly at Pixel2K24! 🎉👍🏻</p>
            <p>Best Regards,<br>Pixel2K24 Team,<br>CSE Department,<br>JNTUACEA, Anantapur</p>
        </body>
        </html>
        `;
    return tem;
}
export default EventHtml;
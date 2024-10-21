import express from 'express';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from 'firebase/firestore';  
import nodemailer from 'nodemailer';
import EventHtml from './EventFunction.js';
import EventHtmlWithoutNote from './EventFunctionWithoutNote.js';
import EventHtmlOnline from './eventonline.js';
import EventHtmlOnlineWithoutNote from './eventOnlineWithoutNotes.js';
import 'dotenv/config';

const app = express();
const port = 3000; 



const firebaseConfig = {
  apiKey: "AIzaSyBeZvRJViqDWO0H2FNtrwNCEYSoLJzXmXY",
  authDomain: "pixel2k24-7c8d7.firebaseapp.com",
  projectId: "pixel2k24-7c8d7",
  storageBucket: "pixel2k24-7c8d7.appspot.com",
  messagingSenderId: "1059110294044",
  appId: "1:1059110294044:web:8a62451666fc127c9f05d9",
  measurementId: "G-VVY9FZQC45"
};

const FirebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(FirebaseApp);

// const events=[codoff,codonl,deb,tecquiz,hac,ppt,web,fast,query,nonquiz,chess,freefire,bgmi,photo,meme,reel]

// Event details
// const event = {
//     title: 'Special Event',
//     description: 'Join us for an exciting event!',
//     location: 'JNTUACEA, Anantapur - 515002, AP, India',
//     start: new Date('2024-10-29T10:00:00'), // Event start date and time
//     end: new Date('2024-10-29T12:00:00'),   // Event end date and time
//   };
  
//   // Format event dates to UTC
//   const startDate = event.start.toISOString().replace(/-|:|\.\d+/g, '');
//   const endDate = event.end.toISOString().replace(/-|:|\.\d+/g, '');
  
//   // Create iCalendar link
//   const calendarLink = `
//   BEGIN:VCALENDAR
//   VERSION:2.0
//   PRODID:-//Your Organization//Your Product//EN
//   METHOD:PUBLISH
//   BEGIN:VEVENT
//   UID:pixel2k24cse@gmail.com
//   DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d+/g, '')}
//   DTSTART:${startDate}
//   DTEND:${endDate}
//   SUMMARY:${event.title}
//   DESCRIPTION:${event.description}
//   LOCATION:${event.location}
//   END:VEVENT
//   END:VCALENDAR
//   `.trim();
  

  

// Middleware to parse incoming JSON requests
app.use(express.json());



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

const events={
    0:{event:"Code Sprint",
        date:"29 October 2024",
        time:"03:00 pm",
        contact:"https://www.pixel.in/eventpages/codesprint.html",
        notes:["Every participant must have an account in Unstop platform"],
        mails:["sudhabalu054@gmail.com","jayasskal10@gmail.com","malepatedeekshitha@gmail.com","cherishma513@gmail.com"],
        type:0,
        webname:"Code Sprint",
        count:1,
    },
    1:{event:"Code Sprint(online)",
        date:"28 October 2024",
        time:"10:00 am",
        contact:"https://www.pixel.in/eventpages/codesprint.html",
        notes:["Every participant must have an account in Unstop platform"],
        mails:["sudhabalu054@gmail.com","jayasskal10@gmail.com","malepatedeekshitha@gmail.com","cherishma513@gmail.com"],
        type:1,
        webname:"Code Sprint",
        count:1,
    },
    2:{event:"Bug Busters",
        date:"29 October 2024",
        time:"11:00 am",
        contact:"https://www.pixel.in/eventpages/bugbusters.html",
        notes:[],
        mails:["sandeep190358@gmail.com","malikshaik.7989@gmail.com","ammuluyernena1229@gmail.com","swrpbandi@gmail.com"],
        type:0,
        webname:"Bug Busters",
        count:1,
    },
    3:{event:"Tech Trek(online)",
        date:"27 October 2024",
        time:"10:00 am",
        contact:"https://www.pixel.in/eventpages/techtrek.html",
        notes:[],
        mails:["trganesh31@gmail.com","manideepreddy264@gmail.com","shaiksana1610@gmail.com","myfrozenheart28@gmail.com"],
        type:1,
        webname:"Tech Trek",
        count:1,
    },
    4:{event:"Query Crackers",
        date:"29 October 2024",
        time:"11:00 am",
        contact:"https://www.pixel.in/eventpages/querycrackers.html",
        notes:[],
        mails:["sudheerkumardantuluru@gmail.com","zaidsj4511@gmail.com","banushaik0208@gmail.com","jangamsandy700@gmail.com","agarwalsruthimanoj@gmail.com","rakeshkumarreddy7330@gmail.com"],
        type:0,
        webname:"Query Crackers",
        count:1,
    },
    5:{event:"Tech Knowledge Knockout(offline)",
        date:"29 October 2024",
        time:"02:00 pm",
        contact:"https://www.pixel.in/eventpages/techknowledgeknockout.html",
        notes:[],
        mails:["leelaakshay2003@gmail.com","vasanthitalapaneni@gmail.com","brundakasthuri@gmail.com",],
        type:0,
        webname:"Tech Knowledge Knockout",
        count:1,
    },
    6:{event:"Tech Talk",
        date:"29 October 2024",
        time:"11:00 am",
        contact:"https://www.pixel.in/eventpages/ppt.html",
        notes:[],
        mails:["vendikanthamsindhuja@gmail.com","magalanaduk@gmail.com","tmhariram@gmail.com"],
        type:0,
        webname:"Tech Talk",
        count:1,
    },
    7:{event:"Instant Web",
        date:"29 October 2024",
        time:"03:00 pm",
        contact:"https://www.pixel.in/eventpages/instantweb.html",
        notes:["If you are comfortable, please bring your own laptop. Otherwise we will provide."],
        mails:["vishnu29v@gmail.com","somaharshitha14@gmail.com",""],
        type:0,
        webname:"Instant Web",
        count:1,
    },
    8:{event:"Fast Fingers",
        date:"29 October 2024",
        time:"11:00 am",
        contact:"https://www.pixel.in/eventpages/fastfingers.html",
        notes:[],
        mails:["rohitkumar7280@gmail.com","rohith814227574@gmail.com","parveenkanamukkala@gmail.com","vaidudillu@gmail.com",],
        type:0,
        webname:"Fast Fingers",
        count:1,
    },
    9:{event:"Chess(online)",
        date:"28 October 2024",
        time:"07:00 pm",
        contact:"https://www.pixel.in/eventpages/chess.html",
        notes:[],
        mails:["smdarif0709@gmail.com","habeebnadendla@gmail.com"],
        type:1,
        webname:"Chess",
        count:1,
    },
    10:{event:"Freefire",
        date:"27 October 2024",
        time:"06:00 pm",
        contact:"https://www.pixel.in/eventpages/freefire.html",
        notes:[
            "Team or players failing to adhere to the rules, or showing misconduct will be disqualified from the tournament",
            "All players must be ready and logged into the game 10 minutes before the match starts"
        ],
        mails:["pspkps555@gmail.com","vallemhiteshram18@gmail.com",],
        type:1,
        webname:"Freefire",
        count:1,
    },
    11:{event:"BGMI",
        date:"25 October 2024",
        time:"08:00 pm",
        contact:"https://www.pixel.in/eventpages/bgmi.html",
        notes:[],
        mails:["fazluurrehman786@gmail.com","harish66600@gmail.com"],
        type:1,
        webname:"BGMI",
        count:1,
    },
    12:{event:"Reel Rita",
        date:"28 October 2024",
        time:"10:00 pm",
        contact:"https://www.pixel.in/eventpages/reel.html",
        notes:[],
        mails:["sunilnayak5256@gmail.com","harijella8@gmail.com"],
        type:1,
        webname:"Reel Rita",
        count:1,
    },
    13:{event:"Meme Mania",
        date:"28 October 2024",
        time:"10:00 pm",
        contact:"https://www.pixel.in/eventpages/mememania.html",
        notes:[],
        mails:["vishnuvekuluru@gmail.com","nsaiakshay1211@gmail.com"],
        type:1,
        webname:"Meme Mania",
        count:1,
    },
    14:{event:"Photography",
        date:"28 October 2024",
        time:"10:00 pm",
        contact:"https://www.pixel.in/eventpages/photography.html",
        notes:[],
        mails:["habeebnadendla@gmail.com","gurushankar13181@gmail.com"],
        type:1,
        webname:"Photography",
        count:1,
    },
    15:{event:"Mindmaze(offline)",
        date:"29 October 2024",
        time:"03:00 pm",
        contact:"https://www.pixel.in/eventpages/nontechquiz.html",
        notes:[],
        mails:["narendra742004@gmail.com","gnani8309@gmail.com",],
        type:0,
        webname:"Mindmaze",
        count:1,
    },
};

app.post('/register', async (req, res) => {
    const { name, email ,phone, college , event, other} = req.body;
  
    // Simple validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Please provide all required fields: name, password, and email.' });
    }
  
    try {
      let html;
      const currentEvent=events[event];
      if(currentEvent["notes"].length!=0){
        if(currentEvent["type"]==0){
            html=EventHtml(name,currentEvent["event"],currentEvent["date"],currentEvent["time"],currentEvent["contact"],currentEvent["notes"],currentEvent["webname"]);
        }
        else{
            html=EventHtmlOnline(name,currentEvent["event"],currentEvent["date"],currentEvent["time"],currentEvent["contact"],currentEvent["notes"],currentEvent["webname"]);
        }
      }
      else{
        if(currentEvent["type"]==0){
            html=EventHtmlWithoutNote(name,currentEvent["event"],currentEvent["date"],currentEvent["time"],currentEvent["contact"],currentEvent["webname"]);
        }
        else{
            html=EventHtmlOnlineWithoutNote(name,currentEvent["event"],currentEvent["date"],currentEvent["time"],currentEvent["contact"],currentEvent["webname"]);
        }
        
      }
      const eventName=currentEvent["event"];
      
      const admhtml=`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pixel2K24 Registration Confirmation</title>
        </head>
        <body>
            <img src="cid:eventImage" alt="Pixel2K24 Event" style="width:100%; height: auto;"/>
            <p>event : ${eventName}</p>
            <p>name : ${name} </p>
            <p>phone : ${phone} </p>
            <p>e-mail : ${email} </p>
            <p>college : ${college} </p>
        </body>
        </html>
        `;


        const userDocRef = doc(db, 'registrations', eventName+events[event]["count"]);
      await setDoc(userDocRef, {
        name,
        email,
        phone,
        college,
        eventName,
        other,
        createdAt: new Date().toISOString(),
      });

        
        for(var i=0;i<currentEvent["mails"].length;i++){
            console.log(currentEvent["mails"][i]);
            const admMailOptions={
                from: 'pixel2k24cse@gmail.com',
                to: currentEvent["mails"][i],
                subject: 'New Registration for '+eventName +" "+events[event]["count"],
                html: admhtml,
                attachments: [
                    {
                        filename: 'pixel.jpg', // Replace with your image file name
                        path: 'pixel.jpg', // Path to your image
                        cid: 'eventImage' // Same CID as used in the HTML
                    }
                ]
            };

            events[event]["count"]=events[event]["count"]+1;

            // console.log(admMailOptions);
            await transporter.sendMail(admMailOptions);
        }

       // Email to the participant
    const mailOptions = {
      from: 'pixel2k24cse@gmail.com',
      to: email,
      subject: 'Congratulations 🎉 on Registering for Pixel2K24',
      html: html,
      attachments: [
        {
          filename: 'pixel.jpg',  // Replace with your image file
          path: 'pixel.jpg',  // Path to the image
          cid: 'eventImage'  // Same CID used in the HTML
        }
      ]
    };

    // console.log(mailOptions);

    // Send email to the user
    await transporter.sendMail(mailOptions);
  
      res.status(201).json({
        message: 'User registered successfully and added to Firebase!',
        user: {
          name,
          email,
        },
      });
    } catch (error) {
      console.error('Error adding user to Firebase:', error);
      res.status(500).json({ error: 'Failed to register user in Firebase.' });
    }
  });


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

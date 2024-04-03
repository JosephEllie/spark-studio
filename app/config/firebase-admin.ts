'use server';
// import { auth } from "@/app/config/firebase-client";
import {getAuth as serverAuth} from "firebase-admin/auth"


// export const serverAction = async() =>{
//     const email = "joe@gmail.com"
//     await auth
//     .getUserByEmail(email)
//     .then((userRecord) => {
     
//       console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//     })
//     .catch((error:any) => {
//       console.log('Error fetching user data:', error.message);
//     });
//     }

    export const auth = serverAuth()
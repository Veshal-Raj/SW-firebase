import { useEffect, useState } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import  axios from 'axios'

const App = () => {
  const [count, setCount ] = useState(0)
  var token;
  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      // Generate Token
       token = await getToken(messaging, {
        vapidKey:
          "BDLnANRW7xs9Gl00TM1khbPkd62cPlFDISXiBXQLdF2fBMdCxsAH0ajhBHjkwztEdNwIvksLt40aYWyAwAkTWqk",
      });
      console.log( token);
    } else if (permission === "denied") {
      alert("you denied for notification");
    }
  }

  useEffect(() => {
    // Req user for permission
    requestPermission();
  }, []);


  
  const handleNotification = async () => {
    await requestPermission()
    
    const data = {
      title: 'hello world',
      body: 'this is a test message',
      count: count +"",
      token: token
    }
    console.log('token -- ', token)
    console.log('token checking ---', data)
    try {
      const response = await axios.post('http://localhost:3001/testData', data)
      console.log('Notification send successfully: ', response.data.data)

    

     

    } catch (error) {
      console.error('Error sending notification ', error);
    } 
  }

  return <>
  <div style={{ display: "flex"}}>

    <button onClick={()=> setCount(count-1)}>-</button> {count} <button onClick={()=>setCount(count+1)}>+</button>
  </div>
    <button onClick={handleNotification}>send notification</button>
  </>;
};

export default App;

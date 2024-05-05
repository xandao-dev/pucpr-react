import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase-config';
import { doc, getDoc } from "firebase/firestore";

function Main() {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDoc = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        alert("No such document!");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="center">
      <div className="blue-box">
        <h1>Welcome, {userDetails.firstName} {userDetails.lastName}</h1>
        <p>Date of Birth: {userDetails.birthDate}</p>
      </div>
    </div>
  );
}

export default Main;

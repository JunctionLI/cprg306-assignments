"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import ShoppingPage from "./shopping-list/page";
 

export default function SignInPage(){

  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn(){
    try {
      // Sign in to Firebase with GitHub authentication
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      // Sign out of Firebase
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
    
  }

  return(

    <main>

    { user ? (
      <div className="m-3">
        {/**Display some of the user's information*/ }
        <p>
          Welcome, {user.displayName} ({user.email})
          
        </p>
        <button type="button" onClick={handleSignOut} className="text-lg bg-yellow-500 text-white rounded px-2 py-1 mt-4">Sign Out</button>


        <div>
          <ShoppingPage/>
        </div>


      </div>

            ): (
                <div className="m-3">
                  <h1 className="text-xl font-bold ">Shopping List App</h1>
                  <p>Sign in with Github</p>
                    <button 
                    type="button" onClick={handleSignIn} className="text-lg bg-yellow-500 text-white rounded px-2 py-1 mt-4">Sign In</button>
                </div>
            ) }

    </main>
    
    );
}


 

 

 

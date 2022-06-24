import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const login = () => {
    const { data: session } = useSession()
    console.log(session)
    if (session) {
        return (
          <div className='centrar2'>
          <p className='saluti'>Welcome, {session.user.name} </p>
          <img src={session.user.image} alt="BACode" />
            <p className='mail'>Signed in as {session.user.email} </p>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        )
      }

      return (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )
}

export default login
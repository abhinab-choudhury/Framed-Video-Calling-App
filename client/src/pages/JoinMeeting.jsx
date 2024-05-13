import React from 'react'
import JoinMeetingImg from "./../assets/join-meeting.jpg"
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function JoinMeeting() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <div className="flex justify-center align-middle my-28">
          <div className="w-fit mx-2 my-5 border rounded-md border-gray-600 justify-center align-middle p-5">
            <Form formHeading="Join a Video Call" labelText="Meeting Code" labelFor="Code" imgSize="480px" img={JoinMeetingImg} btnText="Join Now" />
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}

export default JoinMeeting

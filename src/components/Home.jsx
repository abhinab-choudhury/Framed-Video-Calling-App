import Form from "./Form"
import Footer from "./Footer";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from 'uuid';

function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-40 items-center grid gap-8 grid-cols-2 grid-rows-1">
        <h1 className="flex flex-col">
          <span className="mt-5 roboto-bold align-middle text-5xl ml-auto mr-auto">
            Welcome to Framed
          </span>
          <img src="Hero-Image.jpg" />
        </h1>
        <div className="flex flex-col">
          <div className="m-2 block border rounded-md border-gray-600 justify-center align-middle p-5 w-4/5">
            <Form formHeading="Start a Video Call" labelText="Meeting Title" labelFor="Title" imgSize="280px" img="start-meeting.jpg" btnText="Start Meeting"/>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle mb-20">
        <div className="w-fit mx-2 my-5 border rounded-md border-gray-600 justify-center align-middle p-5">
          <Form formHeading="Join a Video Call" labelText="Meeting Code" labelFor="Code" imgSize="480px" img="join-meeting.jpg" btnText="Join Now"/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home

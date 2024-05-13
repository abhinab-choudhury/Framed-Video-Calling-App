import Form from "../components/Form"
import StartMeetingImg from "./../assets/start-meeting.jpg";
import HeroImage from "./../assets/Hero-Image.jpg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <div className="mt-40 items-center grid gap-8 lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-1 md:grid-rows-2">
          <h1 className="flex flex-col">
            <span className="mt-5 roboto-bold align-middle text-5xl ml-auto mr-auto">
              Welcome to Framed
            </span>
            <img src={HeroImage} />
          </h1>
          <div className="flex flex-col justify-center items-center w-[100%]">
            <div className="m-2 block border rounded-md border-gray-600 justify-center align-middle p-5 w-4/5">
              <Form formHeading="Start a Video Call" labelText="Meeting Title" labelFor="Title" imgSize="280px" img={StartMeetingImg} btnText="Start Meeting" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home

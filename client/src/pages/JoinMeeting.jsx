import JoinMeetingImg from "./../assets/join-meeting.jpg";
import Form from "../components/Form";

function JoinMeeting() {
  return (
    <section>
      <div className="flex justify-center align-middle my-28">
        <div className="w-fit mx-2 my-5 border rounded-md border-gray-600 justify-center align-middle p-5">
          <Form
            formHeading="Join a Video Call"
            labelText="Meeting Code"
            labelFor="Code"
            imgSize="480px"
            img={JoinMeetingImg}
            btnText="Join Now"
          />
        </div>
      </div>
    </section>
  );
}

export default JoinMeeting;

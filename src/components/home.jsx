const home = () => {
  return (
    <>
      <div className="mt-24 items-center grid gap-8 grid-cols-2 grid-rows-1">
        <h1 className="flex flex-col">
          <span className="mt-5 roboto-bold align-middle text-5xl ml-auto mr-auto">
            Welcome to Framed
          </span>
          <img src="Hero-Image.jpg" />
        </h1>
        <div className="flex flex-col">
          <div className="m-2 block border rounded-md border-gray-600 justify-center align-middle p-5 w-4/5">
            <form className="block">
              <div className="flex flex-row">
                <div>
                  <h1 className="text-3xl poppins-bold ">Start a Vidoe Call</h1>
                  <label className="mx-2 text-md" htmlFor="usename">Name </label>
                  <input className="block border rounded border-gray-300 h-11 w-4/5 p-3 m-2" id="username" type="text" placeholder="Name" />
                  <label className="mx-2 text-md" htmlFor="email">Email</label>
                  <input className="block border rounded border-gray-300 h-11 w-4/5 p-3 m-2" id="email" type="email" placeholder="email" />
                  <button className="hover:bg-blue-400 hover:text-white mx-2 font-bold roboto-bold border p-3 rounded" type="submit">Start Meeting</button>
                </div>
                <img className="object-fill w-72" src="start-meeting.jpg" />
              </div>
            </form>
          </div>
        </div>
        <div className="w-screen flex justify-center align-middle">
          <div className="w-fit m-2 border rounded-md border-gray-600 justify-center align-middle p-5">
            <form>
              <div className="flex">
                <div>
                  <h1 className="text-3xl poppins-bold ">Join a Video Call</h1>
                  <label className="mx-2 text-md font-bold" htmlFor="code">Meeting Code</label>
                  <input className="block border rounded border-gray-300 h-11 p-3 m-2" id="code" type="text" placeholder="Code" />
                  <button className="hover:bg-blue-400 hover:text-white mx-2 font-bold roboto-bold border p-3 rounded" type="submit">Join Now</button>
                </div>
                <img width="480px" className="object-cover" src="join-meeting.jpg" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default home

import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid4v } from "uuid";

// eslint-disable-next-line react/prop-types
function Form({ formHeading, labelText, labelFor, imgSize, img, btnText }) {
  let [inputFiled, setInputFiled] = useState("");
  let linkTo = `/meet/${uuid4v()}`;

  if (btnText == "Join Now") {
    linkTo = `/meet/${inputFiled}`;
  }

  return (
    <div>
      <form className="block">
        <div className="flex flex-row">
          <div>
            <h1 className="text-3xl poppins-bold ">{formHeading}</h1>
            <label className="mx-2 font-bold text-md" htmlFor={labelFor}>
              {labelText}
            </label>
            <input
              className="cursor-pointer block border rounded border-gray-29 h-11 w-4/5 p-3 m-2"
              value={inputFiled}
              onChange={e => setInputFiled(e.target.value)}
              id={labelFor}
              type="text"
              placeholder={labelFor}
            />
            <button
              className="cursor-pointer hover:bg-blue-400 hover:text-white mx-2 font-bold roboto-bold border p-3 rounded"
              type="submit"
            >
              <Link to={linkTo}> {btnText} </Link>
            </button>
          </div>
          <img width={imgSize} className="object-fill" src={img} />
        </div>
      </form>
    </div>
  );
}

export default Form;

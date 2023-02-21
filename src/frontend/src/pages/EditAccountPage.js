import React from 'react'
import SettingSidebar from '../components/SettingSidebar'
import { useState } from 'react'
import SubmitDialog from "../components/SubmitDialog"
const EditAccountPage = () => {
   // declare your data as initial state
 const [data, setData] = React.useState({
    email: 'ok@gmail.com',
    password: '123345',
  });

  // handle on change according to input name and setState
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // take data to submit
  };
  return (
    <section className="flex px-6 mt-[20px]">
    <SettingSidebar/>
    <div className='mx-6'>
      <form onSubmit={handleSubmit}>
        {/* <div>name</div>
        <input
          type="text"
          name="name"
          className=''
          value={data.name}    // inject state correspond to input and so on
          onChange={handleChange}
        />
        <button>Edit</button>
        <br /> */}
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-semibold font-SourceSansPro mb-2' for='username'>
            First Name
          </label>
          <input
          type="email"
          name="email"
          value={data.email}    // inject state correspond to input and so on
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> 
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-semibold font-SourceSansPro mb-2' for='username'>
            password
          </label>
          <input
          type="password"
          name="password"
          value={data.password}    // inject state correspond to input and so on
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> 
        </div>
        <div className='mb-4'>
            <SubmitDialog/>
        </div>
      </form>
    </div>
    </section>
  );
}

export default EditAccountPage
import React, { useState } from 'react'
import SettingSidebar from '../components/SettingSidebar'
import SubmitDialog from "../components/SubmitDialog"
import { Avatar } from '@mui/material';
const EditProfilePage = () => {
  
   // declare your data as initial state
 const [data, setData] = React.useState({
    fname: 'ok',
    lname: 'ok',
    username: 'ok123',
  });

  // handle on change according to input name and setState
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // take data to submit
  };
  const width = useState(window.innerWidth)
  return (
    <section className="flex px-6 mt-[20px]">
      <SettingSidebar/>
    <div className='mx-6'>
      <form onSubmit={handleSubmit} className={`${width<600 ? '' : 'flex'}`}>
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
        <div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-semibold font-SourceSansPro mb-2' for='username'>
            First Name
          </label>
          <input
          type="text"
          name="fname"
          value={data.fname}    // inject state correspond to input and so on
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> 
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-semibold font-SourceSansPro mb-2' for='username'>
            Last Name
          </label>
          <input
          type="text"
          name="lname"
          value={data.lname}   // inject state correspond to input and so on
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> 
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-semibold font-SourceSansPro mb-2' for='username'>
            User Name
          </label>
          <input
          type="text"
          name="username"
          value={data.username}    // inject state correspond to input and so on
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> 
        </div>

        <div className='mb-4'>
          {/* <button className="bg-transparent hover:bg-[#f0def4] text-black font-semibold hover:text-white py-2 px-4 border border-[#f9a8d4] hover:border-transparent rounded" 
                  onClick={()=>{
                    <SubmitDialog open={true} setOpen={true} />
                  }}
          >
            Submit
          </button> */}
          <SubmitDialog/>
        </div>
        </div>
        <div>
          <div  className='absolute mx-48'>
      <Avatar
  alt="Remy Sharp"
  src="https://techlogitic.net/wp-content/uploads/2022/08/zoro-pfp-18.png"
  sx={{ width: 250, height: 250 }}
/>
    </div>
        </div>
      </form>
      </div>
    </section>
  );
  // const handleChange = (e)=>{
    
  // }
  // return (
  //   <section className="flex px-6 mt-[20px]">
  //   <SettingSidebar/>
  //   <input value ="First Name"/>
  //   <input value="Last Name"/>
  //   <input value = "Bio"/>
  //   </section>
  // )
}

export default EditProfilePage
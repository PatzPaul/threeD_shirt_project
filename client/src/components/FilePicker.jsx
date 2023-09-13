import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({file,setFile,readFile}) => {
  return (
    <div className='filepicker-container absolute ml-4'>
      <div className='flex-1 flex flex-col'>
        <input id="file-upload"
        type="file"
        accept='image/*'
        onChange={(e)=> setFile(e.target.files[0])}/>
      
      <label htmlFor='file-upload' className='filepicker-label'>
        Upload File
      </label>
      <p className='truncate'>{file === '' ? "No file Selected" : file.name}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        <CustomButton
        type="outline"
        title="Logo"
        handleClick={()=> readFile('logo')}
        customStyles="text-xs"
        />
        <CustomButton
        type="filled"
        title="Full"
        handleClick={()=>readFile('full')}
        customStyles="text-xs"/>

      </div>
    </div>
  )
}

export default FilePicker
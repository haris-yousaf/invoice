import { useState } from 'react';

function UploadLogo() {
  const [logo, setLogo] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
        setLogo(files[0]);
    }
  };

  return (
    <div>
        <div 
        className='w-52 h-32 border border-solid border-[#777] border-opacity-10 bg-[#f0f0f0] bg-opacity-30 hover:bg-opacity-50 cursor-pointer py-12 rounded' 
        onClick={() => {document.getElementById('logo')?.click()}}
        >
            <input id='logo' type="file" accept="image/*" className='w-full h-full hidden' onChange={handleFileChange}/>
            {logo ? (
                <img className='w-52 h-32 -mt-12 rounded' src={URL.createObjectURL(logo)} alt="Uploaded Logo" />
            ) : (
                <span className='text-[#777] text-opacity-50 text-lg'><span className='text-2xl'>+</span> Add Your Logo</span>
            )}
        </div>

        
    </div>
  );
}

export default UploadLogo;
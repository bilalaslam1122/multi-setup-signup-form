import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useRecoilState } from 'recoil';
import { signUpDataState } from '../atoms';

const Step2 = ({ onNext, onPrev }) => {
  const [signUpData, setSignUpData] = useRecoilState(signUpDataState);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, name: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Step 2: Name</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          placeholder='Please enter your name'
          className="form-control"
          value={signUpData.name}
          onChange={handleChange}
        />
      </div>
      <div className='d-flex justify-content-between mt-3'>
      <button className="btn btn-primary" onClick={onPrev}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={onNext}>
        Next
      </button>
    </div>
    </div>
  );
};

export default Step2;

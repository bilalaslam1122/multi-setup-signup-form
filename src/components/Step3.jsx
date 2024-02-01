import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useRecoilState } from 'recoil';
import { signUpDataState } from '../atoms';

const Step3 = ({ onNext,onPrev }) => {
  const [signUpData, setSignUpData] = useRecoilState(signUpDataState);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, dob: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Step 3: Date of Birth</h2>
      <div className="form-group">
        <label>Date of Birth:</label>
        <input
          type="date"
          placeholder='Please enter your date of birth'
          className="form-control"
          value={signUpData.dob}
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

export default Step3;

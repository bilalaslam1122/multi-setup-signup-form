import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useRecoilState } from 'recoil';
import { signUpDataState } from '../atoms';

const Step4 = ({ onComplete, onPrev }) => {
  const [signUpData, setSignUpData] = useRecoilState(signUpDataState);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, password: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Step 4: Password</h2>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          placeholder='Please enter your password'
          className="form-control"
          value={signUpData.password}
          onChange={handleChange}
        />
      </div>
      <div className='d-flex justify-content-between mt-3'>
      <button className="btn btn-primary" onClick={onPrev}>
        Previous
      </button>
      <button className="btn btn-success" onClick={onComplete}>
        Submit
      </button>
    </div>
    </div>
  );
};

export default Step4;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useRecoilState } from 'recoil';
import { signUpDataState } from '../atoms';

const Step1 = ({ onNext }) => {
  const [signUpData, setSignUpData] = useRecoilState(signUpDataState);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, email: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Step 1: Email</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          placeholder='Please enter your email'
          className="form-control"
          value={signUpData.email}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Step1;

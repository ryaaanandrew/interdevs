import React from 'react';
import { NavLink } from 'react-router-dom';
import ToggleContent from '../layout/ToggleComponent';
import Modal from '../layout/Modal';

const RegisterSelection = props => {

  return(
    <div className="container">
      <ToggleContent 
        // toggle={show => <button onClick={show}>Open</button>}
        content={hide => {
          return(
            <Modal>
              <div className="registration">
                <NavLink to='/' className="registration__close"><i className="fas fa-times fa-2x"></i></NavLink>
                <div className="registration__left">
                  <h1>Employers</h1>
                  <NavLink to='/register/employer' className="registration__btn">
                    <span>register <i className="fas fa-angle-double-right"></i></span>
                  </NavLink>
                </div>
                <div className="registration__middle">
                </div>  
                <div className="registration__right">
                  <h1 id="registration--header">Developers</h1>
                  <NavLink to="/register/user" className="registration__btn">
                    <span>register <i className="fas fa-angle-double-right"></i></span>
                  </NavLink>
                </div>
              </div>
            </Modal>
          );
        }}
      />
    </div>
  );
};

export default RegisterSelection;

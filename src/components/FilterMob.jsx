import React from 'react';
import '../styles/Filter.css';
import Modal from '@mui/material/Modal';
import Filter from './Filter';

function FilterMob(props) {
  return <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <div className='filterMob'>
        <Filter handleClear={props.handleClear} st={props.st} prod={props.prod} city={props.city} setProd={props.setProd} setSt={props.setSt} setCity={props.setCity}/>
        </div>
      </Modal>
  ;
}

export default FilterMob;

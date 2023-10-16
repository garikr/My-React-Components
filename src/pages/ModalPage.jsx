import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Some agreement you should accept with.</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non rutrum
        ipsum, eget malesuada mi. Vestibulum id dapibus nulla, sed laoreet arcu.
        Cras scelerisque efficitur eros, eu egestas orci porttitor a. Nam nec
        metus eu quam scelerisque maximus. Integer volutpat placerat erat id
        blandit. Pellentesque pellentesque lectus sed enim venenatis, vitae
        aliquet diam congue. Nunc in magna nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non rutrum
        ipsum, eget malesuada mi. Vestibulum id dapibus nulla, sed laoreet arcu.
        Cras scelerisque efficitur eros, eu egestas orci porttitor a. Nam nec
        metus eu quam scelerisque maximus. Integer volutpat placerat erat id
        blandit. Pellentesque pellentesque lectus sed enim venenatis, vitae
        aliquet diam congue. Nunc in magna nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non rutrum
        ipsum, eget malesuada mi. Vestibulum id dapibus nulla, sed laoreet arcu.
        Cras scelerisque efficitur eros, eu egestas orci porttitor a. Nam nec
        metus eu quam scelerisque maximus. Integer volutpat placerat erat id
        blandit. Pellentesque pellentesque lectus sed enim venenatis, vitae
        aliquet diam congue. Nunc in magna nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non rutrum
        ipsum, eget malesuada mi. Vestibulum id dapibus nulla, sed laoreet arcu.
        Cras scelerisque efficitur eros, eu egestas orci porttitor a. Nam nec
        metus eu quam scelerisque maximus. Integer volutpat placerat erat id
        blandit. Pellentesque pellentesque lectus sed enim venenatis, vitae
        aliquet diam congue. Nunc in magna nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non rutrum
        ipsum, eget malesuada mi. Vestibulum id dapibus nulla, sed laoreet arcu.
        Cras scelerisque efficitur eros, eu egestas orci porttitor a. Nam nec
        metus eu quam scelerisque maximus. Integer volutpat placerat erat id
        blandit. Pellentesque pellentesque lectus sed enim venenatis, vitae
        aliquet diam congue. Nunc in magna nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non rutrum
        ipsum, eget malesuada mi. Vestibulum id dapibus nulla, sed laoreet arcu.
        Cras scelerisque efficitur eros, eu egestas orci porttitor a. Nam nec
        metus eu quam scelerisque maximus. Integer volutpat placerat erat id
        blandit. Pellentesque pellentesque lectus sed enim venenatis, vitae
        aliquet diam congue. Nunc in magna nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non rutrum
        ipsum, eget malesuada mi. Vestibulum id dapibus nulla, sed laoreet arcu.
        Cras scelerisque efficitur eros, eu egestas orci porttitor a. Nam nec
        metus eu quam scelerisque maximus. Integer volutpat placerat erat id
        blandit. Pellentesque pellentesque lectus sed enim venenatis, vitae
        aliquet diam congue. Nunc in magna nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non rutrum
        ipsum, eget malesuada mi. Vestibulum id dapibus nulla, sed laoreet arcu.
        Cras scelerisque efficitur eros, eu egestas orci porttitor a. Nam nec
        metus eu quam scelerisque maximus. Integer volutpat placerat erat id
        blandit. Pellentesque pellentesque lectus sed enim venenatis, vitae
        aliquet diam congue. Nunc in magna nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non rutrum
        ipsum, eget malesuada mi. Vestibulum id dapibus nulla, sed laoreet arcu.
        Cras scelerisque efficitur eros, eu egestas orci porttitor a. Nam nec
        metus eu quam scelerisque maximus. Integer volutpat placerat erat id
        blandit. Pellentesque pellentesque lectus sed enim venenatis, vitae
        aliquet diam congue. Nunc in magna nulla.
      </p>
    </div>
  );
}

export default ModalPage;

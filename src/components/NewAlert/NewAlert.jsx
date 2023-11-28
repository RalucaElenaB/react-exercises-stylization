import './NewAlert.css';
import clsx from 'clsx';

const NewAlert = ({ variant = 'info', isOutlined = false, children }) => {
  //   const variant = "success";

  const valoareStil = clsx('alert', variant, isOutlined && 'is-outlined');

  //   return <p className={`NewAlert ${variant}`}>{children}</p>;

  return <p className={`NewAlert ${valoareStil}`}>{children}</p>;
  //   return <p className={valoareStil}>{children}</p>;
};

export default NewAlert;

import './App.css';
// import './index.css';
import Alert from './Alert/Alert';
// import NewAlert from './NewAlert/NewAlert';
import Card from './Card/Card';
import Panel from './Panel/Panel.jsx';
import Box from './Box/Box';

export const stilParagraph = {
  margin: 8,
  padding: '12px 16px',
  borderRadius: 4,
  backgroundColor: 'gray',
  color: 'gold',
  fontSize: 10,
};

export const App = () => {
  return (
    <main>
      <h1>Practica React</h1>
      <h2>Exercitiul 1</h2>
      <p style={stilParagraph}>Please update your email!</p>
      <h2>Exercitiul 2</h2>
      <Alert>Alert </Alert>
      <h2>Exercitiul 3</h2>
      {/* <NewAlert>Mesajul este fara varianta</NewAlert>
      <NewAlert variant="success" isOutlined={true}>
        New Alert: Succes!
      </NewAlert>
      <NewAlert variant="error">New Alert: Error!</NewAlert>
      <NewAlert variant="warning">New Alert: Warning!</NewAlert> */}
      <h2>Exercitiul 4</h2>
      <Card />
      <h2>Exercitiul 5</h2>
      <Panel />
      <h2>Exercitiul 6</h2>
      <Box variant={'red'} />
      <Box variant={'blue'} />
      <Box variant={'orange'} />
      <h2>Exercitiul 7</h2>
      <div className="p-8 bg-blue-500 my-4">Lucrul cu tailwindcss</div>
    </main>
  );
};

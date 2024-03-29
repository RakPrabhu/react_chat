import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'; 


const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate(); 

  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }

    
    navigate('/chat', { replace: true });
  };

  return (
    <div className={styles.fullscreen}>
   
    <div className='overlay'>
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`CHAT-ROOM`}</h1>
        <h1>{`😆😅😄`}</h1>
        <input
          className={styles.input}
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value='Peace-Space'>Peace-Space</option>
          <option value='Music Melodies'>Music Melodies</option>
          <option value='Tech Talk'>Tech Talk</option>
          <option value='Chit-Chat'>Chit-Chat</option>
        </select>

        <button
          className='btn btn-secondary'
          style={{ width: '100%' }}
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
    </div></div>
    </div>
  );
};

export default Home;

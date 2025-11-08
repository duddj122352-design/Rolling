import './App.css';
import Toast from './Toast/Toast';

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      <>
        <Toast
          isOpen
          onClose={() => {}}
          message="URL이 복사 되었습니다."
          duration={0}
        />
      </>
    </div>
  );
}

export default App;

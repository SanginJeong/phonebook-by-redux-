import logo from './logo.svg';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// - 리스트에 유저 이름과 전화번호 추가 가능
// - 리스트에 아이템이 몇개있는지 보인다.
// - 사용자가 유저를 이름검색으로 찾을 수 있다.
function App() {
  return (
    <div className='wrap'>
      <div className="container">
        <h1>PHONE BOOK</h1>
        <div className="book">
          <ContactForm/>
          <ContactList/>
        </div>
      </div>
    </div>
  );
}

export default App;

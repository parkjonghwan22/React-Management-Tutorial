import './App.css';
import { Customer } from './Components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '920313',
    'gender': '여자',
    'job': '대학생'

  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '박종환',
    'birthday': '950313',
    'gender': '남자',
    'job': '개발자'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '임준범',
    'birthday': '970313',
    'gender': '남자',
    'job': '부자'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => (
          <Customer 
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />

        ))
      }
    </div>
  );
}

export default App;

import Customer from './components/customer';
import './App.css';

const cust = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '일번이',
  'birthday': '111111',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이번이',
  'birthday': '222222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '삼번이',
  'birthday': '333333',
  'gender': '남자',
  'job': '대학생'
}
]

function App() {
  return (
    <div>
      {
        cust.map(cs => {
          return (
            <Customer
              key={cs.id}
              id={cs.id}
              image={cs.image}
              name={cs.name}
              birthday={cs.birthday}
              gender={cs.gender}
              job={cs.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;

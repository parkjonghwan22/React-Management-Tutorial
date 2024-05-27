import './App.css';
import { Customer } from './Components/Customer';
import Paper from '@mui/material/Paper';
import Table  from '@mui/material/Table';
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { styled } from '@mui/system';
import React from 'react'

const Root = styled(Paper)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
  overflowX: 'auto',
}));
// Paper, Table 컴포넌트를 styled 함수가 스타일링한다
// theme 은 Material-UI의 테마 객체로, 스타일링에 사용되는 다양한 값들을 포함한다

const CustomTable = styled(Table)({
  minWidth: 1080,
});

const customers = [
  {
    'id': 1,
    'name': '홍길동',
    'birthday': '920313',
    'gender': '여자',
    'job': '대학생'

  },
  {
    'id': 2,
    'name': '박종환',
    'birthday': '950313',
    'gender': '남자',
    'job': '개발자'
  },
  {
    'id': 3,
    'name': '임준범',
    'birthday': '970313',
    'gender': '남자',
    'job': '부자'
  }
]

function App() {
  return (
    <Root>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            customers.map(c => (
              <Customer 
                key={c.id}
                id={c.id}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />

            ))
          }
        </TableBody>
      </CustomTable>
    </Root>
  );
}

export default App;

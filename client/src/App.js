import Customer from './components/customer';
import './App.css';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, createTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const theme = createTheme();

const styles = {
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
};

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

function App(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {cust.map(cs => {return ( <Customer key={cs.id} id={cs.id} image={cs.image} name={cs.name}
                                     birthday={cs.birthday} gender={cs.gender} job={cs.job}/> ) })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);

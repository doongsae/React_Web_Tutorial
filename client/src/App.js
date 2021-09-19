import { React, Component } from 'react';
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

class App extends Component {
  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json;

    return body;
  }

  render() {
    const { classes } = this.props;
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
            {this.state.customers ? this.state.customers.map(cs => {
                                    return ( <Customer key={cs.id} id={cs.id} image={cs.image} name={cs.name}
                                                        birthday={cs.birthday} gender={cs.gender} job={cs.job}/> ); })
                                    : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

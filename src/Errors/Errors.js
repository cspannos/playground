import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Grid } from '@material-ui/core';
import ReactJson from 'react-json-view';

const styles = theme => ({
  code: {
    marginLeft: theme.spacing.unit
  }
});

class Errors extends Component {
  render() {
    const { errors, classes } = this.props;
    if (!errors || errors.length === 0) {
      return null;
    }
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Errors</Typography>
        </Grid>
        <Grid item xs={12}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {errors.map(row => (
                <TableRow key={row.code}>
                  <TableCell component="th" scope="row">
                    {row.code}
                  </TableCell>
                  <TableCell>{row.message}</TableCell>
                  <TableCell className={classes.code}>{_.isObject(row.data) ? <ReactJson src={row.data} {...this.props.reactJsonOptions} enableClipboard={false}/> : row.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </Grid>
      </Grid>
    );
  }
}


export default withStyles(styles)(Errors);
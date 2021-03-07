import React from "react";
import LocalizaitonProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 5;
    const left = 5;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        color: 'orange'
    },
    paper: {
        position: 'absolute',
        width: 150,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Calendar() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    // adding redux here to change filters properties 
    const handleChangeDate = (date: Date | null) =>{
        if (date !== null) {
            console.log(date);
            console.log(date?.getMonth() + 1)
            console.log(date?.getFullYear())
        //     this.setState({
        //         established: date
        //     })
        }
    }


    return(
        <LocalizaitonProvider dateAdapter={AdapterDateFns}>
            <div className={classes.modal}>
            <DatePicker 
                views={['year', 'month']}
                label="Year and Month"
                minDate={new Date('1950-01-01')}
                maxDate={new Date()}
                value={new Date()}
                onChange={handleChangeDate}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    className={classes.modal}
                    margin="normal"
                    helperText="HELLO YOU POOP"
                    variant="standard"
                    />
                )}
            />
            </div>
        </LocalizaitonProvider>
    )
}

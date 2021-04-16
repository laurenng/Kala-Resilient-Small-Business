import React from "react";
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import kala from '../assets/kala_orange_solid 3.svg';
import './fundingForm.css';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";

// styling courtesy of material-ui
function getModalStyle() {
    const { innerWidth: width, innerHeight: height } = window;
    let top = 30;
    let left = 15;
    if (width > 1000 && height > 200) {
        top = 30;
        left = 35
    }
    return {
        top: `${top}%`,
        left: `${left}%`,
        
    };
}

// styling courtesy of material-ui
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: '70%',
        maxWidth: 350,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

/**
 * Creates the confirmation pop up for users when submiting the funding finder
 * form
 * 
 * @returns div with a pop up modal used to confirm whether a user would like to
 * submit their questionarie information
 */
export default function ConfirmPopup() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className="nextBtn" onClick={handleOpen}>
                Submit
            </button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div id="confirmPopup" style={modalStyle} className={classes.paper}>
                    <CloseIcon className="closeBtn" onClick={handleClose}></CloseIcon>
                    <h4>
                        Are you sure you are ready to submit your answers?
                    </h4>
                    <img src={kala} alt="Kala the squid"/>
                    <div className="controls">
                        <button className="backBtn" onClick={handleClose}>No</button>
                        <Link to="/search"><button className="nextBtn">Yes</button></Link> 
                    </div>
                </div>
            </Modal>
        </div>
    );
}

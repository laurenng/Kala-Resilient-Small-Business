import React from "react";
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import kala from '../assets/kala_orange_solid 3.svg';
// import './fundingForm.css';
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
        overflowY: 'scroll',
        height: '60%',
    },
    policy: {
        color: 'blue',
        
    },
}));

/**
 * Creates the confirmation pop up for users when submiting the funding finder
 * form
 * 
 * @returns div with a pop up modal used to confirm whether a user would like to
 * submit their questionarie information
 */
export default function PrivacyPolicyPopup() {
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
            <b onClick={handleOpen}>
                Privacy Policy
            </b>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div id="confirmPopup" style={modalStyle} className={classes.paper}>
                    <CloseIcon className="closeBtn" onClick={handleClose}></CloseIcon>
                    <h4 className={classes.policy}>
                        Privacy Policy 

                        Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. Examine current topics and issues associated with the study and practice of iterative and incremental development and project team management with emphasis on practical project experience. Study topics like modeling computing projects through the discovery/invention/implementation cycle; learning, experiencing, and obtaining feedback on group dynamics; collaborative relationships; and conflict management. 
                    </h4>
                    <button className="backBtn" onClick={handleClose}>OK</button>
                </div>
            </Modal>
        </div>
    );
}

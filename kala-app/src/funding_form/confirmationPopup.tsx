import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import kala from './kala_orange_solid 3.svg';
import './fundingForm.css';
import CloseIcon from '@material-ui/icons/Close';

// styling courtesy of material-ui
function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
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
        width: 250,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

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
                        <a href="/search"><button className="nextBtn">Yes</button></a>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
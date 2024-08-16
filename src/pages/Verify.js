import React, { useEffect, useState } from 'react';
import { Box, Modal, Typography, CircularProgress, Alert, Button } from '@mui/material';
import { ReactComponent as ScannerIcon } from './scanner.svg'; // Ensure correct path to your SVG

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};
const Verify = () => {
    const [open, setOpen] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [showFinalContent, setShowFinalContent] = useState(false);
    let scannerAvailable = false;

    useEffect(() => {
        console.log(scannerAvailable)
        if (scannerAvailable == true) {

            document.getElementById("scannerAvailableInfo").style.display = "flex"
            document.getElementById("scannerNotAvailableInfo").style.display = "none"
        }
        else {
            document.getElementById("scannerAvailableInfo").style.display = "none"
            document.getElementById("scannerNotAvailableInfo").style.display = "flex"
            // document.getElementById("scannerButton").disabled = true

        }
    }, [scannerAvailable])

    const handleClick = () => {
        setOpen(true);
        setShowContent(false);

        // Set a timeout to close the modal and show the final content
        setTimeout(() => {
            setOpen(false);
            setShowFinalContent(true);
        }, 3000); // Show the final content after 3 seconds
    };

    return (
        <div className="verify">
            <div className="verify-content">
                <Alert hidden severity="success" id="scannerAvailableInfo">Scanner Detected Successfully. Go Ahead!</Alert>
                <Alert hidden severity="error" id="scannerNotAvailableInfo">No Scanner Detected.</Alert>
                
                <Box id="maincontent" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {showContent && (
                        <Box onClick={handleClick} sx={{ backgroundColor: 'white', width: '300px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px solid #ccc', borderRadius: 5, cursor: 'pointer', textAlign: 'center' }}>


                            <ScannerIcon style={{ width: '100px', height: '100px' }} />
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Click to Verify Medicine
                            </Typography>
                        </Box>
                    )}

                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <Box sx={modalStyle} id="scannerButton">
                            <Typography id="modal-title" variant="h6">
                                Tap Medicine on the Scanner
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <CircularProgress
                                    sx={{
                                        width: '100px',
                                        height: '10px',
                                        borderRadius: 1,
                                        border: '0px solid rgba(0, 0, 0, 0.2)',
                                        '& svg': {
                                            width: '100%',
                                            height: '100%',
                                        },
                                    }}
                                    variant="indeterminate"
                                    thickness={2}
                                    size={50}
                                />
                            </Box>
                        </Box>
                    </Modal>
                    {showFinalContent && (
                        <Box
                            sx={{

                                width: '100%',
                                height: '85%',
                                padding: 4,
                                border: '2px solid #ccc',
                                borderRadius: 2,
                                justifyContent: 'center',
                                boxSizing: 'border-box',
                                overflowY: 'auto',
                                marginTop: '-80px'
                            }}
                        >
                            <h1>Medicine Details</h1>
                            <hr /><br />
                            <h3>Medicine Name: Calcium + Vitamin D3 <br /></h3>
                            <h3>Company Name: Tata 1mg <br /></h3>
                            <h3>Batch No. TMG24020 <br /></h3>
                            <h3>Manufacturing Date: 05/2024 <br /></h3>
                            <h3>Expiry Date: 10/2025 <br /></h3>
                            <h3>Composition: H2O, H2SO4, HCl, S2O <br /></h3>
                            <h3>MRP: Rs. 415.00</h3>
                            <br /><br /><hr />
                            <Button onClick={handleClick}>Verify Another Medicine</Button>
                        </Box>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default Verify;

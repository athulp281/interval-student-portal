import { Box } from '@mui/material';
import React from 'react';

import { useFormik,Form,FormikProvider } from 'formik';

const CreateNewGrievance = () => {

    const formik=useFormik({
        initialValues:{
            
        }
    })
    return (
        <Box>

        </Box>
    );
}

export default CreateNewGrievance;

import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    "Placed",
    "Ordered Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label)=><Step>
            <StepLabel sx={{color:"#9155F", fontSize:"44px"}}>{label}</StepLabel>
          </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker
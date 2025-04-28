import React from "react";
import AddressCard from "../addressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container sx={{ width: "100%" }}>
        {[1,1,1,1,1,1].map((item)=><Grid
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Grid size={{ xs: 6 }}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">
                  Men Solid Pure Cotton Straight Kurta
                </p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  {" "}
                  <span>Color: Pink</span> <span>Size: M</span>
                </p>
                <p>Seller: Nofilter</p>
                <p>₹1099</p>
              </div>
            </div>
          </Grid>
          <Grid>
            <Box sx={{ color: deepPurple[500] }}>
              <StarOutlineIcon
                sx={{ fontSize: "2rem" }}
                className="px-2 text-5xl"
              />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;

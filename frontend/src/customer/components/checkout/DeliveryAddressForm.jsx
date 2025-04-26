import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../addressCard/AddressCard";

const DeliveryAddressForm = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("address")
    const data=new FormData(e.currentTarget);
    const address={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      streetAddress:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipCode:data.get("zip"),
      mobile:data.get("phoneNumber")
    }
    console.log("address",address)

  }

  return (
    <div className="w-full">
      <Grid container spacing={4} sx={{ alignItems: "flex-start" }}>
        {/* Address scroller - fixed width */}
        <Grid
          item
          xs={12}
          lg={7}
          className="border rounded-e-md shadow-md overflow-y-scroll"
          sx={{
            height: "30.5rem",
            minWidth: "580px", // Prevents shrinking while allowing some flexibility
          }}
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver here
            </Button>
          </div>
        </Grid>

        {/* Form section - takes remaining space */}
        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 0 auto", // Allows growth but prevents shrinking
          }}
        >
          <Box
            className="border rounded-s-md shadow-md p-5"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  width: "100%",
                }}
              >
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                  sx={{ flex: 1 }}
                />
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                  sx={{ flex: 1 }}
                />
              </div>

              <TextField
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                autoComplete="street-address"
                multiline
                rows={4}
                sx={{ flexGrow: 1 }}
              />

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  width: "100%",
                }}
              >
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="family-name"
                  sx={{ flex: 1 }}
                />
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  autoComplete="given-name"
                  sx={{ flex: 1 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  width: "100%",
                }}
              >
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip/ Postal Code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  sx={{ flex: 1 }}
                />
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="given-name"
                  sx={{ flex: 1 }}
                />
              </div>
              <Button
                sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                size="large"
                variant="contained"
                type="submit"
              >
                Deliver here
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;

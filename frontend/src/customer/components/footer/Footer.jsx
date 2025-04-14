import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid
          container
          justifyContent="space-evenly"
          spacing={2}
          textAlign="center"
        >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Supports
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentations
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Guide
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        </Grid>
        <Grid item xs={12} sx={{ pt: 8 }}>
            <Typography variant="body2" component="p" align='center'>
                &copy; 2023 My Company. All rights reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Made with love by Me.
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Icons made by{' '}
                <Link href="https://www.freepik.com" color="inherit" underline="always">
                    Freepik
                </Link>{' '}
                from{' '}
                <Link href="https://www.flaticon.com/" color="inherit" underline="always">
                    www.flaticon.com
                </Link>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

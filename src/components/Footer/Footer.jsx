import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid
        className=" bg-gray-50 text-gray-500 text-center bottom-0"
        container
        sx={{ bgcolor: "#f9fafb", color: "#4F7942", py: 3 }}
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
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Guides
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
              claim
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
        <Grid className="pt-20" item xs={12}>
          <Typography
            variant="body2"
            component="p"
            align="center"
            sx={{ color: "#06402B" }}
          >
            &copy; 2024 My Company. All rights reserved.
          </Typography>

          <Typography
            variant="body2"
            component="p"
            align="center"
            sx={{ color: "#06402B" }}
          >
            Made with love by me.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;

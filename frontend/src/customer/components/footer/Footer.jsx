import {
  Button,
  Grid,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const footerSections = [
    {
      title: "Company",
      links: ["About", "Blog", "Press", "Jobs", "Partners"],
    },
    {
      title: "Solutions",
      links: ["Marketing", "Analytics", "Commerce", "Insights", "Support"],
    },
    {
      title: "Documentation",
      links: ["Guide", "API Status"],
    },
    {
      title: "Legal",
      links: ["Claim", "Privacy", "Terms"],
    },
  ];

  return (
    <div>
      <Grid
        container
        direction="column"
        sx={{ bgcolor: "black", color: "white", py: 4 }}
      >
        <Grid
          container
          justifyContent={isMobile ? "center" : "space-evenly"}
          spacing={isMobile ? 4 : 2}
          textAlign="center"
          // sx={{
          //   px: isMobile ? 2 : 6,
          //   maxWidth: '1200px',
          //   margin: '0 auto'
          // }}
        >
          {footerSections.map((section, index) => (
            <Grid
              key={`section-${index}`}
              item
              xs={12}
              sm={5.9} // Slightly less than 6 to account for spacing
              md={2.9} // Slightly less than 3 to account for spacing
              sx={{
                textAlign: isMobile ? "center" : "left",
                mb: isMobile ? 3 : 0,
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                {section.title}
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Grid container direction="column" alignItems="center">
                  {section.links.map((link, linkIndex) => (
                    <Grid item key={`link-${index}-${linkIndex}`}>
                      <Button
                        sx={{
                          color: "white",
                          justifyContent: "center",
                          textTransform: "none",
                          fontSize: "1rem",
                          mb: 0.5,
                          px: 0,
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {link}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} sx={{ pt: 6, px: 2 }}>
          <Typography
            variant="body2"
            component="p"
            align="center"
            sx={{ mb: 1 }}
          >
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            component="p"
            align="center"
            sx={{ mb: 1 }}
          >
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon
// } from 'mdb-react-ui-kit';

// export default function Footer() {
//   const footerLinks = [
//     {
//       id: 1,
//       title: 'Company',
//       links: [
//         { id: 1, text: 'About' },
//         { id: 2, text: 'Blog' },
//         { id: 3, text: 'Press' },
//         { id: 4, text: 'Jobs' },
//         { id: 5, text: 'Partners' }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Solutions',
//       links: [
//         { id: 1, text: 'Marketing' },
//         { id: 2, text: 'Analytics' },
//         { id: 3, text: 'Commerce' },
//         { id: 4, text: 'Insights' },
//         { id: 5, text: 'Support' }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Documentation',
//       links: [
//         { id: 1, text: 'Guides' },
//         { id: 2, text: 'API Status' },
//         { id: 3, text: 'Tutorials' },
//         { id: 4, text: 'Examples' }
//       ]
//     },
//     {
//       id: 4,
//       title: 'Legal',
//       links: [
//         { id: 1, text: 'Privacy Policy' },
//         { id: 2, text: 'Terms of Service' },
//         { id: 3, text: 'Cookie Policy' }
//       ]
//     }
//   ];

//   const socialLinks = [
//     { id: 1, icon: 'facebook-f', url: '#' },
//     { id: 2, icon: 'twitter', url: '#' },
//     { id: 3, icon: 'google', url: '#' },
//     { id: 4, icon: 'instagram', url: '#' },
//     { id: 5, icon: 'linkedin', url: '#' },
//     { id: 6, icon: 'github', url: '#' }
//   ];

//   return (
//     <MDBFooter bgColor='dark' className='text-white text-center text-lg-left'>
//       <MDBContainer className='p-4'>
//         <MDBRow>
//           {footerLinks.map((section) => (
//             <MDBCol key={`section-${section.id}`} lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase mb-4'>{section.title}</h5>
//               <ul className='list-unstyled'>
//                 {section.links.map((link) => (
//                   <li key={`link-${section.id}-${link.id}`} className='mb-2'>
//                     <a href='#!' className='text-white'>
//                       {link.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         <MDBContainer className='d-flex justify-content-center'>
//           {socialLinks.map((social) => (
//             <a key={`social-${social.id}`} href={social.url} className='text-white me-4'>
//               <MDBIcon fab icon={social.icon} />
//             </a>
//           ))}
//         </MDBContainer>

//         <div className='mt-3'>
//           &copy; {new Date().getFullYear()} Copyright:{' '}
//           <a className='text-white' href='/'>
//             YourCompany.com
//           </a>
//         </div>
//       </div>
//     </MDBFooter>
//   );
// }

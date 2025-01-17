import { Box, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, textAlign: 'center' }}>
            <Typography variant="body2">Designed by Daniela Silvana Tochi</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
                <Link href="https://github.com/danielas-tochi" color="inherit" target="_blank">
                    <GitHub />
                </Link>
                <Link href="mailto:danielastochi@gmail.com" color="inherit">
                    <Email />
                </Link>
                <Link href="https://linkedin.com/in/daniela-silvana-tochi" color="inherit" target="_blank">
                    <LinkedIn />
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;

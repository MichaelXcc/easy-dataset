'use client';

import { Box, Container, Typography, Button, useMediaQuery } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import { styles } from '@/styles/home';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { useTranslation } from 'react-i18next';

export default function HeroSection({ onCreateProject }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      pt: { xs: 6, md: 10 },
      pb: { xs: 6, md: 8 },
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out',
      background: 'transparent'
    }}>
      {/* 添加粒子背景 */}
      {/* <ParticleBackground /> */}

      <Box sx={styles.decorativeCircle} />
      <Box sx={styles.decorativeCircleSecond} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            py: { xs: 5, md: 8 }
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant={isMobile ? 'h3' : 'h1'}
            component="h1"
            fontWeight="bold"
            sx={{
              color: 'text.primary',
              letterSpacing: '-1px',
              mb: 3,
              textShadow: 'none'
            }}
          >
            {t('home.title')}
          </Typography>

          <Typography
            variant={isMobile ? 'body1' : 'h5'}
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            color="text.secondary"
            paragraph
            sx={{
              maxWidth: '650px',
              mx: 'auto',
              lineHeight: 1.8,
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 400,
              mb: 4
            }}
          >
            {t('home.subtitle')}
          </Typography>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            sx={{
              mt: 6,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              gap: { xs: 2, sm: 3 }
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={onCreateProject}
              startIcon={<AddCircleOutlineIcon />}
              sx={{
                fontWeight: 600,
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              {t('home.createProject')}
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                window.location.href = '/dataset-square';
              }}
              startIcon={<SearchIcon />}
              sx={{
                fontWeight: 600,
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              {t('home.searchDataset')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

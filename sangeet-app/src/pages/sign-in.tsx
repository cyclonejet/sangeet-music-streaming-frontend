import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import useUser from '../data/use-user';
import { signIn } from '../libs/auth';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email.')
    .required('Email is required.'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters.')
    .required('Password is required.'),
});

export default function SignIn() {
  const { user, mutate, loggedOut } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && !loggedOut) {
      router.push('/player');
    }
  }, [user, loggedOut]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await signIn({ email: values.email, password: values.password });
      mutate();
    },
  });

  return (
    <Container
      sx={{
        display: 'flex',
        height: '70vh',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Typography variant="h5">
          Sign in and start listening to music. <br /> Don't have an account
          yet?{' '}
          <Typography variant="h5" color="#03a9f4" component="span">
            <Link href="/sign-up">Sign up </Link>
          </Typography>
          today.
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h4">Sign In</Typography>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

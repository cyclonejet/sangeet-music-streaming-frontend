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
import { signUp } from '../libs/auth';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email.')
    .required('Email is required.'),
  username: yup.string().required('Username is required.'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters.')
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.'),
});

export default function SignUp() {
  const { user, mutate, loggedOut } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && !loggedOut) {
      router.push('/player');
    }
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await signUp({
        email: values.email,
        username: values.username,
        password: values.password,
      });
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
          Have an account already?{' '}
          <Typography variant="h5" color="#03a9f4" component="span">
            <Link href="/sign-in">Sign in </Link>
          </Typography>
          here.
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
          <Typography variant="h4">Sign Up</Typography>
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
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Button color="primary" variant="contained" type="submit">
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

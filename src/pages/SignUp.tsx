import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Define Zod schema for form validation
const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  age: z.number().int().min(18,'Age must be a positive integer').or(z.string().regex(/^\d+$/).transform(Number)),
});

type FormData = z.infer<typeof signUpSchema>;

interface SignUpProps {
  onAuthentication: () => void;
}

export default function SignUp({ onAuthentication }: SignUpProps) {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      // Here you would typically save the additional user data (firstName, lastName, age) to your database
      console.log('Form data:', data);
      onAuthentication();
      navigate('/dashboard');
    } catch (e) {
      setError('Error creating account. Please try again.');
      console.error('Error submitting form:', e);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onAuthentication();
      navigate('/dashboard');
    } catch (e) {
      setError('Error logging in with Google. Please try again.');
      console.error('Error logging in with Google:', e);
    }
  };

  return (
    <div className="signup-outer">
      <div className="signup-wrapper">
        <div className="signup-left">
          <img src="login.PNG" alt="Login illustration" />
        </div>
        <div className="signup-right">
          <h3>Create a free account to discover your personalized learning path</h3>
          <div className="social-btns">
            <button onClick={handleGoogleLogin}>
              <GoogleIcon />
            </button>
            <button>
              <FacebookIcon />
            </button>
          </div>
          <div className="or-line">
            <p>OR</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Email" {...register('email')} />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <input type="password" placeholder="Password" {...register('password')} />
            {errors.password && <p className="error">{errors.password.message}</p>}
            <div className="inp-names">
              <input placeholder="First name" {...register('firstName')} />
              <input placeholder="Last name" {...register('lastName')} />
            </div>
            {errors.firstName && <p className="error">{errors.firstName.message}</p>}
            {errors.lastName && <p className="error">{errors.lastName.message}</p>}
            <input placeholder="Age" {...register('age')} />
            {errors.age && <p className="error">{errors.age.message}</p>}
            <button className="signup-btn" type="submit">
              Sign Up
            </button>
          </form>
          {error && <p className="error">{error}</p>}
          <p className="agree-font">By clicking Sign up, I agree to Brilliant's Terms and Privacy Policy</p>
          <p className="signin">Existing user? Sign in</p>
        </div>
      </div>
    </div>
  );
}

const GoogleIcon = () => {
  return (
    <svg viewBox="0 0 20 21" focusable="false" className="chakra-icon css-oxc7x0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M19.99 10.187c0-.82-.069-1.417-.216-2.037H10.2v3.698h5.62c-.113.92-.725 2.303-2.084 3.233l-.02.124 3.028 2.292.21.02c1.926-1.738 3.037-4.296 3.037-7.33z"
      ></path>
      <path
        fill="#34A853"
        d="M10.2 19.931c2.753 0 5.064-.886 6.753-2.414l-3.218-2.436c-.862.587-2.017.997-3.536.997a6.126 6.126 0 0 1-5.801-4.141l-.12.01-3.148 2.38-.041.112c1.677 3.256 5.122 5.492 9.11 5.492z"
      ></path>
      <path
        fill="#FBBC05"
        d="M4.398 11.937a6.008 6.008 0 0 1-.34-1.971c0-.687.125-1.351.329-1.971l-.006-.132-3.188-2.42-.104.05A9.79 9.79 0 0 0 .001 9.965a9.79 9.79 0 0 0 1.088 4.473l3.309-2.502z"
      ></path>
      <path
        fill="#EB4335"
        d="M10.2 3.853c1.914 0 3.206.809 3.943 1.484l2.878-2.746C15.253.985 12.953 0 10.199 0 6.211 0 2.766 2.237 1.09 5.492l3.297 2.503A6.152 6.152 0 0 1 10.2 3.853z"
      ></path>
    </svg>
  );
};

const FacebookIcon = () => {
  return (
    <svg viewBox="0 0 22 22" focusable="false" className="chakra-icon css-x4l19m" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M21.5 11.088C21.5 5.564 16.962 1 11.47 1 5.978 1 1.44 5.564 1.44 11.088c0 5.022 3.659 9.179 8.442 9.935v-7.03H7.304v-2.905h2.578V8.75c0-2.556 1.517-3.968 3.84-3.968 1.113 0 2.277.2 2.277.2v2.52h-1.283c-1.265 0-1.659.788-1.659 1.596v1.917h2.824l-.451 2.905h-2.373v7.03c4.783-.756 8.443-4.913 8.443-9.935z"
      ></path>
    </svg>
  );
};
import { SignedIn, SignedOut, SignOutButton, SignInButton, SignUpButton } from "@clerk/remix";
import { Link } from "@remix-run/react";

const ClerkFeatures = () => (
  <Link to="/user" className="cardContent">
    <img src="/icons/layout.svg" />
    <div>
      <h3>User Profile</h3>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const CreateOrganizationLink = () => (
  <Link to="/create-org" className="cardContent">
    <img src="/icons/layout.svg" />
    <div>
      <h3>Create Organization</h3>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const YourOrganizationsLink = () => (
  <Link to="/organizations" className="cardContent">
    <img src="/icons/layout.svg" />
    <div>
      <h3>Organization details</h3>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

// const SsrDemoLink = () => (
//   <Link to="/ssr-demo" className="cardContent">
//     <img src="/icons/layout.svg" />
//     <div>
//       <h3>SSR</h3>
//     </div>
//     <div className="arrow">
//       <img src="/icons/arrow-right.svg" />
//     </div>
//   </Link>
// );

const SignupLink = () => (
  <Link to="/sign-up" className="cardContent">
    <img src="/icons/user-plus.svg" />
    <div>
      <h3>Sign up for an account</h3>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SigninLink = () => (
  <Link to="/sign-in" className="cardContent">
    <img src="/icons/user-plus.svg" />
    <div>
      <h3>Sign in with your account</h3>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);


const Main = () => (
  <main className="main">
    <h1 className="title">Lazy clerk test app</h1>
    <p className="description">Open your console to see additional clerk js assets beeing loaded as components are mounted</p>

    <div className="cards">
      <SignedIn>
        <div className="card">
          <ClerkFeatures />
        </div>
      </SignedIn>

      <SignedIn>
        <div className="card">
          <CreateOrganizationLink />
        </div>
      </SignedIn>
      <SignedIn>
        <div className="card">
          <YourOrganizationsLink />
        </div>
      </SignedIn>

      <SignedOut>
        <div className="card">
          <SigninLink />

          <SignInButton mode="modal">
            <button className="btn">
              Sign in with modal
            </button>
          </SignInButton>
        </div>

        <div className="card">
          <SignupLink />
          <SignUpButton mode="modal" redirectUrl="/">
            <button className="btn">
              Sign up with modal
            </button>
          </SignUpButton>
        </div>
      </SignedOut>
    </div>

    <SignedIn>
      <SignOutButton />
    </SignedIn>
  </main>
);

const Footer = () => (
  <footer className="footer">
    <a href="https://github.com/clerkinc/clerk-remix-starter" target="_blank" rel="noopener noreferrer">
      Powered by <img src="/clerk.svg" alt="Clerk.dev" className="footer-logo" />
      +
      <img src="/remix.svg" alt="Remix" className="footer-logo-remix" />
    </a>
  </footer>
);

export default function Index() {
  return (
    <div className="container">
      <Main />
      <Footer />
    </div>
  );
}

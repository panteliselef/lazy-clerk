import { SignedIn, SignOutButton, CreateOrganization, } from "@clerk/remix";

const Main = () => (
  <main className="main">
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <CreateOrganization />
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
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

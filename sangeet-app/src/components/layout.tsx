import TopBar from './top-bar';

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <main>{children}</main>
      <div>footer</div>
    </>
  );
}

import Nav from "./components/nav";
import CreateInvoiceComponent from "./components/createInvoice";

export default function Home() {
  return (
    <main className="p-0 m-0">
      <Nav />
      <CreateInvoiceComponent />
    </main>
  );
}

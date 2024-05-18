import AppInfo from "@/components/AppInfo";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <section className="flex min-h-screen">
      <Sidebar />
      <Main />
    </section>
  );
}

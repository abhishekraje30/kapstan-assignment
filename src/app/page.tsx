import AppInfo from "@/components/AppInfo";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <section className="flex min-h-screen">
      {/* <aside className="w-1/5 bg-[#37146B]"> */}
      <Sidebar />
      {/* </aside> */}

      <main className="w-full flex flex-col h-screen">
        <div className="h-[8%]">
          <Navbar />
        </div>
        <div className="h-[92%]">
          <AppInfo />
        </div>
      </main>
    </section>
  );
}

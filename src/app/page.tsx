import About from "@/components/about";
import Footer from "@/components/footer";
import GithubRepositories from "@/components/githubRepositories";
import NavBar from "@/components/navbar";
import Presentation from "@/components/presentation";
import Skills from "@/components/skills";

export default function Home() {
  return (

    <div>
      <NavBar />
      <Presentation />
      <Skills />
      <About />
      <Footer />
    </div>
  )
}

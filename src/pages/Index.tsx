import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';

const Index = () => {
  return (
    <>
      <Navigation />
      <Layout>
        <Header />
        <About />
        <div className="border-t border-border-subtle my-16 lg:my-24" />
        <Experience />
        <div className="border-t border-border-subtle my-16 lg:my-24" />
        <Projects />
        <div className="border-t border-border-subtle my-16 lg:my-24" />
        <Achievements />
      </Layout>
    </>
  );
};

export default Index;

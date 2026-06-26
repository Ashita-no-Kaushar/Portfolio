import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import ConditionalNavbar from "@/components/conditional-navbar";
import PreloaderWrapper from "@/components/preloader-wrapper";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import HomePage from "@/pages/home";
import ProfilePage from "@/app/profile/page";
import ResumePage from "@/app/resume/page";
import ProjectDetailsPage from "@/app/projects/[id]/page";
import ProjectReportPage from "@/app/projects/[id]/report/page";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <ConditionalNavbar />
      <PreloaderWrapper>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/projects/:id/report" component={ProjectReportPage} />
          <Route path="/projects/:id" component={ProjectDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </PreloaderWrapper>
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

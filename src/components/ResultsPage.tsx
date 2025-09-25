import { FunctionComponent } from "react";
import TopHeader from "./TopHeader";
import SearchFormSection from "./SearchFormSection";
import SearchFilters from "./SearchFilters";
import FlightCards from "./FlightCards";
import NewsletterFormSection from "./NewsletterFormSection";
import Footer from "./Footer";

export type ResultsPageType = {
  className?: string;
};

const ResultsPage: FunctionComponent<ResultsPageType> = ({
  className = "",
}) => {
  return (
    <div
      className={`bg-white max-w-full w-[1440px] overflow-hidden flex flex-col items-start ${className}`}
    >
      <TopHeader />
      <SearchFormSection />
      <div className="self-stretch flex items-start justify-center py-[50px] px-num-80 lg:p-num-40 lg:box-border md:py-num-20 md:px-num-24 md:box-border">
        <SearchFilters />
        <FlightCards />
      </div>
      <div className="self-stretch flex flex-col items-start">
        <div className="self-stretch flex flex-col items-start">
          <NewsletterFormSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
